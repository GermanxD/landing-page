"use client";

import { useEffect, useRef, useState } from "react";

export default function FacebookEmbed({ pageUrl = "https://www.facebook.com/URBJJ", className = "" }) {
  const embedRef = useRef(null);
  const scriptLoadedRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si estamos en móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Load Facebook SDK
    if (typeof window !== 'undefined') {
      if (window.FB) {
        window.FB.XFBML.parse();
      } else if (!scriptLoadedRef.current) {
        // Check if script already exists
        const existingScript = document.querySelector('script[src*="connect.facebook.net"]');
        if (!existingScript) {
          // Initialize Facebook SDK
          window.fbAsyncInit = function() {
            window.FB.init({
              appId: 'your-app-id', // Puedes dejarlo vacío para uso básico
              xfbml: true,
              version: 'v18.0'
            });
            scriptLoadedRef.current = true;
            // Force re-parse after SDK loads
            setTimeout(() => {
              if (window.FB && window.FB.XFBML) {
                window.FB.XFBML.parse();
              }
            }, 100);
          };

          // Load Facebook SDK script
          const script = document.createElement('script');
          script.src = 'https://connect.facebook.net/es_ES/sdk.js';
          script.async = true;
          script.defer = true;
          script.crossOrigin = 'anonymous';
          script.id = 'facebook-jssdk';
          
          // Insert script into document
          const firstScript = document.getElementsByTagName('script')[0];
          if (firstScript && firstScript.parentNode) {
            firstScript.parentNode.insertBefore(script, firstScript);
          } else {
            document.body.appendChild(script);
          }
        } else {
          scriptLoadedRef.current = true;
          // Re-parse if script already exists
          setTimeout(() => {
            if (window.FB && window.FB.XFBML) {
              window.FB.XFBML.parse();
            }
          }, 100);
        }
      }
    }
  }, []);

  // Cleanup effect
  useEffect(() => {
    return () => {
      // Clean up any Facebook embed-specific elements when component unmounts
      if (typeof window !== 'undefined' && embedRef.current) {
        const facebookEmbeds = embedRef.current.querySelectorAll('.fb-page');
        facebookEmbeds.forEach(embed => {
          if (embed.parentNode) {
            try {
              embed.parentNode.removeChild(embed);
            } catch (error) {
              // Ignore removeChild errors - element might already be removed
              console.warn('Facebook embed cleanup warning:', error.message);
            }
          }
        });
      }
    };
  }, []);

  return (
    <div ref={embedRef} className={`facebook-embed-container ${className}`} style={{ width: '100%', overflow: 'auto', height: '100%' }}>
      <div 
        className="fb-page" 
        data-href={pageUrl}
        data-tabs="timeline"
        data-width={isMobile ? "320" : "500"}
        data-height={isMobile ? "500" : "1000"}
        data-small-header={isMobile ? "true" : "false"}
        data-adapt-container-width="true"
        data-hide-cover={isMobile ? "true" : "false"}
        data-show-facepile="true"
        style={{ width: '100%', height: '100%', minHeight: isMobile ? '500px' : '1000px' }}
      >
        {/* Fallback content while loading */}
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <div className="flex items-center justify-center bg-gray-100 rounded-lg" style={{ height: '100%', minHeight: isMobile ? '500px' : '1000px', padding: '1rem' }}>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <p className="text-gray-600 mb-2 text-sm sm:text-base">Cargando página de Facebook...</p>
              <a 
                href={pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline text-sm sm:text-base"
              >
                Visitar URBJJ en Facebook
              </a>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
}

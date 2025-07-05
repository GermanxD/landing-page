export async function GET(request) {
  const username = 'yosoyurbjj';
  
  try {
    // Since Instagram has restricted their API, we'll use a simple fallback approach
    // For now, we'll just return the hardcoded post ID
    // In a real implementation, you might want to use a more sophisticated scraping method
    // or integrate with Instagram's official API (requires app registration)
    
    const fallbackPostID = 'DLakicvpZ3F';
    
    return new Response(JSON.stringify({ 
      latestPostID: fallbackPostID,
      fallback: true,
      message: 'Using fallback post ID due to Instagram API restrictions'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error fetching latest post ID:', error);
    
    // Fallback to the hardcoded post ID if API fails
    const fallbackPostID = 'DLakicvpZ3F';
    
    return new Response(JSON.stringify({ 
      latestPostID: fallbackPostID,
      fallback: true,
      error: error.message 
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

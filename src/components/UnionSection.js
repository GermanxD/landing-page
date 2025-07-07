import Image from "next/image";

export default function UnionSection() {
    return (
        <section className="px-4 py-8 w-full max-w-6xl mx-auto">
            {/* ¡Somos una Unión! */}
            <div className="text-center flex flex-col items-center">
                <h3
                    className="text-2xl md:text-4xl lg:text-5xl font-bold"
                    style={{ color: "var(--cocoa-brown)" }}
                >
                    ¡Somos una Unión!
                </h3>
                <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 mx-auto rounded-full flex items-center justify-center bg-gradient-urbjj">
                    <Image
                        src="/urbjjlogo.png"
                        alt="Logo URBJJ"
                        width={600}
                        height={600}
                        className="w-32 h-32 md:w-42 md:h-42 lg:w-52 lg:h-52 object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="text-center flex flex-col items-center" style={{ paddingBottom: "12px" }}>
                <h3
                    className="text-2xl md:text-4xl lg:text-5xl font-bold"
                    style={{ color: "var(--cocoa-brown)", paddingBottom: "18px" }}
                >
                    ¿Por qué una unión?
                </h3>
                <h5
                    className="text-lg md:text-xl lg:text-2xl font-medium mb-6 md:mb-8"
                    style={{ color: "var(--cocoa-brown)"}}
                >
                    Muchos de nosotros pertenecemos a varias iglesias de aquí de la región, varios van a una, otros van a otra... pero no queríamos quedarnos así de lejitos.
                </h5>
                <h5
                    className="text-lg md:text-xl lg:text-2xl font-medium mb-6 md:mb-8"
                    style={{ color: "var(--cocoa-brown)"}}
                >
                    Y asi nació esta unión...
                </h5>
            </div>

            <div className="text-center flex flex-col items-center">
                <h4
                    className="text-lg md:text-xl lg:text-2xl font-bold mb-6 md:mb-8"
                    style={{ color: "black", alignItems: 'center' }}
                >
                    Experiencias dentro de la Union:)
                </h4>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
                {/* Testimonios escalonados con foto de perfil */}
                <div className="mb-8 md:mb-0 flex flex-col gap-8">

                    {/* Testimonio 1 - Izquierda */}
                    <div className="flex items-start gap-4 md:gap-6">
                        <div className="flex-shrink-0">
                            <Image
                                src="/img-blank-profile.jpg"
                                alt="Foto de Juan Pérez"
                                width={64}
                                height={64}
                                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-peach"
                            />
                        </div>
                        <div>
                            <span
                                className="block text-base lg:text-lg font-semibold"
                                style={{ color: "var(--cocoa-brown)" }}
                            >
                                Juan Pérez
                            </span>
                            <p
                                className="text-sm lg:text-base opacity-80"
                                style={{ color: "var(--dim-gray)" }}
                            >
                                “Unirme a la unión cambió mi vida, encontré amigos y una familia en la fe.”
                            </p>
                        </div>
                    </div>
                    {/* Testimonio 2 - Derecha */}
                    <div className="flex items-start gap-4 md:gap-6 flex-row-reverse text-right">
                        <div className="flex-shrink-0">
                            <Image
                                src="/img-blank-profile.jpg"
                                alt="Foto de María Gómez"
                                width={64}
                                height={64}
                                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-cocoa-brown"
                            />
                        </div>
                        <div>
                            <span
                                className="block text-base lg:text-lg font-semibold"
                                style={{ color: "var(--cocoa-brown)" }}
                            >
                                María Gómez
                            </span>
                            <p
                                className="text-sm lg:text-base opacity-80"
                                style={{ color: "var(--dim-gray)" }}
                            >
                                “Aquí aprendí a crecer espiritualmente y a compartir mis valores con otros jóvenes.”
                            </p>
                        </div>
                    </div>
                    {/* Testimonio 3 - Izquierda */}
                    <div className="flex items-start gap-4 md:gap-6">
                        <div className="flex-shrink-0">
                            <Image
                                src="/img-blank-profile.jpg"
                                alt="Foto de Luis Martínez"
                                width={64}
                                height={64}
                                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-peach"
                            />
                        </div>
                        <div>
                            <span
                                className="block text-base lg:text-lg font-semibold"
                                style={{ color: "var(--cocoa-brown)" }}
                            >
                                Luis Martínez
                            </span>
                            <p
                                className="text-sm lg:text-base opacity-80"
                                style={{ color: "var(--dim-gray)" }}
                            >
                                “La unión me motivó a servir y a descubrir mi propósito en Dios.”
                            </p>
                        </div>
                    </div>
                    {/* Testimonio 4 - Derecha */}
                    <div className="flex items-start gap-4 md:gap-6 flex-row-reverse text-right">
                        <div className="flex-shrink-0">
                            <Image
                                src="/img-blank-profile.jpg"
                                alt="Foto de Ana Ruiz"
                                width={64}
                                height={64}
                                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-cocoa-brown"
                            />
                        </div>
                        <div>
                            <span
                                className="block text-base lg:text-lg font-semibold"
                                style={{ color: "var(--cocoa-brown)" }}
                            >
                                Ana Ruiz
                            </span>
                            <p
                                className="text-sm lg:text-base opacity-80"
                                style={{ color: "var(--dim-gray)" }}
                            >
                                “Gracias a la unión, ahora tengo confianza y un grupo que me apoya siempre.”
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
                    {/* Imagen principal de la unión */}
                    <div className="w-full h-40 md:h-60 lg:h-80 rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-peach via-baby-powder to-cocoa-brown flex items-center justify-center flex-col">
                        <Image
                            src="/reunion-urbjj.jpg"
                            alt="Jóvenes de URBJJ en evento con las manos levantadas en alabanza"
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                            priority
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

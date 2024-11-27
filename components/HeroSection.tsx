import React from 'react'
import WordRotate from './ui/word-rotate'
import { Button } from './ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import BlurFade from './ui/blur-fade'

export default function HeroSection() {
    return (
        <div>
            <div className="flex flex-col">
                <div className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-6 px-6 md:px-12">
                    <div className="flex flex-col items-start w-full md:w-1/2 space-y-6">
                        <BlurFade delay={0.25} inView>
                            <div className="text-4xl max-w-[600px] w-auto h-auto lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-tight">
                                <h1>Aprende rápido <WordRotate duration={4000} className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-transparent bg-clip-text" words={["Temas específicos", "Elaborando apuntes", "Generando quizzes", "Creando flashcards"]} />usando la IA de eslintask.</h1>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.25 * 2} inView>
                            <div className="max-w-[490px]">
                                <p className="md:text-lg lg:text-xl max-w-lg text-lg text-neutral-600 dark:text-neutral-400 font-normal"> Eslint, el búho azul, te guía en tu aprendizaje con IA, ayudándote a organizar tus estudios y alcanzar tus objetivos de manera rápida y eficiente. </p>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.25 * 2} inView>
                            <div className="w-auto">
                                <Button className="rounded-xl bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40" variant="secondary">
                                    ¡Empieza a crear ya!
                                    <ArrowRightIcon className="size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                                </Button>
                            </div>
                        </BlurFade>

                    </div>
                    <div className="w-[600px] hidden p-2 md:w-1/2 md:flex lg:flex justify-center items-center">
                        <AspectRatio
                            ratio={1 / 1}
                            className="flex items-center justify-center"
                        >
                            <BlurFade delay={0.25} inView>
                                <Image
                                    priority
                                    src="/images/imagen_1.png"
                                    alt="Logo de la app web de organización y optimización de tareas Eslintask."
                                    width={500}
                                    height={500}
                                    className=""
                                />
                            </BlurFade>
                        </AspectRatio>
                    </div>
                </div>
            </div>
        </div>
    )
}

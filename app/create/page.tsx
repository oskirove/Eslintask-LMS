"use client";

import SparklesText from "@/components/ui/sparkles-text";
import SelectOptions from "./_components/SelectOptions";
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import HeaderSteps from "./_components/HeaderSteps";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Wand2 } from "lucide-react";
import TopicInput from "./_components/TopicInput";

export default function create() {

    const [step, setStep] = useState(0);

    return (
        <div>
            <header className="flex items-center justify-center">
                <HeaderSteps />
            </header>
            <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-2">

                <div className="flex w-full items-center rounded-3xl shadow-lg bg-gradient-to-r from-blue-400 to-blue-700 p-6 h-36 gap-3">
                    <Image
                        priority
                        src="/images/profe.png"
                        alt="Logo de la app web de organización y optimización de tareas Eslintask."
                        width={100}
                        height={100}
                        className=""
                    />
                    <div className="flex-col items-center justify-start">
                        <SparklesText
                            className="text-xl py-1 font-bold tracking-[-0.02em]sm: text-white md:text-3xl lg:text-4xl"
                            text="¡Vamos a crear tu temario!"
                            colors={{ first: '#166bf6', second: '#bfdbfe' }}
                            sparklesCount={6}
                        />
                        <h2 className="text-xs font-bold tracking-[-0.02em] text-white md:text-sm xl:text-lg">Elige lo que necesitas y me encargaré de crear tu material de estudio personalizado.</h2>
                    </div>
                </div>
                    <div className="w-full">
                        {step === 0 ? <SelectOptions /> : <TopicInput />}
                    </div>

                    <div className="flex items-center justify-between w-full mt-28">
                        {step != 0 ? <Button className="flex rounded-xl items-center bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40" variant="secondary"
                            onClick={() => setStep(step - 1)}
                        >
                            <ChevronLeft /> Volver
                        </Button> : <Button className="bg-white dark:bg-black hover:bg-white dark:dark:bg-black pointer-events-none"></Button>}
                        {step == 0 ? <Button className="flex rounded-xl items-center bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40" variant="secondary"
                            onClick={() => setStep(step + 1)}
                        >
                            Siguiente <ChevronRight />
                        </Button> : <Button className="flex rounded-xl items-center bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40" variant="secondary">
                            Generar <Wand2 />
                        </Button>}
                    </div>
            </div>
        </div>
    )
}

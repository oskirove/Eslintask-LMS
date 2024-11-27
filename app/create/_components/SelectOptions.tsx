"use client";

import Image from 'next/image'
import { useState } from 'react'

export default function SelectOptions() {

    const Options = [
        {
            name: 'Examen',
            description: 'Organiza y estudia los temas clave para tu próxima prueba.',
            icon: '/icons/icono_examen.png',
        },
        {
            name: 'Práctica',
            description: 'Estructura los conceptos y ejercicios para dominar tus prácticas',
            icon: '/icons/practica.png',
        },
        {
            name: 'Proyecto',
            description: 'Organiza ideas y recursos para completar tu proyecto de manera eficiente.',
            icon: '/icons/gorro.png',
        },
        {
            name: 'Presentación',
            description: 'Crea un esquema claro y visual para preparar tu próxima exposición.',
            icon: '/icons/presentacion.png',
        },
        {
            name: 'Nuevo Tema',
            description: 'Empieza desde cero y estructura un plan para dominar un nuevo tema.',
            icon: '/icons/bombilla.png',
        },
        {
            name: 'Otro',
            description: 'Personaliza tu temario para cualquier objetivo específico.',
            icon: '/icons/otros.png',
        },
    ]

    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
    return (
        <div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
                {Options.map((option, index) => (
                    <div key={index} className={`p-4 hover:bg-blue-200/90 dark:hover:bg-blue-950 transition-colors duration-300 ease-in-out flex flex-col items-start justify-center bg-blue-200 text-blue-600 bg-opacity-30 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 rounded-xl cursor-pointer ${option?.name === selectedOption && 'bg-blue-200/90 dark:bg-blue-600/40'}`}
                    onClick={() => setSelectedOption(option.name)}
                    >
                        <Image className="rounded-3xl" src={option.icon} alt={option.name} width={200} height={200} />
                        <h3 className="text-lg font-bold py-2">{option.name}</h3>
                        <p className="text-xs font-medium text-start">{option.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

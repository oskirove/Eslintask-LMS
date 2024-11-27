"use client";

import SparklesText from '@/components/ui/sparkles-text';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react'

export default function BannerPanel() {

    const { user } = useUser();

    return (
        <div className="m-1 p-2">
            <div className="flex items-center rounded-3xl shadow-lg bg-gradient-to-r from-blue-400 to-blue-700 p-6 h-36 gap-3">
                <Image
                    priority
                    src="/images/imagen_1.png"
                    alt="Logo de la app web de organización y optimización de tareas Eslintask."
                    width={100}
                    height={100}
                    className=""
                />
                <SparklesText
                    className="text-2xl font-bold tracking-[-0.02em] text-white md:text-4xl md:leading-[5rem]"
                    text={`¡Hey, ${user?.firstName}! ¿Todo listo para empezar?`}
                    colors={{ first: '#166bf6', second: '#bfdbfe' }}
                    sparklesCount={6}
                />
            </div>

        </div>
    )
}

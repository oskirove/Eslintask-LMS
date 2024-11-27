"use client";

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useTheme } from 'next-themes';

export default function Logo() {

    const { theme } = useTheme();
    const [path, setPath] = useState("/logos/logo.png");

    useEffect(() => {
        setPath(theme === "dark" ? "/logos/logo1.png" : "/logos/logo.png");
    }, [theme]);

    return (
        <Link href="/" prefetch={false} className='overflow-hidden'>
            <div className='flex items-center w-52 h-16'>
                <AspectRatio
                    ratio={16 / 9}
                    className="flex items-center justify-center"
                >
                    <Image
                        priority
                        src={path}
                        alt="Logo de la app web de organización y optimización de tareas Eslintask."
                        width={170}
                        height={170}
                    />
                </AspectRatio>
            </div>
        </Link>
    )
}

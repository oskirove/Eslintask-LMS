"use client";

import { AlignCenter, Check, Settings2 } from 'lucide-react'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function HeaderSteps() {

    const Steps = [
        {
            icon: Settings2,
            url: "/create",
        },
        {
            icon: AlignCenter,
            url: "#",
        },
        {
            icon: Check,
            url: "#",
        }
    ]

    return (
        <div className="flex m-2 pt-6 gap-3">
            {Steps.map((Steps, index) => (
                <div key={index} className="flex flex-row p-4 items-center bg-blue-200 text-blue-600 bg-opacity-30 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 rounded-full">
                    <div className=''>
                        <a href={Steps.url}
                            className=""
                        >
                            <Steps.icon />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

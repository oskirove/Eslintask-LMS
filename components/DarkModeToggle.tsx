"use client";

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button className="rounded-xl hover:bg-blue-200 hover:text-blue-600 hover:bg-opacity-30 hover:bg-blue-200/40 dark:hover:bg-blue-900 dark:hover:text-blue-500 dark:hover:bg-opacity-30" variant="ghost" size="icon" onClick={() => {
            if (theme === "dark") setTheme("light")
            else setTheme("dark")
        }}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
};
import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Navbar from './Navbar';
import { Button } from './ui/button'
import { GraduationCap } from 'lucide-react'
import Logo from './logo';
import { SignInButton, SignUpButton } from '@clerk/nextjs';

export default function NavMenu() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-sm">
            <nav className="flex flex-col sm:flex-row items-center p-5 max-w-7xl mx-auto">
                <div className="flex items-center justify-start gap-4">
                    <Logo />
                    <Navbar />
                    <DarkModeToggle />
                </div>
                <div className="flex-1 flex items-center justify-end gap-2">
                    <SignInButton>
                        <Button className="rounded-xl hover:text-blue-600 dark:hover:text-blue-500" variant="link">
                            Iniciar sesión
                        </Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button className="flex rounded-xl items-center bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40" variant="secondary">
                            <GraduationCap /> Registrate gratis
                        </Button>
                    </SignUpButton>
                </div>
            </nav>
        </header>
    )
}

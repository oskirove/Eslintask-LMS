import { Button } from '@/components/ui/button'
import { BellRing } from 'lucide-react'
import React from 'react'

export default function NotificationsButton() {
    return (
        <Button className="rounded-xl hover:bg-blue-200 hover:text-blue-600 hover:bg-opacity-30 hover:bg-blue-200/40 dark:hover:bg-blue-900 dark:hover:text-blue-500 dark:hover:bg-opacity-30" variant="ghost" size="icon">
            <BellRing className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
        </Button>
    )
}

"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { CalendarDaysIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useBoardStore } from "@/store/BoardStore"
import { Tooltip } from "@/components/ui/tooltip"
export function DatePicker() {

    const setNewTaskDeadLine = useBoardStore((state) => state.setNewTaskDeadLine)
    const newTaskDeadLine = useBoardStore((state) => state.newTaskDeadLine)

    const [date, setDate] = React.useState<Date | undefined>(
        newTaskDeadLine ? new Date(newTaskDeadLine) : undefined
    );

    const handleDateChange = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        setNewTaskDeadLine(selectedDate || "");
    };

    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    type="button"
                    variant="default"
                    className="w-10 h-10 rounded-xl bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40"
                >
                    <CalendarDaysIcon className="h-6 w-6" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-2 rounded-3xl bg-background dark:bg-neutral-900 shadow-lg">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                />
            </PopoverContent>
        </Popover>
    );
}


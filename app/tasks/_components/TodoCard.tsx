"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

import { Button } from "@/components/ui/button";
import { useBoardStore } from "@/store/BoardStore";
import { AlarmClock, Bookmark, Text, XIcon } from "lucide-react";
import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from "react-beautiful-dnd"

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

function TodoCard({
    todo,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps
}: Props) {

    const priorityColors: { [key: string]: string } = {
        chill: "text-green-600 dark:text-green-500 ",
        moderada: "text-yellow-600 dark:text-yellow-500 ",
        importante: "text-red-600 dark:text-red-500 ",
    };

    const deleteTask = useBoardStore((state) => state.deleteTask)
    let [isOpen, setIsOpen] = useState(false)

    return <div
        {...draggableProps}
        {...dragHandleProps}
        ref={innerRef}
        className="bg-white dark:bg-neutral-800 p-2 rounded-xl drop-shadow-md"
    >
        <div className="">
            <div className='flex items-center justify-between mb-1'>
                <h3 className="font-semibold">{todo.title}</h3>
                <>
                    <Button onClick={() => setIsOpen(true)} className="rounded-full h-5 w-5" variant="destructive" size="icon"><XIcon /></Button>
                    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
                        <DialogBackdrop
                            transition
                            className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
                        />
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                            <DialogPanel
                                transition
                                className="w-full max-w-md transform overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all"
                            >
                                <DialogTitle as="h3" className="text-lg font-bold leading-6 pb-2">¿Estás seguro de esto?</DialogTitle>
                                <p className="text-sm pt-1">Esta acción eliminará tu tarea de forma permanente ¿Estás seguro de que quieres continuar? </p>
                                <div className="flex justify-end items-center gap-4 pt-4">
                                    <Button className="rounded-xl items-center bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40" variant="default" onClick={() => setIsOpen(false)}>Volver</Button>
                                    <Button variant="destructive" className="rounded-xl" onClick={() => deleteTask(index, todo, id)}>Eliminar</Button>
                                </div>
                            </DialogPanel>
                        </div>
                    </Dialog>
                </>
            </div>
            <p className="flex items-center gap-2 text-sm tracking-tight text-foreground/90 "><Text size={16}/> {todo.description}</p>

            <div className="flex justify-between items-center mt-4">
                <div
                    className={`${priorityColors[todo.priority.toLowerCase()]}`}
                >
                    <p className="flex items-center gap-1 text-xs"><Bookmark size={16} />{todo.priority}</p>
                </div>
                <div
                    className={`rounded-xl p-2 ${(() => {

                        if (!todo.deadLine) {
                            return "bg-blue-200 text-blue-600 bg-opacity-30 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30";
                        }

                        const today = new Date();
                        const deadline = new Date(todo.deadLine);

                        const isToday =
                            today.getFullYear() === deadline.getFullYear() &&
                            today.getMonth() === deadline.getMonth() &&
                            today.getDate() === deadline.getDate();

                        const diffTime = deadline.getTime() - today.getTime();
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                        if (diffDays === 1) return "bg-yellow-200 text-yellow-600 bg-opacity-30 dark:bg-yellow-900 dark:text-yellow-500 dark:bg-opacity-30";
                        if (diffDays < 0) return "bg-red-200 text-red-600 bg-opacity-30 dark:bg-red-900 dark:text-red-500 dark:bg-opacity-30";
                        if (diffDays <= 1) return "bg-orange-200 text-orange-600 bg-opacity-30 dark:bg-orange-900 dark:text-orange-500 dark:bg-opacity-30";
                        return "bg-blue-200 text-blue-600 bg-opacity-30 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30";
                    })()
                        }`}
                >
                    <p className="flex items-center gap-1 text-xs">
                        {todo.deadLine ? (
                            (() => {
                                const today = new Date();
                                const deadline = new Date(todo.deadLine);

                                const isToday =
                                    today.getFullYear() === deadline.getFullYear() &&
                                    today.getMonth() === deadline.getMonth() &&
                                    today.getDate() === deadline.getDate();

                                const diffTime = deadline.getTime() - today.getTime();
                                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                                return isToday
                                    ? "Acaba hoy"
                                    : diffDays > 0
                                        ? `Falta${diffDays > 1 ? 'n' : ''} ${diffDays} día${diffDays > 1 ? 's' : ''}`
                                        : "Finalizado!";
                            })()
                        ) : (
                            "Sin fecha"
                        )}
                        <AlarmClock size={16} />
                    </p>
                </div>

            </div>
        </div>
    </div>
}

export default TodoCard
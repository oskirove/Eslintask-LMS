"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useBoardStore } from '@/store/BoardStore';
import { useModalStore } from '@/store/ModalStore';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import TaskTypeRadioGroup from './TaskTypeRadioGroup';
import { FormEvent, useRef } from 'react';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DatePicker } from "./DatePicker";

function Modal() {

    const imagePickerRef = useRef<HTMLInputElement>(null);
    const newTaskDeadLine = useBoardStore((state) => state.newTaskDeadLine)
    const setNewTaskPriority = useBoardStore((state) => state.setNewTaskPriority)
    const newTaskPriority = useBoardStore((state) => state.newTaskPriority)
    const newTaskType = useBoardStore((state) => state.newTaskType)
    const newTaskInput = useBoardStore((state) => state.newTaskInput)
    const setNewTaskInput = useBoardStore((state) => state.setNewTaskInput)
    const newTaskDescription = useBoardStore((state) => state.newTaskDescription)
    const setNewTaskDescription = useBoardStore((state) => state.setNewTaskDescription)
    const isOpen = useModalStore((state) => state.isOpen)
    const closeModal = useModalStore((state) => state.closeModal)
    const image = useBoardStore((state) => state.image)
    const setImage = useBoardStore((state) => state.setImage)
    const addTask = useBoardStore((state) => state.addTask)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newTaskInput) return;

        const deadlineAsString = newTaskDeadLine instanceof Date
            ? newTaskDeadLine.toISOString().split("T")[0]
            : newTaskDeadLine;

        addTask(newTaskInput, newTaskDescription, newTaskType, newTaskPriority, deadlineAsString, image)

        setImage(null);
        closeModal();
    }

    return (
        <>
            <Dialog as="form" open={isOpen} onClose={closeModal} onSubmit={handleSubmit} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
                />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md transform overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all"
                    >
                        <DialogTitle as="h3" className="text-lg font-bold leading-6 pb-2">Añadir nueva tarea</DialogTitle>
                        <div className="mt-2">
                            <Label htmlFor="name" className="text-xs">Nombre</Label>
                            <Input // si da problemas sustituir por input
                                type="text"
                                value={newTaskInput}
                                onChange={(e) => setNewTaskInput(e.target.value)}
                                placeholder="Redactar apuntes..."
                                className="w-full rounded-lg outline-none p-3"
                            />
                        </div>
                        <div className="mt-2">
                            <Label htmlFor="description" className="text-xs">Descripción</Label>
                            <Textarea //si da problemas sustituir por input
                                //type="text"
                                value={newTaskDescription}
                                onChange={(e) => setNewTaskDescription(e.target.value)}
                                placeholder="Organizar y resumir lo importante...."
                                className="w-full rounded-lg p-3"
                            />
                        </div>

                        <TaskTypeRadioGroup />

                        <div className=" flex gap-2 mb-4">
                            <Select
                                value={newTaskPriority}
                                onValueChange={(value) => setNewTaskPriority(value)}
                            >
                                <SelectTrigger className="w-full gap-2">
                                    <SelectValue placeholder="Prioridad" />
                                </SelectTrigger>
                                <SelectContent defaultValue="Chill">
                                    <SelectItem value="Chill">🟢 Chill</SelectItem>
                                    <SelectItem value="Moderada">🟡 Moderada</SelectItem>
                                    <SelectItem value="Importante">🔴 Importante</SelectItem>
                                </SelectContent>
                            </Select>
                            <Tooltip>
                                <TooltipTrigger>
                                    <DatePicker />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Fecha límite</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        type="button"
                                        onClick={() => {
                                            imagePickerRef.current?.click()
                                        }}

                                        variant="default"
                                        className="w-10 h-10 rounded-xl items-center bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40">
                                        <ImageIcon
                                            className="h-12 w-12 inline-block"
                                        />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Subir imagen</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <div>
                            {image && (
                                <Image
                                    alt="Uploaded image"
                                    width={200}
                                    height={200}
                                    className="w-full h-44 rounded-xl object-cover mt-2 filter hover:grayscale transition-all duration-150 cursor-not-allowed"
                                    src={URL.createObjectURL(image)}

                                    onClick={() => {
                                        setImage(null)
                                    }}
                                />
                            )}

                            <input
                                type="file"
                                ref={imagePickerRef}
                                hidden
                                onChange={(e) => {
                                    if (!e.target.files![0].type.startsWith("image/")) return;
                                    setImage(e.target.files![0])
                                }}
                            />
                        </div>
                        <div className="flex justify-end pt-4">
                            <Button
                                type="submit"
                                className="rounded-xl items-center bg-blue-200 text-blue-600 bg-opacity-30 hover:bg-blue-300/40 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 dark:hover:bg-blue-900/40"
                                variant="secondary"
                                disabled={!newTaskInput}
                            >
                                Añadir tarea
                            </Button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default Modal;

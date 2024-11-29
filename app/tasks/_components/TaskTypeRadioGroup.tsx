"use client";

import { useBoardStore } from "@/store/BoardStore";
import { RadioGroup } from "@headlessui/react";
import { CheckCircle2Icon, CheckCircleIcon } from "lucide-react";
import { relative } from "path";

const types = [
    {
        id: "todo",
        name: "Pendiente",
        description: "Una nueva tarea por completar.",
        color: "bg-blue-200 text-blue-600 bg-opacity-30 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 transition-colors duration-200 ease-in-out"
    },
    {
        id: "inprogress",
        name: "En proceso",
        description: "Una tarea en la que estás trabajando.",
        color: "bg-yellow-200 text-yellow-600 bg-opacity-30 dark:bg-yellow-900 dark:text-yellow-500 dark:bg-opacity-30 transition-colors duration-200 ease-in-out"
    },
    {
        id: "done",
        name: "Completada",
        description: "Una tarea que hayas terminado.",
        color: "bg-green-200 text-green-600 bg-opacity-30 dark:bg-green-900 dark:text-green-500 dark:bg-opacity-30 transition-colors duration-200 ease-in-out"
    },
]

export default function TaskTypeRadioGroup() {

    const setNewTaskType = useBoardStore((state) => state.setNewTaskType);
    const newTaskType = useBoardStore((state) => state.newTaskType);

    return (
        <div className="w-full py-5">
            <div className="mx-auto w-full max-w-md">
                <RadioGroup
                    value={newTaskType}
                    onChange={(e) => {
                        setNewTaskType(e);
                    }}
                >
                    <div className="space-y-2">
                        {types.map((type) => (
                            <RadioGroup.Option
                                key={type.id}
                                value={type.id}
                                className={({ active, checked }) =>
                                    `${active
                                        ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                                        : ""
                                    }
                                ${checked
                                        ? `${type.color}`
                                        : "bg-white dark:bg-neutral-800"
                                    }

                                relative flex cursor-pointer rounded-xl px-5 py-4 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={ `font-bold ${
                                                            checked ? "" : ""
                                                        }`}
                                                    >
                                                        {type.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={ `inline ${
                                                            checked ? "" : ""
                                                        }`}
                                                    >
                                                        {type.description}
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0">
                                                    <CheckCircle2Icon className="h-6 w-6"/> 
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
}

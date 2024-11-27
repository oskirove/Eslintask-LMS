"use client";

import { useBoardStore } from '@/store/BoardStore';
import { useModalStore } from '@/store/ModalStore';
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

function Modal() {

    const newTaskInput = useBoardStore ((state) => state.newTaskInput)
    const setNewTaskInput = useBoardStore ((state) => state.setNewTaskInput)
    const isOpen = useModalStore((state) => state.isOpen)
    const closeModal = useModalStore((state) => state.closeModal)

    return (
        <>
            <Dialog as="form" open={isOpen} onClose={closeModal} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
                />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md transform overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all"
                    >
                        <DialogTitle as="h3" className="text-lg font-bold leading-6 pb-2">Crea una tarea</DialogTitle>
                        <div className="mt-2">
                            <input
                                type="text"
                                value={newTaskInput}
                                onChange={(e) => setNewTaskInput(e.target.value)}
                                placeholder="Introduce una tarea..."
                                className="w-full border border-blue-600 dark:border-blue-500 rounded-lg outline-none p-3"
                            />
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default Modal;

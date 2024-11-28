import { Button } from '@/components/ui/button'
import { PlusCircleIcon, SquarePen } from 'lucide-react'
import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import TodoCard from './TodoCard'
import { useModalStore } from '@/store/ModalStore'

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}

const idToColumnText: {
    [key in TypedColumn]: string;
} = {
    todo: "Pendiente",
    inprogress: "En proceso",
    done: "Completado"
}

function Column({ id, todos, index }: Props) {

    const openModal = useModalStore((state) => state.openModal)

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Droppable droppableId={index.toString()} type="card">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`pb-2 p-2 rounded-xl shadow-sm  ${
                                    snapshot.isDraggingOver ? 'bg-blue-100/80 dark:bg-blue-950' : 'bg-neutral-200/40 dark:bg-neutral-900'
                                }`}
                            >
                                <h2 className="flex items-center justify-between font-bold p-2">{idToColumnText[id]}
                                    <span className="text-blue-600 dark:text-blue-500 rounded-full py-1 px-2 text-sm font-normal">{todos.length}</span>
                                </h2>
                                <div className="space-y-2">
                                    {todos.map((todo, index) => (
                                        <Draggable
                                            key={todo.$id}
                                            draggableId={todo.$id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <TodoCard
                                                    todo={todo}
                                                    index={index}
                                                    id={id}
                                                    innerRef={provided.innerRef}
                                                    draggableProps={provided.draggableProps}
                                                    dragHandleProps={provided.dragHandleProps}
                                                />
                                            )}
                                        </Draggable> 
                                    ))}

                                    {provided.placeholder}

                                    <div>
                                    <Button onClick={openModal} className="rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:bg-opacity-30 hover:bg-blue-200/40 dark:hover:bg-blue-900 dark:hover:text-blue-500 dark:hover:bg-opacity-30" variant="ghost" size="icon">
                                        <SquarePen className="h-[1.2rem] w-[1.2rem]"/>
                                    </Button>

                                    </div>
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
}

export default Column
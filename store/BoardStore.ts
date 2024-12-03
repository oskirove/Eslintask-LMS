import { databases, ID, storage } from "@/appwrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
import uploadImage from "@/lib/uploadImage";
import { create } from "zustand";

interface BoardState {
    board: Board;
    getBoard: () => void;
    setBoardState: (board: Board) => void;
    updateTodoInDB: (todo: Todo, columnId: TypedColumn) => void
    newTaskInput: string;
    newTaskDescription: string;
    newTaskDeadLine: string | Date;
    newTaskPriority: string,
    newTaskType: TypedColumn;
    image: File | null;

    addTask: (todo: string, description: string, columId: TypedColumn, priority: string, deadLine: string, image?: File | null) => void;
    deleteTask: (taskIndex: number, todoId: Todo, id: TypedColumn) => void;

    setNewTaskInput: (input: string) => void;
    setNewTaskDescription: (input: string) => void;
    setNewTaskDeadLine: (input: string | Date) => void;
    setNewTaskPriority: (input: string) => void;
    setNewTaskType: (columId: TypedColumn) => void
    setImage: (image: File | null) => void;
};

export const useBoardStore = create<BoardState>((set, get) => ({
    board: {
        columns: new Map<TypedColumn, Column>()
    },

    newTaskInput: "",
    newTaskDescription: "",
    newTaskDeadLine: "",
    newTaskPriority: "Chill",


    newTaskType: "todo",
    image: null,

    getBoard: async () => {
        const board = await getTodosGroupedByColumn()
        set({ board })
    },

    setBoardState: (board) => set({ board }),

    deleteTask: async (taskIndex: number, todo: Todo, id: TypedColumn) => {
        const newColumns = new Map(get().board.columns);

        newColumns.get(id)?.todos.splice(taskIndex, 1);

        set({ board: { columns: newColumns } });

        if (todo.image) {
            await storage.deleteFile(todo.image.bucketId, todo.image.fileId);
        }

        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
            todo.$id
        );
    },

    setNewTaskInput: (input: string) => set({ newTaskInput: input }),
    setNewTaskDescription: (input: string) => set({ newTaskDescription: input }),
    setNewTaskDeadLine: (input: string | Date) => {
        const formattedDate =
            input instanceof Date ? input.toISOString().split("T")[0] : input;
        set({ newTaskDeadLine: formattedDate });
    },
    setNewTaskPriority: (input: string) => set({ newTaskPriority: input }),
    setNewTaskType: (columId: TypedColumn) => set({ newTaskType: columId }),
    setImage: (image: File | null) => set({ image }),

    updateTodoInDB: async (todo, columnId) => {
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
            todo.$id,
            {
                title: todo.title,
                status: columnId,
            }
        );
    },

    addTask: async (todo: string, description: string, columId: TypedColumn, priority: string, deadLine: string | Date, image?: File | null) => {
        let file: Image | undefined;

        if (image) {
            const fileUploaded = await uploadImage(image);
            if (fileUploaded) {
                file = {
                    bucketId: fileUploaded.bucketId,
                    fileId: fileUploaded.$id
                }
            }
        }

        let formattedDeadLine: Date;

        if (deadLine instanceof Date) {
            formattedDeadLine = new Date(deadLine.setHours(23, 59, 59, 0));
        } else {
            formattedDeadLine = new Date(new Date(deadLine).setHours(23, 59, 59, 0));
        }
    
        const formattedDeadLineUTC = new Date(formattedDeadLine.getTime() - formattedDeadLine.getTimezoneOffset() * 60000);    

        const { $id } = await databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
            ID.unique(),
            {
                title: todo,
                description: description,
                status: columId,
                priority: priority,
                deadLine: formattedDeadLineUTC,
                ...(file && { image: JSON.stringify(file) }),
            }
        )

        set({ newTaskInput: "" });

        set({ newTaskDescription: "" });

        set({ newTaskDeadLine: "" });

        set((state) => {
            const newColumns = new Map(state.board.columns)

            const newTodo: Todo = {
                $id,
                $createdAt: new Date().toISOString(),
                title: todo,
                description: description,
                status: columId,
                priority: priority,
                deadLine: formattedDeadLineUTC,
                ...(file && { image: file }),
            }

            const column = newColumns.get(columId);

            if (!column) {
                newColumns.set(columId, {
                    id: columId,
                    todos: [newTodo]
                });
            } else {
                newColumns.get(columId)?.todos.push(newTodo);
            }

            return {
                board: {
                    columns: newColumns,
                }
            }
        })
    }
}));
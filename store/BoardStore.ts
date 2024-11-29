import { databases, storage } from "@/appwrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
import { create } from "zustand";

interface BoardState {
    board: Board;
    getBoard: () => void;
    setBoardState: (board: Board) => void;
    updateTodoInDB: (todo: Todo, columnId: TypedColumn) => void
    newTaskInput: string;
    newTaskDescription: string;
    newTaskType: TypedColumn;
    image: File | null;

    deleteTask: (taskIndex: number, todoId: Todo, id: TypedColumn) => void;

    setNewTaskInput: (input: string) => void;
    setNewTaskDescription: (input: string) => void;
    setNewTaskType: (columId: TypedColumn) => void
    setImage: (image: File | null) => void;
};

export const useBoardStore = create<BoardState>((set, get) => ({
    board: {
        columns: new Map<TypedColumn, Column>()
    },

    newTaskInput: "",
    newTaskDescription: "",

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
    }
}));
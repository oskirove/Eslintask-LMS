interface Board {
    columns: Map<TypedColumn, Column>
}

type TypedColumn = "todo" | "inprogress" | "done"

interface Column {
    id: TypedColumn,
    todos: Todo[]
}

interface Todo {
    $id: string,
    userId:string,
    $createdAt: string,
    title: string,
    description?: string,
    status: TypedColumn,
    priority: string,
    image?: Image,
    deadLine: string | Date,
}

interface Image {
    bucketId: string;
    fileId: string;
}

// interface User {
//     fullname:string,
//     email: string,
//     image: string,
//     firstname: string,
//     lastname: string
// }
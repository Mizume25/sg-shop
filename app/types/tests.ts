
/** Tipados del EJERCICIO  */
export interface Card {
    id:number,
    task: string,
    type: TaskType
    completed: boolean,
    icon: string
    description: string
    date: string,
    color: any
}

export type TaskType = 'estudio' | 'compra' | 'ejercicio' | 'ocio'
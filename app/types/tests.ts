
import licensesJSON from '../../server/data/licenses.json';


/** Tipados del EJERCICIO  6 - Core */
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



/**  Ejercicio 1 - Api  */





/** Types */

/*** Tipado JSON delicensias */
export type License = typeof licensesJSON[0];

/** @type Items del Nav */
export interface NavItem {
    id: number
    icon: string,
    color: any,
    label: string,
}

/** Operaciones del Nav */
export interface operations {
    index: boolean,
    show: boolean,
    store: boolean,
}


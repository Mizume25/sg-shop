/**
 * Helper para la Practica 1
 */


/** Types */

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





/** Funciones */

/**
 * Funcion que devuelve nombre
 * @param code 
 * @returns 
 */
export const getCountryName = (code: string) => {
    return new Intl.DisplayNames(['es'], { type: 'region' }).of(code)
}



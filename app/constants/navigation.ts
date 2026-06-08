/**
 * Objetos para navegador
 * 
 */
import type { NavigationMenuItem } from '@nuxt/ui'

/** Sidebar */
export const NavItemSidebar : NavigationMenuItem [] = [
    {
        label : "Catalogo de Productos",
        icon: "lucide:house",
        to: "#"
    } , 
    {
        label : "Gestion de Categorias",
        icon: "lucide:tag",
        to: "#"
    },
    {
        label : "Añadir Producto",
        icon: "lucide:store",
        to: "#"
    }, 
    {
        label : "Pedir Encargo",
        icon: "lucide:package",
        to: "#"
    }, 
]
/**
 * Archivo para poder obtener un CRUD parcial de Licencias
 */
import type { Reactive } from 'vue';
import { type NavItem, type operations, type License } from '../types/tests';
import type { SerializeObject } from 'nitropack'

/** Valores reactivos llevados */
export const useLicenses = (licenses: Ref<SerializeObject<License>[] | null | undefined>) => {



    /** Valores  */
    const ListNames = computed(() => licenses.value?.map((p) => p.name) ?? [])

    /** Referencias */


    /** Licencia Selecionada */
    const selectedName: Ref<string | undefined> = ref(ListNames.value?.[0]);


    /** Valores  Reactivos */


    /** Referencias  */

    /** Nav Campos  */
    const nav: Ref<NavItem[]> = ref([
        { id: 1, icon: 'lucide:list', color: 'warning', label: 'index' },
        { id: 2, icon: 'lucide:eye', color: 'info', label: 'show' },
        { id: 3, icon: 'lucide:pencil-line', color: 'primary', label: 'store' },
    ])

    /** Reactivos  */

    /** Valores del Nav */
    const actions: Reactive<operations> = reactive({
        index: false,
        show: false,
        store: false,
    });

    /** Computed  */

    /** Array reactivo */
    const viewLicense = computed(() => {
        if (actions.index) return licenses.value;
        if (actions.show) return licenses.value?.filter(l => l.name === selectedName.value)

        return [];
    })


    /** Funciones */


    /** Mutamos referencias */
    const mutateRef = (label: string): void => {

        /** Que encuentra la primera itracion */
        const currentSelect = Object.entries(actions).find(([k, v]) => v === true)?.[0]

        /** Mutamos todos a falso */
        Object.keys(actions).forEach(key => {
            actions[key as keyof operations] = false
        })


        /** Filtramos el activado */
        if (label !== currentSelect) {
            actions[label as keyof operations] = true
        }

        console.log("Valor actual de show", actions.show)
    }

    /** Modifica el Nav */
    const selectNav = (id: number): void => {

        /** Lógica de seleccionado */
        if (!nav.value[id]) return;

        /** Mutamos la refereencia */
        mutateRef(nav.value[id].label);

        Object.entries(actions).forEach(([k, v]) => {
            console.log(k, " - ", v);
        })
    }

    /** lifcycles */
    watch(ListNames, (names) => {
        if (!selectedName.value) selectedName.value = names[0]
    }, { immediate: true })


    return {
        nav,
        actions,
        viewLicense,
        selectedName,
        ListNames,
        selectNav
    }



}
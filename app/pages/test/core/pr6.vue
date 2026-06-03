<template>

    <main class="w-full min-h-screen flex flex-row justify-between animate-fillIn">
        <!-- Contenido izquierda -->
        <div class="w-[50%] min-h-screen bg-black flex flex-col items-center ">

            <div
                class="w-[450px] h-[350px] bg-white rounded-2xl sticky top-8 animate-fillIn-top mt-40 p-6 flex flex-col gap-4 overflow-visible">
                <h2 class="text-black font-bold text-2xl"> Formulario de Accion </h2>

                <!-- Tarea -->
                <UInput placeholder="Nombre de la tarea" :ui="{ base: 'bg-white  text-black' }" v-model="form.task" />

                <!-- Descripción -->
                <UInput placeholder="Descripción" :ui="{ base: 'bg-white  text-black' }" v-model="form.description" />

                <!-- Fecha -->
                <UInput type="date" :ui="{ base: 'cursor-pointer' }" v-model="form.date" />

                <!-- Tipo -->
                <USelect v-model="form.type" :items="category" placeholder="Tipo"
                    :ui="{ base: 'bg-white text-black cursor-pointer' }" />

                <!-- Completada -->
                <div class="flex items-center ">
                    <UCheckbox label="Completada" :ui="{ label: 'text-black font-bold' }" v-model="form.completed" />
                </div>

                <!-- Botón -->
                <UButton label="Añadir tarea" color="primary" variant="solid" class="mt-auto cursor-pointer" @click="makeCard" />

            </div>
        </div>

        <div class="w-[50%] min-h-screen bg-red-500 flex flex-col items-center justify-start py-8">

            <!-- Contenido Derecha -->
            <div class="w-[80%] bg-white rounded-2xl animate-fillIn-top p-3">

                <div class="flex flex-row gap-4 p-4">
                    <div class="flex-1 bg-green-100 rounded-xl p-4 text-center">
                        <p class="text-2xl font-bold text-green-600">{{ tasksComplet.length }}</p>
                        <p class="text-sm text-green-700">Completadas</p>
                    </div>
                    <div class="flex-1 bg-red-100 rounded-xl p-4 text-center">
                        <p class="text-2xl font-bold text-red-600">{{ tasksPending.length }}</p>
                        <p class="text-sm text-red-700">Pendientes</p>
                    </div>
                </div>

                <h2 class="text-black font-bold text-2xl ms-6"> Lista de Items </h2>
                <!-- Lista de Items -->
                <div class="grid grid-cols-2 gap-4 auto-rows-fr p-4">

                    <div class="bg-gray-100 rounded-2xl p-4 flex flex-col gap-2 shadow cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
                        v-for="item in items" :key="item.id" @click="changeStatus(item.id)">
                        <div class="flex items-center gap-2">
                            <UIcon :name="item.icon" :class="renderClass(item.type)" class=" text-xl"
                                :ui="{ base: 'flex justify-center' }" />
                            <span class="font-bold capitalize text-black ">{{ item.task }}</span>
                        </div>
                        <p class="text-sm text-gray-500">{{ item.description }}</p>
                        <p class="text-sm text-gray-500">{{ new Date(item.date).toLocaleDateString() }}</p>
                        <div class="flex flex-row gap-3 justify-between">
                            <UBadge :label="item.type" variant="solid" size="sm" class="w-[80px] capitalize text-[15px]"
                                :color="item.color" />
                            <UBadge :icon="item.completed ? 'lucide:check' : 'i-lucide-x'"
                                :color="item.completed ? 'primary' : 'error'" variant="solid" size="xl"
                                class="w-[30px] capitalize font-bold"
                                :ui="{ base: 'flex items-center justify-center' }" />
                        </div>

                    </div>



                </div>

            </div>
        </div>

    </main>
</template>

<script setup lang="ts">
import { type Card, type TaskType } from '@/types/tests'
import type { Reactive } from 'vue'

/**S
 * @description Ejercicio de Objetos
 * - Etiquetas de Tareas especificas S
 * 
 */

/**
 * @type card - Interfaz de card
 */
const items = ref<Card[]>([
    { id: 0, task: 'Repasar Vue computed', type: 'estudio', completed: false, icon: 'i-lucide-book', description: 'Practicar con ejercicios', date: '03-06-2026', color: 'info' },
    { id: 1, task: 'Comprar leche y fruta', type: 'compra', completed: false, icon: 'i-lucide-shopping-cart', description: 'Mercadona', date: '03-06-2026', color: 'warning' },
    { id: 2, task: 'Cardio 30 minutos', type: 'ejercicio', completed: true, icon: 'i-lucide-dumbbell', description: 'Bici estática', date: '03-06-2026', color: 'primary' },
    { id: 3, task: 'Ver serie favorita', type: 'ocio', completed: false, icon: 'i-lucide-gamepad', description: 'Temporada 2', date: '03-06-2026', color: 'error' },
    { id: 4, task: 'Practicar TypeScript', type: 'estudio', completed: false, icon: 'i-lucide-book', description: 'Tipos e interfaces', date: '03-06-2026', color: 'info' },
    { id: 5, task: 'Comprar zapatillas', type: 'compra', completed: true, icon: 'i-lucide-shopping-cart', description: 'Nike talla 42', date: '03-06-2026', color: 'warning' },
    { id: 6, task: 'Estiramientos mañana', type: 'ejercicio', completed: false, icon: 'i-lucide-dumbbell', description: '15 minutos', date: '03-06-2026', color: 'primary' },
    { id: 7, task: 'Leer novela', type: 'ocio', completed: true, icon: 'i-lucide-gamepad', description: '20 páginas mínimo', date: '03-06-2026', color: 'error' }
])

/**
 * 
 * Computed de el array de objetos
 * 
 */
const tasksComplet = computed(() => {
    return items.value.filter((p) => p.completed)
})

const tasksPending = computed(() => {
    return items.value.filter((p) => !p.completed)
})

/**
 * Hacer las tareas reactivas
 */
const changeStatus = (id: number): void => {
    if (items.value[id] == null) return
    items.value[id].completed = !items.value[id].completed
}


/**
 * 
 * @param item 
 * Funcion para devolver Clase
 */
const renderClass = (item: string): string => {
    switch (item) {
        case 'estudio': return 'text-blue-500'
        case 'ejercicio': return 'text-green-500'
        case 'compra': return 'text-yellow-500'
        case 'ocio': return 'text-red-500'
        default: return 'text-gray-500'
    }
}

/**
 * 
 * @param type 
 * Funcion para devolver iconos
 */
const renderIcon = (type: string): string => {
    switch (type) {
        case 'estudio': return 'i-lucide-monitor'
        case 'compra': return 'i-lucide-shopping-cart'
        case 'ejercicio': return 'i-lucide-dumbbell'
        case 'ocio': return 'i-lucide-gamepad'
        default: return 'i-lucide-circle'
    }
}

/**
 * 
 * @param type 
 * Funcion para devolver colores
 */
const renderColor = (type: string): string => {
    switch (type) {
        case 'estudio': return 'info'
        case 'compra': return 'warning'
        case 'ejercicio': return 'primary'
        case 'ocio': return 'error'
        default: return 'neutral'
    }
}

/** Categorias de las tareas */
const category: Ref<string[]> = ref(['estudio', 'compra', 'ejercicio', 'ocio'])

/** Card */
const form: Reactive<Card> = reactive({
    id: 0,
    task: '',
    description: '',
    type: 'estudio',
    completed: false,
    date: '',
    icon: '',
    color: ''
})



/**
 * 
 * Variable que construye el card
 */
const makeCard = (): void => {

    /** Comprobamos erroes */
    if (!tester()) return;

    /** Construimos objeto */
    let id = items.value.length;

    form.id = id;

    form.icon = renderIcon(form.type);
    form.color = renderColor(form.type);

    let obj: Card = {
        id: form.id,
        task: form.task,
        type: form.type,
        description: form.description,
        completed: form.completed,
        date: form.date,
        icon: form.icon,
        color: form.color
    }

    /** INyectamos valor */
    items.value.push(obj);

    /**lIMPIAMOS FORMULARIO */
    cleanForm();
}

/**
 * Comprobacion de erroes
 */
const tester = (): boolean => {
    if (!form.task.trim() || !form.description.trim() || !form.date.trim()) {
        alert('Hay valores vacíos')
        return false
    }

    if (form.task.length > 20) {
        alert('La Tarea no puedee tener mas de 20 caracteres')
        return false
    }

    if (form.description.length > 50) {
        alert('las descripciones no pueden tener mas de 50 caracteres')
        return false
    }



    return true
}

/** Borrado de archivos */
const cleanForm = () => {
    Object.assign(form, {
        id: 0,
        task: '',
        description: '',
        type: 'estudio',
        completed: false,
        date: '',
        icon: '',
        color: ''
    })
}




</script>

<style lang="scss" scoped></style>
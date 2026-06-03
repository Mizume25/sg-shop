<script setup lang="ts">
/**
 * @description  Ejercicio 4 - Lista de items renderizables
 * Objetivo
 * - Varibles reactivas 
 * - Ver funciones de arrays 
 * - Practicar renderizado de contenid v-for
 */


/** Render Content con v-html */

const input: Ref<string> = ref(''); // Renference valor individual
const items: Ref<string[]> = ref([]) // Valor Progresivo


/** Controlar valor reactivo */
const handleInput = () => {
    if (input.value == '') return alert('No puedes imprimir valores vacíos')
    if (input.value.length > 20) return alert('No puedes escribir mas de 20 caracteres')
    if (items.value.length >= 9) return alert('No puedes añadir más elementos')
    if(items.value.includes(input.value.toLocaleLowerCase().trim())) return alert(`Ya existe el valor ${input.value.trim()} en la lista`)
    items.value.push(input.value.toLowerCase().trim())
    input.value = '';
}

/** Borrar ultimo elemento de la list */
const removeLastItem = () => {
    if (items.value.length == 0) return alert('No hay elementos que eliminar')
    items.value.pop();
}


</script>

<template>

    <main class="w-[800px] h-[800px] mx-auto flex flex-row items-start gap-0 mt-10">
        <!--- Panel Control-->
        <div
            class="w-[250px] h-[390px] mx-auto border-black border mt-0 rounded-xl text-center flex flex-col gap-3 bg-[#a3cbcc] items-center justify-center ">
            <header class="w-full h-[10px] mt-3 p-2 text-white font-blod text-[25px]"> Panel Control</header>
            <section class="w-full h-full flex flex-col  justify-center items-center p-6 -mt-20">
                <!--- Input -->
                <section class="w-full h-25">
                    <UInput :ui="{ base: 'bg-white text-black font-blod' }" , v-model="input">

                    </UInput>
                </section>
                <!-- Botones-->
                <section class="w-full h-25 flex flex-row gap-3 -mt-3">
                    <UButton variant="solid" color="primary"
                        class="w-[120px] h-[50px] border border-black rounded-xlflex items-center justify-center font-blod cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
                        @click="handleInput">
                        Añadir </UButton>

                    <UButton variant="solid" color="error"
                        class="w-[120px] h-[50px] border border-black rounded-xlflex items-center justify-center font-blod cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
                        @click="removeLastItem">
                        Remove </UButton>

                </section>

            </section>
        </div>

        <!--- Contendor items-->
        <div class="w-[300px] h-fit mx-auto border-black border rounded-xl text-center flex flex-col items-center gap-3 p-4"
            style="background-color: rgb(94, 111, 197);">

            <header class="w-full p-2 text-white font-bold text-[20px] ">Lista de Tareas</header>

            <section class="w-full flex flex-col gap-3 items-center overflow-x-hidden">
                <div class="w-full h-[50px] border border-black rounded-xl bg-[#9f87ba] flex items-center justify-center font-bold"
                    v-for="(item, index) in items" :key="index">
                    <p class="capitalize">{{ item }}</p>
                </div>
            </section>
        </div>


    </main>
</template>

<style lang="scss" scoped></style>
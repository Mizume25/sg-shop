<script setup lang="ts">
/**
 * @description  Ejercicio 2 - Input a Tiempo real
 * Obetivo
 * - Practicar a tiempo rel una variable ractiva
 * - Practicar varaible reactiva ref
 * 
 */
const input = ref('')

watch(input, (val) => {
    console.log(val)
})


</script>

<template>
    <div class="w-[250px] h-[200px] mx-auto border-black border mt-30">
        <section class="flex flex-col justify-center items-center gap-3 w-full h-full text-center p-6">
            <h1 class="text-2xl text-black font-bold">Practica Input</h1>
            <UInput :ui="{ base: 'bg-white text-black ring-gray-300' }" placeholder="Write..." v-model="input" />
            <p class="text-xl text-black">{{ input }}</p>
        </section>
    </div>
</template>

<style lang="scss" scoped></style>
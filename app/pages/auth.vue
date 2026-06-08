<template>
    <div class="relative w-full h-screen flex flex-col justify-start items-start">

        <!-- Fondo difuminado -->
        <div class="absolute inset-0 bg-[url('/img/fondo.webp')] bg-no-repeat bg-cover bg-top blur-sm"></div>

        <!-- Contenido encima, sin difuminar -->
        <header class="relative z-10 bg-[#784312] h-[15%] w-full border border-black">
            <h1 class="text-center text-white text-3xl mt-7 font-bold shadow-2xl"> {{ title }} </h1>
        </header>


        <main class="flex-1 overflow-auto p-6 flex justify-center items-start z-10 relative w-full">
            <NuxtPage />
        </main>



    </div>
</template>

<script setup lang="ts">

/** Totulo Dinamico */
const title: Ref<string> = ref('');

provide('setTitle', (data: string) => {
    title.value = data
})

</script>

<style lang="scss" scoped></style>
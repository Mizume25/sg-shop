<script setup lang="ts">



</script>

<template>
    <!--- Contendor Principal-->
    <div class="w-[250px] min-h-[200px] mx-auto border-black border mt-30 rounded-xl text-center flex flex-col gap-3"
        style="background-color: rgb(94, 111, 197);">
        <!--- Header -->
        <header class="w-full h-[45px] mt-3 p-2 text-white font-blod text-[25px]"> Lista de Tareas</header>
        <!--- Cards -->
        <section class="w-full h-full flex flex-col gap-3 justify-center items-center">
            <!--- plantilla renderizabble -->
            <div
                class="w-[180px] h-[50px] border border-black rounded-xl bg-[#9f87ba] flex items-center justify-center font-blod ">
                <p>Plantilla de Etqiueta </p>
            </div>

        </section>

    </div>

    <div
        class="w-[250px] min-h-[200px] mx-auto border-black border mt-10 rounded-xl text-center flex flex-col gap-3 bg-[#a3cbcc]">
        <header class="w-full h-[45px] mt-3 p-2 text-white font-blod text-[25px]"> Panel Control</header>
        <section class="w-full h-full flex flex-row gap-3 justify-center items-center p-6">


            <UInput>
                
            </UInput>

            <UButton variant="solid" color="primary"
                class="w-[120px] h-[50px] border border-black rounded-xlflex items-center justify-center font-blod cursor-pointer">
                Añadir </UButton>

            <UButton variant="solid" color="error"
                class="w-[120px] h-[50px] border border-black rounded-xlflex items-center justify-center font-blod cursor-pointer">
                Remove </UButton>

        </section>
    </div>
</template>

<style lang="scss" scoped></style>
<!-- Layout de menus -->
<template>
    <!-- Index Incial -->
    <div class="min-h-screen flex items-center justify-center flex-col" style="background-color: rgb(71, 120, 169);">
        <h1 class="text-[30px] text-white animate-fillIn mb-3">
                Prueba técncia 
        </h1>

        <!--- Contenedor de Rutas-->
        <main class="border border-black w-[350px] h-[250px] rounded-xl bg-white animate-fillIn flexeado">

            <slot />

        </main>
    </div>
</template>

<style>

</style>
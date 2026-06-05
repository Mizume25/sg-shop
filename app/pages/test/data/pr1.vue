<template>
    <div class="w-full h-screen">
        <div class="w-[1200px] h-[480px]">
            
            <LicenceCard v-if="licenseData" :license=licenseData     />
        </div>
    </div>

</template>

<script setup lang="ts">
 /**
 * Ejercicio 1 - Hacer reutilizable el card de pr1 de APi y hacerlo componente
 */   

const { data:license }= await useFetch(`/api/test/${1}`);
const licenseData = computed(() => license.value)

</script>

<style lang="scss" scoped>



</style>
<template>
    <div class="w-full h-screen">
        <div class="grid grid-cols-2 ">
            
            <LicenceCard v-if="licenseData" :license=licenseData />
            <LicenceCard v-if="licenseData" :license=licenseData   @saludar="recive"  />
        </div>
    </div>

</template>

<script setup lang="ts">
 /**
 * Ejercicio 1 - Hacer reutilizable el card de pr1 de APi y hacerlo componente
 */   

const { data:license }= await useFetch(`/api/test/${1}`);
const licenseData = computed(() => license.value)

const recive = (datos : { name: string , age: number}) => {
    console.log(datos.name , ' te esta hablando para decirte que tiene , ' , datos.age );
}

</script>

<style lang="scss" scoped>



</style>
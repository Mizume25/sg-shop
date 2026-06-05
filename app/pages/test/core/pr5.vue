<template>
    <div class="w-[250px] h-[200px] mx-auto border-black border mt-30">
        <section class="flex flex-col justify-center items-center gap-3 w-full h-full text-center p-6">
            <h1 class="text-black font-bold text-xl"> Tiempo en la página</h1>
            <span class="text-black text-[25px] font-bold"> {{ seg.valueOf().toString() }}</span>
        </section>
    </div>
</template>

<script setup lang="ts">
/**
 * 
 * @description Ejercicio de 5
 * contar la cantidad de segundo que el usuario esta en la página 
 */

 /** Reference */
const seg : Ref<number> = ref(0);
const interval= ref<ReturnType<typeof setInterval>>()

/** Una vez montada la página */
onMounted(() => {
    /** Contaremos cada segundo que esta en la página */
        interval.value = setInterval(() => {
             /** Contaremos cada segundo que esta en la página */
            seg.value += 1;

        
        }, 1000)
    
})

/** Desactivamos */
onUnmounted(() => {
    clearInterval(interval.value)
})

/** Imprimos multiplos */
watch(seg, (newSeg) => {
   
    if(newSeg % 10 == 0 ) console.log("Multiplede 10")
})

</script>

<style lang="scss" scoped></style>
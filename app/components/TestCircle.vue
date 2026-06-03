<script setup lang="ts">

/** Iteracion de colores */
const colores = ['red', 'yellow', 'green']

/** Indice de referencia */
let index = ref(0);

/** Cambio de color */
onMounted(() => {
    setInterval(() => {
        index.value = (index.value + 1) % colores.length
    }, 1000)
})


</script>

<template>
    <div class="w-[120px] h-[100px] border border-black rounded-[90%] " :style="{ backgroundColor: colores[index] }">

    </div>

</template>



<style scoped>

</style>
<script setup lang="ts">
/**
 * Ejercicio 1 - contadores 
 * @description Contador que permite incrementar o decrementar botones
 */

/** -> UseState */
let count : Ref<number , number> = ref(0);



</script>

<template>
  <div class="display" >

   <UButton variant="solid" color='info' size="md" class="h-[60px] text-white p-4  justify-center items-center cursor-pointer" @click='count++'>
      Incrementar
   </UButton>

   <UButton variant="solid" color="warning" size="md" class="h-[60px] text-white p-4 justify-center items-center cursor-pointer" @click='count = 0'>
    Reiniciar
   </UButton>

    <UButton variant="solid" color="error" size="md" class="h-[60px] text-white p-4 justify-center items-center cursor-pointer" @click='count--'>
    Decrementar
   </UButton>
    
  </div>

  <div class="display">
      <h1 class="text-black text-[50px] font-bold text-center">{{ count }}</h1>
  </div>
</template>

<style scoped>
 .display {
    width:  300px;
    height: 200px;
    border: 3px solid black;
    margin: 30px auto 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
 }


</style>
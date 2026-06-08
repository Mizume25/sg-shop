
<script setup>
definePageMeta({
  layout: 'hub-layout'
})
</script>
<template>
    <div class="flex flex-col items-center justify-center gap-4">
        <UButton 
        variant="solid" 
        color="error" 
        class="w-[160px] h-[60px] text-[25px] text-white font-blod p-4 text-center  transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer" 
        icon="lucide:shopping-cart"
        to="/home"
        >
            SG-shop
        </UButton>

        <UButton 
        to="/test"
        variant="solid" 
        color="primary" 
        class="w-[160px] h-[60px] text-[25px] text-white font-blod p-4 text-center transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer" 
        icon="lucide-book">
            Practicas
        </UButton>
    </div>
</template>

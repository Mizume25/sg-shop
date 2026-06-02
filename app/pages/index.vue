<!-- Layout -->
<script setup lang="ts">
definePageMeta({ layout: 'hub-layout' })
</script>

<template>
    <div class="w-[300px] h-[200px] border-black flex flex-col items-center justify-center gap-3">
        <UButton to="/home/dashboard" variant="solid" color="error" size="xl"
            class="w-[200px] justify-center text-white hover:scale-110 transition-transform duration-300 ease-in-out"
            icon="lucide:shopping-cart">
            Sg-Shop
        </UButton>

        <UButton to="/test/menu" variant="solid" color="primary" size="xl"
            class="w-[200px] justify-center text-white hover:scale-110 transition-transform duration-300 ease-in-out"
            icon="lucide:book">
            Prácticas
        </UButton>
    </div>
</template>
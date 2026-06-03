<script setup lang="ts">
definePageMeta({ layout: 'hub-layout' })

/** Numeracion de páginas */
interface FieldItem {
    id: number;
    to: string;
}

/** Integrar campos */
const items: FieldItem[] = [
    { id: 1, to: "/test/api/pr1" },
]
</script>

<template>
     <div class="flex flex-col items-center justify-center gap-4">
        <UButton 
        v-for="item in items"
        :key="item.id"
        :to="item.to"
        variant="solid" 
        color="primary" 
        class="w-[180px] h-[60px] text-[25px] text-white font-blod p-4 text-center transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer" 
        icon="lucide-book">
            Practicas {{ item.id }}
        </UButton>
    </div>
</template>


<style scoped>

</style>
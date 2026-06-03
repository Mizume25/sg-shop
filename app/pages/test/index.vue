<script setup lang="ts">
definePageMeta({ layout: 'hub-layout' })

/** Numeracion de páginas */
interface FieldItem {
    id: number,
    to: string,
    label:string,
    color:string,
    icon:string
}

/** Integrar campos */
const items: FieldItem[] = [
    { id: 1, to: "/test/core/" ,label: "core", color:"error" , icon:"lucide:book"},
    { id: 2, to: "/test/data", label: "data" , color:"info", icon:"lucide:database"},
    { id: 3, to: "/test/api/", label: "api" , color:"warning", icon:"lucide:network"}
]
</script>

<template>
     <div class="flex flex-col items-center justify-center gap-4">
        <UButton 
        v-for="item in items"
        :key="item.id"
        :to="item.to"
        variant="solid" 
        :color="item.color as any" 
        class="w-[180px] h-[60px] text-[25px] text-white font-bold p-4 text-center transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer capitalize"  
        :icon="item.icon">
            {{ item.label }}
        </UButton>
    </div>
</template>


<style scoped>

</style>
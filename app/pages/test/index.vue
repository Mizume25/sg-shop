<!--Layouts -->
<script setup lang="ts">
definePageMeta({ layout: 'hub-layout' })


/** Iteraremos buttons */
interface PracticeItem {
    id: number
    to: string,
}
/** Iteramos contenido */
const items : PracticeItem[] = [
    {id: 1 , to:'/test/1'},
    {id: 2, to:'/test/2'}
]

</script>

<template>
    <div class="w-[300px] h-[200px] border-black flex flex-col items-center justify-center gap-3">
        <!--  Contenido iterado -->
        <UButton 
        v-for="item in items"
        :to="item.to"
        :key="item.id"
        variant="solid" 
        color="primary" 
        size="xl"
        class="w-[200px] justify-center text-white hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
        icon="lucide:book">
            Practica {{item.id }}
        </UButton>
        
    </div>
</template>
<script setup lang="ts">
/**
 * Ejercicio 2 - Contador donde dicha lógica la posee el padre   
 * @description Contador que permite incrementar o decrementar botones
 */


const props = defineProps<{
    count :number

}>();

const emit = defineEmits<{
    plus:[]
    rest:[]
    reboot: []
}>()

</script>

<template>
    <div class="container mx-auto h-[580px] flex flex-col gap-4 items-center ">
        <div class="">

            <UButton variant="solid" color='info' size="md"
                class="h-[60px] text-white p-4  justify-center items-center cursor-pointer m-5" @click="emit('plus')">
                Incrementar
            </UButton>

            <UButton variant="solid" color="warning" size="md"
                class="h-[60px] text-white p-4 justify-center items-center cursor-pointer m-5" @click="emit('reboot')">
                Reiniciar
            </UButton>

            <UButton variant="solid" color="error" size="md"
                class="h-[60px] text-white p-4 justify-center items-center cursor-pointer m-5" @click="emit('rest')">
                Decrementar
            </UButton>

        </div>
        <!-- Contador -->
        <div class="border border-black w-[350px] h-[220px] flex flex-col justify-center items-center">
            <h1 class="text-black text-[80px] font-bold text-center"> {{ props.count }} </h1>
        </div>
    </div>
</template>
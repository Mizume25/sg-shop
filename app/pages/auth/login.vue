<script setup lang="ts">
/** Inject */
const setTitle = inject('setTitle') as (data: string) => void
setTitle('Iniciar Session')
</script>

<template>
    <!--- Fomrulario  de Inicio de Session -->
    <div class="bg-white w-[450px] h-[400px] border border-black rounded-2xl">
        <!-- Header de contenido -->
        <div class="h-30 flex justify-start items-center ms-5 ">
            <NuxtImg src="/icons/sg_shop_logo_v2.png" width="400"  />
        </div>
        <!--- Cuerpo del Formulario -->
        <div class=" ps-5 flex flex-row justify-center   gap-10 ">
             
            <UForm>
                <UFormField label="Email" :ui="{ label: 'text-black' }" class="mb-5">
                    <UInput leading-icon="lucide:mail" placeholder="example@example.com"></UInput>
                </UFormField>

                <UFormField label="Password" :ui="{ label: 'text-black' }" class="mb-5">
                    <UInput icon="lucide:lock" placeholder="Password" ></UInput>
                </UFormField>
                 <span class="text-black text-sm">No tienes cuenta ? </span><NuxtLink class="text-sm text-black hover:text-blue-500 cursor-pointer">Registrate</NuxtLink> <br>
                <UButton variant="solid"  class="cursor-pointer"  >Log in</UButton>
            </UForm>
           <div class="w-[100px] h-[100px] border border-black rounded-[90%] flex flex-col justify-center items-center bg-black">
                <UIcon name="lucide:user" size="lg" class="text-[75px] text-white " />
            </div>
        </div>

    </div>
</template>



<style lang="scss" scoped></style>
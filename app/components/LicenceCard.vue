

<script setup lang="ts">
import type { License } from '~/types/tests';
import { getCountryName } from '~/pages/test/api/helpers/h-pr1';

const props = withDefaults(defineProps<{
    license : License
    bgColor?: string
    sectionColor?: string
}>(), {
    bgColor: 'bg-[#e7b13c]',
    sectionColor: 'bg-[#e0c58a]'
})


/**
 * Ejercicio 2 - Consturir emits
 */

 /** Sin tipado */
 //const emit = defineEmits(['saludar']);

 // Con Tipado
 const emit = defineEmits<{
    saludar: [data: { name: string , age:number }]
 }>();

 /** Funcion Prubea */
 const greetings = () => {
    emit('saludar', { name: props.license.name , age: props.license.age }); 
}


</script>
<template>
    <div class="rounded-xl border border-warm-600/40 overflow-hidden text-sm p-6" :class="{bgColor}">

        <!-- Foto de Perfil-->
        <div class="px-5 py-5 text-center ">
            <div
                class="w-16 h-16 rounded-full bg-white border border-warm-600/30 flex items-center justify-center mx-auto mb-3">
                <UIcon size='xl' class="text-black text-[40px]" name="lucide:user" />
            </div>
            <!-- Nombre del empleado -->
            <p class="font-medium text-base text-muted-600">{{ props.license.name }}</p>

            <!-- Tag -->
            <span
                class="inline-flex items-center gap-1 mt-2 px-3 py-0.5 rounded-full bg-white/70 border border-black text-[10px] font-semibold tracking-widest uppercase text-muted-700">
                <UIcon name="lucide:car"></UIcon> Active operator {{ props.license.id }}
            </span>
        </div>


        <!-- Datos Personales -->
        <div class="px-5 py-4 border border-black rounded-2xl shadow-xl  mb-3" :class="sectionColor">
            <p class="text-[10px] font-bold tracking-widest uppercase text-muted-600/60 mb-3">Personal Date</p>

            <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                <div>
                    <p class="text-[11px] text-muted-600/60">Age</p>
                    <p class="font-medium text-muted-600">{{ props.license.age }} years</p>
                </div>
                <div>
                    <p class="text-[11px] text-muted-600/60">Nationality</p>

                    <p class="font-medium text-muted-600">{{ props.license.nationality }} - {{ getCountryName(props.license.nationality) }}
                    </p>
                </div>
                <div class="col-span-2">
                    <p class="text-[11px] text-muted-600/60">ID number</p>
                    <p class="font-medium tracking-wider text-muted-600">{{ props.license.idNumber }}</p>
                </div>
            </div>
        </div>
        <!-- Contacto-->
        <div class="px-5 py-4 border border-black rounded-2xl shadow-xl  mb-3" :class="sectionColor">
            <p class="text-[10px] font-bold tracking-widest uppercase text-muted-600/60 mb-3">Contact</p>
            <div class="space-y-2.5">
                <div class="flex items-center gap-2.5">
                    <UIcon name="lucide:mail" />
                    <span class="text-xs text-muted-600">{{ props.license.contact.email }}</span>

                </div>
                <div class="flex items-center gap-2.5">
                    <UIcon name="lucide:phone" />
                    <span class="text-xs text-muted-600">{{ props.license.contact.phone }}</span>
                </div>
                <div class="flex items-start gap-2.5">
                    <UIcon name="lucide:locate-fixed" />
                    <span class="text-xs text-muted-600 leading-relaxed">{{ Object.values(props.license.address).join(' ')
                        }}</span>
                </div>
            </div>
        </div>
        <!--- Licencia de conducir -->
        <div class="px-5 py-4 border border-black rounded-2xl shadow-xl " :class="sectionColor">
            <p class="text-[10px] font-bold tracking-widest uppercase text-muted-600/60 mb-3">Driving licence</p>
            <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                <div>
                    <p class="text-[11px] text-muted-600/60">Type</p>
                    <p class="text-lg font-semibold text-muted-600">{{ props.license.drivingLicense.type }}</p>
                </div>
                <div>
                    <p class="text-[11px] text-muted-600/60">Points</p>
                    <p class="text-lg font-semibold text-muted-600 flex items-center gap-1">
                        {{ props.license.drivingLicense.points }}
                    </p>
                </div>
                <div>
                    <p class="text-[11px] text-muted-600/60">Obtained</p>

                    <p class="font-medium text-muted-600"> {{ props.license.drivingLicense.yearObtained }}
                        <UIcon name="lucide:badge-check" class="text-green-800 text-[15px]" />
                    </p>
                </div>
                <div>
                    <p class="text-[11px] text-muted-600/60">Expires</p>
                    <p class="font-medium text-muted-600"> {{ props.license.drivingLicense.expirationDate }}</p>
                </div>
            </div>

            <UButton   @click="greetings" > Saludar</UButton>

        </div>
    </div> <!-- Final del card -->
</template>



<style lang="scss" scoped></style>
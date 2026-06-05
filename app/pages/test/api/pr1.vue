<template>
  <div class="bg-[#e8dcc8] text-[#191c1e]">

    <main class="min-h-screen pb-24 px-4 pt-8 max-w-5xl mx-auto">
      <nav class="fixed top-0 left-0 right-0 z-50 mx-auto max-w-5xl px-4 pt-3">
        <div class="bg-[#3a3020] rounded-xl px-5 h-14 flex items-center justify-between">

          <!-- logo -->
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-[#d4a017]/20 flex items-center justify-center">
              <UIcon name="lucide:network" class="text-white"></UIcon>
            </div>
            <span class="text-[#ece5d8] font-medium text-sm">Api Rest</span>
          </div>

          <!-- nav links -->
          <div class="flex items-center gap-1">
            <UButton v-for="(item, index) in nav" class="text-black px-3 py-1.5 rounded-lg text-xs cursor-pointer mx-1"
              :key="index" :color="item.color" :icon="item.icon" @click="selectNav(index)">

              {{ item.label }}

            </UButton>


          </div>

          <!-- Title -->
          <div class="flex items-center gap-2 bg-[#d4a017]/15 pl-1 pr-3 py-1 rounded-full cursor-pointer">
            <div class="w-7 h-7 rounded-full bg-[#d4a017] flex items-center justify-center">
              <UIcon name="lucide:car" />
            </div>
            <span class="text-[#ece5d8] text-xs">Drive License Api </span>
            <i class="ti ti-chevron-down text-[#c8bba0] text-xs"></i>
          </div>

        </div>
      </nav>

      <!--- Select Hidden -->
      <div class="flex justify-center  mt-10 mb-4 fixed top-10 left-60 right-60 z-20" v-show="actions.show">
        <USelect :items="ListNames" size="xl" class="w-full cursor-pointer" v-model="selectedName" />
      </div>



      <!-- Primer Elemento contenedor -->
      <!-- Container grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15 " v-if="actions.index || actions.show">

        <!-- Inicio de Card -->
        <div class="w-full rounded-xl border border-warm-600/40 overflow-hidden bg-[#e7b13c] text-sm p-6"
          :class="actions.show ? 'mt-15' : ''" v-show="actions.index || actions.show"
          v-for="(lic, index) in viewLicense" :key="lic.id">

          <!-- Foto de Perfil-->
          <div class="px-5 py-5 text-center ">
            <div
              class="w-16 h-16 rounded-full bg-white border border-warm-600/30 flex items-center justify-center mx-auto mb-3">
              <UIcon size='xl' class="text-black text-[40px]" name="lucide:user" />
            </div>
            <!-- Nombre del empleado -->
            <p class="font-medium text-base text-muted-600">{{ lic.name }}</p>

            <!-- Tag -->
            <span
              class="inline-flex items-center gap-1 mt-2 px-3 py-0.5 rounded-full bg-white/70 border border-black text-[10px] font-semibold tracking-widest uppercase text-muted-700">
              <UIcon name="lucide:car"></UIcon> Active operator {{ lic.id }}
            </span>
          </div>


          <!-- Datos Personales -->
          <div class="px-5 py-4 border border-black rounded-2xl shadow-xl bg-[#e0c58a] mb-3">
            <p class="text-[10px] font-bold tracking-widest uppercase text-muted-600/60 mb-3">Personal Date</p>

            <div class="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <p class="text-[11px] text-muted-600/60">Age</p>
                <p class="font-medium text-muted-600">{{ lic.age }} years</p>
              </div>
              <div>
                <p class="text-[11px] text-muted-600/60">Nationality</p>

                <p class="font-medium text-muted-600">{{ lic.nationality }} - {{ getCountryName(lic.nationality) }}</p>
              </div>
              <div class="col-span-2">
                <p class="text-[11px] text-muted-600/60">ID number</p>
                <p class="font-medium tracking-wider text-muted-600">{{ lic.idNumber }}</p>
              </div>
            </div>
          </div>
          <!-- Contacto-->
          <div class="px-5 py-4 border border-black rounded-2xl shadow-xl bg-[#e0c58a] mb-3">
            <p class="text-[10px] font-bold tracking-widest uppercase text-muted-600/60 mb-3">Contact</p>
            <div class="space-y-2.5">
              <div class="flex items-center gap-2.5">
                <UIcon name="lucide:mail" />
                <span class="text-xs text-muted-600">{{ lic.contact.email }}</span>

              </div>
              <div class="flex items-center gap-2.5">
                <UIcon name="lucide:phone" />
                <span class="text-xs text-muted-600">{{ lic.contact.phone }}</span>
              </div>
              <div class="flex items-start gap-2.5">
                <UIcon name="lucide:locate-fixed" />
                <span class="text-xs text-muted-600 leading-relaxed">{{ Object.values(lic.address).join(' ') }}</span>
              </div>
            </div>
          </div>
          <!--- Licencia de conducir -->
          <div class="px-5 py-4 border border-black rounded-2xl shadow-xl bg-[#e0c58a]">
            <p class="text-[10px] font-bold tracking-widest uppercase text-muted-600/60 mb-3">Driving licence</p>
            <div class="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <p class="text-[11px] text-muted-600/60">Type</p>
                <p class="text-lg font-semibold text-muted-600">{{ lic.drivingLicense.type }}</p>
              </div>
              <div>
                <p class="text-[11px] text-muted-600/60">Points</p>
                <p class="text-lg font-semibold text-muted-600 flex items-center gap-1">
                  {{ lic.drivingLicense.points }}
                </p>
              </div>
              <div>
                <p class="text-[11px] text-muted-600/60">Obtained</p>

                <p class="font-medium text-muted-600"> {{ lic.drivingLicense.yearObtained }}
                  <UIcon name="lucide:badge-check" class="text-green-800 text-[15px]" />
                </p>
              </div>
              <div>
                <p class="text-[11px] text-muted-600/60">Expires</p>
                <p class="font-medium text-muted-600"> {{ lic.drivingLicense.expirationDate }}</p>
              </div>
            </div>



          </div>
          <UButton class="ms-1 mt-2 cursor-pointer" color="error" icon="lucide:trash" v-if="actions.index"
            @click="deleteLicense(lic.id)"> Delete </UButton>
        </div> <!-- Final del card -->



      </div>
      <!-- Segundo Elemento contenedor -->
      <!-- Contendor formulario  -->
      <div class="w-full min-h-[460px] mt-15 ">

        <div class="w-[450px] h-full bg-white border border-black rounded-2xl shadow-2xl mx-auto ">
          <!-- Header Forulario-->
          <div class="w-full h-[20%] flex justify-center items-center flex-row">
            <h1 class="text-2xl p-3 text-center">Añadir una Licencia </h1>
            <UIcon name="lucide:car" size="xl" class="text-[20px]" />
          </div>

          <!--- Body de Formulario -->
          <div class="h-[80%] p-6 flex flex-col gap-y-4">
            <UForm autocomplete="off" :schema="schema" :state="FormState" :validate-on="['input']" @submit="onSubmit">

              <!-- Sección 1 - Datos Personales -->
              <h2 class="ms-3 font-bold">Datos Personales</h2>
              <div class="grid grid-cols-2 gap-x-2 gap-y-3 bg-gray-100 rounded-2xl shadow-xl border border-black mb-6">
                <div class="flex flex-col p-2">
                  <UFormField name="name" label="Name" :ui="{ label: 'text-black' }">
                    <UInput size="sm" trailing-icon="lucide:pencil" v-model="FormState.name" />
                  </UFormField>
                </div>
                <div class="flex flex-col p-2">
                  <UFormField name="age" label="Age" :ui="{ label: 'text-black' }">
                    <UInput type="number" size="sm" leading-icon="lucide:user" class="w-22" v-model="FormState.age" />
                  </UFormField>
                </div>
                <div class="flex flex-col p-2">
                  <UFormField name="birthDate" label="Birth Date" :ui="{ label: 'text-black' }">
                    <UInput type="date" :ui="{ base: 'cursor-pointer' }" v-model="FormState.birthDate" />
                  </UFormField>
                </div>
                <div class="flex flex-col p-2">
                  <UFormField name="nationality" label="Nationality" :ui="{ label: 'text-black' }">
                    <USelect size="sm" leading-icon="lucide:flag" class="w-42" v-model="FormState.nationality"
                      :items="CountrieNames" />
                  </UFormField>
                </div>
              </div>

              <!-- Sección 2 - Contacto -->
              <h2 class="ms-3 font-bold">Contacto</h2>
              <div class="flex flex-col gap-y-3 bg-gray-100 rounded-2xl shadow-xl border border-black p-4 mb-8">

                <div class="grid grid-cols-2 gap-x-2 gap-y-3">
                  <div class="flex flex-col p-2">
                    <UFormField name="email" label="Email" :ui="{ label: 'text-black' }">
                      <UInput type="email" size="sm" trailing-icon="lucide:mail" v-model="FormState.email" />
                    </UFormField>
                  </div>
                  <div class="flex flex-col p-2">
                    <UFormField name="phone" label="Phone" :ui="{ label: 'text-black' }">
                      <UInput type="tel" size="sm" trailing-icon="lucide:phone" v-model="FormState.phone"
                        :ui="{ leading: 'me-3' }">
                        <template #leading>
                          <span class="text-sm text-gray-400 cursor-pointer w-10">{{ CountryNumber }} &nbsp;</span>
                        </template>
                      </UInput>
                    </UFormField>
                  </div>
                </div>

                <h2 class="text-sm ms-1 font-bold">Address</h2>
                <div class="grid grid-cols-4 gap-2">
                  <div class="flex flex-col">
                    <UFormField name="street" label="Street" :ui="{ label: 'text-black' }">
                      <UInput size="sm" trailing-icon="lucide:map-pin" v-model="FormState.street" />
                    </UFormField>
                  </div>
                  <div class="flex flex-col">
                    <UFormField name="number" label="Number" :ui="{ label: 'text-black' }">
                      <UInput type="number" size="sm" trailing-icon="lucide:hash" v-model="FormState.number" />
                    </UFormField>
                  </div>
                  <div class="flex flex-col">
                    <UFormField name="floor" label="Floor" :ui="{ label: 'text-black' }">
                      <UInput size="sm" trailing-icon="lucide:building" v-model="FormState.floor" />
                    </UFormField>
                  </div>
                  <div class="flex flex-col">
                    <UFormField name="city" label="City" :ui="{ label: 'text-black' }">
                      <UInput size="sm" trailing-icon="lucide:building-2" v-model="FormState.city" />
                    </UFormField>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-2">
                  <div class="flex flex-col">
                    <UFormField name="region" label="Region" :ui="{ label: 'text-black' }">
                      <UInput size="sm" trailing-icon="lucide:map" v-model="FormState.region" />
                    </UFormField>
                  </div>
                  <div class="flex flex-col">
                    <UFormField name="zipCode" label="Zip Code" :ui="{ label: 'text-black' }">
                      <UInput size="sm" trailing-icon="lucide:mail-open" v-model="FormState.zipCode" />
                    </UFormField>
                  </div>
                </div>

              </div>

              <!-- Sección 3 - Datos de Licencia -->
              <h2 class="ms-3 font-bold">Datos de Licencia</h2>
              <div
                class="grid grid-cols-2 gap-x-2 gap-y-3 bg-gray-100 rounded-2xl shadow-xl border border-black p-4 mb-6">
                <div class="flex flex-col p-2">
                  <UFormField name="type" label="Type" :ui="{ label: 'text-black' }">
                    <USelect size="sm" :trailing-icon="iconV()" :items="drivingLicenseTypes" v-model="FormState.type" />
                  </UFormField>
                </div>
                <div class="flex flex-col p-2">
                  <UFormField name="expirationDate" label="Fecha Expiración" :ui="{ label: 'text-black' }">
                    <UInput type="date" :ui="{ base: 'cursor-pointer' }" v-model="FormState.expirationDate" />
                  </UFormField>
                </div>
                <div class="flex flex-col p-2">
                  <UFormField name="yearObtained" label="Año de Expedición" :ui="{ label: 'text-black' }">
                    <UInput type="number" min="1900" :max="new Date().getFullYear()" v-model="FormState.yearObtained" />
                  </UFormField>
                </div>
              </div>

              <UButton type="submit" class="cursor-pointer" @click="testSchema">Enviar</UButton>
            </UForm>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
/**
 * 
 * @description Ejercicio 1 - Construir api de carnets
 * - Se aplicara todo lo aprendido hasta ahora introduciendo respuestas json 
 * - Se aplicara en el ejercicio guiado una forma de utilizar POST / GET / / DELETE desde la interfaz VUE
 */
/** Api  */

import type { Reactive } from 'vue';
// Helper
import { getCountriesNames, getCountryName, getPhoneCodeByCountry, getCountryCode } from './helpers/h-pr1';
import { type NavItem, type operations } from '../../../types/tests';
import { drivingLicenseTypes } from './helpers/h-pr1';

// Formulario
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

/** Api object */
const { data: licenses, refresh } = await useFetch('/api/test/licenses');


const ListNames = licenses.value?.map((p) => p.name) ?? [];


const selectedName = ref(ListNames?.[0])
const toast = useToast()

/** Modulo Reactivo */
const actions: Reactive<operations> = reactive({
  index: false,
  show: false,
  store: false,
});


/** Lista de Paises Ractivos */
const CountrieNames: Ref<string[]> = ref(getCountriesNames());



/** Nav Reactivo  */
const nav: Ref<NavItem[]> = ref([
  { id: 1, icon: 'lucide:list', color: 'warning', label: 'index' },
  { id: 2, icon: 'lucide:eye', color: 'info', label: 'show' },
  { id: 3, icon: 'lucide:pencil-line', color: 'primary', label: 'store' },
])


/** Array reactivo */
const viewLicense = computed(() => {
  if (actions.index) return licenses.value;
  if (actions.show) return licenses.value?.filter(l => l.name === selectedName.value)

  return [];
})





const deleteLicense = async (id: number) => {
  await $fetch(`/api/test/${id}`, { method: 'DELETE' })
  await refresh()

  toast.add({
    title: 'Licencia eliminada',
    color: 'success'
  })
}


/** Funciones Reactivas Principales */
const selectNav = (id: number): void => {

  /** Lógica de seleccionado */
  if (!nav.value[id]) return;

  /** Mutamos la refereencia */
  mutateRef(nav.value[id].label);

  Object.entries(actions).forEach(([k, v]) => {
    console.log(k, " - ", v);
  })
}

/** Mutamos referencias */
const mutateRef = (label: string): void => {

  /** Que encuentra la primera itracion */
  const currentSelect = Object.entries(actions).find(([k, v]) => v === true)?.[0]

  /** Mutamos todos a falso */
  Object.keys(actions).forEach(key => {
    actions[key as keyof operations] = false
  })


  /** Filtramos el activado */
  if (label !== currentSelect) {
    actions[label as keyof operations] = true
  }

  console.log("Valor actual de show", actions.show)
}


/** Formularios */
const schema = z.object({
  /** Datos Personales*/
  name: z.string().min(3, 'Minimo 3 caracteres').max(50, 'Maximo 50 caracteres'),
  age: z.number().min(18, 'Debes ser mayor de edad'),
  birthDate: z.string().date(),
  nationality: z.string().min(1, 'Campo obligatorio'),
  email: z.email('Email no valido'),
  phone: z.string(),
  /** Datos de Ubicacion */
  street: z.string().min(1, 'Campo Obligatorio'),
  number: z.number(),
  floor: z.string().min(1, 'Campo Obligatorio'),
  city: z.string().min(1, 'Campo Obligatorio'),
  region: z.string().min(1, 'Campo Obligatorio'),
  zipCode: z.string().min(1, 'Campo Obligatorio'),
  /** Datos de Licencia */
  type: z.enum(drivingLicenseTypes as [string, ...string[]]),
  yearObtained: z.number(),
  expirationDate: z.string().date(),

})

/** Tipado del Fomrulario */
type Schema = z.output<typeof schema>



/** Estado reactivo del fomrulario */
const FormState: Reactive<Schema> = reactive({
  name: '',
  age: 20,
  birthDate: '',
  nationality: 'España',
  email: '',
  phone: '',
  street: '',
  number: 0,
  floor: '',
  city: '',
  region: '',
  zipCode: '',
  type: 'B',
  yearObtained: 2000,
  expirationDate: '',
})

const CountryNumber: ComputedRef<string> = computed(() => getPhoneCodeByCountry(getCountryCode(FormState.nationality)))

/** Dinamizacion de iconos */
const iconV = (): string => {
  switch (FormState.type) {
    case 'AM':
    case 'A1':
    case 'A2':
    case 'A':
      return 'lucide:motorbike';
    case 'C1':
    case 'C':
    case 'D1':
    case 'D':
    case 'BE':
    case 'CE':
      return 'lucide:truck';
    default: 'B'
      return 'lucide:car'
  }
}

const onSubmit = (e: FormSubmitEvent<Schema>) => {
  console.log("Hola", e.data)
  cleanContent()
}

const testSchema = () => {
  const result = schema.safeParse(FormState)
  console.log(result)
}


const cleanContent = () => {
  Object.assign(FormState, {
    name: '',
    age: 20,
    birthDate: '',
    nationality: 'España',
    email: '',
    phone: '',
    street: '',
    number: 0,
    floor: '',
    city: '',
    region: '',
    zipCode: '',
    type: 'B',
    yearObtained: 2000,
    expirationDate: '',
  })
}


</script>

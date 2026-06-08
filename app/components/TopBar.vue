<script setup lang="ts">
import type { icons } from '@iconify-json/lucide/index.js';




/** Contenido de Cierre session */
const items = [
  [{ label: 'Cerrar Sesión', icon: 'i-lucide-log-out' }]
]


</script>



<template>
  <nav class="w-full h-[65px] bg-white flex flex-row items-center justify-between px-5 shrink-0">

    <!-- Logo -->
    <div class="flex items-center">
      <NuxtImg src="/icons/sg_shop_logo_v2.png" alt="logo" width="280" height="40" />
    </div>

    <!-- Logout -->
    <UDropdownMenu :items="items" class="bg-black text-white">
      <UButton icon="i-lucide-user-circle" variant="ghost" color="neutral" class="cursor-pointer"></UButton>
    </UDropdownMenu>

  </nav>
</template>

<style scoped></style>

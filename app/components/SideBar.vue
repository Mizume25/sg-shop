<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

/** Props */
const props = defineProps<{
  NavItems: NavigationMenuItem[]
}>()


</script>


<template>
  <!-- SideBar -->
  <div class="h-screen bg-[#866128] w-65 sm:w-55 p-3">

    <header class="h-15 w-full bg-[#bc9862] mx-auto flex flex-row items-center justify-between rounded-2xl mb-3">
      <UIcon name="lucide:shopping-bag" class="m-3 size-5 sm:size-6" />
      <h1 class="text-black text-sm sm:text-base m-3 font-bold whitespace-nowrap">Sg-Shop</h1>
      <UIcon name="lucide:shopping-cart" class="m-3 size-5 sm:size-6" />
    </header>

    <section class="h-[80%] flex flex-col gap-5">

      <UButton v-for="item in props.NavItems" :key="item.label"
        class="w-full p-3 bg-[#bc9862] rounded-xl duration-150 hover:scale-105  hover:bg-[#663405] cursor-pointer py-4 hover:text-white" color="neutral">
        <div class="flex flex-row items-center gap-3 w-full">
          <UIcon :name="item.icon" class="size-5 shrink-0" />
          <span class="text-sm capitalize whitespace-nowrap">{{ item.label }}</span>
        </div>
      </UButton>
    </section>

  </div>
</template>

<style scoped></style>

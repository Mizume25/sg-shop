<script setup lang="ts">
import { NavItemSidebar } from '../constants/navigation';



</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    
    <!-- Top Bar -->
    <TopBar />

    <!-- Sidebar + Main -->
    <div class="flex flex-1 overflow-hidden">
      <SideBar :-nav-items="NavItemSidebar" />
      <main class="flex-1 overflow-auto bg-[#c8a174] p-6">
        <NuxtPage />
      </main>
    </div>

  </div>
</template>

<style scoped></style>

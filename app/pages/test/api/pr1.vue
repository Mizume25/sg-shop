<template>
    <div class="bg-[#f7f9fb] text-[#191c1e]">
 
  <main class="min-h-screen pb-24 px-4 pt-8 max-w-5xl mx-auto">
    <div class="rounded-2xl shadow-sm p-6 md:p-8 bg-[#fff5e6] border border-[#cdc5bb]/40">
 
      <!-- Profile Header -->
      <div class="flex flex-col items-center mb-10">
        <div class="w-32 h-32 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-4 overflow-hidden hover:scale-105 transition-transform bg-white">
          <span class="material-symbols-outlined icon-thin text-[#645e52]"></span>
        </div>
        <h2 class="text-3xl font-bold text-[#645e52] text-center tracking-tight">Carlos Martínez</h2>
        <div class="mt-3 flex items-center gap-2 px-4 py-1.5 rounded-full shadow-sm bg-white/60 border border-[#cdc5bb]/30">
          <span class="material-symbols-outlined icon-fill text-sm text-[#645e52]">Verified</span>
          <span class="text-xs font-bold tracking-widest uppercase text-[#767064]">ACTIVE OPERATOR</span>
        </div>
      </div>
 
      <!-- 2 Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
 
        <!-- Left Column -->
        <div class="space-y-6">
 
          <!-- Personal -->
          <div class="p-5 rounded-xl space-y-4 shadow-sm bg-white/40 border border-[#cdc5bb]/30">
            <h3 class="text-xs font-bold tracking-widest uppercase text-[#645e52] opacity-60 pb-2 border-b border-[#cdc5bb]/20">
              Personal Information
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <span class="u-label">Age</span>
                <span class="u-value">34 Years</span>
              </div>
              <div>
                <span class="u-label">Nationality</span>
                <span class="u-value flex items-center gap-2">
                  Spain <span class="material-symbols-outlined text-xs">flag</span>
                </span>
              </div>
            </div>
            <div>
              <span class="u-label">Identification Number</span>
              <span class="u-value tracking-widest">47382910B</span>
            </div>
          </div>
 
          <!-- Contact -->
          <div class="p-5 rounded-xl space-y-4 shadow-sm bg-white/40 border border-[#cdc5bb]/30">
            <h3 class="text-xs font-bold tracking-widest uppercase text-[#645e52] opacity-60 pb-2 border-b border-[#cdc5bb]/20">
              Contact Details
            </h3>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined mt-1 text-[#645e52]">mail</span>
              <div>
                <span class="u-label">Email Address</span>
                <span class="u-value text-[#645e52]">carlos.martinez@gmail.com</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined mt-1 text-[#645e52]">call</span>
              <div>
                <span class="u-label">Phone Number</span>
                <span class="u-value">+34 612 345 678</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined mt-1 text-[#645e52]">location_on</span>
              <div>
                <span class="u-label">Residential Address</span>
                <address class="u-value not-italic text-sm leading-relaxed">
                  Carrer de Mallorca 142, Floor 3B<br/>
                  08036 Barcelona, Cataluña, ES
                </address>
              </div>
            </div>
          </div>
        </div>
 
        <!-- Right Column -->
        <div class="space-y-6">
          <div class="p-5 rounded-xl space-y-4 shadow-sm h-full bg-white/40 border border-[#cdc5bb]/30">
            <h3 class="flex justify-between items-center text-xs font-bold tracking-widest uppercase text-[#645e52] opacity-60 pb-2 border-b border-[#cdc5bb]/20">
              Driving Licence
              <span class="material-symbols-outlined text-sm">badge</span>
            </h3>
            <div class="grid grid-cols-2 gap-y-5 gap-x-4">
              <div>
                <span class="u-label">Type</span>
                <span class="u-value text-lg font-bold">Class B</span>
              </div>
              <div>
                <span class="u-label">Current Points</span>
                <span class="u-value text-lg flex items-center gap-1 text-[#645e52]">
                  <span class="material-symbols-outlined icon-fill">stars</span> 12
                </span>
              </div>
              <div>
                <span class="u-label">Date Obtained</span>
                <span class="u-value">May 2010</span>
              </div>
              <div>
                <span class="u-label">Expiry Date</span>
                <span class="u-value">2030-03-15</span>
              </div>
            </div>
 
            <!-- Suspension -->
            <div class="mt-6 pt-6 border-t border-[#cdc5bb]/20">
              <div class="p-4 rounded-lg bg-[#ffdad6]/40 border border-[#ba1a1a]/10">
                <div class="flex items-center gap-2 mb-3">
                  <span class="material-symbols-outlined text-xl text-[#ba1a1a]">warning</span>
                  <h4 class="text-xs font-bold tracking-widest uppercase text-[#93000a]">SUSPENSION HISTORY</h4>
                </div>
                <div class="p-3 rounded-lg bg-white/50 border border-[#ba1a1a]/5">
                  <div class="flex justify-between items-start mb-2">
                    <span class="u-value text-sm font-bold text-[#93000a]">Speeding Infraction</span>
                    <span class="text-[9px] font-bold tracking-widest uppercase bg-[#ba1a1a]/10 text-[#ba1a1a] px-2 py-0.5 rounded border border-[#ba1a1a]/10">EXPIRED</span>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div>
                      <span class="u-label" >Date</span>
                      <span class="u-value text-xs">2019-06-01</span>
                    </div>
                    <div>
                      <span class="u-label" >Duration</span>
                      <span class="u-value text-xs">30 Days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <!-- Actions -->
      <div class="mt-10 flex flex-col md:flex-row gap-4 justify-center">
        <button class="w-full md:w-auto px-10 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] bg-[#595f66] hover:bg-[#191c1e] text-white text-lg font-semibold">
          <span class="material-symbols-outlined text-[20px]">edit</span>
          Modify Records
        </button>
        <button class="w-full md:w-auto px-10 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] bg-white hover:bg-[#f2f4f6] text-[#595f66] text-lg font-semibold border border-[#cdc5bb]/50">
          <span class="material-symbols-outlined text-[20px]">print</span>
          Export Report
        </button>
      </div>
    </div>
  </main>

 
</div>
</template>

<script>

</script>

<style lang="scss"></style>
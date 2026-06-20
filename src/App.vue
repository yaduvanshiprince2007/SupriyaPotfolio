<script setup>
import { isLoading } from './composables/useLoading'
import FloatNav from './components/FloatNav.vue'
import ganesha from './assets/ganesha_PNG27.png'
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50 font-sans">
    
    <!-- Decorative Background Elements in red -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <!-- Large blurred circles -->
      <div class="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"></div>
      <div class="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-red-200/20 blur-3xl"></div>
      <div class="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50/20 blur-3xl"></div>
      
      <!-- Decorative Ganesha Image -->
      <img 
        :src="ganesha" 
        alt="Decorative Ganesha" 
        class="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-[0.03] object-contain"
      />
    </div>

    <!-- Loading Overlay - LIGHT BACKGROUND -->
    <div v-if="isLoading" class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md">
      <div class="w-[380px] max-w-[90%] rounded-3xl p-8 text-center">
        
        <!-- Animated Ganesha -->
        <div class="animate-bounce-slow">
          <img 
            :src="ganesha" 
            alt="Shree Ganesh" 
            class="mx-auto h-28 w-28 rounded-full object-cover shadow-lg shadow-red-500/20 ring-4 ring-red-200/50"
          />
        </div>
        
        <!-- Sanskrit Prayer -->
        <p class="mt-6 font-serif text-2xl font-semibold bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent">
          ॐ श्री गणेशाय नमः
        </p>
        <p class="mt-1 text-sm font-medium text-red-400">शुभारंभ</p>
        
        <!-- Loading Text -->
        <p class="mt-6 text-sm text-red-600">
          Loading portfolio...
        </p>
        
        <!-- Animated Loading Dots -->
        <div class="mt-4 flex items-center justify-center gap-1.5">
          <span class="h-2 w-2 rounded-full bg-red-400 animate-pulse"></span>
          <span class="h-2 w-2 rounded-full bg-red-500 animate-pulse [animation-delay:0.2s]"></span>
          <span class="h-2 w-2 rounded-full bg-red-600 animate-pulse [animation-delay:0.4s]"></span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <FloatNav />
      <router-view class="mt-10" v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup>
import FloatNav from './components/FloatNav.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-rose-100 text-slate-900">
    <FloatNav />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
</style>

<script setup>
import { computed } from 'vue'
import godiamge from '../assets/ganesha_PNG27.png'
import image from '../assets/image.webp';
import { useLocale } from '../composables/useLocale'

const { translations } = useLocale()

const profile = computed(() => translations.value.profile)

const calculateAge = computed(() => {
  const birthDate = new Date(1997, 10, 4)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--
  return `${age} Years`
})

const quickInfo = computed(() => [
  { label: translations.value.profileLabels.dob, value: profile.value.dob },
  { label: translations.value.profileLabels.age, value: calculateAge.value },
  { label: translations.value.profileLabels.height, value: profile.value.height },
  { label: translations.value.profileLabels.profession, value: profile.value.profession },
  { label: translations.value.profileLabels.religionCaste, value: `${profile.value.religion} • ${profile.value.caste}` },
  { label: translations.value.profileLabels.location, value: profile.value.location },
  { label: translations.value.profileLabels.complexion, value: profile.value.complexion },
  { label: translations.value.profileLabels.dietHabits, value: `${profile.value.diet} • ${profile.value.habits}` }
])

const aboutText = computed(() => translations.value.home.aboutText)
const careerSummary = computed(() => translations.value.home.careerSummary)
const teachingPhilosophy = computed(() => translations.value.home.teachingPhilosophy)
const personalityTraits = computed(() =>
  translations.value.traits.map((name, idx) => ({
    name,
    icon: ['⚡', '🤍', '🏠', '☀️', '⭐', '📘'][idx] ?? '✨'
  }))
)
const hobbies = computed(() => translations.value.hobbies)
const partnerPreferences = computed(() => translations.value.preferences.partnerPreferences)
const educationData = computed(() => translations.value.education.records)
const familyDetails = computed(() => translations.value.family.details)
const contactNumber = computed(() => translations.value.home.contactNumber)
const contactEmail = computed(() => translations.value.home.email)
</script>

<style scoped>
/* Smooth fonts and custom class for playfair */
.playfair {
  font-family: 'Playfair Display', serif;
}
</style>
<template>
  <div class="relative min-h-screen overflow-x-hidden font-sans">
    <!-- Decorative Glows -->
    <div class="absolute -left-32 top-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl"></div>
    <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-300/20 blur-3xl"></div>
    <div class="absolute left-1/2 top-1/3 h-72 w-72 rounded-full bg-orange-200/10 blur-3xl"></div>

    <!-- Background with subtle pattern -->
    <div class="fixed inset-0 z-0">
      <img 
        :src="godiamge" 
        alt="Subtle Pattern" 
        class="absolute inset-0 h-full w-full object-cover opacity-[0.05]"
      >
    </div>

    <!-- Main Container -->
    <div class="relative z-10 mx-auto max-w-6xl px-4 py-8 md:py-12">

      <!-- Main Biodata Card -->
      <div class="overflow-hidden rounded-[3rem] border border-white/40 bg-white/20 shadow-2xl backdrop-blur-xl transition-all duration-300">
        <!-- Top Gradient Border -->
        <div class="h-2.5 bg-gradient-to-r from-amber-400 via-rose-500 to-orange-500"></div>

        <!-- Decorative Toran / Leaves SVG -->
        <div class="relative -mt-6 flex justify-center gap-6 opacity-70">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="1.2"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FDE68A" fill-opacity="0.6"/></svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B45309"><circle cx="12" cy="12" r="4" fill="#FDE68A" fill-opacity="0.6" stroke-width="1"/><path d="M12 4V2M12 22V20M20 12H22M2 12H4M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="#B45309" stroke-width="1"/></svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B45309"><path d="M12 5L14 9H18L15 12L16.5 16L12 13.5L7.5 16L9 12L6 9H10L12 5Z" fill="#FDE68A" fill-opacity="0.6" stroke-width="1"/></svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B45309"><circle cx="12" cy="12" r="4" fill="#FDE68A" fill-opacity="0.6" stroke-width="1"/><path d="M12 4V2M12 22V20M20 12H22M2 12H4M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="#B45309" stroke-width="1"/></svg>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="1.2"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#FDE68A" fill-opacity="0.6"/></svg>
        </div>

        <div class="p-6 md:p-10 lg:p-12">
          
          <!-- Header Section -->
          <div class="mb-10 text-center">
            <div class="mb-4 flex items-center justify-center gap-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="1.2"><path d="M12 5L11 10L6 10L9.5 13L8 18L12 15L16 18L14.5 13L18 10L13 10L12 5Z" fill="#FDE68A" fill-opacity="0.5"/><circle cx="12" cy="12" r="2" fill="#B45309" fill-opacity="0.4"/></svg>
              <h1 class="playfair bg-gradient-to-r from-amber-800 via-rose-700 to-orange-700 bg-clip-text text-5xl font-extrabold tracking-wide text-transparent md:text-7xl">
                {{ translations.home.title }}
              </h1>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="1.2"><path d="M12 5L11 10L6 10L9.5 13L8 18L12 15L16 18L14.5 13L18 10L13 10L12 5Z" fill="#FDE68A" fill-opacity="0.5"/><circle cx="12" cy="12" r="2" fill="#B45309" fill-opacity="0.4"/></svg>
            </div>
            <p class="mx-auto max-w-2xl text-base italic text-amber-800/80 md:text-lg">
              {{ translations.home.tagline }}
            </p>
          </div>

          <!-- Profile Introduction Card -->
          <div class="mb-12 grid gap-8 rounded-2xl border border-white/60 bg-gradient-to-br from-white/80 to-amber-50/80 p-6 shadow-xl backdrop-blur-sm md:grid-cols-[280px_1fr] md:p-8">
            <!-- Avatar / Profile area with SVG teacher icon -->
            <div class="flex flex-col items-center">
              <div class="relative overflow-hidden rounded-2xl border-4 border-amber-300/70 shadow-2xl transition duration-300 hover:scale-[1.02]">
                <div class="flex flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-orange-100 p-8 text-center">
                  <img :src="image" alt="Decorative Toran" class="animate-bounce-slow">
                  <div class="mt-3 text-sm font-medium text-amber-700">{{ translations.home.careerTag }}</div>
                </div>
              </div>
              <div class="mt-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-1.5 text-center text-sm font-semibold text-white shadow-md">
                ✦ Simple • Elegant • Devoted ✦
              </div>
            </div>

            <!-- Quick details grid -->
            <div>
              <div class="mb-5 border-l-4 border-amber-500 pl-4">
                <h2 class="playfair text-4xl font-bold text-amber-900">{{ profile.fullName }}</h2>
                <p class="mt-1 text-amber-700">{{ profile.profession }} • {{ profile.experience }}</p>
              </div>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="(item, idx) in quickInfo" :key="idx" class="rounded-xl bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p class="text-xs font-semibold uppercase tracking-wider text-orange-500">{{ item.label }}</p>
                  <p class="mt-1 font-semibold text-gray-800">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <section class="mb-12 grid gap-6 lg:grid-cols-2">
            <div class="rounded-3xl border border-amber-100 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1">
              <p class="text-sm uppercase tracking-[0.25em] text-amber-500">{{ translations.home.careerSummaryLabel }}</p>
              <h3 class="mt-3 text-2xl font-semibold text-amber-900">{{ translations.home.careerSummary }}</h3>
              <p class="mt-4 text-slate-600">{{ translations.home.teachingPhilosophy }}</p>
            </div>
            <div class="rounded-3xl border border-amber-100 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1">
              <p class="text-sm uppercase tracking-[0.25em] text-amber-500">{{ translations.home.coreStrengthsLabel }}</p>
              <div class="mt-4 grid gap-3">
                <div v-for="strength in translations.home.coreStrengths" :key="strength" class="rounded-2xl bg-amber-50 p-4 text-slate-700 shadow-sm">
                  {{ strength }}
                </div>
              </div>
            </div>
          </section>

          <!-- Educational Qualifications -->
          <section class="mb-12">
            <div class="mb-5 flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 text-xl text-white shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white"/><path d="M2 17L12 22L22 17" stroke="white"/><path d="M2 12L12 17L22 12" stroke="white"/></svg>
              </div>
              <h2 class="playfair text-3xl font-bold text-rose-800">{{ translations.home.sectionAcademic }}</h2>
            </div>
            <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div v-for="edu in educationData" :key="edu.degree" class="group rounded-2xl border border-amber-100 bg-white/80 p-5 shadow-md transition-all hover:shadow-xl">
                <div class="flex items-center justify-between">
                  <h3 class="text-xl font-bold text-amber-800">{{ edu.degree }}</h3>
                  <span class="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">{{ edu.percentage }}</span>
                </div>
                <p class="mt-2 text-gray-600">{{ edu.institution }}</p>
                <p class="mt-1 text-xs text-gray-400">{{ edu.year || '' }}</p>
              </div>
            </div>
          </section>

          <!-- About & Personality -->
          <section class="mb-12 rounded-2xl bg-gradient-to-r from-amber-100 via-orange-50 to-rose-100 p-[2px] shadow-xl">
            <div class="rounded-2xl bg-white/90 p-6 backdrop-blur-sm md:p-8">
              <div class="mb-4 flex items-center gap-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9333EA" stroke-width="1.2"><circle cx="12" cy="12" r="10" stroke="#9333EA"/><path d="M12 8V12L14 14" stroke="#9333EA"/><path d="M12 16H12.01" stroke="#9333EA" stroke-width="2"/></svg>
                <h2 class="playfair text-3xl font-bold text-purple-800">{{ translations.home.aboutHeading }}</h2>
              </div>
              <p class="leading-relaxed text-gray-700">{{ aboutText }}</p>
              <div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div v-for="trait in personalityTraits" :key="trait.name" class="rounded-xl bg-white/70 p-3 text-center shadow-sm">
                  <span class="text-2xl">{{ trait.icon }}</span>
                  <p class="text-sm font-medium text-gray-700">{{ trait.name }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Family Details -->
          <section class="mb-12 rounded-2xl bg-white/80 p-6 shadow-lg md:p-8">
            <div class="mb-5 flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M3 9L12 3L21 9L12 15L3 9Z" stroke="white"/><path d="M5 10.5V17L12 21L19 17V10.5" stroke="white"/><path d="M12 15V21" stroke="white"/><circle cx="12" cy="12" r="2" fill="white" fill-opacity="0.5"/></svg>
              </div>
              <h2 class="playfair text-3xl font-bold text-orange-800">{{ translations.home.sectionFamily }}</h2>
            </div>
            <div class="grid gap-6 md:grid-cols-2">
              <div class="rounded-xl bg-orange-50/70 p-5">
                <p class="text-sm uppercase text-orange-500">{{ translations.family.labels.father }}</p>
                <p class="text-xl font-semibold text-gray-800">{{ familyDetails.father.name }}</p>
                <p class="text-gray-600">{{ familyDetails.father.occupation }}</p>
              </div>
              <div class="rounded-xl bg-orange-50/70 p-5">
                <p class="text-sm uppercase text-orange-500">{{ translations.family.labels.mother }}</p>
                <p class="text-xl font-semibold text-gray-800">{{ familyDetails.mother.name }}</p>
                <p class="text-gray-600">{{ familyDetails.mother.occupation }}</p>
              </div>
              <div class="rounded-xl bg-orange-50/70 p-5 md:col-span-2">
                <p class="text-sm uppercase text-orange-500">{{ translations.family.labels.siblings }}</p>
                <div class="mt-2 flex flex-wrap gap-3">
                  <span v-for="sib in familyDetails.siblings" :key="sib" class="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">{{ sib }}</span>
                </div>
              </div>
              <div class="rounded-xl bg-orange-50/70 p-5">
                <p class="text-sm uppercase text-orange-500">{{ translations.family.labels.origin }}</p>
                <p class="font-medium text-gray-800">{{ familyDetails.village }}</p>
              </div>
              <div class="rounded-xl bg-orange-50/70 p-5">
                <p class="text-sm uppercase text-orange-500">{{ translations.family.labels.address }}</p>
                <p class="font-medium text-gray-800">{{ familyDetails.address }}</p>
              </div>
            </div>
          </section>

          <!-- Hobbies / Interests Section -->
          <section class="mb-12 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 p-6 shadow-lg md:p-8">
            <div class="mb-4 flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4338CA" stroke-width="1.2"><path d="M12 2L15 9H22L16.5 13.5L19 21L12 16.5L5 21L7.5 13.5L2 9H9L12 2Z" fill="#C7D2FE" fill-opacity="0.4"/><circle cx="12" cy="12" r="1.5" fill="#4338CA" fill-opacity="0.6"/></svg>
              <h2 class="playfair text-3xl font-bold text-indigo-800">{{ translations.home.sectionInterests }}</h2>
            </div>
            <div class="flex flex-wrap gap-3">
              <span v-for="hobby in hobbies" :key="hobby" class="rounded-full bg-white/80 px-5 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm">{{ hobby }}</span>
            </div>
          </section>

          <!-- Partner Preference Detailed -->
          <section class="mb-12 rounded-2xl bg-pink-50/80 p-6 shadow-lg md:p-8">
            <div class="mb-5 flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" stroke="white" fill="white" fill-opacity="0.2"/><circle cx="12" cy="11" r="2" fill="white" fill-opacity="0.5"/></svg>
              </div>
              <h2 class="playfair text-3xl font-bold text-pink-800">{{ translations.home.sectionPartner }}</h2>
            </div>
            <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div v-for="pref in partnerPreferences" :key="pref.label" class="rounded-xl bg-white/80 p-4 text-center shadow-sm">
                <p class="text-xs font-bold uppercase text-pink-500">{{ pref.label }}</p>
                <p class="mt-1 font-semibold text-gray-800">{{ pref.value }}</p>
              </div>
            </div>
            <div class="mt-6 rounded-xl bg-white/80 p-5 text-center">
              <p class="text-gray-700 italic">"Seeking a compassionate, educated, and family-oriented partner who respects tradition while embracing growth, mutual understanding, and trust."</p>
            </div>
          </section>

          <!-- Contact & Footer -->
          <div class="mt-8 border-t border-amber-200 pt-8 text-center">
            <div class="mb-3 flex justify-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="1.2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="#B45309"/><line x1="12" y1="18" x2="12" y2="18" stroke="#B45309" stroke-width="2"/></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="1.2"><path d="M22 16.92V19C22.0001 19.7906 21.7807 20.5658 21.3699 21.2356C20.9591 21.9054 20.3745 22.4417 19.6856 22.7776C18.9967 23.1135 18.2342 23.2355 17.4837 23.1298C16.7332 23.0241 16.0279 22.6946 15.45 22.18C13.3304 20.3716 11.6284 18.1095 10.46 15.56C9.84399 14.3155 9.41025 12.9945 9.17 11.63C9.04015 10.8605 9.08423 10.0723 9.2993 9.32233C9.51438 8.57232 9.89486 7.88089 10.41 7.3C10.8244 6.82224 11.1034 6.24282 11.2166 5.61933C11.3298 4.99584 11.2732 4.3533 11.052 3.76L9.88 1.1C9.74428 0.803724 9.5195 0.559179 9.2378 0.400668C8.95611 0.242157 8.63141 0.177585 8.31 0.215999C6.41296 0.430967 4.64229 1.2953 3.31 2.66C1.88348 4.17263 1.17007 6.17598 1.32 8.22C1.56932 11.6892 2.97545 14.9777 5.31 17.55C7.97354 20.5341 11.4766 22.5703 15.35 23.38C16.4447 23.6036 17.5733 23.6026 18.6676 23.377C19.762 23.1514 20.7924 22.7075 21.69 22.08C22.3778 21.5962 22.9159 20.9342 23.2415 20.1685C23.5671 19.4028 23.6673 18.5643 23.53 17.75L23.05 14.67C22.9986 14.2946 22.8142 13.9499 22.5309 13.6975C22.2476 13.4451 21.8848 13.3026 21.507 13.297L18.23 13.25C17.8689 13.2517 17.5217 13.3925 17.2555 13.6441C16.9893 13.8957 16.8239 14.2396 16.78 14.61L16.2 19.41C16.2127 19.6163 16.1721 19.8227 16.0823 20.0091C15.9925 20.1955 15.8568 20.3558 15.688 20.475C15.152 20.856 14.398 21 13.44 20.91" stroke="#B45309" stroke-linecap="round"/></svg>
            </div>
            <p class="text-lg font-medium text-amber-800">{{ translations.home.footerContactPrompt }}</p>
            <p class="mt-2 text-3xl font-bold tracking-wide text-rose-700">{{ contactNumber }}</p>
            <p class="mt-3 text-sm text-gray-500">Email: {{ contactEmail }} | {{ translations.home.familyReference }}</p>
            <p class="mt-5 text-xs tracking-wider text-gray-400">✦ {{ translations.home.footerWarmRegards }} ✦</p>
          </div>
        </div>
        <div class="h-2.5 bg-gradient-to-r from-amber-400 via-rose-500 to-orange-500"></div>
      </div>
    </div>
  </div>
</template>


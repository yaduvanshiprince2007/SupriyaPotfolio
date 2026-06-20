<script setup>
import { computed } from "vue";
import godiamge from "../assets/ganesha_PNG27.png";
import image from "../assets/image.jpeg";
import { useLocale } from "../composables/useLocale";
import GlassPanel from "../components/GlassPanel.vue";

const { translations } = useLocale();

const profile = computed(() => translations.value.profile);

const calculateAge = computed(() => {
  const birthDate = new Date(1997, 10, 4);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  )
    age--;
  return `${age} Years`;
});

const quickInfo = computed(() => [
  { label: translations.value.profileLabels.dob, value: profile.value.dob },
  { label: translations.value.profileLabels.age, value: calculateAge.value },
  {
    label: translations.value.profileLabels.height,
    value: profile.value.height,
  },
  {
    label: translations.value.profileLabels.profession,
    value: profile.value.profession,
  },
  {
    label: translations.value.profileLabels.religionCaste,
    value: `${profile.value.religion} • ${profile.value.caste}`,
  },
  {
    label: translations.value.profileLabels.location,
    value: profile.value.location,
  },
  {
    label: translations.value.profileLabels.complexion,
    value: profile.value.complexion,
  },
  {
    label: translations.value.profileLabels.dietHabits,
    value: `${profile.value.diet} • ${profile.value.habits}`,
  },
]);

const aboutText = computed(() => translations.value.home.aboutText);
const careerSummary = computed(() => translations.value.home.careerSummary);
const teachingPhilosophy = computed(
  () => translations.value.home.teachingPhilosophy,
);

const personalityTraits = computed(() =>
  translations.value.traits.map((name, idx) => ({
    name,
    icon: ["🌸", "💗", "🏠", "☀️", "✨", "📖"][idx] ?? "🌹",
  })),
);

const hobbies = computed(() => translations.value.hobbies);
const partnerPreferences = computed(
  () => translations.value.preferences.partnerPreferences,
);
const educationData = computed(() => translations.value.education.records);
const familyDetails = computed(() => translations.value.family.details);
const contactNumber = computed(() => translations.value.home.contactNumber);
const contactEmail = computed(() => translations.value.home.email);
</script>

<style scoped>
.font-serif {
  font-family: "Playfair Display", "Georgia", serif;
}

/* Smooth hover transitions */
.group {
  transition: all 0.3s ease;
}

/* Subtle animation for decorative elements */
@keyframes gentle-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-bounce-slow {
  animation: gentle-bounce 3s ease-in-out infinite;
}
</style>

<template>
  <div class="relative min-h-screen overflow-x-hidden font-sans">
    <!-- Decorative Background Pattern -->
    <div class="fixed inset-0 z-0">
      <img
        :src="godiamge"
        alt="Decorative Pattern"
        class="absolute inset-0 h-full w-full object-cover opacity-[0.04]"
      />
    </div>

    <!-- Subtle red Gradient Overlay -->
    <div
      class="fixed inset-0 z-0 bg-gradient-to-br from-red-50/40 via-white/30 to-red-100/40"
    ></div>

    <!-- Main Container -->
    <div class="relative z-10 mx-auto px-4 py-6 md:py-12">
      <!-- Main Biodata Card -->
      <div
        class="overflow-hidden rounded-[2.5rem] border border-red-200/60 bg-white/30 shadow-2xl backdrop-blur-xl transition-all duration-300"
      >
        <!-- Top Decorative Border -->
        <div
          class="h-3 bg-gradient-to-r from-red-300 via-red-500 to-red-600"
        ></div>

        <!-- Traditional Toran Decoration -->
        <div class="relative -mt-8 flex justify-center gap-4 opacity-80">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9F1239"
            stroke-width="1.2"
            class="drop-shadow-md"
          >
            <path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill="#FCE7F3"
              fill-opacity="0.7"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9F1239"
            stroke-width="1"
            class="drop-shadow-md"
          >
            <circle cx="12" cy="12" r="4" fill="#FCE7F3" fill-opacity="0.7" />
            <path
              d="M12 4V2M12 22V20M20 12H22M2 12H4M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93"
              stroke="#9F1239"
              stroke-width="1"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9F1239"
            stroke-width="1.2"
            class="drop-shadow-md"
          >
            <path
              d="M12 5L14 9H18L15 12L16.5 16L12 13.5L7.5 16L9 12L6 9H10L12 5Z"
              fill="#FCE7F3"
              fill-opacity="0.7"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9F1239"
            stroke-width="1"
            class="drop-shadow-md"
          >
            <circle cx="12" cy="12" r="4" fill="#FCE7F3" fill-opacity="0.7" />
            <path
              d="M12 4V2M12 22V20M20 12H22M2 12H4M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93"
              stroke="#9F1239"
              stroke-width="1"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9F1239"
            stroke-width="1.2"
            class="drop-shadow-md"
          >
            <path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill="#FCE7F3"
              fill-opacity="0.7"
            />
          </svg>
        </div>

        <div class="p-6 md:p-10 lg:p-12">
          <!-- === HEADER SECTION === -->
          <div class="mb-12 text-center">
            <div class="mb-6 flex justify-center">
              <div class="rounded-full border border-red-200/70 bg-white/70 p-3 shadow-lg shadow-red-200/30 backdrop-blur-sm">
                <img
                  :src="godiamge"
                  alt="Shree Ganesh"
                  class="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
                />
              </div>
            </div>
            <div class="mb-4 flex items-center justify-center gap-3">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9F1239"
                stroke-width="1.2"
              >
                <path
                  d="M12 5L11 10L6 10L9.5 13L8 18L12 15L16 18L14.5 13L18 10L13 10L12 5Z"
                  fill="#FCE7F3"
                  fill-opacity="0.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                  fill="#9F1239"
                  fill-opacity="0.5"
                />
              </svg>
              <h1
                class="font-serif p-4 bg-gradient-to-r from-red-700 via-red-600 to-red-800 bg-clip-text text-5xl font-extrabold tracking-wide text-transparent md:text-6xl lg:text-7xl"
              >
                {{ translations.home.title }}
              </h1>
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9F1239"
                stroke-width="1.2"
              >
                <path
                  d="M12 5L11 10L6 10L9.5 13L8 18L12 15L16 18L14.5 13L18 10L13 10L12 5Z"
                  fill="#FCE7F3"
                  fill-opacity="0.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                  fill="#9F1239"
                  fill-opacity="0.5"
                />
              </svg>
            </div>

            <p
              class="mx-auto max-w-2xl text-base italic text-red-700/80 md:text-lg"
            >
              {{ translations.home.tagline }}
            </p>

            <div
              class="mt-4 inline-block rounded-full bg-red-100/80 px-6 py-2 shadow-sm backdrop-blur-sm"
            >
              <p class="text-sm font-medium text-red-700 md:text-base">
                {{ translations.home.introQuote }}
              </p>
            </div>
          </div>

          <!-- === PROFILE CARD === -->
          <GlassPanel class="mb-12">
            <div
              class="overflow-hidden rounded-2xl bg-transparent shadow-none"
            >
            <div class="grid gap-6 p-6 md:grid-cols-[280px_1fr] md:p-8">
              <!-- Avatar Section -->
              <div class="flex flex-col items-center">
                <div
                  class="relative overflow-hidden rounded-2xl shadow-xl bg-transparent transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div class="flex flex-col items-center justify-center">
                    <img
                      :src="image"
                      alt="Avatar"
                      class="w-64 h-full object-cover rounded-2xl"
                      style="aspect-ratio: 9 / 16"
                    />
                    
                  </div>
                </div>
                <div
                      class="mt-3 rounded-full bg-red-200/80 px-4 py-1 text-sm font-semibold text-red-800"
                    >
                      {{ translations.home.careerTag }}
                    </div>
              </div>

              <!-- Profile Info -->
              <div>
                <div class="mb-5 border-l-4 border-red-500 pl-4">
                  <h2 class="font-serif text-4xl font-bold text-red-900">
                    {{ profile.fullName }}
                  </h2>
                  <p class="mt-1 text-red-600">
                    {{ profile.profession }} • {{ profile.experience }}
                  </p>
                </div>
                <div
                  class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
                >
                  <div
                    v-for="(item, idx) in quickInfo"
                    :key="idx"
                    class="rounded-xl bg-white/70 p-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:bg-white/90"
                  >
                    <p
                      class="text-xs font-semibold uppercase tracking-wider text-red-500"
                    >
                      {{ item.label }}
                    </p>
                    <p class="mt-1 font-medium text-gray-800">
                      {{ item.value }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </GlassPanel>

          <!-- === CAREER & STRENGTHS === -->
          <div class="mb-12 grid gap-6 md:grid-cols-2">
            <div
              class="group rounded-2xl border border-red-200/60 bg-white/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500"
              >
                {{ translations.home.careerSummaryLabel }}
              </p>
              <h3 class="mt-2 text-xl font-bold text-red-800">
                {{ translations.home.careerSummary }}
              </h3>
              <div class="mt-4 h-px w-12 bg-red-300"></div>
              <p class="mt-4 leading-relaxed text-gray-700">
                {{ translations.home.teachingPhilosophy }}
              </p>
            </div>

            <div
              class="group rounded-2xl border border-red-200/60 bg-white/80 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-red-500"
              >
                {{ translations.home.coreStrengthsLabel }}
              </p>
              <div class="mt-4 space-y-2">
                <div
                  v-for="strength in translations.home.coreStrengths"
                  :key="strength"
                  class="flex items-center gap-2 rounded-xl bg-red-50/80 p-3 text-gray-700 transition hover:bg-red-100"
                >
                  <span class="text-red-500 text-lg">✦</span>
                  <span>{{ strength }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- === EDUCATION SECTION === -->
          <section class="mb-12">
            <div class="mb-6 flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" />
                </svg>
              </div>
              <h2 class="font-serif text-3xl font-bold text-red-800">
                {{ translations.home.sectionAcademic }}
              </h2>
            </div>

            <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="edu in educationData"
                :key="edu.degree"
                class="group rounded-xl border border-red-200/60 bg-white/80 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div class="flex items-start justify-between">
                  <h3 class="text-lg font-bold text-red-800">
                    {{ edu.degree }}
                  </h3>
                  <span
                    class="rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-600"
                    >{{ edu.percentage }}</span
                  >
                </div>
                <p class="mt-2 text-sm text-gray-600">{{ edu.institution }}</p>
                <p class="mt-1 text-xs text-gray-400">{{ edu.year }}</p>
                <p class="mt-3 text-xs text-gray-500 line-clamp-2">
                  {{ edu.details }}
                </p>
              </div>
            </div>
          </section>

          <!-- === ABOUT & PERSONALITY === -->
          <section
            class="mb-12 rounded-2xl bg-gradient-to-br from-red-50/80 via-white/80 to-red-50/80 p-6 shadow-lg md:p-8"
          >
            <div class="mb-5 flex items-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9F1239"
                stroke-width="1.2"
              >
                <circle cx="12" cy="12" r="10" stroke="#9F1239" />
                <path d="M12 8V12L14 14" stroke="#9F1239" />
                <path d="M12 16H12.01" stroke="#9F1239" stroke-width="2" />
              </svg>
              <h2 class="font-serif text-3xl font-bold text-red-800">
                {{ translations.home.aboutHeading }}
              </h2>
            </div>
            <p class="leading-relaxed text-gray-700">{{ aboutText }}</p>

            <div
              class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6"
            >
              <div
                v-for="trait in personalityTraits"
                :key="trait.name"
                class="rounded-xl bg-white/80 p-3 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span class="text-2xl">{{ trait.icon }}</span>
                <p class="mt-1 text-xs font-medium text-gray-700">
                  {{ trait.name }}
                </p>
              </div>
            </div>
          </section>

          <!-- === FAMILY BACKGROUND === -->
          <section class="mb-12 rounded-2xl bg-white/80 p-6 shadow-lg md:p-8">
            <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M3 9L12 3L21 9L12 15L3 9Z" stroke="currentColor" />
                    <path
                      d="M5 10.5V17L12 21L19 17V10.5"
                      stroke="currentColor"
                    />
                    <path d="M12 15V21" stroke="currentColor" />
                    <circle
                      cx="12"
                      cy="12"
                      r="2"
                      fill="currentColor"
                      fill-opacity="0.3"
                    />
                  </svg>
                </div>
                <h2 class="font-serif text-3xl font-bold text-red-800">
                  {{ translations.home.sectionFamily }}
                </h2>
              </div>
              <span
                class="rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-700 shadow-sm"
              >
                {{ translations.home.familyReference }}
              </span>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
              <div
                class="rounded-xl bg-red-50/80 p-5 transition hover:shadow-md"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-red-500"
                >
                  {{ translations.family.labels.father }}
                </p>
                <p class="text-lg font-semibold text-gray-800">
                  {{ familyDetails.father.name }}
                </p>
                <p class="text-sm text-gray-600">
                  {{ familyDetails.father.occupation }}
                </p>
                <p class="mt-1 text-xs text-red-600">
                  {{ familyDetails.father.qualities }}
                </p>
              </div>
              <div
                class="rounded-xl bg-red-50/80 p-5 transition hover:shadow-md"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-red-500"
                >
                  {{ translations.family.labels.mother }}
                </p>
                <p class="text-lg font-semibold text-gray-800">
                  {{ familyDetails.mother.name }}
                </p>
                <p class="text-sm text-gray-600">
                  {{ familyDetails.mother.occupation }}
                </p>
                <p class="mt-1 text-xs text-red-600">
                  {{ familyDetails.mother.qualities }}
                </p>
              </div>
              <div class="rounded-xl bg-red-50/80 p-5 md:col-span-2">
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-red-500"
                >
                  {{ translations.family.labels.siblings }}
                </p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="sib in familyDetails.siblings"
                    :key="sib"
                    class="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {{ sib }}
                  </span>
                </div>
              </div>
              <div class="rounded-xl bg-red-50/80 p-5">
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-red-500"
                >
                  {{ translations.family.labels.origin }}
                </p>
                <p class="font-medium text-gray-800">
                  {{ familyDetails.village }}
                </p>
              </div>
              <div class="rounded-xl bg-red-50/80 p-5">
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-red-500"
                >
                  {{ translations.family.labels.address }}
                </p>
                <p class="text-sm font-medium text-gray-800">
                  {{ familyDetails.address }}
                </p>
              </div>
            </div>

            <div class="mt-5 rounded-xl bg-red-100/60 p-4 text-center">
              <p class="text-sm text-gray-700">
                {{ familyDetails.homeDescription }}
              </p>
            </div>
          </section>

          <!-- === HOBBIES & INTERESTS === -->
          <section
            class="mb-12 rounded-2xl bg-gradient-to-r from-red-50/90 to-pink-50/90 p-6 shadow-lg md:p-8"
          >
            <div class="mb-5 flex items-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9F1239"
                stroke-width="1.2"
              >
                <path
                  d="M12 2L15 9H22L16.5 13.5L19 21L12 16.5L5 21L7.5 13.5L2 9H9L12 2Z"
                  fill="#FCE7F3"
                  fill-opacity="0.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="1.5"
                  fill="#9F1239"
                  fill-opacity="0.5"
                />
              </svg>
              <h2 class="font-serif text-3xl font-bold text-red-800">
                {{ translations.home.sectionInterests }}
              </h2>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="hobby in hobbies"
                :key="hobby"
                class="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                {{ hobby }}
              </span>
            </div>
          </section>

          <!-- === PARTNER PREFERENCES === -->
          <section
            class="mb-12 rounded-2xl bg-gradient-to-br from-red-100/70 via-white/80 to-pink-100/70 p-6 shadow-lg md:p-8"
          >
            <div class="mb-6 flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z"
                    stroke="currentColor"
                    fill="currentColor"
                    fill-opacity="0.2"
                  />
                  <circle
                    cx="12"
                    cy="11"
                    r="2"
                    fill="currentColor"
                    fill-opacity="0.5"
                  />
                </svg>
              </div>
              <h2 class="font-serif text-3xl font-bold text-red-800">
                {{ translations.home.sectionPartner }}
              </h2>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="pref in partnerPreferences"
                :key="pref.label"
                class="rounded-xl bg-white/80 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p
                  class="text-xs font-bold uppercase tracking-wider text-red-500"
                >
                  {{ pref.label }}
                </p>
                <p class="mt-1 text-sm font-semibold text-gray-800">
                  {{ pref.value }}
                </p>
              </div>
            </div>

            <div class="mt-6 rounded-xl bg-white/80 p-5 text-center shadow-sm">
              <p class="text-base italic text-red-700">
                "{{ translations.home.partnerQuote }}"
              </p>
            </div>
          </section>

          <!-- === CONTACT & FOOTER === -->
          <div
            class="mt-8 rounded-2xl border-t-2 border-red-200 bg-red-50/50 pt-8 text-center"
          >
            <div class="mb-4 flex justify-center gap-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9F1239"
                stroke-width="1.2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line
                  x1="12"
                  y1="18"
                  x2="12"
                  y2="18"
                  stroke="#9F1239"
                  stroke-width="2"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9F1239"
                stroke-width="1.2"
              >
                <path
                  d="M22 16.92V19C22.0001 19.7906 21.7807 20.5658 21.3699 21.2356C20.9591 21.9054 20.3745 22.4417 19.6856 22.7776C18.9967 23.1135 18.2342 23.2355 17.4837 23.1298C16.7332 23.0241 16.0279 22.6946 15.45 22.18C13.3304 20.3716 11.6284 18.1095 10.46 15.56C9.84399 14.3155 9.41025 12.9945 9.17 11.63C9.04015 10.8605 9.08423 10.0723 9.2993 9.32233C9.51438 8.57232 9.89486 7.88089 10.41 7.3C10.8244 6.82224 11.1034 6.24282 11.2166 5.61933C11.3298 4.99584 11.2732 4.3533 11.052 3.76L9.88 1.1C9.74428 0.803724 9.5195 0.559179 9.2378 0.400668C8.95611 0.242157 8.63141 0.177585 8.31 0.215999C6.41296 0.430967 4.64229 1.2953 3.31 2.66C1.88348 4.17263 1.17007 6.17598 1.32 8.22C1.56932 11.6892 2.97545 14.9777 5.31 17.55C7.97354 20.5341 11.4766 22.5703 15.35 23.38C16.4447 23.6036 17.5733 23.6026 18.6676 23.377C19.762 23.1514 20.7924 22.7075 21.69 22.08C22.3778 21.5962 22.9159 20.9342 23.2415 20.1685C23.5671 19.4028 23.6673 18.5643 23.53 17.75L23.05 14.67C22.9986 14.2946 22.8142 13.9499 22.5309 13.6975C22.2476 13.4451 21.8848 13.3026 21.507 13.297L18.23 13.25C17.8689 13.2517 17.5217 13.3925 17.2555 13.6441C16.9893 13.8957 16.8239 14.2396 16.78 14.61L16.2 19.41C16.2127 19.6163 16.1721 19.8227 16.0823 20.0091C15.9925 20.1955 15.8568 20.3558 15.688 20.475C15.152 20.856 14.398 21 13.44 20.91"
                  stroke="#9F1239"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9F1239"
                stroke-width="1.2"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                />
                <path d="M22 6L12 13L2 6" stroke="#9F1239" />
              </svg>
            </div>

            <p class="text-base font-medium text-red-700">
              {{ translations.home.footerContactPrompt }}
            </p>

            <div class="mt-3 flex flex-wrap items-center justify-center gap-4">
              <span class="text-2xl font-bold tracking-wide text-red-700">{{
                contactNumber
              }}</span>
              <span class="text-red-300">|</span>
              <span class="text-base text-gray-600">{{ contactEmail }}</span>
            </div>

            <p class="mt-4 text-sm text-gray-500">
              {{ translations.home.familyReference }}
            </p>

            <div class="mt-6 border-t border-red-200 pt-5">
              <p class="text-xs tracking-wide text-gray-400">
                ✦ {{ translations.home.footerWarmRegards }} ✦
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom Decorative Border -->
        <div
          class="h-3 bg-gradient-to-r from-red-300 via-red-500 to-red-600"
        ></div>
      </div>
    </div>
  </div>
</template>

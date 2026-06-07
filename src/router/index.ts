import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import EducationPage from '../pages/EducationPage.vue'
import FamilyPage from '../pages/FamilyPage.vue'
import PreferencesPage from '../pages/PreferencesPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/education', name: 'Education', component: EducationPage },
  { path: '/family', name: 'Family', component: FamilyPage },
  { path: '/preferences', name: 'Preferences', component: PreferencesPage },
  { path: '/contact', name: 'Contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router

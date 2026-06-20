import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AchievementsPage from '../pages/AchievementsPage.vue'
import EducationPage from '../pages/EducationPage.vue'
import FamilyPage from '../pages/FamilyPage.vue'
import PreferencesPage from '../pages/PreferencesPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import { hideLoading, showLoading } from '../composables/useLoading'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/achievements', name: 'Achievements', component: AchievementsPage },
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

router.beforeEach((_to, _from, next) => {
  showLoading()
  next();
})

router.afterEach(() => {
  hideLoading(500)
})

export default router

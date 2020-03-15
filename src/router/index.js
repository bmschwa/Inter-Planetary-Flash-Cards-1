import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '../components/Home'
import Profile from '../components/Profile'
import Auth from '../components/Auth'
import Protected from '../components/Protected'

// https://www.npmjs.com/package/vuejs-logger#code-example
import VueLogger from 'vuejs-logger'
const isProduction = process.env.NODE_ENV === 'production'

const loggingOptions = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
}

Vue.use(VueLogger, loggingOptions)

// const Login = () => import('../views/Login.vue');
//  const Home = () => import('../views/Home.vue');
const DeckSelection = () => import('../views/DeckSelection.vue')
const DeckEditor = () => import('../views/DeckEditor.vue')
const Settings = () => import('../views/Settings.vue')
const CardEditor = () => import('../views/CardEditor.vue')

Vue.use(Router)

async function redirectIfNotAuth (to, from, next) {
  if (store.getters.isAuthenticated) {
    next()
  } else {
    await store.dispatch('checkJwt')
    if (store.getters.isAuthenticated) {
      next()
    } else {
      next('/login')
    }
  }
}

function redirectIfNoUserCollection (to, from, next) {
  if (store.state.user_collection !== null) {
    next()
  } else {
    next('home')
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/index.html',
      component: Home
    },
    {
      path: '/auth',
      component: Auth
    },
    {
      path: '/protected',
      component: Protected,
      meta: {
        requiresAuth: true
      }
    },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Auth,
      beforeEnter: redirectIfNoUserCollection
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/deck-selection',
      name: 'deck-selection',
      component: DeckSelection,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: '/deck-editor',
      name: 'deck-editor',
      component: DeckEditor,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: '/card-editor',
      name: 'card-editor',
      component: CardEditor,
      props: true
    }
  ]
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then(data => {
      if (data && data.signInUserSession) {
        const user = data
        console.log(user)
      } else {
        next({
          path: '/auth'
        })
      }

      next()
    }).catch((e) => {
      next({
        path: '/auth'
      })
    })
  }
  next()
})

export default router

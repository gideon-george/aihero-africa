import Vue from 'vue'
import VueRouter from 'vue-router'
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
import App from './App.vue'

import '@/css/style.scss';

Vue.use(VueRouter)
import Home from './pages/Home.vue'
import Features from './pages/Features.vue'
import Pricing from './pages/Pricing.vue'
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Help from './pages/Help.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'
import PageNotFound from './pages/PageNotFound.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/features',
    component: Features
  },
  {
    path: '/pricing',
    component: Pricing
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/blog-post',
    component: BlogPost
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/help',
    component: Help
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/reset-password',
    component: ResetPassword
  },                  
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to) {
    return new Promise(() => {
      if (to.hash) {
        window.scroll({ top: 0 })
      } else {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({ top: 0 })
        document.querySelector('html').style.scrollBehavior = ''
      }
    })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

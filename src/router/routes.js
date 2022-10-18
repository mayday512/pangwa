
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageHome.vue') 
        ,name:"Home"
    },
      { path: '/about', component: () => import('pages/PageAbout.vue'),
        name:"About"
     },
     { path: '/pictures', component: () => import('pages/pictures.vue'),
        name:"pictures"
     },
     { path: '/pets', component: () => import('pages/pets.vue'),
        name:"pets"
     },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

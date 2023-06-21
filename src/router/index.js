import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "shop" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Home.vue')
  },
  {
    path: '/shop',
    name: 'ShopDefault',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shop" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Shop.vue')
  },
  {
    path: '/shop/:pageNo',
    name: 'ShopWithPagination',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shop" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Shop.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Cart.vue')
  },

  {
    path: process.env.VUE_APP_PRODUCT_PATH+':productID',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Product.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "checkout" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Checkout.vue')
  },
  // {
  //   path: '/blog-list',
  //   name: 'BlogList',
  //   // route level code-splitting
  //   // this generates a separate chunk (shop.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "blog-list" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/BlogList.vue')
  // },
  {
    path: '/announcement',
    name: 'Announcement',
    component: () => import(/* webpackChunkName: "blog-list" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Announcement.vue')
  },
  {
    path: '/announcement/page/:pageId',
    name: 'AnnouncementPage',
    component: () => import(/* webpackChunkName: "blog-list" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Announcement.vue')
  },
  // {
  //   path: process.env.VUE_APP_BLOG_PATH+':blogID',
  //   name: 'BlogPost',
  //   // route level code-splitting
  //   // this generates a separate chunk (shop.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "blogpost" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/BlogPost.vue')
  // },
  {
    path: '/announcement/:annoucementID',
    name: 'AnnouncementPost',
    component: () => import(/* webpackChunkName: "blogpost" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/AnnouncementPost.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/About.vue')
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "myaccount" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/MyAccount.vue')
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wishlist" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Wishlist.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Contact.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/FAQ.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/Member/Member.vue')
  },
  {
    path: '/my-ticket',
    name: 'MyTicket',
    component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/MyTicket.vue')
  },
  {
    path: '/buy-ticket-list',
    name: 'BuyTicketList',
    component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/BuyTicketList.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/Activity/Activity.vue'),
    children: [
      {
        path: 'concert',
        component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/Activity/Concert.vue')
      },
      {
        path: 'music-festival',
        component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/Activity/MusicFestival.vue')
      },
      {
        path: 'opera',
        component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/Activity/Opera.vue')
      },
      {
        path: 'show',
        component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/Activity/Show.vue')
      },
    ]
  },
  { path: '/404',     component: () => import(/* webpackChunkName: "contact" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/NotFound.vue')},  
  { path: '/:catchAll(.*)', redirect: '/404' },  
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.VUE_APP_BUILD_PATH),
  routes
})


export default router

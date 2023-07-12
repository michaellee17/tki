import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "shop" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "shop" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Test.vue')
  },
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
  {
    path: '/announcement/:annoucementID',
    name: 'AnnouncementPost',
    component: () => import(/* webpackChunkName: "blogpost" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/AnnouncementPost.vue')
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',

    component: () => import(/* webpackChunkName: "contact" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Contact.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/FAQ.vue')
  },
  {
    path: '/service-terms',
    name: 'ServiceTerms',
    component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/ServiceTerms.vue')
  },
  {
    path: '/privacy-terms',
    name: 'PrivacyTerms',
    component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/PrivacyTerms.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('../views/main/Member/Layout.vue'),
    children: [
      {
        path: 'index/:memberID',
        name: 'Index',
        component: () => import('../views/main/Member/Index.vue')
      },
      {
        path: 'info/:memberID',
        name: 'Info',
        component: () => import('../views/main/Member/Info.vue')
      },
      {
        path: 'order-history/:memberID',
        name: 'OrderHistory',
        component: () => import('../views/main/Member/OrderHistory.vue')
      },
      {
        path: 'reward/:memberID',
        name: 'Reward',
        component: () => import('../views/main/Member/Reward.vue')
      },
      {
        path: 'my-collection/:memberID',
        name: 'MyCollection',
        component: () => import('../views/main/Member/MyCollection.vue')
      },
      {
        path: 'my-ticket/:memberID',
        name: 'MyTicket',
        component: () => import('../views/main/Member/MyTicket.vue')
      },
    ]
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/main/Activity/Layout.vue'),
    children: [
      {
        path: 'concert',
        component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/Activity/Concert.vue')
      },
      {
        path: 'sport',
        component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/Activity/Sport.vue')
      },
      {
        path: 'other',
        component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/Activity/Other.vue')
      },
      {
        path: 'show',
        component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/Activity/Show.vue')
      },
      {
        path: 'detail/:activityId',
        component: () => import('../views/main/Activity/ActivityDetail/ActivityDetail.vue'),
        children: [
          {
            path: 'news',
            name: 'News',
            component: () => import('../views/main/Activity/ActivityDetail/News.vue'),
          },
          {
            path: 'buy-ticket',
            name: 'BuyTicket',
            component: () => import('../views/main/Activity/ActivityDetail/BuyTicket.vue'),
            children: [
              {
                path: 'session',
                name: 'BuyTicketSession',
                component: () => import('../views/main/Activity/ActivityDetail/BuyTicketSession.vue')
              },
              {
                path: 'type',
                name: 'BuyTicketType',
                component: () => import('../views/main/Activity/ActivityDetail/BuyTicketType.vue')
              },
              {
                path: 'seat',
                name: 'BuyTicketSeat',
                component: () => import('../views/main/Activity/ActivityDetail/BuyTicketSeat.vue')
              },
              {
                path: 'cart',
                name: 'BuyTicketCart',
                component: () => import('../views/main/Activity/ActivityDetail/BuyTicketCart.vue')
              },
              {
                path: 'checkout',
                name: 'BuyTicketCheckout',
                component: () => import('../views/main/Activity/ActivityDetail/BuyTicketCheckout.vue')
              },
            ]
          },
          
          {
            path: 'location',
            name: 'Location',
            component: () => import('../views/main/Activity/ActivityDetail/Location.vue')
          },
          {
            path: 'notes',
            name: 'Notes',
            component: () => import('../views/main/Activity/ActivityDetail/Notes.vue')
          },
        ]
      },
      {
        path: 'news-detail',
        name: 'NewsDetail',
        component: () => import('../views/main/Activity/ActivityDetail/NewsDetail.vue')
      },
    ]
  },
  {
    path: '/buy-ticket-list',
    name: 'BuyTicketList',
    component: () => import('../views/'+process.env.VUE_APP_CURRENT_THEME+'/BuyTicketList.vue')
  },
  { path: '/404',     component: () => import(/* webpackChunkName: "contact" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/NotFound.vue')},  
  // { path: '/:catchAll(.*)', redirect: '/404' },  
   // {
  //   path: '/my-account',
  //   name: 'MyAccount',

  //   component: () => import(/* webpackChunkName: "myaccount" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/MyAccount.vue')
  // },
  // {
  //   path: '/wishlist',
  //   name: 'Wishlist',

  //   component: () => import(/* webpackChunkName: "wishlist" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Wishlist.vue')
  // },
  // {
  //   path: '/shop',
  //   name: 'ShopDefault',
  //   component: () => import(/* webpackChunkName: "shop" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Shop.vue')
  // },
  // {
  //   path: '/shop/:pageNo',
  //   name: 'ShopWithPagination',

  //   component: () => import(/* webpackChunkName: "shop" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Shop.vue')
  // },
  // {
  //   path: '/cart',
  //   name: 'Cart',
  //   component: () => import(/* webpackChunkName: "cart" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Cart.vue')
  // },
  // {
  //   path: process.env.VUE_APP_PRODUCT_PATH+':productID',
  //   name: 'Product',

  //   component: () => import(/* webpackChunkName: "product" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Product.vue')
  // },
  // {
  //   path: '/checkout',
  //   name: 'Checkout',

  //   component: () => import(/* webpackChunkName: "checkout" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/Checkout.vue')
  // },
  // {
  //   path: '/blog-list',
  //   name: 'BlogList',
  //   // route level code-splitting
  //   // this generates a separate chunk (shop.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "blog-list" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/BlogList.vue')
  // },
  // {
    //   path: process.env.VUE_APP_BLOG_PATH+':blogID',
    //   name: 'BlogPost',
    //   // route level code-splitting
    //   // this generates a separate chunk (shop.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "blogpost" */ '../views/'+process.env.VUE_APP_CURRENT_THEME+'/BlogPost.vue')
    // },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.VUE_APP_BUILD_PATH),
  routes
})


export default router

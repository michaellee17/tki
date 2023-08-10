import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store/storeModules.js';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/main/Home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/main/Test.vue')
  },
  {
    path: '/announcement',
    name: 'Announcement',
    component: () => import('../views/main/Announcement.vue')
  },
  {
    path: '/announcement/page/:pageId',
    name: 'AnnouncementPage',
    component: () => import('../views/main/Announcement.vue')
  },
  {
    path: '/announcement/:annoucementID',
    name: 'AnnouncementPost',
    component: () => import('../views/main/AnnouncementPost.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/main/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/main/Contact.vue')
  },
  {
    path: '/delete-account',
    name: 'DeleteAccount',

    component: () => import('../views/main/DeleteAccount.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/main/FAQ.vue')
  },
  {
    path: '/service-terms',
    name: 'ServiceTerms',
    component: () => import('../views/main/ServiceTerms.vue')
  },
  {
    path: '/privacy-terms',
    name: 'PrivacyTerms',
    component: () => import('../views/main/PrivacyTerms.vue')
  },
  {
    path: '/search/:searchText',
    name: 'Search',
    component: () => import('../views/main/Search.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('../views/main/Member/Layout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'index/:memberID',
        name: 'Index',
        component: () => import('../views/main/Member/Index.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'info/:memberID',
        name: 'Info',
        component: () => import('../views/main/Member/Info.vue'),
        meta: { requiresAuth: true },
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
      {
        path: 'ticket-list/:memberID',
        name: 'TicketList',
        component: () => import('../views/main/Member/TicketList.vue')
      },
    ]
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/main/Activity/Layout.vue'),
    children: [
      {
        path: ':activityId',
        component: () => import('../views/main/Activity/Inner.vue')
      },
      {
        path: 'reserve-ticket',
        component: () => import('../views/main/Activity/ReserveTicket.vue')
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
              {
                path: 'payment',
                name: 'BuyTicketPayment',
                component: () => import('../views/main/Activity/ActivityDetail/BuyTicketPayment.vue')
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
        path: 'news-detail/:newsId',
        name: 'NewsDetail',
        component: () => import('../views/main/Activity/ActivityDetail/NewsDetail.vue')
      },
    ]
  },
  {
    path: '/newebpay-callback',
    name: 'BuyTicketCallback',
    component: () => import('../views/main/Activity/ActivityDetail/BuyTicketCallback.vue')
  },
  { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/main/NotFound.vue')},  
  {
    path: '/line-login',
    name: 'LineLogin',
    component: () => import('../views/main/LineLogin.vue')
  },
  {
    path: '/apple-login',
    name: 'AppleLogin',
    component: () => import('../views/main/AppleLogin.vue')
  },
  {
    path: '/apple-redirect',
    name: 'AppleRedirect',
    component: () => import('../views/main/AppleRedirect.vue')
  },
]


let loginStatus = store.getters['user/getLoginStatus'];
const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.VUE_APP_BUILD_PATH),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let loginStatus = store.getters['user/getLoginStatus'];
    if (!loginStatus) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router

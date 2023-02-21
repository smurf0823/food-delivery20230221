
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);



import CookingManager from "./components/listers/CookingCards"
import CookingDetail from "./components/listers/CookingDetail"

import DeliveryManager from "./components/listers/DeliveryCards"
import DeliveryDetail from "./components/listers/DeliveryDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [

            {
                path: '/cookings',
                name: 'CookingManager',
                component: CookingManager
            },
            {
                path: '/cookings/:id',
                name: 'CookingDetail',
                component: CookingDetail
            },

            {
                path: '/deliveries',
                name: 'DeliveryManager',
                component: DeliveryManager
            },
            {
                path: '/deliveries/:id',
                name: 'DeliveryDetail',
                component: DeliveryDetail
            },



    ]
})

import Vue from 'nativescript-vue'

// @ts-ignore
import SideDrawer from '@/components/SideDrawer'
// @ts-ignore
import DrawerContent from '@/components/DrawerContent'
import store from "@/store/store";
import routes from "@/routes";
import "./app.scss";


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
Vue.registerElement(
    'RadSideDrawer',
    () => require('nativescript-ui-sidedrawer').RadSideDrawer
)
// Set up routes as a prototype to use throuhout the app.
Vue.prototype.$routes = routes
new Vue({
    store,
    render(h) {
        return h(
            SideDrawer,
            [
                h(DrawerContent, {slot: 'drawerContent'}),
                h(routes.Dashboard, {slot: 'mainContent'})
            ]
        )
    }
}).$start()

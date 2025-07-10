import { createRouter,createWebHistory } from "vue-router";
// import {dynamicRouters} from "@/routers/modules/dynamicRouters"
import {staticRouters} from "@/routers/modules/staticRouters"

const router =createRouter({
    history:createWebHistory(),
    routes:[...staticRouters]
})


export default router
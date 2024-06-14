

import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import asyncRouter from "./asyncRouter.ts"
const router = createRouter({
    history: createWebHashHistory(),
    // history: () => createWebHistory()
    routes: asyncRouter
});
export default router

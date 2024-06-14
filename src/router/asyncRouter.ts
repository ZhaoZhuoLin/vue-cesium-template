export default [
    {
        path: "/",
        name: "/main",
        component: () => import("@/views/main/index.vue"),
        meta: {
            title: "首页",
            icon: "Menu"
        },
    }
]
import { createWebHistory, createRouter } from "vue-router";
import PanelOverview from "@/components/app/dashboard/overview/PanelOverview";

const routes = [
    {
        path: "/",
        name: "Overview",
        component: PanelOverview,
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;
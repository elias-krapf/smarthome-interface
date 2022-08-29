import { createWebHistory, createRouter } from "vue-router";
import PanelOverview from "@/components/app/dashboard/overview/PanelOverview";
import MusicApp from "@/components/app/dashboard/apps/music/MusicApp";

const routes = [
    {
        path: "/",
        name: "Overview",
        component: PanelOverview,
    },
    {
        path: "/app/music",
        name: "App-Music",
        component: MusicApp,
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;
import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("@/views/Login.vue");
const ServiceIndex = () => import("@/views/Service/index.vue");
const PlanIndex = () => import("@/views/Plan/index.vue");
const PersonalIndex = () => import("@/views/Personal/index.vue");
const PersonalFans = () => import("@/views/Personal/fans.vue");
const PersonalFollow = () => import("@/views/Personal/follow.vue");
const PersonalHistory = () => import("@/views/Personal/history.vue");
const PersonalSafe = () => import("@/views/Personal/safe.vue");
const PersonalProject = () => import("@/views/Personal/project.vue");
const PersonalMessage = () => import("@/views/Personal/message.vue");
const PersonalAgreement = () => import("@/views/Personal/agreement.vue");
const PersonalFund = () => import("@/views/Personal/fund.vue");
const OtherPage = () => import("@/views/other/index.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Service",
    alias: "/service",
    component: ServiceIndex
  },
  {
    path: "/plan",
    name: "Plan",
    component: PlanIndex
  },
  {
    path: "/login",
    component: Login,
    name: "Login"
  },
  {
    path: "/personal",
    component: PersonalIndex,
    name: "Personal"
  },
  {
    path: "/personal/fans",
    component: PersonalFans,
    name: "PersonalFans"
  },
  {
    path: "/personal/follow",
    component: PersonalFollow,
    name: "PersonalFollow"
  },
  {
    path: "/personal/fund",
    component: PersonalFund,
    name: "PersonalFund"
  },
  {
    path: "/personal/history",
    component: PersonalHistory,
    name: "PersonalHistory"
  },
  {
    path: "/personal/safe",
    component: PersonalSafe,
    name: "PersonalSafe"
  },
  {
    path: "/personal/project",
    component: PersonalProject,
    name: "PersonalProject"
  },
  {
    path: "/personal/message",
    component: PersonalMessage,
    name: "PersonalMessage"
  },
  {
    path: "/personal/agreement",
    component: PersonalAgreement,
    name: "PersonalAgreement"
  },
  {
    path: "/other",
    component: OtherPage,
    name: "OtherPage"
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;

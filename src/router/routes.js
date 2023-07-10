const routes = [
  {
    path: "/page1",
    component: () => import("layouts/GuestLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/patient",
    component: () => import("layouts/GuestLayout.vue"),
    children: [{ path: "", component: () => import("pages/PatientsPage.vue") }],
  },
  {
    path: "/appointment",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      { path: "", component: () => import("pages/AppointmentsPage.vue") },
    ],
  },
  {
    path: "/consultation",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ConsultationsPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

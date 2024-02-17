import About from "./src/componets/About";
import Contact from "./src/componets/Contact";
import Resume from "./src/componets/Resume";

const routes = [
  {
    path: "/",
    component: About,
    exact: true,
    title: "About",
  },
  {
    path: "/resume",
    component: Resume,
    exact: true,
    title: "Resume",
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
    title: "Contact",
  },
];

export default routes;

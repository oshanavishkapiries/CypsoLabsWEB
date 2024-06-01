interface NavbarLink {
  name: string;
  path: string;
}

export const navbarLinks: NavbarLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Team",
    path: "/team",
  },
];

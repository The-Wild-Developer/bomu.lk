export interface SubLinkProps {
  id: string;
  path: string;
  name: string;
  subLinks?: SubLinkProps[];
}

export interface NavLinkProps {
  id: string;
  path: string;
  name: string;
  subLinks?: SubLinkProps[];
}

export const sectionLinks: NavLinkProps[] = [
  { id: "home", path: "#home", name: "Home" },
  { id: "about", path: "#about", name: "About" },
  { id: "team", path: "#team", name: "Team" },
  { id: "contact-us", path: "#contact", name: "Contact Us" },
];

export interface NavDropdownProps extends NavLinkProps { }

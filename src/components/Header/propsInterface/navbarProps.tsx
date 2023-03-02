export interface NavbarProps {
  navbarData: {
    brand: {
      logo: string;
      name: string;
    };
    links: {
      name: string;
      href: string;
    }[];
    buttons: {
      login: {
        name: string;
        href: string;
      };
      register: {
        name: string;
        href: string;
      };
    };
  };
}

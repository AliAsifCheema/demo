export interface HeaderProps {
  headerData: {
    navbar: {
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
    banner: {
      title: string;
      description: string;
      button: {
        name: string;
        href: string;
      };
    };
  };
}

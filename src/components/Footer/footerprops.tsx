export interface FooterProps {
  footerData: {
    logo: {
      img: string;
      name: string;
    };
    description: string;
    lower: {
      description: string;
      description2: string;
    };
    links: {
      quick: {
        name: string;
        href: string;
      }[];
      company: {
        name: string;
        href: string;
      }[];
      support: {
        name: string;
        href: string;
      }[];
    };
  };
}

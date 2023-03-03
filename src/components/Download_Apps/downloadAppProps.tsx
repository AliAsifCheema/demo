export interface DownloadAppProps {
  downloadData: {
    title: {
      text: string;
      highlight: string;
    };
    description: string;
    items: {
      icon: string;
      alt: string;
      href: string;
    }[];
    downloadAppImg: {
      img1: string;
      img2: string;
    };
  };
}

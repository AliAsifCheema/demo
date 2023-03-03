export interface GetStartedProps {
  getStartedData: {
    title: {
      text: string;
      highlight: string;
    };
    description: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

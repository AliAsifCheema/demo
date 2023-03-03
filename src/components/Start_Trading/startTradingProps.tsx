export interface StartTradingProps {
  startTradingData: {
    title: {
      text: string;
      highlight: string;
    };
    description: string;
    button: {
      name: string;
      href: string;
    };
  };
}

import Banner from "./banner";
import Navbar from "./navbar";
import { HeaderProps } from "./propsInterface/headerProps";

const Header = ({ headerData }: HeaderProps) => {
  return (
    <header>
      <Navbar navbarData={headerData.navbar} />
      <Banner bannerData={headerData.banner} />
    </header>
  );
};

export default Header;

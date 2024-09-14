import { links } from "@/lib/data";
import HamburgerMenu from "./hamburger-menu";
import Header from "./header";

const Navbar = () => {
  return (
    <nav>
      <HamburgerMenu links={links} />
      <Header links={links} />
    </nav>
  );
};

export default Navbar;

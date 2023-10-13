import { Header } from "../header/Header";
import { Home } from "../home/Home";
import { About } from "../about/About";
import { Contact } from "../contact/Contact";
import { Portfolio } from "../portfolio/Portfolio";

export const PortfolioPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <div style={{minHeight: 250, backgroundColor: "antiquewhite"}}></div>
    </>
  );
};

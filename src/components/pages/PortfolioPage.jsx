import { Header } from "../header/Header";
import { Home } from "../home/Home";
import { About } from "../about/About";
import { Contact } from "../contact/Contact";

export const PortfolioPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <div style={{minHeight: 50, backgroundColor: "antiquewhite"}}></div>
      <Contact />
      <div style={{minHeight: 250, backgroundColor: "antiquewhite"}}></div>
    </>
  );
};

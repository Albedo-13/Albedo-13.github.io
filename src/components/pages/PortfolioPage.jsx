import { Header } from "../header/Header";
import { Home } from "../home/Home";
import { About } from "../about/About";

export const PortfolioPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      {/* here goes portfolio */}
      <div style={{minHeight: 250, backgroundColor: "antiquewhite"}}></div>
    </>
  );
};

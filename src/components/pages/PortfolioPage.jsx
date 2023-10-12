import { Header } from "../header/Header";
import { Home } from "../home/Home";
import { About } from "../about/About";

export const PortfolioPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <div style={{minHeight: 250, backgroundColor: "grey"}}></div>
    </>
  );
};

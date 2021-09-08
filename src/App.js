import "./App.css";
import BackgroundParticles from "./components/BackgroundParticles";
import Header from "./components/Header";
import TitleName from "./components/TitleName/index";
import { ReactComponent as BackgroundSvg } from "./assets/Programming-bro.svg";

function App() {
  return (
    <>
      <section>
        <div className="section pt-4 bg-transparent">
          <Header />
          <div className="row ">
            <div className="col-lg-6 flex-center">
              <TitleName />
            </div>
            <div className="col-lg-6">
              <BackgroundSvg />
            </div>
          </div>
          <div className="background-particles-wrapper">
            <BackgroundParticles />;
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

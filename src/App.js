import "./App.css";
import BackgroundParticles from "./components/BackgroundParticles";
import Header from "./components/Header";
import TitleName from "./components/TitleName/index";

function App() {
  return (
    <>
      <section>
        <div className="section pt-4 bg-transparent" >
          <Header />
          <TitleName />
          <div className="background-particles-wrapper">
            <BackgroundParticles />;
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

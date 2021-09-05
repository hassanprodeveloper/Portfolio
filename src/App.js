import "./App.css";
import BackgroundParticles from "./components/BackgroundParticles";
import Header from './components/Header'

function App() {
  return (
    <>
      <section>
        <div className="section pt-4 bg-transparent">
         <Header />

          <div className="background-particles-wrapper">
            <BackgroundParticles />;
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

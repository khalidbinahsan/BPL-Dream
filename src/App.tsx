import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Footer from "./assets/components/Footer";
import PlayerSelection from "./assets/components/PlayerSelection";

// Direct import: Vite automatically loads and parses the JSON into an array
import playersData from "./assets/data/players.json";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PlayerSelection players={playersData} />
      <Footer></Footer>
    </>
  );
}

export default App;
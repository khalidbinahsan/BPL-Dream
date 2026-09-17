import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Footer from "./assets/components/Footer";
import PlayerSelection from "./assets/components/PlayerSelection";

// Direct import: Vite automatically loads and parses the JSON into an array
import playersData from "./assets/data/players.json";
import { useState } from "react";
function App() {
  const [budget, setBudget] = useState(300000)
  return (
    <>
      <Header budget={budget} />
      <Hero />
      <PlayerSelection players={playersData} />
      <Footer></Footer>
    </>
  );
}

export default App;
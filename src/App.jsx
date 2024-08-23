import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  const [isSearching, setIsSearching] = useState(false);

  function handleSearch(value) {
    setIsSearching(value);
  }

  return (
    <>
      <header>
        <Navbar onSearch={handleSearch} />
      </header>

      <main className="main">
        <Dashboard isSearching={isSearching} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

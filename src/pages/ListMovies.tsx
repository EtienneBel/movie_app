import Dashboard from "@/components/dashboard/Dashboard";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";

export default function ListMovies() {
  const [isSearching, setIsSearching] = useState(false);

  function handleSearch(value: any) {
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

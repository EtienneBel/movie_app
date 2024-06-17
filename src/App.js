import Dashboard from "./components/Dashboard";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="main">
        <Dashboard />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

import MovieList from "./components/MovieList";
import data from "./data.json";

export default function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <p className="netflix_title">NETFLIX</p>
          <div className="nav_right">
            <p className="mt-1 mr-4">UNLIMITED TV SHOWS & MOVIES</p>
            <div className="nav_buttons">
              <button className="nav_join_button">JOIN NOW</button>
              <button className="nav_sign_in_button">SIGN IN</button>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">
        <h1 className="text-3xl font-black mt-10">Movies</h1>
        <p className="w-2/5">
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>

        <div className="categories_list">
          <MovieList list={data.movies} />
          {/* <MovieList list={data.movies} />
          <MovieList list={data.movies} /> */}
        </div>
      </main>

      <footer>
        <p className="mt-20">
          Read about Netflix TV shows and movies and watch bonus videos on
          Tudum.com.
        </p>
      </footer>
    </>
  );
}

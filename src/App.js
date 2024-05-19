export default function App() {
  const data = [
    {
      src: "https://occ-0-6119-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYqz3t2hDX3sdHHVt3Rfp-r5PfXmfLgQcuEk5E3Hg30K0fj-dYRIO0oGcH-Vun_oX3Q8gCnO84BwaFrVtOxeuw57IUZGRnE0ANgTlDfaUYL4c57kkGIcTwvwz3KMrUwg9T5L.jpg?r=969",
      title: "Mea Culpa",
    },
    {
      src: "https://occ-0-6119-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYqz3t2hDX3sdHHVt3Rfp-r5PfXmfLgQcuEk5E3Hg30K0fj-dYRIO0oGcH-Vun_oX3Q8gCnO84BwaFrVtOxeuw57IUZGRnE0ANgTlDfaUYL4c57kkGIcTwvwz3KMrUwg9T5L.jpg?r=969",
      title: "Mea Culpa",
    },
    {
      src: "https://occ-0-6119-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYqz3t2hDX3sdHHVt3Rfp-r5PfXmfLgQcuEk5E3Hg30K0fj-dYRIO0oGcH-Vun_oX3Q8gCnO84BwaFrVtOxeuw57IUZGRnE0ANgTlDfaUYL4c57kkGIcTwvwz3KMrUwg9T5L.jpg?r=969",
      title: "Mea Culpa",
    },
    {
      src: "https://occ-0-6119-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYqz3t2hDX3sdHHVt3Rfp-r5PfXmfLgQcuEk5E3Hg30K0fj-dYRIO0oGcH-Vun_oX3Q8gCnO84BwaFrVtOxeuw57IUZGRnE0ANgTlDfaUYL4c57kkGIcTwvwz3KMrUwg9T5L.jpg?r=969",
      title: "Mea Culpa",
    },
  ];

  return (
    <>
      <header className="header">NETFLIX</header>
      <main className="main">
        <h1 className="mt-10">Movies</h1>
        <p className="description">
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>

        <div className="categories_list">
          <div className="a_categorie">
            <p>Your Next Watch</p>
            <div className="a_categorie_list">
              {data.map((item, index) => (
                <Movie key={index} src={item.src} title={item.title} />
              ))}
            </div>
          </div>
          <div className="a_categorie">
            <p>Your Next Watch</p>
            <div className="a_categorie_list">
              {data.map((item, index) => (
                <Movie key={index} src={item.src} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function Movie({ src, title }) {
  return (
    <a className="a_movie">
      <img src={src} />
      <p className="movie_title">{title}</p>
    </a>
  );
}

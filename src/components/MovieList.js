import Movie from "./Movie";

export default function MovieList({ list }) {
  return (
    <div className="mt-12">
      {list.map((item, index) => (
        <div key={index} className="mt-16">
          <p className="mb-3">{item.category_title}</p>
          <div className="flex overflow-x-auto">
            {item.category_list.map((item_2, index_2) => (
              <Movie key={index_2} src={item_2.src} title={item_2.title} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import { Movie } from "@/model/Movie";

export default function MovieCard({ id, src, title }: Movie) {
  return (
    <div className="mx-2">
      <a href={`movies/${id}`}>
        <img alt={title} src={src} />
        <p className="text-base text-center mt-2">{title}</p>
      </a>
    </div>
  );
}

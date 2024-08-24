import { Movie } from "@/model/Movie";

export default function MovieCard({ src, title }: Movie) {
  return (
    <div className="mx-2">
      <a href="/">
        <img alt="" src={src} />
        <p className="text-base text-center mt-2">{title}</p>
      </a>
    </div>
  );
}

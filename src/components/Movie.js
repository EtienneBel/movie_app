export default function Movie({ src, title }) {
  return (
    <a className="flex-shrink-0 mr-3">
      <img src={src} />
      <p className="text-base">{title}</p>
    </a>
  );
}

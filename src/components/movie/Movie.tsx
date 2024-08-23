export default function Movie({ src, title }) {
  return (
    <div className="mx-2">
      <a href="/">
        {/* <a className="flex-shrink-0 mr-3"> */}
        <img alt="" src={src} />
        <p className="text-base text-center mt-2">{title}</p>
      </a>
    </div>
  );
}

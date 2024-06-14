export default function Movie({ src, title }) {
  return (
    <>
      <a>
        {/* <a className="flex-shrink-0 mr-3"> */}
        <img src={src} />
        <p className="text-base text-center mt-2">{title}</p>
      </a>
    </>
  );
}

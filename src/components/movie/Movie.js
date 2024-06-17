export default function Movie({ src, title }) {
  return (
    <>
      <a href="/">
        {/* <a className="flex-shrink-0 mr-3"> */}
        <img alt="" src={src} />
        <p className="text-base text-center mt-2">{title}</p>
      </a>
    </>
  );
}

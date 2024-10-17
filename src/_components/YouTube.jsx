/** @jsxImportSource https://esm.sh/preact */

export default function YouTube({id}) {
  let url;

  if (id.startsWith("http")) {
    url = id;
  } else {
    url = "https://www.youtube.com/embed/" + id;
  }

  return (
    <div className={"iframe-wrapper"}>
    <iframe
      src={url}
      title="YouTube Video Player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    >
    </iframe>
    </div>
  );
}

import { useRouter } from "next/router";

const Content = ({ content }) => {
  let youtubeKey;
  let youtubeName;
  let youtubeLink;

  if (content.results[0] == null) {
    return (
      <div className="flex justify-center m-20 text-2xl">
        <h1>Trailer not available</h1>
      </div>
    );
  } else {
    let youtubeKey = content.results[0].key;

    let youtubeName = content.results[0].name;
    let youtubeLink = `https://www.youtube.com/embed/${youtubeKey}`;
    return (
      <div>
        <div className="h-80v p-10 flex justify-center ">
          <iframe
            src={youtubeLink}
            frameBorder="0"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      </div>
    );
  }
};
export default Content;

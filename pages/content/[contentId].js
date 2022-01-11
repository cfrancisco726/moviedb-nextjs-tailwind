const API_KEY = process.env.API_KEY;

import { useRouter } from "next/router";
import Content from "../../components/Content";

export default function ContentId({ content }) {
  const youtubeKey = content.results[0].key;
  const youtubeName = content.results[0].name;
  const youtubeLink = `https://www.youtube.com/embed/${youtubeKey}`;

  return (
    <div>
      <div className="h-70v w-70v p-10 aspect-w-16 aspect-h-9 flex justify-center my-5">
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

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log("params", params);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.contentId}/videos?api_key=${API_KEY}&language=en-U`
  );
  console.log("response", response);
  if (!response.ok) {
    res.writeHead(302, {
      location: "/",
    });

    res.end();

    return {
      props: {},
    };
  }
  const data = await response.json();
  console.log("data", data);

  return {
    props: { content: data },
  };
}

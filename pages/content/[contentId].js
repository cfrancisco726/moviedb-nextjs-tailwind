const API_KEY = process.env.API_KEY;

import { useRouter } from "next/router";
import Content from "../../components/Content";

export default function ContentId({ content, result }) {
  const youtubeKey = content.results[0].key;
  // console.log("hello", content.results[0].key);
  const youtubeLink = `https://www.youtube.com/embed/${youtubeKey}"`;
  console.log("link", youtubeLink);
  return (
    <div>
      <iframe
        src={youtubeLink}
        frameBorder="0"
        width="400"
        height="400"
      ></iframe>
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

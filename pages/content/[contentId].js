const API_KEY = process.env.API_KEY;

import { useRouter } from "next/router";
import Content from "../../components/Content";

export default function ContentId({ content }) {
  return (
    <div>
      <Content content={content} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;

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

  return {
    props: { content: data },
  };
}

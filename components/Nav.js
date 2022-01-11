import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
        {Object.entries(requests).map(([key, { title, url, index }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="active:text-logogreen last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white "
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;

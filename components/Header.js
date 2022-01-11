import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-10 sm:m-5 justify-between items-center h-auto">
      <div>
        <Link href="/?genre=fetchTrending">
          <a>
            <h1 className="object-contain text-4xl p-5 font-Oswald text-logogreen">
              MOVIE TRAILERS
            </h1>
          </a>
        </Link>
      </div>
      <div className="flex  justify-evenly max-w-2xl">
        <Link href="/?genre=fetchTrending">
          <a>
            <HeaderItem title="HOME" Icon={HomeIcon} />
          </a>
        </Link>
        <Link href="">
          <a>
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;

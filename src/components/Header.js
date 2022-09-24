import { Link } from "react-router-dom";
import twitch from "../assets/twitch.png";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-10 py-4 bg-neutral-900 border-b-2 border-neutral-800">
        <div>
          <Link to="/">
            <img src={twitch} alt="logo" className="w-8 fill-purple-500" />
          </Link>
        </div>
        <ul className="flex justify-end gap-10  items-center w-3/12 font-medium text-slate-50">
          <li>
            <Link to="/streams/show">Browse</Link>
          </li>
          <li>
            <GoogleAuth />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

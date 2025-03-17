import { Link, useLocation } from "react-router-dom";
import { PiFilmReel } from "react-icons/pi";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="border-blue-100/10 border-b p-4 w-full text-white select-none text-xl font-normal flex gap-4">
      <div className="absolute top-2" id="logo">
        <Link to="/" className="text-2xl font-bold">
          <PiFilmReel className="text-secundary-light inline-block w-12 h-12 text-secu ndary-light" />
          <span>
            Film<span className="text-secundary-light font-extrabold">Play</span>
          </span>
        </Link>
      </div>
      <ul className="flex space-x-4 ml-44">
        {[
          { path: "/", label: "Media" },
          { path: "/createMedia", label: "Create Media" },
          { path: "/director", label: "Director" },
          { path: "/genre", label: "Genre" },
          { path: "/producer", label: "Producer" },
          { path: "/type", label: "Type" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`hover:text-secundary-light relative ${
                location.pathname === path
                  ? "after:content-[''] after:w-3/4 after:h-1 after:bg-secundary-light after:block after:rounded-md after:m-auto after:transition-all after:duration-150 after:ease-linear after:scale-x-100 after"
                  : "after:scale-0"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

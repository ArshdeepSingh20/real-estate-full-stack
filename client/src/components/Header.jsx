import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-white shadow-md ">
      <div className="flex justify-between items-center max-w-5xl mx-auto p-3">
        <Link to="/">
          <h1 className="text-sm font-semibold sm:text-xl flex flex-wrap">
            <span className="">HomeHive</span>
          </h1>
        </Link>

        {/* <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form> */}

        <ul className="flex gap-8">
          <Link to={"/search?type=sell"}>
            <li className="hidden sm:inline text-slate-700  hover:underline">
              Buy
            </li>
          </Link>

          <Link to={"/search?type=rent"}>
            <li className="hidden sm:inline text-slate-700  hover:underline">
              Rent
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-slate-700  hover:underline">
              About Us
            </li>
          </Link>

          <Link to="/contact-us">
            <li className="hidden sm:inline text-slate-700  hover:underline">
              Contact Us
            </li>
          </Link>

          <Link to="profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="hidden sm:inline text-slate-700  hover:underline">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

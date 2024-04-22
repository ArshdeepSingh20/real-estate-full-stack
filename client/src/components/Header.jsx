import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Dialog } from '@headlessui/react'; // Import Dialog component
import { Bars3Icon} from '@heroicons/react/24/outline';


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

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
    <header className="bg-white shadow-md h-16">
      <div className="flex justify-between items-center max-w-5xl mx-auto p-3">
        <Link className="flex" to="/">
          <h1 className="text-sm font-semibold sm:text-xl flex justify-center items-center">
            <img
              className="mr-3 h-7"
              src="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Fc63d9f96452c4d4c9937554db69142cd"
              alt="homehive"
            />
            <span className="">HomeHive</span>
          </h1>
        </Link>

        {/* Mobile menu button */}
        <div className="flex  lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="flex gap-8 hidden items-center justify-between lg:flex">
          <Link to={"/search?type=sale"}>
            <li className="cursor-pointer hover:underline">Buy</li>
          </Link>

          <Link to={"/search?type=rent"}>
            <li className="cursor-pointer hover:underline">Rent</li>
          </Link>

          <Link to="/about">
            <li className="cursor-pointer hover:underline">About Us</li>
          </Link>

          <Link to="/contact-us">
            <li className="cursor-pointer hover:underline">Contact Us</li>
          </Link>

          <Link to="/create-listing">
            <li className="cursor-pointer bg-[#FE6C4C] text-white p-2 px-5 rounded-xl hover:underline">Post Property</li>
          </Link>

          <Link to="profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-slate-700 hover:underline">Sign In</li>
            )}
          </Link>
        </ul>

        {/* Mobile menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            {/* Mobile menu content */}
            <div>
              {/* Menu items */}
              <ul className="space-y-3">
                <li className="cursor-pointer hover:underline" onClick={() => setMobileMenuOpen(false)}>
                  <Link to={"/search?type=sale"}>Buy</Link>
                </li>
                <li className="cursor-pointer hover:underline" onClick={() => setMobileMenuOpen(false)}>
                  <Link to={"/search?type=rent"}>Rent</Link>
                </li>
                <li className="cursor-pointer hover:underline" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="/about">About Us</Link>
                </li>
                <li className="cursor-pointer hover:underline" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li className="cursor-pointer bg-[#FE6C4C] text-white p-2 px-5 rounded-xl hover:underline" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="/create-listing">Post Property</Link>
                </li>
                <li className="cursor-pointer hover:underline" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="profile">{currentUser ? 'Profile' : 'Sign In'}</Link>
                </li>
              </ul>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
  );
}

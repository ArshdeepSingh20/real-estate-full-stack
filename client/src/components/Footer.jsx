import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };

    const sections = [
        {
            heading: "Quick Links",
            links: [
                { to: "/about", text: "About Us" },
                { to: "/contact-us", text: "Contact" },
                { to: "/search?type=rent", text: "Rent" },
                { to: "/search?type=sale", text: "Buy" },
                { to: "/create-listing", text: "Post Property" }
            ]
        },
        {
            heading: "Solutions",
            links: [
                { to: "/marketing", text: "Marketing" },
                { to: "/analytics", text: "Analytics" },
                { to: "/commerce", text: "Commerce" },
                { to: "/insights", text: "Insights" }
            ]
        },
        {
            heading: "Company",
            links: [
                { to: "/about", text: "About" },
                { to: "/blog", text: "Blog" },
                { to: "/jobs", text: "Jobs" },
                { to: "/press", text: "Press" }
            ]
        }
    ];

    return (
        <footer className="bg-[#00271B] text-white py-12 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
                <div className="w-full sm:w-auto flex flex-col justify-center mb-8 sm:mb-0">
                    <Link to="/" onClick={scrollToTop}>
                        <h1 className="text-md font-semibold sm:text-xl flex items-center">
                            <img
                                className="mr-3 h-8"
                                src="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Fc63d9f96452c4d4c9937554db69142cd"
                                alt="homehive"
                            />
                            <span className="text-3xl">HomeHive</span>
                        </h1>
                    </Link>
                    <p className="text-md mt-5 sm:mt-10">Making the world a better place through <br /> constructing elegant hierarchies.</p>
                </div>

                {sections.map((section, index) => (
                    <div key={index} className="w-full sm:w-auto mb-8 sm:mb-0">
                        <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>
                        <ul>
                            {section.links.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.to} onClick={scrollToTop}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex justify-center">
                <a href="#"><FaFacebook className="text-3xl mr-4" /></a>
                <a href="#"><FaInstagram className="text-3xl mr-4" /></a>
                <a href="#"><FaGithub className="text-3xl mr-4" /></a>
                <a href="#"><FaYoutube className="text-3xl mr-4" /></a>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-sm">
                <p>&copy; 2024 HomeHive All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

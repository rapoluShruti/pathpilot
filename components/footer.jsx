import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              We are a tech company focused on delivering high-quality solutions
              to modern problems.
            </p>
            <button className="bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white hover:text-primary-500 text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white hover:text-primary-500 text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white hover:text-primary-500 text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white hover:text-primary-500 text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="bg-black-800 py-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { socialImgs } from "../constants";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="flex flex-col justify-center">
//           <p>Terms & Conditions</p>
//         </div>
//         <div className="socials">
//           {socialImgs.map((socialImg, index) => (
//             <div key={index} className="icon">
//               <img src={socialImg.imgPath} alt="social icon" />
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col justify-center">
//           <p className="text-center md:text-end">
//             © {new Date().getFullYear()} Qureify Assist. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom"; // if using React Router

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10 px-5 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Qureify</h2>
          <p className="text-gray-400 text-sm">
            Empowering clinics with AI-driven triage and smarter healthcare
            solutions.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col  md:items-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="https://docs.qureify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Documentation
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex md:flex-col gap-3 items-center">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" className="size-6"/>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Qureify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

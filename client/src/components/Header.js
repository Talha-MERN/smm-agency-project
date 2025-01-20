// // import React, { useState } from "react";
// // import { FaWhatsapp } from "react-icons/fa";

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <header className="bg-customBlue shadow-md">
// //       <div className="container mx-auto flex items-center justify-between py-4 px-6">
// //         {/* Left Side: Logo/Text */}
// //         <div className="text-left">
// //           <h1 className="text-2xl font-bold text-gray-800">
// //             <span className="block text-4xl text-white">Insight Tech</span>
// //             <span className="block text-lg text-customPink text-center">
// //               Solutions
// //             </span>
// //           </h1>
// //         </div>

// //         {/* Center: Navigation */}
// //         <nav className="hidden md:flex items-center space-x-6">
// //           <a href="#" className="text-white hover:text-opacity-80">
// //             Home
// //           </a>
// //           <a href="#services" className="text-white hover:text-opacity-80">
// //             Services
// //           </a>
// //           <a href="#about" className="text-white hover:text-opacity-80">
// //             About Us
// //           </a>
// //           <a href="#portfolio" className="text-white hover:text-opacity-80">
// //             Portfolio
// //           </a>
// //           <a href="#contact" className="text-white hover:text-opacity-80">
// //             Contact Us
// //           </a>
// //         </nav>

// //         {/* Right Side: Free Consultation Button */}
// //         <a
// //           href="https://wa.me/+923164641190"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="hidden md:flex bg-customPink text-white px-4 py-2 rounded-lg items-center space-x-2 hover:bg-opacity-90 transition"
// //         >
// //           <FaWhatsapp className="text-lg" />
// //           <span>Free Consultation</span>
// //         </a>

// //         {/* Mobile Menu: Hamburger Icon */}
// //         <button
// //           className="md:hidden text-white focus:outline-none"
// //           onClick={toggleMenu}
// //         >
// //           <i className="fas fa-bars text-2xl"></i>
// //         </button>
// //       </div>

// //       {/* Mobile Dropdown Menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden bg-customBlue text-white">
// //           <nav className="flex flex-col items-center space-y-4 py-4">
// //             <a href="#home" className="hover:text-opacity-80">
// //               Home
// //             </a>
// //             <a href="#services" className="hover:text-opacity-80">
// //               Services
// //             </a>
// //             <a href="#about" className="hover:text-opacity-80">
// //               About Us
// //             </a>
// //             <a href="#portfolio" className="hover:text-opacity-80">
// //               Portfolio
// //             </a>
// //             <a href="#contact" className="hover:text-opacity-80">
// //               Contact Us
// //             </a>
// //             <a
// //               href="https://wa.me/+923164641190"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="bg-customPink text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-90 transition"
// //             >
// //               <FaWhatsapp className="text-lg" />
// //               <span>Free Consultation</span>
// //             </a>
// //           </nav>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import { Link } from "react-scroll"; // Import Link from react-scroll
// import { FaWhatsapp } from "react-icons/fa";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-customBlue shadow-md">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Left Side: Logo/Text */}
//         <div className="text-left">
//           <h1 className="text-2xl font-bold text-gray-800">
//             <span className="block text-4xl text-white">Insight Tech</span>
//             <span className="block text-lg text-customPink text-center">
//               Solutions
//             </span>
//           </h1>
//         </div>

//         {/* Center: Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <Link
//             to="home"
//             smooth={true}
//             duration={500}
//             offset={-80} // Adjust to align with your header height
//             className="cursor-pointer text-white hover:text-opacity-80"
//           >
//             Home
//           </Link>
//           <Link
//             to="services-section"
//             smooth={true}
//             duration={500}
//             offset={-80}
//             className="cursor-pointer text-white hover:text-opacity-80"
//           >
//             Services
//           </Link>
//           <Link
//             to="about-us"
//             smooth={true}
//             duration={500}
//             offset={-80}
//             className="cursor-pointer text-white hover:text-opacity-80"
//           >
//             About Us
//           </Link>
//           <a href="#portfolio" className="text-white hover:text-opacity-80">
//             Portfolio
//           </a>
//           <a href="#contact" className="text-white hover:text-opacity-80">
//             Contact Us
//           </a>
//         </nav>

//         {/* Right Side: Free Consultation Button */}
//         <a
//           href="https://wa.me/+923164641190"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hidden md:flex bg-customPink text-white px-4 py-2 rounded-lg items-center space-x-2 hover:bg-opacity-90 transition"
//         >
//           <FaWhatsapp className="text-lg" />
//           <span>Free Consultation</span>
//         </a>

//         {/* Mobile Menu: Hamburger Icon */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <i className="fas fa-bars text-2xl"></i>
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-customBlue text-white">
//           <nav className="flex flex-col items-center space-y-4 py-4">
//             <Link
//               to="home"
//               smooth={true}
//               duration={500}
//               offset={-80}
//               onClick={toggleMenu}
//               className="cursor-pointer hover:text-opacity-80"
//             >
//               Home
//             </Link>
//             <Link
//               to="services"
//               smooth={true}
//               duration={500}
//               offset={-80}
//               onClick={toggleMenu}
//               className="cursor-pointer hover:text-opacity-80"
//             >
//               Services
//             </Link>
//             <Link
//               to="about-us"
//               smooth={true}
//               duration={500}
//               offset={-80}
//               onClick={toggleMenu}
//               className="cursor-pointer hover:text-opacity-80"
//             >
//               About Us
//             </Link>
//             <a href="#portfolio" className="hover:text-opacity-80">
//               Portfolio
//             </a>
//             <a href="#contact" className="hover:text-opacity-80">
//               Contact Us
//             </a>
//             <a
//               href="https://wa.me/+923164641190"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-customPink text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-90 transition"
//             >
//               <FaWhatsapp className="text-lg" />
//               <span>Free Consultation</span>
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigateAndScroll = (path, target) => {
    if (window.location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Ensure the page has loaded before scrolling
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-customBlue shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Side: Logo/Text */}
        <RouterLink to="/" className="text-left">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="block text-4xl text-white">Insight Tech</span>
            <span className="block text-lg text-customPink text-center">
              Solutions
            </span>
          </h1>
        </RouterLink>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <RouterLink
            to="/"
            onClick={() => handleNavigateAndScroll("/", "home")}
            className="text-white cursor-pointer hover:text-opacity-80"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/"
            onClick={() => handleNavigateAndScroll("/", "services-section")}
            className="text-white cursor-pointer hover:text-opacity-80"
          >
            Services
          </RouterLink>
          <RouterLink
            to="/"
            onClick={() => handleNavigateAndScroll("/", "about-us")}
            className="text-white cursor-pointer hover:text-opacity-80"
          >
            About Us
          </RouterLink>
          <a href="#portfolio" className="text-white hover:text-opacity-80">
            Portfolio
          </a>
          <a href="#contact" className="text-white hover:text-opacity-80">
            Contact Us
          </a>
        </nav>

        {/* Right Side: Free Consultation Button */}
        <a
          href="https://wa.me/+923164641190"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-customPink text-white px-4 py-2 rounded-lg items-center space-x-2 hover:bg-opacity-90 transition"
        >
          <FaWhatsapp className="text-lg" />
          <span>Free Consultation</span>
        </a>

        {/* Mobile Menu: Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-customBlue text-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <RouterLink
              to="/"
              onClick={() => handleNavigateAndScroll("/", "home")}
              className="hover:text-opacity-80"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/"
              onClick={() => handleNavigateAndScroll("/", "services-section")}
              className="hover:text-opacity-80"
            >
              Services
            </RouterLink>
            <RouterLink
              to="/"
              onClick={() => handleNavigateAndScroll("/", "about-us")}
              className="hover:text-opacity-80"
            >
              About Us
            </RouterLink>
            <a href="#portfolio" className="hover:text-opacity-80">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-opacity-80">
              Contact Us
            </a>
            <a
              href="https://wa.me/+923164641190"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-customPink text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-90 transition"
            >
              <FaWhatsapp className="text-lg" />
              <span>Free Consultation</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

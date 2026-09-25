// import { Link } from "react-router-dom";


// function Navbar(){
//     return (
//         <div className="fixed w-full flex justify-between items-center p-6  bg-gray-300/50 rounded-lg m-2">
//             <div className="text-2xl font-bold">M4K</div>
//             <div className="flex gap-4 ">
//                 <Link className="hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" to='/'>Home</Link>
//                   <Link className="hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" to='/about'>About</Link>
//                     <Link className="hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" to='/services'>Services</Link>
//                       <Link className="hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" to='/contact'>Contact</Link>
//             </div>
//             <button className="px-4 py-1.5 rounded-lg bg-gray-400/40">Login </button>
            
//         </div>
//     )
// }

// export default Navbar;



import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="fixed w-full bg-gradient-to-r from-pink-100 to-blue-100 m-4 rounded-2xl backdrop-blur-md border-b border-white/30">
        <div className="w-full px-6 sm:px-8 md:px-10 py-4 flex items-center  justify-between">

          {/* Logo */}
          <div
           // to="/"
            //onClick={() => setIsOpen(false)}
            className="text-4xl font-serif md:text-5xl font-bold"
          >
            M4k <span className="text-2xl text-gray-500 ">Holdings</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-20">

            <Link to="/" className="hover:text-white hover:border-b-2 hover:border-b-amber-50 text-xl font-semibold font-serif">
              Home
            </Link>

            <Link to="/about" className="hover:text-white hover:border-b-2 hover:border-b-amber-50 text-xl font-semibold font-serif">
              About
            </Link>

            <Link to="/services" className="hover:text-white hover:border-b-2 hover:border-b-amber-50 text-xl font-semibold font-serif">
              Services
            </Link>

            <Link to="/contact" className="hover:text-white hover:border-b-2 hover:border-b-amber-50 text-xl font-semibold font-serif">
              Contact
            </Link>

          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-14 h-14 rounded-full 
                       bg-white/20 backdrop-blur-md 
                       border border-white/40
                       flex items-center justify-center
                       text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </nav>


      {/* ======== MOBILE MENU ======= */}

      {isOpen && (
        <div
          className="md:hidden 
                     absolute top-24 left-5 right-5
                     z-50
                     p-6
                     rounded-3xl
                     bg-gradient-to-r from-pink-100/20 to-blue-100/10
                     backdrop-blur-xl
                     border border-white/40
                     shadow-xl
                     fixed
                     "
                     
        >

          <div className="flex flex-col gap-6">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-gray-300/10
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl font-semibold
                         text-gray-700
                         hover:bg-gradient-to-r from-pink-200/90 to-blue-200/70
                         hover:border-1 hover:border-gray-300 hover:shadow-xl"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-gray-300/10
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl font-semibold
                         text-gray-700
                          hover:bg-gradient-to-r from-pink-200/90 to-blue-200/70
                         hover:border-1 hover:border-gray-300 hover:shadow-xl"
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-gray-300/10
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl font-semibold
                         text-gray-700
                          hover:bg-gradient-to-r from-pink-200/90 to-blue-200/70
                         hover:border-1 hover:border-gray-300 hover:shadow-xl"
            >
              Services
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-gray-300/10
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl  font-semibold
                         text-gray-700
                          hover:bg-gradient-to-r from-pink-200/90 to-blue-200/70
                         hover:border-1 hover:border-gray-300 hover:shadow-xl"
            >
              Contact
            </Link>

          </div>

        </div>
      )}

    </>
  );
}

export default Navbar;

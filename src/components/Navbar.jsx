import { Link } from "react-router-dom";


function Navbar(){
    return (
        <div className="fixed w-full flex justify-between items-center p-6  bg-gray-300/50 rounded-lg m-2">
            <div className="text-2xl font-bold">M4K</div>
            <div className="flex gap-4 ">
                <Link className="hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" to='/'>Home</Link>
                  <Link className="hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" to='/about'>About</Link>
                    <Link className="hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" to='/services'>Services</Link>
                      <Link className="hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" to='/contact'>Contact</Link>
            </div>
            <button className="px-4 py-1.5 rounded-lg bg-gray-400/40">Login </button>
            
        </div>
    )
}

export default Navbar;

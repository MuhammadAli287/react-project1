import { ArrowBigRightDashIcon, ArrowRightIcon, KanbanIcon, RocketIcon, SatelliteDishIcon, SigmaIcon } from "lucide-react";
import Footer from "../components/Footer";


function About(){
    return (
        <>
        <section>
             <div className="text-center mt-10">
          <a className="text-blue-700 font-semibold m-4 px-6 py-1 rounded-2xl bg-blue-700/20" href="#">💮 Our Story</a> 
          <h1 className="mt-6 text-4xl md:text-5xl md:text-5xl font-bold">We Turn <span className="text-blue-400">Ideas</span> Into<br /> <span className="text-blue-400">Reality</span></h1>
          <p className="mt-4 p-2 md:px-50 md:text-2xl text-xl text-gray-600">mvpier was born from a simple belief: every great product starts with a great MVP. We're here to help founders like you validate ideas and launch products at lightning speed.</p>
        </div>
        <div className="p-6 grid md:grid-cols-2  lg:grid-cols-4 gap-4 justify-around items-center bg-gray-200/40 m-4 mt-10 shadow-xl">
            <div className="mt-6" >
                <h1 ><RocketIcon /></h1>
                <h1 className="text-4xl mt-2 mb-2 font-bold text-blue-600/70">100 +</h1>
                <p>MVPs Launched</p>
            </div>
            <div className="mt-6" >
                <SigmaIcon />
                <h1 className="text-4xl mt-2 mb-2 font-bold text-blue-600/70">2-8</h1>
                <p>Weeks to Launch</p>
            </div>
            <div className="mt-6">
                <ArrowBigRightDashIcon />
                <h1 className="text-4xl mt-2 mb-2 font-bold text-blue-600/70">95%</h1>
                <p>Client Success Rate</p>
            </div>
            <div className="mt-6">
                <SatelliteDishIcon />
                <h1 className="text-4xl mt-2 mb-2 font-bold text-blue-600/70">$50M+</h1>
                <p>Funding Raised</p>
            </div>
        </div>

        </section>
{/* 
        //  mission section  */}

        <section>
            <div className="p-8 grid md:grid-cols-2 mt-15 items-center bg-pink-100/40">
                <div className="p-8">
                    <h1 className="text-4xl md:text-5xl font-semibold">
                        Our <span className="text-blue-500">Mission</span>
                    </h1>
                    <p className="mt-8 text-gray-500 text-xl">We believe every founder deserves a technical partner who 
                        understands the urgency of opportunity. Traditional development is too slow,
                         too expensive, and too risky for early-stage startups.<br /> <br />
                          That's why we created a revolutionary approach to MVP development - one that combine
                          s speed, quality, and strategic thinking to help you validate your ideas and capture market opportunities before they disappear.</p>
                     <button className="text-white mt-4 text-xl font-semibold px-6 py-2.5 rounded-3xl bg-blue-500/90 hover:bg-blue-600/90 ">Partner With Us ➡</button>
                </div>
                <div className="p-6">
                    <img className="rounded-2xl " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMBB-EJiShNwBAE5gutBh4KOJxkx1uSlUIUkOQy46Nw&s=10' width='500rem'></img>
                </div>
            </div>

        </section>

        {/* journey section  */}
        <section>
            
                <div className="p-8 mt-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold">
                        Our <span className="text-blue-500">Journey</span>
                    </h1>
                    <p className="mt-8 text-gray-500 text-xl">From startup to the leading MVP development agency - here's how we built our reputation for excellence.</p>
                 
            </div>
            <div className="bg-gray-200/30 grid ">
                <div className="p-6 m-8 bg-white rounded-2xl shadow-xl  border-l-4 border-blue-500 hover:-translate-y-1 hover:shadow-2xl">
                   <h1 className="text-2xl font-bold">The Beginning</h1>
                   <p className="text-gray-600 mt-4">Founded by serial entrepreneurs who experienced the pain of slow, expensive development cycles.</p>
                    <button className="text-blue-700 mt-4  font-semibold px-6 py-1 rounded-2xl bg-blue-700/20">💮 First MVP launched in 3 weeks</button> 
                </div>
                <div className="p-6 m-8 mt-2 bg-white rounded-2xl shadow-xl border-l-4 border-blue-700 hover:-translate-y-1 hover:shadow-2xl">
                   <h1 className="text-2xl font-bold">Rapid Growth</h1>
                   <p className="text-gray-600 mt-4">Refined our process and built a world-class team of designers and developers.</p>
                    <button className="text-blue-700 mt-6  font-semibold px-6 py-1 rounded-2xl bg-blue-700/20" href="#">💮 50+ MVPs launched, $10M+ raised by clients</button> 
                </div>
                <div className="p-6 m-8 mt-2 bg-white rounded-2xl shadow-xl border-l-4 border-blue-800 hover:-translate-y-1 hover:shadow-2xl">
                   <h1 className="text-2xl font-bold">Scale & Impact</h1>
                   <p className="text-gray-600 mt-4">Expanded globally and launched our AI-accelerated development framework.</p>
                    <button className="text-blue-700 mt-6  font-semibold px-6 py-1 rounded-2xl bg-blue-700/20" href="#">💮 100+ MVPs, 95% success rate</button> 
                </div>
            </div>

        </section>

         {/* ready to start sec  */}
         <section className="bg-sky-600/70 text-white p-10 mt-10">
             <div className="p-8 mt-2 text-center">
                  <a className="text-gray-200 font-semibold m-4 px-6 py-1 rounded-2xl bg-gray-700/20" href="#">💮 Ready To Start?</a> 
                    <h1 className="text-4xl md:text-5xl font-bold mt-10">
                       Let's Build Your  <span className="font-serif">Dream</span> Together
                    </h1>
                    <p className="mt-8 text-gray-200 font-serif text-xl">Join the hundreds of founders who've turned their ideas into successful products with mvpier.</p>
                 
            </div>
            <div className="grid md:flex gap-4 justify-center  ">
                <button className="px-15 py-3  rounded-3xl bg-white text-blue-500 font-semibold hover:bg-gray-200">Start Your Journey </button> 
                <button className="px-15 py-3  rounded-3xl hover:bg-white border-2 border-white text-white hover:text-blue-600 font-semibold">See Our Work </button>
            </div>
         </section>

         <Footer />

        </>
    )
}

export default About;
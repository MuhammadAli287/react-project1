import { PersonStandingIcon } from "lucide-react";
import Footer from "../components/Footer";


function Services(){
    return(
        // services sec 
        <>
        <section className="p-10">
            <div className="p-8 mt-2 text-center">
                  <a className="text-gray-200 font-semibold m-4 px-6 py-1 rounded-2xl bg-gray-700/20" href="#">💮 Our Services</a> 
                    <h1 className="text-4xl md:text-6xl font-semibold font-serif mt-10">
                       From Idea To <br /><span className="font-serif text-blue-600">Market in</span> Weeks
                    </h1>
                    <p className="mt-5 md:px-45 text-gray-500 font-serif text-2xl">Choose the perfect MVP development service for your startup stage. Fast, affordable, and designed to help you validate your ideas quickly.</p>
                 
            </div>
            <div className="text-center rounded-2xl  flex  justify-center gap-10 ">
            <img className="rounded-2xl " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHxvyaeDJqbULx8toOEZlPmDC8dwoNjMKGDtjILJ71g&s=10' width='400rem'></img>
            <img className="rounded-2xl hidden md:block " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRUjUdi0ke0Hec96rRkAcJAC0E1KdVgbHCwRBMdenag&s=10' width='400rem'></img>
           </div>
        </section>

        {/* additional swrvices  */}
        <section className="bg-gray-200/30 p-10 mt-6">
            <h1 className="text-center mt-10 font-serif font-bold text-4xl md:text-5xl ">Additional <span className="text-blue-500">Services</span></h1>
            <p className="text-center text-xl md:text-2xl m-4 text-gray-600">Comprehensive support for every stage of your startup journey.</p>
            <div className="grid gap-6 md:grid-cols-3 mt-14">
                <div className="bg-white rounded-lg text-center p-8 border-1 border-gray-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    <button className="px-5 py-4 text-2xl rounded-lg bg-blue-600/50 text-center">🤵 </button>
                    <h1 className="mt-4 text-2xl font-bold">Market Validation</h1>
                    <p className="text-gray-600 mt-2">Test your assumptions before building. We help you design experiments, gather data, and make informed decisions.</p>
                </div>
                <div className="bg-white rounded-lg text-center p-8 border-1 border-gray-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    <button className="px-5 py-4 text-2xl rounded-lg bg-green-600/50 text-center">📩 </button>
                    <h1 className="mt-4 text-2xl font-bold">Technical Consulting</h1>
                    <p className="text-gray-600 mt-2">Get expert advice on technology choices, architecture decisions, and scaling strategies from our experienced team.</p>
                </div>
                <div className="bg-white rounded-lg text-center p-8 border-1 border-gray-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    <button className="px-5 py-4 text-2xl rounded-lg bg-red-700 text-center">💮 </button>
                    <h1 className="mt-4 text-2xl font-bold">Growth & Scaling</h1>
                    <p className="text-gray-600 mt-2">Ready to scale beyond your MVP? We provide ongoing development, optimization, and feature expansion services.</p>
                </div>
            </div>
        </section>

        {/* our process  */}
        <section className="p-10 mt-10">
            <h1 className="text-center text-4xl md:text-5xl font-serif font-bold">Our <span className="text-blue-600">Process</span></h1>
            <p className="text-gray-600 text-xl md:text-2xl text-center mt-4">A proven methodology that gets you from idea to launch faster than traditional development.</p>

            <div className="mt-20 gap-6 grid md:grid-cols-2 lg:grid-cols-4 ">
                <div className="text-center">
                    <button className="px-6 py-5 text-2xl rounded-lg bg-blue-600 text-center font-bold text-white">01</button>
                    <h1 className="mt-4 text-2xl font-bold">Discovery Call</h1>
                    <p className="text-gray-600 mt-2">We start with a deep dive into your idea, target market, and business goals to create a clear development roadmap.</p>
                </div>
                <div className="text-center">
                    <button className="px-6 py-5 text-2xl rounded-lg bg-blue-600 text-center font-bold text-white">02</button>
                    <h1 className="mt-4 text-2xl font-bold">Strategy & Planning</h1>
                    <p className="text-gray-600 mt-2">Define MVP scope, create user stories, design system architecture, and establish project timeline and milestones.</p>
                </div>
                <div className="text-center">
                    <button className="px-6 py-5 text-2xl rounded-lg bg-blue-600 text-center font-bold text-white">03</button>
                    <h1 className="mt-4 text-2xl font-bold">Design & Development</h1>
                    <p className="text-gray-600 mt-2">Rapid development cycles with weekly check-ins, regular demos, and continuous feedback integration.</p>
                </div>
                <div className="text-center">
                    <button className="px-6 py-5 text-2xl rounded-lg bg-blue-600 text-center font-bold text-white">04</button>
                    <h1 className="mt-4 text-2xl font-bold">Launch & Support</h1>
                    <p className="text-gray-600 mt-2">Deploy your MVP, set up analytics, provide launch support, and offer post-launch optimization guidance.</p>
                </div>

            </div>
        </section>

        {/* modern tech section  */}
        <section className="bg-pink-100/30 p-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mt-15">Modern <span className="text-blue-500 font-serif ">Technology Stack</span></h1>
            <p className="text-center font-serif text-xl mt-4 text-gray-600">We use<span className="text-blue-600"> cutting-edge technologies</span> to ensure your MVP is fast, scalable, and maintainable.</p>
        <div className="grid gap-6 md:grid-cols-3 mt-14">
                <div className="bg-white rounded-lg  p-8  shadow-xl hover:shadow-2xl">
                    <h1 className=" text-3xl ">🖥 </h1>
                    <h1 className="mt-4 text-2xl font-bold">Frontend Dev</h1>
                    <p className="text-gray-600  mt-2">React, Next.js, TypeScript <br/>Tailwind CSS, Framer Motion <br />Progressive Web Apps </p>
                </div>
                <div className="bg-white rounded-lg p-8  shadow-xl hover:shadow-2xl">
                    <button className=" text-3xl ">🌐 </button>
                    <h1 className="mt-4 text-2xl font-bold">Backend Dev</h1>
                    <p className="text-gray-600 mt-2">Node.js, Python, Go <br />PostgreSQL, MongoDB <br />Redis, Elasticsearch </p>
                </div>
                <div className="bg-white rounded-lg  p-8  shadow-xl hover:shadow-2xl">
                    <button className=" text-3xl ">📱 </button>
                    <h1 className="mt-4 text-2xl font-bold">Mobile App Dev</h1>
                    <p className="text-gray-600 mt-2">React Native, Flutter<br/>Native iOS & Android <br /> Cross-platform solutions  </p>
                </div>
            </div>
        </section>

         <section className="bg-blue-600/80 text-white p-10 mt-10">
             <div className="p-8 mt-2 text-center">
                  <a className="text-gray-200 font-semibold m-4 px-6 py-1 rounded-2xl bg-gray-700/20" href="#">💮 Ready To Build?</a> 
                    <h1 className="text-4xl md:text-5xl font-bold mt-10">
                       Ready to Build Your  <span className="font-serif">M4k</span> Together
                    </h1>
                    <p className="mt-8 text-gray-200 font-serif text-xl">Let's discuss your project and find the perfect development approach for your startup.</p>
                 
            </div>
            <div className="grid md:flex gap-4 justify-center  ">
                <button className="px-15 py-3  rounded-3xl bg-white text-blue-500 font-semibold">Start Your Project </button> 
                <button className="px-15 py-3  rounded-3xl hover:bg-white border-2 border-white text-white hover:text-blue-600 font-semibold">Get Free Quote </button>
            </div>
         </section>

         <Footer />
        </>
    )
}

export default Services;
import { FeatherIcon, FlashlightIcon, FolderCheckIcon, FolderClosedIcon, FoldVerticalIcon, MarsStrokeIcon, PanelsTopLeftIcon, SigmaIcon, StarCheckIcon } from "lucide-react"


function Features(){
    return(
        <>
        <section>
             <div className="text-center p-6">
          <a className="text-blue-700 font-semibold m-4 px-6 py-1 rounded-2xl bg-blue-700/20" href="#"> features</a>
          <h1 className="text-4xl font-semibold mt-4 md:font-bold">Ship MVPs at Lightning Speed</h1>
         <p className="p-4 text-gray-700 md:text-2xl "> From concept to deployment in weeks, not months. Built for founder who move fast. </p>
      </div>
      {/* parent div  */}
      <div className="grid md:grid-cols-2 ">
        <div className="bg-emerald-600 text-white p-6 m-4 rounded-2xl">
            <SigmaIcon />
            <h1 className="text-2xl font-bold md:text-3xl mt-4">Rapid Prototyping</h1>
            <p className="mt-4 text-xl">Transform your idea into a working MVP in just 2-4 weeks. Our streamlined process eliminates the typical 3-6 month development cycle.</p>
           <img className="mt-6 rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAARoMA1pIMDUwqFlbt2kEFPHXrhIFTl9CnuSciNiFOw&s=10" width='350rem'></img>

        </div>
        {/* parent of right side card  */}
        <div className="text-white  m-4 rounded-lg  grid  md:grid-cols-2 gap-2 ">
            <div className="bg-emerald-600 p-6 rounded-lg ">
                <h1><FolderClosedIcon /></h1>
                <h1 className="mt-4 text-xl font-bold">Full-Stack Dev</h1>
                <p className="mt-3 mb-6 text-gray-300">Complete end-to-end development from UI to database deployment.</p>
            </div>
             <div className="bg-emerald-600 p-6 rounded-lg">
                <h1><FolderClosedIcon /></h1>
                <h1 className="mt-4 text-xl font-bold">User Testing Dev</h1>
                <p className="mt-3 mb-6 text-gray-300">Built-in analytics and feedback loops to validate your assumptions.</p>
            </div>
            
             <div className="bg-emerald-600 p-6 col-span-2 rounded-lg  ">
                <h1> <MarsStrokeIcon /></h1>
                <h1 className="mt-4 text-xl font-bold">Market Validation</h1>
                <p className="mt-3 mb-6 text-gray-300">Launch, measure, learn. Get real user feedback before investing in full development.</p>
                <div className="flex gap-6 text-center">
                    <h1 className="text-2xl font-bold">2-4 <br /> <span className="text-xs text-gray-300">weeks to launch</span></h1>
                    <h1 className="text-2xl font-bold">90% <br /> <span className="text-xs text-gray-300">faster iteration</span></h1>
                    <h1 className="text-2xl font-bold">10x <br /> <span className="text-xs text-gray-300">Cost efficient</span></h1>
                </div>
            </div>

            </div>
      </div>

      <div className="text-white m-4 rounded-lg  grid grid-cols-2  md:grid-cols-3 gap-2 ">
          
           <div className="grid  md:grid-cols-2 gap-2 text-center ">
            <div className="bg-emerald-600 p-8  rounded-lg ">
                <h1><FolderClosedIcon /></h1>
                <h1 className="mt-2 text-xl font-bold">Scalable</h1>
                <p className="mt-3 mb-6 text-gray-300">Architecture that grows with your success from MVP to unicorn.</p>
            </div>
            <div className="bg-emerald-600 text-center p-6 rounded-lg ">
                <h1 ><PanelsTopLeftIcon /></h1>
                <h1 className="mt-4 text-xl font-bold">Expert Team</h1>
                <p className="mt-3 mb-6 text-gray-300">Complete end-to-end development from UI to database deployment.</p>
            </div>
            </div>


            <div className="bg-emerald-600 w-full p-6 col-span-2  rounded-lg ">
                <h1 className="mt-4 text-xl font-bold">Modern Tech Stack</h1>
                <p className="mt-3 mb-6 text-gray-300">Built with the latest technologies for performance, scalability, and maintainability.</p>
                <div className=" grid items-center grid-cols-2 gap-2 md:grid-cols-4">
                    <div className="text-white text-center p-4 md:p-2 bg-gray-300/20 rounded-2xl">
                        <h1 className="text-2xl font-bold">React</h1>
                        <p className="text-gray-300">Frontend</p>
                    </div>
                    <div className="text-white text-center p-4 md:p-2 bg-gray-300/20 rounded-2xl">
                        <h1 className="text-2xl font-bold">Node.js</h1>
                        <p className="text-gray-300">Backend</p>
                    </div>
                    <div className="text-white text-center p-4 md:p-2 bg-gray-300/20 rounded-2xl">
                        <h1 className="text-2xl font-bold">AWS</h1>
                        <p className="text-gray-300">Cloud</p>
                    </div>
                    <div className="text-white text-center p-4 md:p-2 bg-gray-300/20 rounded-2xl">
                        <h1 className="text-2xl font-bold">AI/ML</h1>
                        <p className="text-gray-300">Intelligance</p>
                    </div>
                </div>
            </div>
      </div>

        </section> 

        </>

    )
}

export default Features
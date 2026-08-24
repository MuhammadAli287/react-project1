import { HeartCrackIcon, HomeIcon, InspectionPanelIcon, RockingChairIcon } from "lucide-react";


function Home(){
    return (
       <>

       {/* section1  */}
       <section>
        <div className="grid grid-cols-1 items-center text-center md:grid-cols-3 gap-6 px-15 py-24 bg-gradient-to-r from-pink-200 to-blue-100">

        <div >
        <h1 className="text-5xl"><b>We Build</b> Ideas<b> That Make Impact.</b></h1>
        <p className="mt-5 font-semibold">We design, develop, and launch your first version in weeks.</p>
        <button className="px-30 py-2 mt-6 rounded-full  bg-gradient-to-r from-pink-400 to-blue-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-400">Lets Build Your Pitch</button>
        </div>
          <div className="mt-8 ml-15">
            <img className="rounded-2xl" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsQTsN0Jh8-6vuru-ar8437SQj1zI2B-xK9-BT-5QjQ&s' width='300rem' ></img>
          </div>

         <div className=" hidden  md:grid grid-cols-1  ">
         <div className="mb-3">
            <img className="rounded-2xl" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07mmQQN9WkrqDvatTxel0KiBcP5ebtbO5sGeEXjD9Hg&s=10' width='300rem' ></img>
        </div>
        <div >
            <img className="rounded-2xl" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThH4KKeEEXSVBnuGTUVVUDJj3pL-5Z9qoUioq9m-3e7w&s=10' width='300rem' ></img>
        </div>
        </div>


        </div>

       </section>
     
     {/* goals  */}
       <section className="mt-10">
        <div className="text-center">
          <a className="text-blue-700 font-semibold m-4 px-6 py-1 rounded-2xl bg-blue-700/20" href="#">🔗 Goals</a>
         <p className="p-6 text-3xl text-blue-950 font-semibold md:text-5xl"> <span className="text-blue-700">Mvpier</span> helps founders validate ideas quickly and efficiently. By focusing on lean development, rapid prototyping, and continuous iteration, we empower startups to test their. </p>
      </div>
       </section>

     {/* process  */}
       <section className="p-6 mt-10">
        <div className="text-center">
          <a className="text-blue-700 font-semibold m-4 px-6 py-1 rounded-2xl bg-blue-700/20" href="#">🔗 Our Process</a>
          <h1 className="text-4xl font-bold mt-4">From Idea to <span className="text-blue-600/70">Live Product</span> in Record Time</h1>
         <p className="p-6 text-2xl text-gray-500  md:text-3xl">  We don't just build MVPs - we accelerate your entire journey from concept to market validation. Here's how we turn your vision into reality. </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-l from-pink-50 to-pink-100/50 p-4">
        <div className=" flex items-center" >
            <img className="rounded-3xl " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEqvXHi27DdM260nHjsGo_VsBd7vSxvd2rwDoDu6giQ&s=10' width='500rem' ></img>
        </div>

        <div className="mt-4">

          <div className="flex gap-4 items-center mb-4">
            <h1 className="px-4  py-2 font-bold text-2xl bg-purple-800/40 rounded-full">1</h1>
            <div>
              <h1 className="text-2xl font-semibold">Discovery & Strategy</h1>
              <p className="text-gray-600">We dive deep into your vision, market, and user needs to define the core features that matter most for validation.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center  mb-4">
            <h1 className="px-4  py-2 font-bold text-2xl bg-purple-800/40 rounded-full">2</h1>
            <div>
              <h1 className="text-2xl font-semibold">Discovery & Strategy</h1>
              <p className="text-gray-600">We dive deep into your vision, market, and user needs to define the core features that matter most for validation.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center  mb-4">
            <h1 className="px-4  py-2 font-bold text-2xl bg-purple-800/40 rounded-full">3</h1>
            <div>
              <h1 className="text-2xl font-semibold">Discovery & Strategy</h1>
              <p className="text-gray-600">We dive deep into your vision, market, and user needs to define the core features that matter most for validation.</p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl border-1 border-gray-300">
            <p className="text-2xl font-semibold text-blue-700">Why Founders Choose Us ?</p>
            <div className="flex justify-around mt-4">
              <h1 className="text-2xl text-center font-semibold text-blue-600">2-8<br /> weeks to launch</h1>
              <h1 className="text-2xl text-center font-semibold text-blue-600">50+<br /> MVPs launched</h1>
            </div>
          </div>
       
        </div>



      </div>

       </section>

     <div className="flex gap-6 p-6 items-center">
       <HomeIcon color='blue' strokeWidth={5}  />
       <HeartCrackIcon color="red" />
       <RockingChairIcon size={50} />
       <InspectionPanelIcon fill="yellow" size={40} />
        </div>
       </>
    )
}

export default Home;
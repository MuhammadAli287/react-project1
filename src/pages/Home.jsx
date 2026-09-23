import { HeartCrackIcon, HomeIcon, InspectionPanelIcon, RockingChairIcon } from "lucide-react";
import Features from "../components/Features";
import Footer from "../components/Footer";



function Home(){
    return (
       <>

       {/* section1  */}
       <section>
        <div className="grid grid-cols-1 items-center text-center md:grid-cols-3 gap-6 px-15 py-24 bg-gradient-to-r from-pink-200 to-blue-100">

        <div >
        <h1 className="text-3xl md:text-5xl"><b>We Build</b> Ideas<b> That Make Impact.</b></h1>
        <p className="mt-5 font-semibold">We design, develop, and launch your first version in weeks.</p>
        <button className="px-15 md:px-20 lg:px-30  py-2 mt-6 font-semibold rounded-full  bg-gradient-to-r from-pink-400 to-blue-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-400">Lets Build Your Pitch</button>
        </div>
          <div className="mt-8 ml-9 md:ml-20 text-center">
            <img className="rounded-3xl" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsQTsN0Jh8-6vuru-ar8437SQj1zI2B-xK9-BT-5QjQ&s' width='300rem'  ></img>
          </div>

         <div className=" hidden mt-8 md:grid grid-cols-1  items-center ">
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
         <p className="p-6 md:px-30 text-xl md:text-3xl text-blue-950 font-semibold "> <span className="text-blue-700">Mvpier</span> helps founders validate ideas quickly and efficiently. By focusing on lean development, rapid prototyping, and continuous iteration, we empower startups to test their. </p>
      </div>
       </section>

     {/* process  */}
       <section className="p-6 mt-10">
        <div className="text-center">
          <a className="text-blue-700 font-semibold m-4 px-6 py-1 rounded-2xl bg-blue-700/20" href="#">🔗 Our Process</a>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">From Idea to <span className="text-blue-600/70">Live Product</span> in Record Time</h1>
         <p className="p-6 text-xl md:text-2xl text-gray-500  md:text-3xl">  We don't just build MVPs - we accelerate your entire journey from concept to market validation. Here's how we turn your vision into reality. </p>
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

       <Features />

       {/* success stories  */}
       <section className="bg-gray-300/20 p-6 mt-16 ">
        <div className="text-center mt-16">
          <a className="text-blue-700 font-semibold m-4 px-6 py-1 rounded-2xl bg-blue-700/20" href="#">🔗 Success Stories</a> 
          <h1 className="mt-4 text-2xl md:text-4xl font-bold">Founder Who Moved Fast & Won</h1>
          <p className="mt-4 text-gray-600">Real stories from founders who shipped their MVPs in weeks, not months</p>
        </div>

      
        <div className="bg-white shadow-xl shadow-gray-400 gap-4 p-6 mt-6 mb-15 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="text-center" >
            <h1 className="text-3xl  font-bold text-blue-700">200+</h1>
            <p>MVPs Shipped</p>
          </div>
          <div className="text-center"  >
            <h1 className="text-3xl  font-bold text-blue-700">3.2 Weeks</h1>
            <p>Avg. Launch Time</p>
          </div>
          <div className="text-center"  >
            <h1 className="text-3xl  font-bold text-blue-700">$50M +</h1>
            <p>Raised by Clients</p>
          </div>
          <div className="text-center" >
            <h1 className="text-3xl  font-bold text-blue-700">95%</h1>
            <p>Success Rate</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="text-white mt-10 p-6 rounded-lg bg-blue-600/70">
            <h1 className='text-2xl'>🤵</h1>
            <p className="text-xl mt-8">mvpier turned our napkin sketch into a working SaaS platform in just 3 weeks. 
              We launched, got our first 100 users, and closed our seed round 2 months ahead of schedule.</p> <br />
            <h1 className="text-2xl font-bold">Muzaffar Iqbal</h1>
            <p className="text-gray-200">Founder & CEO, Muzaffar Holdings</p>
            <br />
            <h1>⭐⭐⭐⭐⭐ 5.0</h1>
          </div>

          <div className=" mt-10 p-8 rounded-lg bg-white">
            <h1 className='text-2xl'>👩</h1>
            <p className="text-xl mt-8">The speed was incredible. From idea to paying customers in 4 weeks. Their MVP approach helped us 
              validate the market before investing in unnecessary features.</p> <br />
            <h1 className="text-2xl font-bold">Mahrukh Muzaffar</h1>
            <p className="text-gray-400">Co-Founder, Muzaffar Holdings</p>
            <br />
            <h1>⭐⭐⭐⭐⭐ 5.0</h1>
          </div>
        </div>
       </section>

         {/* stay updated sec */}
         <section className="bg-gray-200/20 p-6 flex flex-col justify-center items-center ">
           <div className="text-center mt-20">
          <a className="text-blue-700 font-semibold m-4 px-6 py-1 rounded-2xl bg-blue-700/20" href="#">💮 Stay Updated</a> 
          <h1 className="mt-6 text-3xl md:text-5xl font-bold">Get MVP Insights & <span className="text-blue-500">Startup Tips</span></h1>
          <p className="mt-4 p-2 text-xl text-gray-600">Join 500+ founders who receive our weekly insights on MVP development, startup strategies, and the latest trends in rapid prototyping. Plus, get exclusive access to our founder resources and case studies.</p>
        </div>
        <div className="p-10 mt-4 shadow-xl border-1  border-gray-300 bg-white rounded-lg flex flex-col justify-center hover:-translate-y-2 ">
            <h1 className="text-center font-semibold text-2xl mb-4 ">Sign in</h1>
          <div className=" flex flex-col gap-4 md:flex-row justify-center  ">
            <input className="font-semibold text-center px-12 py-2 rounded-3xl border-1 border-gray-400 hover:bg-gray-100" type="email" placeholder="Email-Address" />
            <button className="text-white font-semibold text-center bg-blue-500 px-22 py-2.5 rounded-3xl hover:shadow-2xl hover:bg-blue-600">Get MVP Insight</button>
          </div>
          
          <h1 className="text-center mt-6 text-gray-500">🚀Weekly insights 🌍Founder resourse</h1>
        </div>

        <p className=" mt-10 text-2xl text-gray-600 ">Trusted By Founders. ⭐</p>
         </section>

         {/* mupier sec last  */}

         <div className="font-serif p-20 mt-20 m-4 bg-gradient-to-r from-45% from-teal-950 to-cyan-800 text-4xl md:text-6xl text-center  text-white   rounded-lg">
          <h1><i>From Founders, For Founders</i></h1>
         </div>

         <Footer />

        
       




        {/* for icons use luicide react give icons as components */}

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
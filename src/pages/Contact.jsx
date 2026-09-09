import Footer from "../components/Footer";


function Contact(){
    return (
        <>
        <section className="py-20">
             <div className="p-4 mt-10 text-center">
                  <a className="text-gray-200 font-semibold m-4 px-6 py-1 rounded-2xl bg-gray-700/20" href="#">💮 Get in Touch</a> 
                    <h1 className="text-4xl md:text-6xl font-semibold font-serif mt-10">
                       Ready to Build <br /><span className="font-serif text-blue-600">Your M4K ?</span> 
                    </h1>
                    <p className="mt-5 md:px-45 text-gray-500 font-serif text-2xl">Let's discuss your project and see how we can help you launch your idea quickly and effectively. Get a free consultation and custom quote for your MVP.</p>
                 
            </div>
            <div className="p-2 mt-14 grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-600">2 hours</h1>
                    <p className="text-gray-600 ">Response Time</p>
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-600 animate-pulse">Free</h1>
                    <p className="text-gray-600 ">Consultation</p>
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-600">24/7</h1>
                    <p className="text-gray-600 ">Support</p>
                </div>
            </div>
             
        </section>
        <hr className="ml-8 mr-8 text-gray-400" />
       

        <section className="p-10 text-2xl text-center ">
             <a className="text-gray-400 font-semibold m-4 px-6 py-1 rounded-2xl bg-gray-700/20" href="#">💮 Choose Us ?</a> 
                 <h1 className="font-bold mt-10 text-4xl font-serif"> Why Choose M4k ?</h1>
                 <p className="text-gray-500 mt-5">✔ 2-8 week delivery timeline</p>
                 <p className="text-gray-500 mt-2">✔ 100+ successful MVP launches</p>
                  <p className="text-gray-500 mt-2">✔ 95% client success rate</p>
                   <p className="text-gray-500 mt-2">✔ Transparent pricing & communication</p>
                    <p className="text-gray-500 mt-2">✔ Post-launch support included</p>
        </section>


        <section className="bg-blue-600/80 text-white p-6  m-15 rounded-3xl">
             <div className="p-8 mt-2 text-center">
                  <a className="text-gray-200 font-semibold m-4 px-6 py-1 rounded-2xl bg-gray-700/20" href="#">💮 Expert Consulation</a> 
                    <h1 className="text-4xl md:text-5xl font-bold mt-10">
                      Still Have  <span className="font-serif">Questions ?</span> 
                    </h1>
                    <p className="mt-8 text-gray-200 font-serif text-xl">Schedule a free 30-minute consultation with our MVP experts. Get personalized answers and a custom roadmap for your specific project.</p>
                 
            </div>
            <div className="grid md:flex gap-4 justify-center  ">
                <button className="px-15 py-3  rounded-3xl bg-white text-blue-500 font-semibold">Book Free Consulation </button> 
                <button className="px-15 py-3  rounded-3xl hover:bg-white border-2 border-white text-white hover:text-blue-600 font-semibold">Email Our Experts</button>
            </div>
         </section>

         <section className="bg-blue-700/80 text-white p-10   ">
             <div className="p-8 mt-2 text-center">
                  {/* <a className="text-gray-200 font-semibold m-4 px-6 py-1 rounded-2xl bg-gray-700/20" href="#">💮 Expert Consulation</a>  */}
                    <h1 className="text-4xl md:text-5xl font-bold mt-10">
                     Ready to Get <span className="font-serif">Started ?</span> 
                    </h1>
                    <p className="mt-8 text-gray-200 font-serif text-xl">Join 100+ founders who've successfully launched their MVPs with mvpier. Let's turn your idea into reality.</p>
                 
            </div>
            <div className="grid md:flex gap-4 justify-center  ">
                <button className="px-15 py-3  rounded-3xl bg-white text-blue-500 font-semibold">Get Free Quote </button> 
                <button className="px-15 py-3  rounded-3xl hover:bg-white border-2 border-white text-white hover:text-blue-600 font-semibold">View Our Work</button>
            </div>
         </section>

         <Footer />
        </>
    )
}

export default Contact;
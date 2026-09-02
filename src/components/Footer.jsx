

function Footer(){
    return (
       <div className="p-6 text-center mt-10 grid md:grid-cols-3 justify-center items-center">
        <div>
            <h1 className="text-3xl font-bold">MUPIER</h1>
            <p className="text-gray-700">Accelerating startups from idea to market with rapid MVP development. Turn your vision into reality 
                in weeks, not months.</p><br />
               <h1 className="text-blue-700">MuzMah@M4K.com</h1>
        </div>
        <div className="mt-8">
            <h1 className="text-3xl font-bold">Services</h1>
            <ol className="text-gray-700">
                <li>M4K Development</li>
                 <li>Rapid Prototyping</li>
                  <li>Full-Stack Development</li>
                   <li>User Testing</li>
                    <li>Market Validation</li>
            </ol>
        </div>
              <div className="mt-8">
            <h1 className="text-3xl font-bold">Get Started</h1>
            <ol className="text-gray-700">
                <li>Our Process</li>
                 <li>What We Build</li>
                  <li>Book a Call</li>
                   <li>Success Stories</li>
            </ol>
        </div>
       </div>
    )
}

export default Footer;
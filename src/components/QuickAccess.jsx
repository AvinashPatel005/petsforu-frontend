const QuickAccess = () => {
    return (
      <footer className="bg-gray-200 w-full text-black py-10 ">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-xl font-bold">Get In Touch</h2>
            <p className="text-sm text-gray-700">
              24/7 Customer service helpline is available.
            </p>
            <div className="mt-3 space-y-2">
              <p><i className="bi bi-geo-alt"></i> Location, City, Country</p>
              <p><i className="bi bi-envelope"></i> info@example.com</p>
              <p><i className="bi bi-phone"></i> +012 345 67890</p>
            </div>
          </div>
  
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul>
              {["Home", "About Us", "Our Services", "Products", "Manage Subscription", "Contact Us"].map((link) => (
                <li key={link} className="hover:text-highlight2 transition cursor-pointer">➜ {link}</li>
              ))}
            </ul>
          </div>
  
        
          <div>
            <h2 className="text-xl font-bold">Newsletter</h2>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-highlight2"
            />
            <button className="w-full mt-3 bg-primary text-white py-2 rounded hover:bg-highlight2 transition">
              Sign Up
            </button>
  
            <div className="mt-5">
              <h3 className="font-semibold">Follow Us</h3>
              <div className="flex space-x-3 mt-2">
                {[
                  { name: "bi-twitter", link: "#" },
                  { name: "bi-facebook", link: "#" },
                  { name: "bi-linkedin", link: "#" },
                  { name: "bi-youtube", link: "#" }
                ].map((icon, index) => (
                  <a key={index} href={icon.link} className="text-primary hover:text-highlight2 transition text-xl">
                    <i className={icon.name}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default QuickAccess;
  
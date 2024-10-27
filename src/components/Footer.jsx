const Footer = () => {
    return (
      <footer>
        <div className="container px-6 py-12 mx-auto">
        <div class="text-center">
            <h2 class="text-2xl font-semibold text-white">Take the Leap into AI-Powered Innovation!</h2>

            <p class="max-w-md mx-auto mt- text-gray-400">Book a free consultation with us</p>

            <div class="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-center">
                <button class="w-full px-5 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Book now</button>
            </div>
        </div>
  
          <hr className="my-6 md:my-10 border-gray-700" />
  
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-white">Quick Link</p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:underline"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
                >
                  Who We Are
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
                >
                  Our Philosophy
                </a>
              </div>
            </div>
  
            <div>
              <p className="font-semibold text-white">Industries</p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
                >
                  IT
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
                >
                    Chemical
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
                >
                  Mechanical
                </a>
              </div>
            </div>
  
            <div>
              <p className="font-semibold text-white">Services</p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
                >
                  LLM and Chatbot Development
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
                >
                  AI Integrations
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
                >
                  NLP
                </a>
              </div>
            </div>
  
            <div>
              <p className="font-semibold text-white">Contact Us</p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
                >
                  +1111 1111 11111
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline"
                >
                  office@bluediamond.ai
                </a>
              </div>
            </div>
          </div>
  
          <hr className="my-6 md:my-10 border-gray-700" />
  
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <a href="#" className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out lg:pr-8">
                bluediamond.ai
            </a>
  
            <p className="mt-4 text-sm sm:mt-0 text-gray-300">
              © Copyright 2024. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
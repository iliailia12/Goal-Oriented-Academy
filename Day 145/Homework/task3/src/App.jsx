// 3) შექმენით <DogComponent /> კომპონენტი, რომელსაც ექნება სურათი, სათაური აღწერა და ღილაკი.
// გასტილეთ ეს კომპონენტი
// სურათი გადმოიწერეთ და შეინახეთ პროექტის ფოლდერში.
// დააიმპორტეთ სურათი კომპონენტში და დაარენდერეთ


/* The above code is a React component named `App` that creates a webpage layout for a pet and animal-related website. It includes various elements such as text content, buttons, images, and illustrations styled using Tailwind CSS classes. The layout is designed to be responsive and visually appealing, with a focus on showcasing the brand "Drool" and engaging users with interactive elements like buttons and illustrations. */
   function App() {
      return (
        <body className="bg-white flex items-center justify-center min-h-screen p-4">
          <div className="relative flex flex-col md:flex-row bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-lg max-w-6xl w-full overflow-hidden" style={{ minHeight: 400 }}>
            {}
            <div className="relative flex-1 px-8 py-10 md:py-16 md:px-14 flex flex-col justify-center">
              {}
              <div className="absolute top-6 left-6 flex items-center space-x-1">
                <img alt="Black dog icon logo"  className="w-6 h-6 object-contain"  height="24"  src="https://storage.googleapis.com/a1aa/image/f26d349d-a946-46b2-677f-d280fa33d210.jpg"   width="24"  />
                <span className="font-extrabold text-black text-lg select-none">DROOL</span>
              </div>
              {}
              <span className="text-xs text-black/80 mb-1 select-none">02</span>
              {}
              <h1 className="text-4xl md:text-5xl font-extrabold text-black flex items-center gap-2 leading-tight">
                Drool
                <svg    className="w-7 h-7 text-black"  fill="none"  stroke="currentColor"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="3"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" >
                  <path d="M6.5 6.5l-4-4m0 0L6.5 6.5m-4-4L3 3m0 0L6.5 6.5"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 15v6m0-6a3 3 0 0 0 3-3m-3 3a3 3 0 0 1-3-3"></path>
                </svg>
              </h1>
              {}
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#d9c92a] leading-tight mt-1 select-none"> Pet And Animal</h2>
              {}
              <p className="text-sm md:text-base text-black mt-4 max-w-md leading-relaxed select-none"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
              {}
              <div className="mt-6 flex space-x-4 max-w-xs">
                <button className="bg-black text-white text-sm md:text-base px-5 py-2 rounded-sm font-normal hover:brightness-90 transition select-none">  Read More</button>
                <button className="bg-[#d9c92a] text-black text-sm md:text-base px-5 py-2 rounded-sm font-normal hover:brightness-90 transition select-none"> Contact Us</button>
              </div>
              {}
              <img
                alt="Faint yellowish cartoon dog sitting with tongue out, bottom left"
                className="absolute bottom-6 left-10 w-40 opacity-20 pointer-events-none select-none"
                height="120"
                src="https://storage.googleapis.com/a1aa/image/3af99335-ae71-4fb7-a144-52b89e45444f.jpg"
                style={{ userSelect: "none" }}
                width="160"
              />
              <div className="hidden md:block absolute top-16 bottom-16 right-0 w-[2px] bg-[#d9c92a] opacity-90"></div>
              <div
                className="hidden md:flex flex-col space-y-6 absolute top-1/3 left-28 opacity-20 pointer-events-none select-none"
                style={{ userSelect: "none" }}
              >
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm-4 4c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm-8 8c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2z"></path>
                </svg>
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm-4 4c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm-8 8c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2z"></path>
                </svg>
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm-4 4c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm-8 8c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2z"></path>
                </svg>
              </div>
            </div>
            {/* Right side with dog illustration */}
            <div className="relative flex-1 flex items-center justify-center overflow-visible">
              <div
                className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full bg-[#d9c92a] opacity-100 pointer-events-none select-none"
                style={{ userSelect: "none" }}
              ></div>
              <div
                className="absolute -top-10 -right-10 w-[240px] h-[240px] rounded-full bg-[#c6c6c6] opacity-50 pointer-events-none select-none"
                style={{ userSelect: "none" }}
              ></div>
              <img
                alt="Cartoon dog holding newspaper in mouth standing on hind legs with another dog standing behind, yellow and gray circular background"
                className="relative w-[320px] h-[240px] object-contain select-none"
                height="240"
                src="https://storage.googleapis.com/a1aa/image/d2c543e1-062e-422f-5366-dce73632ccbc.jpg"
                style={{ userSelect: "none" }}
                width="320"
              />
            </div>
            {}
            <div
              className="absolute top-6 right-6 flex items-center space-x-6 text-white text-lg select-none"
              style={{ userSelect: "none" }}
            >
              <button aria-label="Search" className="hover:brightness-90 transition">
                <i className="fas fa-search"></i>
              </button>
              <button
                aria-label="Menu"
                className="flex flex-col justify-center space-y-1 hover:brightness-90 transition"
              >
                <span className="block w-6 h-[2px] bg-white rounded"></span>
                <span className="block w-6 h-[2px] bg-white rounded"></span>
                <span className="block w-6 h-[2px] bg-white rounded"></span>
              </button>
            </div>
            {/* Top left bone and heart faint */}
            <div
              className="absolute top-4 left-4 flex flex-col items-center space-y-2 opacity-20 pointer-events-none select-none"
              style={{ userSelect: "none" }}
            >
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5 6.5l-4-4m0 0L6.5 6.5m-4-4L3 3m0 0L6.5 6.5" stroke="none"></path>
                <circle cx="6" cy="6" r="2"></circle>
                <circle cx="18" cy="18" r="2"></circle>
                <path d="M6 6l12 12"></path>
              </svg>
              <svg   className="w-6 h-6 text-pink-400"   fill="currentColor"   viewBox="0 0 24 24"   xmlns="http://www.w3.org/2000/svg"  >
                <path d="M12 21s-6-4.35-6-9a4.5 4.5 0 0 1 9 0 4.5 4.5 0 0 1 9 0c0 4.65-6 9-6 9z"></path>
              </svg>
            </div>
            {}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 select-none"
              style={{ userSelect: "none" }}
            >
              <span
                aria-label="Slide 1"
                className="w-4 h-4 rounded-full border-2 border-black bg-white cursor-pointer"
              ></span>
              <span
                aria-label="Slide 2"
                className="w-4 h-4 rounded-full border-2 border-black bg-white cursor-pointer"
              ></span>
              <span
                aria-label="Slide 3"
                className="w-4 h-4 rounded-full border-2 border-black bg-white cursor-pointer"
              ></span>
              <span
                aria-label="Slide 4"
                className="w-4 h-4 rounded-full border-2 border-black bg-white cursor-pointer"
              ></span>
            </div>
          </div>
        </body>
      );
    }
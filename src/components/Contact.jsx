import NavBar from "./NavBar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="background min-h-screen bg-gray-50 text-gray-100">
        <div className="primaryContainer min-h-screen bg-slate-700 mx-1 p-4 rounded-3xl">
          <NavBar />
          <main className="relative z-10 px-10 py-8">
            {/* BG Image  */}
            <div className="contactImage absolute inset-0 opacity-30 lg:hidden pointer-events-none">
              <img
                src="/Phone.svg"
                alt="Image of a Telephone"
                className="w-full h-full"
              />
            </div>

            {/* Title */}
            <div className=" priContactText mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-left">
                Contact Us
              </h1>
            </div>

            {/* Two-column section */}
            <div className="priContent flex flex-col lg:flex-row justify-between items-start gap-12">
              {/* LEFT — Form */}
        <div className="contactForm w-full lg:w-1/2 z-10 max-w-lg">
                <form className="flex flex-col gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="nameInput bg-gray-400 p-3 rounded-4xl "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="emailInput bg-gray-400 p-3 rounded-4xl "
                  />

                  <textarea
                    placeholder="Message"
                    rows="5"
                    className="messageInput bg-gray-400 p-3 rounded-4xl "
                  ></textarea>

                   <button 
                   aria-label="Send Message"
                   className="startButton mt-6 text-[14px] bg-yellow-400 rounded-4xl px-4 py-4 w-full sm:w-60  
                shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-500 hover:scale-105">
                  Send Message
                </button>
                </form>
              </div>

              {/* RIGHT — Image */}
              <div className="contactImage w-full lg:w-1/2 flex justify-end hidden lg:flex">
                <img
                  src="/Phone.svg"
                  alt="Image of a Telephone"
                  className="w-full h-full"/>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;

import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="background min-h-screen bg-gray-50 text-gray-100">
        <div className="primaryContainer min-h-screen bg-slate-700 mx-1 p-4 rounded-3xl ">
          <NavBar />
          <main className="introSection relative w-full min-h-screen flex flex-col lg:flex-row-reverse items-center justify-between px-6 md:px-12 lg:px-16 py-10 overflow-hidden">
            {/* BG-Image for md:, sm: */}
            <div className="absolute inset-0 opacity-30 lg:hidden pointer-events-none">
              <img
                src="/Homepage_Light_bulb.png"
                alt="Light Bulb Background"
                className="w-full h-full object-cover rotate-12"
              />
            </div>
            {/* Image RIGHT */}
            <div className="hidden lg:block">
              <img
                src="/Homepage_Light_bulb.png"
                alt="Light bulb"
                className="w-96 rotate-12"
              />
            </div>

            {/* LEFT */}
            <div className="introText relative z-10 max-w-lg text-center m-4 my-20 md:m-6 lg:m-8 lg:text-left">
              <h1 className=" primaryIntroText font-black text-4xl md:text-5xl lg:text-6xl">
                The Cognitive Threshold Test
              </h1>

              <p className="secondaryIntroText mt-4 text-[14px]">
                Most people underestimate their intelligence.
                <br />
                This assessment reveals where you truly stand.
              </p>

              <button
              aria-label="Start Assessment"
                className="startButton mt-6 text-[14px] bg-yellow-400 rounded-4xl px-4 py-4 w-full sm:w-60  
                shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-500 hover:scale-105">
                <Link to="/select">
                  Start Assessment
                </Link>
              </button>
            </div>
          </main>
        </div>

        <div className="secondaryContainer  bg-slate-700 m-6 p-3 rounded-lg">
          <p className="text-center">
            This is not a school test. <br /> This is a cognitive benchmark
            designed to estimate how your mind compares to others.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;

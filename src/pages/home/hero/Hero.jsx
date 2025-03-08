import facebookLogo from "../../../assets/facebook.png";
import hero from "../../../assets/hero.png";
import arrow from "../../../assets/arrow.png";
import ellipse from "../../../assets/ellipse.png";

const Hero = () => {
  return (
    <div className="py-24 text-center lg:text-left">
      {/* Hero Section */}
      <div className="flex flex-col 2xl:flex-row lg:items-end gap-6 mb-32">
        {/* Hero Image */}
        <div className="mt-12 relative flex justify-center">
          <img src={hero} alt="Hero" />
          <div className="bg-hero absolute -mt-48"></div>
        </div>

        {/* Hero Text */}
        <div className="mb-8">
          {/* Intro */}
          <div className="flex items-center gap-1 -ml-28 justify-center 2xl:justify-start">
            <img src={arrow} alt="Arrow" />
            <h5 className="text-[19px] mb-12">
              Hello! I Am <span className="text-[#7127BA]">Salman Farsi</span>
            </h5>
          </div>

          {/* Main Heading */}
          <h3 className="text-[17px]">A Developer Who</h3>
          <div>
            <h1 className="text-[50px]">Transform Amazing</h1>
            <div className="text-[50px] flex gap-2 justify-center lg:justify-start">
              <h1>Ideas Into</h1>
              <div className="flex items-center">
                <img src={ellipse} alt="Ellipse" className="" />
                <h1 className="text-[#7127BA] -ml-37">code</h1>
              </div>
              <h1 className="-ml-4">...</h1>
            </div>
          </div>

          {/* Catchphrase */}
          <h5 className="text-[11px] mt-4">
            Wait a minute—if his code doesn’t impress you, what else can?
          </h5>
        </div>
      </div>

      {/* About Section */}
      <div>
        <h1 className="text-[50px]">I'm a Software Engineer.</h1>
        <div className="flex flex-col lg:flex-row items-center text-[21px]">
          <h5>Currently, I'm a Software Engineer at</h5>
          <div className="text-[#1877F2] flex items-center lg:ml-3 gap-2">
            <img src={facebookLogo} alt="Facebook Logo" />
            <h5>Facebook</h5>
          </div>
        </div>

        {/* Description */}
        <p className="text-[22px] mt-16 xl:w-[860px]">
          Experienced in React, Node.js, Express, and MongoDB, I develop
          high-performance, maintainable web solutions. Always learning, always
          building!
        </p>
      </div>
    </div>
  );
};

export default Hero;

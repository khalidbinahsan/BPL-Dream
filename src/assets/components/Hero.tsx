import Banner from '../banner-main.png'

const Hero = () => {
  return (
    <section className="w-full px-6 py-4">
      {/* 
        Hero Container 
        Add your background image classes here (e.g., bg-[url('/path-to-bg.jpg')] bg-cover bg-center) 
        Or use an inline style: style={{ backgroundImage: "url('/path.jpg')" }}
      */}
      <div className="max-w-[1300px] mx-auto w-full min-h-[500px] rounded-3xl flex flex-col items-center justify-center text-center px-4 py-16 bg-gray-900 shadow-2xl relative overflow-hidden">
        
        {/* Center Graphic / Logo */}
        <div className="mb-8">
          {/* Replace this src with the path to your center cricket illustration */}
          <img 
            src={Banner}
            alt="Cricket Tournament Elements" 
            className="h-40 md:h-56 w-auto object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-wide">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-[16px] xl:text-xl 2xl:text-3xl font-medium mb-10">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Action Button (Styled with the gap/ring effect from the image) */}
        <button className="bg-[#E4FF00] text-black cursor-pointer font-bold text-lg px-8 py-3 rounded-xl hover:bg-[#ccf000] transition-colors ring-2 ring-[#E4FF00] ring-offset-4 ring-offset-black/80">
          Claim Free Credit
        </button>

      </div>
    </section>
  );
};

export default Hero;
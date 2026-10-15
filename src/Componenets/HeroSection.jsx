import heroVideo from "../assets/vedio.mp4";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative mx-auto w-full max-w-6xl px-6 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-gray-300">
          CREATE • INNOVATE • GROW
        </p>

        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Turn Your Ideas <br />
          Into Reality
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg text-gray-200">
          We build modern digital products that make an impact.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-lg border border-white/60 px-6 py-3 font-medium text-white  hover:bg-white/60">
            Watch Video
          </button>
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-900">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
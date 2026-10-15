const Navbar = () => {
  return (
    <nav className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-10 py-4">
      <h1 className="text-2xl font-bold text-white">Logo</h1>

      <ul className="flex gap-6 font-medium text-gray-200">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/about" className="hover:text-white">About</a></li>
        <li><a href="/features" className="hover:text-white">Features</a></li>
        <li><a href="/contact" className="hover:text-white">Contact</a></li>
      </ul>

      <button className="rounded-lg border border-white/60 px-5 py-2 font-medium text-white hover:bg-white/40">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
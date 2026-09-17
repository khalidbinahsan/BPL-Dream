import Logo from '../logo.png'
import Dollar from '../dollar.svg'
const Header = ({budget}: {budget: number}) => {
  return (
    <header className="w-full bg-white font-sora">
      {/* Inner Container bounded to 1300px and centered */}
      <div className="max-w-[1300px] mx-auto w-full flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          {/* Replace the src with your actual logo path */}
          <a href="/">
            <img
              src={Logo} // Update this path
              alt="Cricket Logo"
              className="h-15 w-auto"
            />
          </a>
        </div>

        {/* Navigation and Coin Button Container */}
        <div className="flex items-center gap-8">
          {/* Navigation Links (Hidden on small screens for better responsiveness) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="text-gray-900 transition-colors hover:text-gray-900">
              Home
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              Fixture
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              Teams
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              Schedules
            </a>
          </nav>

          {/* Coin Button */}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50 transition-colors">
            <span>{budget} Coin</span>
            {/* SVG for the yellow coin icon */}
            <img src={Dollar} alt="Dollar Icon" />
          </button>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
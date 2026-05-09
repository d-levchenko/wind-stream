import { TiStarburstOutline } from 'react-icons/ti';

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between">
      <a
        href="/"
        className="flex items-center gap-2 text-lg font-semibold text-white transition hover:text-white/80 md:text-xl">
        <TiStarburstOutline size={22} color="orange" />
        Weather Now
      </a>
    </header>
  );
};

export default Header;

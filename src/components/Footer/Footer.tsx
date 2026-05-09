const Footer = () => {
  return (
    <div className="mt-8 flex items-center justify-center gap-1 text-sm text-white/60 border-t-2 border-white/20 pt-10">
      <span>Created with ❤️ by </span>
      <a
        href="https://github.com/d-levchenko"
        target="_blank"
        rel="noreferrer"
        className="font-semibold hover:text-white/80">
        Dmytro Levchenko
      </a>
    </div>
  );
};

export default Footer;

export const Header = () => {
  return (
    <header className="max-w-[1440px]">
      <div className="relative">
        <img className="w-full" src="/images/logo.avif" alt="Logo" />
        <img
          className="absolute top-0 left-0 w-full z-10"
          src="/images/console.avif"
          alt="Console"
        />
      </div>
    </header>
  );
};

import { Link, useLocation } from "react-router-dom";

let navbarItems = { Home: "/", Teams: "/teams", Pokemon: "/pokemon" };

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="w-full bg-white border-b border-slate-200 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-row items-center justify-between w-full">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">PTM</h1>
        <div id="navbar" className="flex flex-row items-center gap-8">
          {Object.entries(navbarItems).map(([key, value]) => (
            <div key={key} className="flex flex-row items-center gap-2">
              <Link
                to={value}
                aria-current={pathname === value ? "page" : undefined}
                className={`text-base font-semibold transition-colors ${
                  pathname === value ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {key}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="border-b border-slate-100 opacity-50 mt-5"></div>
    </div>
  );
}

export default Header;

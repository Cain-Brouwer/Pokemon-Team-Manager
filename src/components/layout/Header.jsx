import { Link, useLocation } from "react-router-dom";

let navbarItems = {"Home": "/", "Teams": "/teams", "Pokemon": "/pokemon"};

function Header() {
    const { pathname } = useLocation();

    return (
        <div className="w-full bg-white border-b border-slate-200 px-10 py-5">
            <div className="flex flex-row items-center justify-between">
                <div className="ml-8">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">PTM</h1>
                </div>
                <div id="navbar" className="flex flex-row items-center gap-8">
                    {Object.entries(navbarItems).map(([key, value]) => (
                        <div key={key} className="flex flex-row items-center gap-2">
                            <Link
                                to={value}
                                aria-current={pathname === value ? "page" : undefined}
                                className={`text-base font-semibold transition-colors ${
                                    pathname === value
                                        ? "text-blue-600"
                                        : "text-slate-500 hover:text-slate-900"
                                }`}
                            >
                                {key}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row items-center gap-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-56 rounded-lg border px-4 py-2 text-base text-slate-700 focus:border-blue-500 focus:outline-none"
                    />
                    <button className="rounded-lg border border-slate-300 px-5 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50">
                        Sign In
                    </button>
                    <button className="rounded-lg bg-slate-900 px-5 py-2 text-base font-semibold text-white hover:bg-slate-800">
                        Go to the Console
                    </button>
                </div>
            </div>
            <div className="border-b border-slate-100 opacity-50 mt-5"></div>
        </div>
    );
}

export default Header
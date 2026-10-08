let navbarItems = {"Home": "Teams", "Pokemon": "Detail"};

function Header() {
    return (
        <div className="p-10">
            <div className="ml-8">
                <h1 className="text-xl font-bold">PTM</h1>
            </div>
            <div id="navbar" className="flex flex-col gap-2 items-center">
                {Object.entries(navbarItems).map(([key, value]) => (
                    <div key={key} className="flex flex-row items-center gap-2">
                        <p className="text-sm font-bold">{key}</p>
                        <p className="text-sm opacity-50">{value}</p>
                    </div>
                ))}
            </div>
            <div className="outline-1 opacity-50 mt-5"></div>
        </div>
    );
}

export default Header

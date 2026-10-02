function Footer() {
    return (
        <div className="absolute bg-gray-800 text-white p-4 bottom-0 w-screen pt-10 pb-10 flex justify-between items-center">
            <div className="flex justify-start">
                <p className="opacity-50">© 2026 CainB.dev</p>
            </div>
            <div className="flex justify-end">
                <ol className="flex flex-row">
                    <li className="opacity-50">Privacy Policy</li>
                    <li className="opacity-50 ml-4">Terms of Use</li>
                    <li className="opacity-50 ml-4">Cookie Settings</li>
                </ol>
            </div>
        </div>
    );
}

export default Footer
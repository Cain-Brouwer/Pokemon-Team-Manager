function Footer() {
    return (
        <div className="flex relative bg-gray-800 text-white w-full pt-10 pb-10 justify-between">
            <div className="flex justify-start pl-5">
                <p className="opacity-50">© 2026 CainB.dev</p>
            </div>
            <div className="flex justify-end pr-5">
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
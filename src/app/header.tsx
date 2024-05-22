export default function Header() {
    return (
        <header className="text-gray-700 bg-gray-100 flex px-4 h-10 md:px-24 py-2">
            <div className="md:ml-10 ml-4 float-left flex">
            <img src="./image/icon.png" className="h-full px-1" />
            <p className="px-1">1010mark</p>
            </div>
            <div className="md:mr-10 mr-4 ml-auto flex">
                <p className="px-1 h-full">Top</p>
            </div>
        </header>
        )
}
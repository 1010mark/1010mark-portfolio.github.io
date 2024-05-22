import Image from 'next/image'
export default function Header() {
    return (
        <header className="text-gray-700 bg-gray-100 flex px-4 h-10 md:px-24 py-2">
            <div className="md:ml-10 ml-4 float-left flex">
                <Image src="./image/icon.png" height={24} width={20.47} alt="icon.png" />
                <p className="px-1">1010mark</p>
            </div>
            <div className="md:mr-10 mr-4 ml-auto flex">
                <a className="px-2 mx-1 h-full hover:border border-blue-600 hover:border-l-0 hover:border-t-0 hover:border-r-0" href="/">Top</a>
                <a className="px-2 mx-1 h-full hover:border border-blue-600 hover:border-l-0 hover:border-t-0 hover:border-r-0" href="/profile">About</a>
                <a className="px-2 mx-1 h-full hover:border border-blue-600 hover:border-l-0 hover:border-t-0 hover:border-r-0" href="/works">Works</a>
            </div>
        </header>
        )
}
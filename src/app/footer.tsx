import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="bg-gray-100 p-2 text-gray-300 text-xs text-center">
            <div className="mx-auto flex justify-center my-2">
                <a href="https://x.com/3_Jugem" className="![width:18px] ![height:18px] !relative mx-1">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/X_icon.png`} fill className="w-full opacity-50 hover:opacity-90" alt="X" />
                </a>
                <a href="https://github.com/1010mark" className="![width:18px] ![height:18px] !relative mx-1">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/github-mark.png`} fill className="w-full opacity-50 hover:opacity-90" alt="GitHub" />
                </a>
            </div>
            <p>Copyright © 2024 1010mark. All Rights Reserved.<br />
            Footer ni nanikakeba iinoka wakaran.</p>
        </footer>
        )
}
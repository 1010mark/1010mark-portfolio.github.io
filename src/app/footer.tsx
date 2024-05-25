export default function Footer() {
    return (
        <footer className="bg-gray-100 p-2 text-gray-300 text-xs text-center">
            <div className="mx-auto flex justify-center my-2">
                <a href="https://x.com/3_Jugem">
                    <img src={`${process.env.BASE_PATH}/image/X_icon.png`} width={18} className="opacity-50 hover:opacity-90 mx-1" alt="X" />
                </a>
                <a href="https://github.com/1010mark">
                    <img src={`${process.env.BASE_PATH}/image/github-mark.png`} width={18} className="opacity-50 hover:opacity-90 mx-1" alt="GitHub" />
                </a>
            </div>
            <p>Copyright © 2024 1010mark. All Rights Reserved.<br />
            Footer ni nanikakeba iinoka wakaran.</p>
        </footer>
        )
}
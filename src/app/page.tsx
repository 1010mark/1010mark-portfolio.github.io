import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '1010mark Portfolio',
  description: '1010markのポートフォリオです。声のデカさに自信があります。',
}

export default function Home() {
  return (
    <main>
      {process.env.NODE_ENV === "development" ? 
      <div className="mb-2 bg-cover sm:[background-image:url(/image/works/shadowplay/shadowplay.png)] [background-image:url(/image/works/shadowplay/shadowplay_trim.png)] p-0 h-screen relative
        before:absolute before:content-[''] before:left-[-20vw] before:top-0 before:bottom-0 before:z-[-1] before:w-[120vw] before:bg-black
        after:absolute after:content-[''] after:top-0 after:bottom-0 after:z-10 after:w-full after:[background:linear-gradient(to_right,black_0%,transparent_5%,transparent_95%,black_100%)]">
        <h1 className="[filter:drop-shadow(2px_2px_0_black)] [writing-mode:vertical-rl] text-white absolute text-5xl font-medium sm:top-[30%] top-[35%] left-[20%] sm:right-[30%] sm:left-[20%]">妄想駆動。</h1>
      </div> 
      : <div className="mb-2 bg-cover md:[background-image:url(/1010mark-portfolio.github.io/image/works/shadowplay/shadowplay.png)] [background-image:url(/1010mark-portfolio.github.io/image/works/shadowplay/shadowplay_trim.png)] p-0 h-screen relative
        before:absolute before:content-[''] before:left-[-20vw] before:top-0 before:bottom-0 before:z-[-1] before:w-[120vw] before:bg-black
        after:absolute after:content-[''] after:top-0 after:bottom-0 after:z-10 after:w-full after:[background:linear-gradient(to_right,black_0%,transparent_5%,transparent_95%,black_100%)]">
        <h1 className="[writing-mode:vertical-rl] text-white absolute text-5xl font-medium top-[30%] md:right-[30%] left-[20%]">妄想駆動。</h1>
      </div>}
      <div className="border-gray-400 text-center rounded-3xl border-gray-500 border font-light p-4">
        <div>
          <h1 className="m-4 text-3xl font-normal">ワクワクあふれる作品制作。</h1>
          <p>陽の光よりブルーライトを浴びて育ってきました。<br/>
          「楽しそう！」をモットーに、常時何かを作っています。<br/>
          とにかくなんでもさせてください。</p>
        </div>
        
      </div>
      <div className="flex flex-wrap justify-center m-2">
        <a href={`${process.env.BASE_PATH}/profile`} className="w-4/12 p-6 shadow-md text-center border-blue-600 border rounded-2xl m-2 font-normal hover:font-semibold hover:bg-indigo-700 hover:text-white">About</a>
        <a href={`${process.env.BASE_PATH}/works`} className="w-4/12 p-6 shadow-md text-center border-blue-600 border rounded-2xl m-2 font-normal hover:font-semibold hover:bg-indigo-700 hover:text-white">Works</a>
      </div>
    </main>
  );
}

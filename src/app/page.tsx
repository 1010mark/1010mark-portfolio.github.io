import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '1010mark Portfolio',
  description: '1010markのポートフォリオです。声のデカさに自信があります。',
}

export default function Home() {
  return (
    <main>
      <div className="border-gray-400 text-center rounded-3xl border-gray-500 border font-light p-4">
        <div>
          <h1 className="m-4 text-3xl font-normal">脳内想像→具現人間、です。</h1>
          <p>陽の光よりブルーライトを浴びて育ってきました。<br/>
          「楽しそう！」をモットーに、常時何かを作っています。<br/>
          とにかくなんでもさせてください。</p>
        </div>
        
      </div>
      <div className="flex flex-wrap justify-center m-2">
        <a href="/profile" className="w-4/12 p-6 shadow-md text-center border-blue-600 border rounded-2xl m-2 font-normal hover:font-semibold hover:bg-indigo-700 hover:text-white">About</a>
        <a href="/works" className="w-4/12 p-6 shadow-md text-center border-blue-600 border rounded-2xl m-2 font-normal hover:font-semibold hover:bg-indigo-700 hover:text-white">Works</a>
      </div>
    </main>
  );
}

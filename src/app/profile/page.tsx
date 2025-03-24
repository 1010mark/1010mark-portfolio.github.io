import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | 1010mark Portfolio",
  description:
    "1010markのポートフォリオのAboutページです。いろいろ知ることができます。",
};

const starclassname = `relative inline-block w-[7.5rem] h-6 [font-size:1.5rem] align-middle 
before:absolute before:top-0 before:left-0 before:content-['★★★★★'] before:inline-block before:h-6 before:leading-6 before:text-gray-400
after:absolute after:top-0 after:left-0 after:content-['★★★★★'] after:inline-block after:h-6 after:leading-6 after:text-yellow-400 
after:overflow-hidden after:whitespace-nowrap`;

export default async function Home() {
  return (
    <main>
      <img
        src={`${process.env.BASE_PATH}/image/icon.png`}
        alt="3と書いてあるアイコン"
        className="drop-shadow-md max-w-1/4 max-h-1/4 mx-auto my-2"
      />
      <div>
        <h1 className="text-center md:text-4xl text-3xl py-2 mx-auto md:w-2/4 w-3/4 border-b-2 text-gray-800 drop-shadow-sm">
          1010mark（寿限無）
        </h1>
        <p className="text-center my-2 mb-4 leading-relaxed">
          名前が覚えにくいです。寿限無とお呼びください。神戸の郊外出身。
          <br />
          子供のころ、狂ったようにプログラミングを勉強。
          <br />
          中学２年生の時に自由工作で自作SNSを提出するも、誰にも理解されず、
          <br />
          「もっと面白いものを作りたい」と思う。
          <br />
          それ以降、分野を問わず面白いことを探求し続けている。
          <br />
          Paiza Sランク。Atcoder Highest 緑。
        </p>
        <h2 className="my-2 border-t-2 border-b-2 py-1 text-center md:w-2/4 w-3/4 mx-auto md:text-3xl text-2xl text-gray-800 drop-shadow-sm">
          スキル
        </h2>
        <table className="mx-auto leading-loose">
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">HTML/CSS</td>
              <td className={`${starclassname} after:w-[7.5rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">JavaScript</td>
              <td className={`${starclassname} after:w-[7.5rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Node.js</td>
              <td className={`${starclassname} after:w-[7.5rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Next.js</td>
              <td className={`${starclassname} after:w-[7.5rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Shaderlab/GLSL</td>
              <td className={`${starclassname} after:w-[7.5rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Adobe After Effects</td>
              <td className={`${starclassname} after:w-[7.5rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Adobe Premiere Pro</td>
              <td className={`${starclassname} after:w-[6rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Adobe Photoshop</td>
              <td className={`${starclassname} after:w-[6rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Excel</td>
              <td className={`${starclassname} after:w-[6rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Unity</td>
              <td className={`${starclassname} after:w-[6rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Python</td>
              <td className={`${starclassname} after:w-[6rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">音声編集/楽曲mix</td>
              <td className={`${starclassname} after:w-[6rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Ableton Live</td>
              <td className={`${starclassname} after:w-[6rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">競技プログラミング</td>
              <td className={`${starclassname} after:w-[6rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Docker</td>
              <td className={`${starclassname} after:w-[4.5rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Adobe Premiere Pro</td>
              <td className={`${starclassname} after:w-[4.5rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">React Native</td>
              <td className={`${starclassname} after:w-[4.5rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">Figma</td>
              <td className={`${starclassname} after:w-[3rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">three.js</td>
              <td className={`${starclassname} after:w-[3rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">WebGL</td>
              <td className={`${starclassname} after:w-[3rem]`}></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-lg px-2 py-1.5">C++</td>
              <td className={`${starclassname} after:w-[3rem]`}></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-400 text-sm text-center mx-auto">
        星5: 十分に理解しており、中級者以上に講習を行える自信がある。
        <br />
        星4: 十分に理解しており、初心者に講習を行える自信がある。
        <br />
        星3: ある程度理解しており、進んだ操作ができる。
        <br />
        星2: ある程度理解しており、基本的な操作ができる。
        <br />
        星1: ブランクがあるなどの理由で、ある程度の学習期間を必要とする。
      </p>
    </main>
  );
}

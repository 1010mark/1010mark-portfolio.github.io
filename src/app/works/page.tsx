import type { Metadata } from 'next'
import { works } from './works'
import Card from './card'

export const metadata: Metadata = {
  title: 'Works | 1010mark Portfolio',
  description: '1010markのポートフォリオの作品一覧です。いろいろやっています。',
  openGraph: {
    title: "Top",
    description: "1010markのポートフォリオです。声のデカさに自信があります。",
    locale: "ja_JP",
    siteName: "1010mark Portfolio",
    images:[{
      url: "https://1010mark.github.io/1010mark-portfolio.github.io/image/ogp.png",
      width: 1200,
      height: 630
    }],
    type: "website"
  }
}

export default async function Home() {
  return (
    <main>
      <div className="place-content-center grid md:grid-col-3 gap-5 [grid-template-columns:repeat(1,80%)] sm:[grid-template-columns:repeat(3,30%)] mt-4">
        {works.map((work, index) => (
          <Card key={index} {...work} />
        ))}
      </div>
    </main>
  );
}

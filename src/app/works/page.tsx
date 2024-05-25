import type { Metadata } from 'next'
import { works } from './works'
import Card from './card'

export const metadata: Metadata = {
  title: 'Works | 1010mark Portfolio',
  description: '1010markのポートフォリオの作品一覧です。いろいろやっています。',
}

export default async function Home() {
  return (
    <main>
      <div className="place-content-center grid md:grid-col-3 gap-5 [grid-template-columns:repeat(1,80%)] sm:[grid-template-columns:repeat(3,30%)]">
        {works.map((work, index) => (
          <Card key={index} {...work} />
        ))}
      </div>
    </main>
  );
}

'use client'

import { useState } from 'react'
import { works, tags_table } from './works'
import Card from './card'

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // フィルタリングされた作品を取得
  const filteredWorks = selectedTag 
    ? works.filter(work => work.tags.includes(selectedTag))
    : works

  // 全てのタグを取得（重複を除く）
  const allTags = Array.from(new Set(works.flatMap(work => work.tags)))

  return (
    <main>
      {/* タグフィルターボタン */}
      <div className="my-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
              selectedTag === null 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            すべて
          </button>
          {allTags.map((tag) => {
            const tagName = tags_table[tag as keyof typeof tags_table]
            if (!tagName) return null
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                  selectedTag === tag 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tagName}
              </button>
            )
          })}
        </div>
      </div>

      {/* 作品カード */}
      <div className="place-content-center grid md:grid-col-3 gap-5 [grid-template-columns:repeat(1,80%)] sm:[grid-template-columns:repeat(3,30%)] mt-4">
        {filteredWorks.map((work, index) => (
          <Card key={index} {...work} />
        ))}
      </div>
    </main>
  );
}

export type Work = {
    directry_name: string,
    name: string,
    description: string,
    tags: Array<string>,
    images: Array<string>,
    year: number
}

export let tags_table = {
    "000": "個人",
    "001": "集団",
    "010": "Web",
    "011": "3DCG",
    "012": "デザイン",
    "013": "技術発信",
    "014": "参加/登壇"
}

export let works: Array<Work> = [
    {
        "directry_name": "portf",
        "name": "ポートフォリオ",
        "description": "今見ていただいているこれです。\nNext.js+TailwindCSS+GitHubPagesで作成。\nNext.jsどころかReact初学者でしたが、5日程度で作成できました。\n同世代の中では飲み込みが早いほうだと思います。",
        "tags": ["000", "010", "012"],
        "images": ["screen1.png"],
        "year": 2024
    }
]

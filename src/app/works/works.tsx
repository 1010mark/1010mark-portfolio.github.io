export type Work = {
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
        "name": "TEST",
        "description": "Test Testdescripton",
        "tags": ["000", "010"],
        "images": [],
        "year": 2024
    },
    {
        "name": "TEST",
        "description": "Test Testdescripton",
        "tags": ["000", "010"],
        "images": [],
        "year":2024
    }
]

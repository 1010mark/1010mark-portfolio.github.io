export type Work = {
    directry_name: string,
    name: string,
    description: string,
    tags: Array<string>,
    images: Array<string>,
    year: number,
    links: Array<string>
}

export let tags_table = {
    "000": "個人",
    "001": "集団",
    "010": "Web",
    "011": "3DCG",
    "012": "デザイン",
    "013": "技術発信",
    "014": "参加/登壇",
    "100": "Python",
    "101": "MySQL"
}

export let works: Array<Work> = [
    {
        "directry_name": "portf",
        "name": "ポートフォリオ",
        "description": "今見ていただいています。\nNext.js+TailwindCSS+GitHubPagesで作成。",
        "tags": ["000", "010", "012"],
        "images": ["screen1.png"],
        "year": 2024,
        "links": []
    },{
        "directry_name": "shader_shadow",
        "name": "影シェーダー",
        "description": "Shaderlab(GLSL)で作成。\n友人が「影だけのアバター」を作ろうとしたことから端を発した作品。\nというのも、VRChat上ではアバターにライトを仕込むことが可能だが、それによる影は写真に映らない。\nよってライトによる実装が不可能であった。\nそこでカメラを仕込み、RenderTextureを取得して自作のシェーダーにより床に表示することで擬似的に影を再現した。\nカメラの角度・視野角を調整することで面光源・点光源のいずれの影も再現可能である。",
        "tags": ["000", "011"],
        "images": ["shadow0.jpg", "shadow1.png", "shadow2.png"],
        "year": 2024,
        "links": []
    },{
        "directry_name": "KCSTips",
        "name": "KCSTips執筆",
        "description": "私が所属している慶應義塾大学公認サークルKCS::Computer Societyにて定期的に発行しているKCSTipsに寄稿。\n主にUnity上でのシェーダーの解説をした。\n発行後、技術書典16にて頒布。\n周りのサークルとの交流を通して、技術的知識の向上と人脈づくりに役立った。",
        "tags": ["001", "011", "013"],
        "images": ["KCSTips.jpg","KCSTips-01.png","KCSTips-03.png","KCSTips-13.png"],
        "year": 2024,
        "links": ["https://techbookfest.org/product/70V5UZwjBRpqpuF5NSkKTS"]
    },{
        "directry_name": "noisemeter",
        "name": "Python製簡易騒音計",
        "description": "大学生活で集合住宅に住むことになり、騒音対策のために急いで制作。\nPythonで常時マイク入力を受けつけ、閾値を超えた瞬間ビープ音を流すようにした。",
        "tags": ["000", "100"],
        "images": ["noisemeter.png"],
        "year": 2024,
        "links": ["https://github.com/1010mark/volume-meter"]
    },{
        "directry_name": "vrdairy",
        "name": "VR酪農（未踏ジュニア）",
        "description": "未踏ジュニアに提案するプロジェクトとして立ち上げた。\n北海道在住の友人とともに、酪農を体感できるコミュニティの形成を図った。\n一次審査は通過したものの、最終審査で惜しくも不採用となってしまった。\nロゴが私が制作したものであり、キャッチーさを念頭に置いて制作した。\n以下画像に実際の提案書を添付する。（クリックで拡大表示）",
        "tags": ["001", "011", "012"],
        "images": ["VRdairylogo.png", "VRdairy-01.png","VRdairy-02.png","VRdairy-03.png","VRdairy-04.png","VRdairy-05.png","VRdairy-06.png","VRdairy-07.png","VRdairy-08.png","VRdairy-09.png","VRdairy-11.png","VRdairy-12.png","VRdairy-13.png","VRdairy-14.png","VRdairy-15.png","VRdairy-16.png","VRdairy-17.png","VRdairy-18.png","VRdairy-19.png","VRdairy-20.png"],
        "year": 2023,
        "links": []
    },{
        "directry_name": "anonym_discord",
        "name": "匿名Discordbot",
        "description": "Node.js(Discord.js)+MySQLで作成。\nDiscordのコマンドで匿名の発言を可能にすることで、コミュニティの議論を活性化させた。\n本来は友人一人でpythonで作成していたが、引っ越しに伴い自宅サーバーの管理が不可能とのことで、二人で開発することになった。\n友人がpythonで大部分を完成させていたので、それをnode.jsに移行するとともにデータベースのチューニングを行った。\nrender.com+neonで完全無料で運用している。\nUptimerobotで死活監視を行っている。",
        "tags": ["001", "101"],
        "images": ["anonym_discord.png", "anonym_discord2.png"],
        "year": 2023,
        "links": []
    },{
        "directry_name": "PV",
        "name": "PV制作",
        "description": "依頼を受けてPV制作を行った。\n主にAdobe After Effectsを使用したが、映像素材にthree.jsやHydraを活用。\nプロシージャルに情報量の多い映像を作成したり、FFTにより周波数に応じた演出を模索した。",
        "tags": ["000", "012"],
        "images": ["PV01.png", "PV02.png", "PV03.gif", "PV04.gif"],
        "year": 2024,
        "links": []
    },{
        "directry_name": "distance",
        "name": "距離変化+輪郭抽出",
        "description": "Shaderlab(GLSL)で作成。シェーダーは無料配布した。\n距離に応じて不透明度が変化するシェーダー。\n十分遠い距離からはオーブのような輪郭だけが見えるようにしている。\nサンブル画像では球に適用しているが、実際にはキャラクターモデルにも使える。\nそのため「近づくと急に見える」といった幻想的な演出が可能。\n反響は大きく、実際の使用例を添えたX上でのポストはインプレッション数約20万を獲得した。",
        "tags": ["000", "011"],
        "images": ["distance.png", "distance2.png"],
        "year": 2023,
        "links": ["https://github.com/1010mark/DistanceShader"]
    },{
        "directry_name": "heavywhiteblack",
        "name": "Heavy White Black",
        "description": "Shaderlab(GLSL)で作成。VRChat上のワールドとして公開。\nレイマーチングによる実装により容量の軽量化と形状の動的な変化を実現。\nワールド容量は約123KB。\nワールドに設置されたスライダーを調整することによりフラクタル立体の形状を変化させることができる。\n反響が比較的大きく、ワールドを投稿した際のX上での告知ポストはインプレッション数約21,000を得た。",
        "tags": ["000", "011", "012"],
        "images": ["heavywhiteblack3.png", "heavywhiteblack1.png", "heavywhiteblack2.png"],
        "year": 2022,
        "links": []
    },{
        "directry_name": "transparentexpreriment",
        "name": "透明度に関する習作",
        "description": "Shaderlab(GLSL)で作成。\n透明度は本来0%～100%の範囲内で指定されるものである。\nしかし、内部処理的には理論上その範囲を逸脱しても問題はないはずである。\nよって透明度を-3000%～3000%まで拡張できるシェーダーを作成した。",
        "tags": ["000", "011"],
        "images": ["transparentexperiment1.png", "transparentexperiment2.png"],
        "year": 2022,
        "links": []
    },{
        "directry_name": "shadowplay",
        "name": "影絵",
        "description": "Shaderlab(GLSL)で作成。VRChat上のワールドとして公開した。\n描画順序を意図的に変えることで、視界をすべて白黒にした。",
        "tags": ["000", "011", "012"],
        "images": ["shadowplay.png"],
        "year": 2022,
        "links": []
    },{
        "directry_name": "clocksystem",
        "name": "時刻表示システム",
        "description": "Node.js+Shaderlab(GLSL)で作成。VRChat上で稼働する時刻表示システム。\nAPIで取得した時刻をOSC経由で現在時刻を送信。\n数字は自作シェーダーにより表示。",
        "tags": ["000", "010", "011"],
        "images": ["clocksystem0.png", "clocksystem1.gif"],
        "year": 2022,
        "links": []
    },{
        "directry_name": "ikai",
        "name": "裏面シェーダー",
        "description": "Shaderlab(GLSL)で作成。完成したシェーダーは無料配布した。\n3DCGゲームなどでよくある「オブジェクトの裏にカメラがめり込んで興ざめした」という経験に着想を得た作品。\n裏面にシェーダーでレイマーチングを実装することで、幻想的な世界を演出。\n以下のサンプルgifでは円柱にこれを適用しているが、実際にはキャラクターモデルに適用することも可能である。\n反響は大きく、これの使用例の動画をX上で投稿した際に、インプレッション数約240,000、RP数1253、いいね数3433を獲得した。（2024/05/27現在）",
        "tags": ["000", "011", "012"],
        "images": ["ikai.png", "ikai.gif"],
        "year": 2022,
        "links": ["https://github.com/1010mark/SIB"]
    },{
        "directry_name": "xRAM",
        "name": "xRAM 登壇",
        "description": "xRAM「クラム」xR with Anything Meetupに登壇。\n1,000名超の勉強会コミュニティにて開催されているLT会にて、8分枠で競技プログラミングについて解説した。",
        "tags": ["000", "013", "014"],
        "images": ["xRAM.png"],
        "year": 2021,
        "links": []
    },{
        "directry_name": "W-emo",
        "name": "W-emo",
        "description": "Aboutページに書いた、中学２年生のときに作成したSNS。\nNode.js+Express+EJS+Gulp.jsにて作成。\n期間限定公開であり、現在は稼働を停止している。\n「感情共有SNS」と銘打って、投稿時に感情をプルダウンメニューから選択して投稿するようにした。\nアカウント機能にも対応しており、実際にアカウントを作成してログインできるようになっていた。",
        "tags": ["000", "010", "012"],
        "images": ["W-emo0.png", "W-emo1.png", "W-emo2.png"],
        "year": 2017,
        "links": ["https://github.com/1010mark/Vacation_HW"]
    }
]

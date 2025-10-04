export type Work = {
  directry_name: string;
  name: string;
  description: string;
  tags: Array<string>;
  images: Array<string>;
  year: number;
  links: Array<string>;
};

export let tags_table = {
  "000": "個人",
  "001": "集団",
  "010": "Web",
  "011": "3DCG",
  "012": "デザイン",
  "013": "技術発信",
  "014": "参加/登壇",
  "015": "インターンシップ",
  "100": "Python",
  "101": "MySQL",
  "102": "LLM/AI",
  "103": "AWS",
  "104": "JavaScript",
  "105": "Next.js",
  "106": "PostgreSQL",
  "107": "Docker",
  "108": "Shader",
  "109": "Go"
};

export let works: Array<Work> = [
  {
    directry_name: "colpla_3days",
    name: "コロプラ 3daysインターンシップ",
    description: "株式会社コロプラの3daysインターンシップに参加した。内製ライブラリを用いてゲームのバックエンドをGoで作成した。最終的には2人組のチームでゲームサーバーのアーキテクチャ及び実装を提案。ステートフルなRPCの実装を勉強することができた。",
    tags: ["001", "010", "015", "109"],
    images: ["pic.jpg"],
    year: 2025,
    links: ["https://colopl.co.jp/recruit/internship2025/engineer_serverside/3days"],
  },
  {
    directry_name: "Sansan_summer",
    name: "Sansan 有給サマーインターンシップ",
    description: "Sansanの有給サマーインターンシップにおいて、Eight事業部のSREエンジニアとして1ヶ月参加した。課題は「AWS Fargate SPOTの活用最大化」として、AWS Fargate SPOTの活用を最大化するためのシステムを構築することであった。しかしこのSPOTはAWS ECSのSPOTインスタンスと比較して、様々な点で扱いにくいものであった。その中で私が構築したシステムは、最終的に可用性を担保しながらもコストを大幅に削減することを示した。",
    tags: ["001", "010", "015", "103"],
    images: [],
    year: 2025,
    links: ["https://newgradsevents.corp-sansan.com/engineer/200001"],
  },
  {
    directry_name: "DEFCON33",
    name: "国際会議「DEFCON33」登壇",
    description: "DEF CONという情報セキュリティカンファレンスに参加し、Demolabsにて登壇しました。\nDEF CONはラスベガスで毎年行われる世界最大級のハッカー／セキュリティ会議です。\nDEF CONでは幅広い分野の発表/交流が為されており、多種多様なブースが展開されています。その中でも私が登壇したDemolabsは制作したツールのデモンストレーションを中心としたブースとなります。\n発表概要は以下のとおりです。\nプロンプトインジェクションは、AIが読む文章やデータの中に本来の指示より強く働く別の指示を紛れ込ませ、意図しない動作を引き起こす攻撃です。これはLLMの重大なリスクの一つとして整理されており、外部サイトやファイル経由で起きる「間接型」も含めて注意が呼びかけられています。（https://genai.owasp.org/llmrisk/llm01-prompt-injection/）\n現実に、この脆弱性を利用した攻撃事例も確認されています。2025年8月に研究者がGoogleのGeminiを“カレンダー招待”に埋め込んだ隠し指示で乗っ取れることを示しました。ユーザーが「今日の予定は？」と尋ねるだけで、Geminiがイベントタイトルに仕込まれた命令を読み取り、スマートホーム機器の操作や各種データへのアクセスまで引き起こせるという内容です。報告後、Googleは修正を行ったとされています。このケースは、LLMが他サービスと広く連携するほど攻撃面が広がることを示す、わかりやすい最新の例と言えます。\n\nこの課題に対して、私達は以下の2つのツールを提案しました。\n・ShinoLLMApps - 脆弱なLLMアプリの詰め合わせで、MPITを使いながらプロンプトインジェクションの仕組みやリスクを安全に学べる学習用の環境です。\n・MPIT（Matrix Prompt Injection Tool） - 攻撃パターンを自動生成して試せるようにし、AIが処理しそうな入力欄の特定やテスト文の工夫、反復的な改良まで一連の流れを支援します。ペンテストの現場で手早く安全性を確かめることを目的としたツールです。\n\nなお、この登壇に際し、慶應義塾大学より奨学金を支援いただきました。学部2年生の学外研究という異例でしたが、柔軟に対応していただいたことに感謝申し上げます。",
    tags: ["001", "010", "013", "014", "102"],
    images: ["pic1.jpg", "pic2.jpg"],
    year: 2025,
    links: ["https://info.defcon.org/content/?id=60861", "https://www.appi.keio.ac.jp/?p=6924", "https://kemco-keio.note.jp/n/n918ed96dfd97?gs=491901b501d6"],
  },
  {
    directry_name: "capcom",
    name: "CAPCOM GAME COMPETITION出場",
    description: "大学で所属しているサークルのメンバーで参加。総勢20名のチームで、Shaderを担当。RE ENGINEを用いた開発の中で、トゥーン調のルックを追求した。\n（画像は公式トップページより引用。）",
    tags: ["001", "011", "014", "108"],
    images: ["title.jpg"],
    year: 2025,
    links: ["https://www.capcom-games.com/cgc/2025/ja-jp"],
  },
  {
    directry_name: "lastbite",
    name: "ラストバイト",
    description:
      "Progateハッカソン（Powered by AWS）にてAWS賞を受賞した作品。\n食材の在庫と消費期限を管理し、AIがレシピ提案するサービス。\n私はバックエンド及びインフラ構築を担当した。\nバックエンドはnext.jsを用いて作成し、AWSのEC2にデプロイした。ユーザー認証にはkeycloakとAuth.jsを用いた\nしかし、ハッカソン期間中にAuth.jsの脆弱性（CVE-2025-29927）が発覚。適切に対処した。\nまた、インフラ構築ではRDS上でPostgreSQLを用いてデータベースをEC2と連携しつつ、Bedrock経由でClaude3.5を用いてAIのレシピ提案を実現した。\nハッカソンの都合上インフラ構築には1日半しか与えられなかったが、当初の計画通りに構築することができた。\n受賞理由にはAWSのセキュアなインフラ構築と、セキュリティに関する配慮が高いことが挙げられた。\nセキュリティ・キャンプ全国大会を通して、セキュリティに関する知識を深めた経験が活きたように感じた。",
    tags: ["001", "010", "014", "102", "103", "104", "106"],
    images: ["mockup.png", "structure.jpg", "IMG_0178.jpg"],
    year: 2025,
    links: ["https://topaz.dev/projects/fe7d3c5c2705dd89510b"],
  },
  {
    directry_name: "PV2",
    name: "PV制作",
    description:
      "依頼を受けてPV制作を行った。\nelectronを用いた自作ライブラリで実際にWindows上で動作するインタラクティブなPV演出を実現。\nまた、Pythonでデータモッシュを用いた表現も取り入れつつ、実写映像とShader素材もふんだんに収録・活用した。",
    tags: ["000", "011", "012", "104"],
    images: ["pv2.png", "pv1.png"],
    year: 2025,
    links: ["https://github.com/1010mark/fwrite"],
  },
  {
    directry_name: "boundless_poet",
    name: "生成詩人A",
    description:
      "期間限定公開作品「生成詩人A - boundless voices」は、時間と詩が織りなす無限の物語を体験できるインタラクティブな詩の空間です。64秒ごとに新たな歌詞が自動生成されることで、言葉の流れが絶え間なく変化し、訪れるたびに異なる詩的体験を提供します。\n生成される歌詞は偶然と必然が交錯した一瞬の芸術であり、鑑賞者自身の心情や想像力と響き合いながら、独自の解釈を引き出します。\n終わりのないリズム、絶え間なく紡がれる言葉。時間の中に刻まれる無限の声を通して、詩の可能性とその多様性を感じてください。\n使用技術:Next.js, Flask, ChatGPT-4o, AWS(EC2/Route53), Docker, Nginx, Ableton Live",
    tags: ["000", "010", "012", "100", "102", "103", "104", "105", "107"],
    images: ["logo_yoko.jpg", "page1.png", "page2.png", "page3.png"],
    year: 2025,
    links: ["https://github.com/1010mark/endless_Poet"],
  },
  {
    directry_name: "hypnagogia",
    name: "Hypnagogia | ヒプナゴギア",
    description:
      "「究極の没入感」をもたらすイマーシブMV\n――物語は1件のメッセージから始まる\n\nChatGPT-4oとNext.jsを用いた体験型謎解きサイト。\n現実とクロスオーバーした問題で、空想と現実の境界を融解させた。\n音楽から映像、作問まで一人で担当した。",
    tags: ["000", "010", "012", "102", "104", "105"],
    images: ["page1.png", "page2.png", "page3.png", "page4.png", "page5.png"],
    year: 2024,
    links: ["https://saveher.vercel.app/play"],
  },
  {
    directry_name: "worddistance",
    name: "単語間距離ゲーム",
    description:
      "私が所属している慶應義塾大学公認サークルKCS::Computer SocietyにてWeb班の新人講習を兼ねて集団開発。\n要件定義を行い、新人部員でも書きやすくサポートした。\nWord2VecとFlaskを用いて制作。矢上祭にて大人気の展示となった。",
    tags: ["001", "010", "012", "100", "104", "105"],
    images: [
      "worddistance-02.png",
      "worddistance-03.png",
      "worddistance-01.png",
    ],
    year: 2024,
    links: ["https://github.com/1010mark/WordDistanceGame"],
  },
  {
    directry_name: "security_camp",
    name: "セキュリティ・キャンプ全国大会",
    description:
      "セキュリティ・キャンプは、情報セキュリティやIT技術に興味を持つ学生向けのIPA主催プログラム。例年の倍率は約6倍。\n「S16：LLMハッキング：プロンプトインジェクションの完全攻略」に参加し、LLMを用いたWebサービスのセキュリティについて学んだ。\nなお、ここで提案したMatrix Prompt Injection ToolはCODE BLUE 2024内ツール発表イベントCyber TAMAGOにて発表。\nそうした活動が評価され、セキュリティ・キャンプ2024年度協賛企業総会にて修了生代表として登壇した。",
    tags: ["001", "010", "014", "100", "102"],
    images: ["poster.jpg", "security_camp-01.jpg"],
    year: 2024,
    links: [
      "https://www.ipa.go.jp/jinzai/security-camp/2024/camp/zenkoku/index.html",
    ],
  },
  {
    directry_name: "team_lab",
    name: "チームラボ インターン",
    description:
      "teamLabは、アート、サイエンス、テクノロジーを融合させたデジタルアートの制作・展示を行う企業。\nインタラクティブエンジニア（第1ターム）の一員として、サマーインターンシップに参加し、デジタルアートの制作に携わった。",
    tags: ["000", "011", "012", "015", "108"],
    images: ["team_lab.jpg"],
    year: 2024,
    links: ["https://www.team-lab.com/"],
  },
  {
    directry_name: "portf",
    name: "ポートフォリオ",
    description:
      "今見ていただいています。\nNext.js+TailwindCSS+GitHubPagesで作成。",
    tags: ["000", "010", "012", "104", "105"],
    images: ["screen1.png"],
    year: 2024,
    links: ["https://github.com/1010mark/1010mark-portfolio.github.io"],
  },
  {
    directry_name: "KCSTips",
    name: "KCSTips執筆",
    description:
      "私が所属している慶應義塾大学公認サークルKCS::Computer Societyにて定期的に発行しているKCSTipsに寄稿。\n主にUnity上でのシェーダーの解説をした。\n発行後、技術書典16にて頒布。\n周りのサークルとの交流を通して、技術的知識の向上と人脈づくりに役立った。",
    tags: ["001", "011", "013"],
    images: [
      "KCSTips.jpg",
      "KCSTips-01.png",
      "KCSTips-03.png",
      "KCSTips-13.png",
    ],
    year: 2024,
    links: ["https://techbookfest.org/product/70V5UZwjBRpqpuF5NSkKTS"],
  },
  {
    directry_name: "noisemeter",
    name: "Python製簡易騒音計",
    description:
      "大学生活で集合住宅に住むことになり、騒音対策のために急いで制作。\nPythonで常時マイク入力を受けつけ、閾値を超えた瞬間ビープ音を流すようにした。",
    tags: ["000", "100"],
    images: ["noisemeter.png"],
    year: 2024,
    links: ["https://github.com/1010mark/volume-meter"],
  },
  {
    directry_name: "shader_shadow",
    name: "影シェーダー",
    description:
      "Shaderlab(GLSL)で作成。\n友人が「影だけのアバター」を作ろうとしたことから端を発した作品。\nというのも、VRChat上ではアバターにライトを仕込むことが可能だが、それによる影は写真に映らない。\nよってライトによる実装が不可能であった。\nそこでカメラを仕込み、RenderTextureを取得して自作のシェーダーにより床に表示することで擬似的に影を再現した。\nカメラの角度・視野角を調整することで面光源・点光源のいずれの影も再現可能である。",
    tags: ["000", "011", "108"],
    images: ["shadow0.jpg", "shadow1.png", "shadow2.png"],
    year: 2024,
    links: [],
  },
  {
    directry_name: "speachbubble",
    name: "吹き出しシェーダー",
    description:
      "Shaderlab(GLSL)で作成。\nどこから見てもカメラ目線で追従する。\nまた、オブジェクト座標系における原点からの相対位置を指定できるようにすることで、\n「あるオブジェクトから相対的に同じ位置にある」を擬似的に再現した。\nこれにより、「どの方向から見ても頭の上(横)に吹き出しがある」という演出が可能。",
    tags: ["000", "011", "108"],
    images: ["speachbubble.png", "speachbubble.gif"],
    year: 2024,
    links: ["https://github.com/1010mark/SpeachBubble"],
  },
  {
    directry_name: "vrdairy",
    name: "VR酪農（未踏ジュニア）",
    description:
      "未踏ジュニアに提案するプロジェクトとして立ち上げた。\n北海道在住の友人とともに、酪農を体感できるコミュニティの形成を図った。\n一次審査は通過したものの、最終審査で惜しくも不採用となってしまった。\nロゴが私が制作したものであり、キャッチーさを念頭に置いて制作した。\n以下画像に実際の提案書を添付する。（クリックで拡大表示）",
    tags: ["001", "011", "012"],
    images: [
      "VRdairylogo.png",
      "VRdairy-01.png",
      "VRdairy-02.png",
      "VRdairy-03.png",
      "VRdairy-04.png",
      "VRdairy-05.png",
      "VRdairy-06.png",
      "VRdairy-07.png",
      "VRdairy-08.png",
      "VRdairy-09.png",
      "VRdairy-11.png",
      "VRdairy-12.png",
      "VRdairy-13.png",
      "VRdairy-14.png",
      "VRdairy-15.png",
      "VRdairy-16.png",
      "VRdairy-17.png",
      "VRdairy-18.png",
      "VRdairy-19.png",
      "VRdairy-20.png",
    ],
    year: 2023,
    links: [],
  },
  {
    directry_name: "anonym_discord",
    name: "匿名Discordbot",
    description:
      "Node.js(Discord.js)+MySQLで作成。\nDiscordのコマンドで匿名の発言を可能にすることで、コミュニティの議論を活性化させた。\n本来は友人一人でpythonで作成していたが、引っ越しに伴い自宅サーバーの管理が不可能とのことで、二人で開発することになった。\n友人がpythonで大部分を完成させていたので、それをnode.jsに移行するとともにデータベースのチューニングを行った。\nrender.com+neonで完全無料で運用している。\nUptimerobotで死活監視を行っている。",
    tags: ["001", "101"],
    images: ["anonym_discord.png", "anonym_discord2.png"],
    year: 2023,
    links: [],
  },
  {
    directry_name: "PV",
    name: "PV制作",
    description:
      "依頼を受けてPV制作を行った。\n主にAdobe After Effectsを使用したが、映像素材にthree.jsやHydraを活用。\nプロシージャルに情報量の多い映像を作成したり、FFTにより周波数に応じた演出を模索した。",
    tags: ["000", "012"],
    images: ["PV01.png", "PV02.png", "PV03.gif", "PV04.gif"],
    year: 2024,
    links: [],
  },
  {
    directry_name: "distance",
    name: "距離変化+輪郭抽出",
    description:
      "Shaderlab(GLSL)で作成。シェーダーは無料配布した。\n距離に応じて不透明度が変化するシェーダー。\n十分遠い距離からはオーブのような輪郭だけが見えるようにしている。\nサンブル画像では球に適用しているが、実際にはキャラクターモデルにも使える。\nそのため「近づくと急に見える」といった幻想的な演出が可能。\n反響は大きく、実際の使用例を添えたX上でのポストはインプレッション数約20万を獲得した。",
    tags: ["000", "011", "108"],
    images: ["distance.png", "distance2.png"],
    year: 2023,
    links: ["https://github.com/1010mark/DistanceShader"],
  },
  {
    directry_name: "heavywhiteblack",
    name: "Heavy White Black",
    description:
      "Shaderlab(GLSL)で作成。VRChat上のワールドとして公開。\nレイマーチングによる実装により容量の軽量化と形状の動的な変化を実現。\nワールド容量は約123KB。\nワールドに設置されたスライダーを調整することによりフラクタル立体の形状を変化させることができる。\n反響が比較的大きく、ワールドを投稿した際のX上での告知ポストはインプレッション数約21,000を得た。",
    tags: ["000", "011", "012", "108"],
    images: [
      "heavywhiteblack3.png",
      "heavywhiteblack1.png",
      "heavywhiteblack2.png",
    ],
    year: 2022,
    links: [],
  },
  {
    directry_name: "transparentexpreriment",
    name: "透明度に関する習作",
    description:
      "Shaderlab(GLSL)で作成。\n透明度は本来0%～100%の範囲内で指定されるものである。\nしかし、内部処理的には理論上その範囲を逸脱しても問題はないはずである。\nよって透明度を-3000%～3000%まで拡張できるシェーダーを作成した。",
    tags: ["000", "011", "108"],
    images: ["transparentexperiment1.png", "transparentexperiment2.png"],
    year: 2022,
    links: [],
  },
  {
    directry_name: "shadowplay",
    name: "影絵",
    description:
      "Shaderlab(GLSL)で作成。VRChat上のワールドとして公開した。\n描画順序を意図的に変えることで、視界をすべて白黒にした。",
    tags: ["000", "011", "012", "108"],
    images: ["shadowplay.png"],
    year: 2022,
    links: [],
  },
  {
    directry_name: "clocksystem",
    name: "時刻表示システム",
    description:
      "Node.js+Shaderlab(GLSL)で作成。VRChat上で稼働する時刻表示システム。\nAPIで取得した時刻をOSC経由で現在時刻を送信。\n数字は自作シェーダーにより表示。",
    tags: ["000", "010", "011"],
    images: ["clocksystem0.png", "clocksystem1.gif"],
    year: 2022,
    links: [],
  },
  {
    directry_name: "ikai",
    name: "裏面シェーダー",
    description:
      "Shaderlab(GLSL)で作成。完成したシェーダーは無料配布した。\n3DCGゲームなどでよくある「オブジェクトの裏にカメラがめり込んで興ざめした」という経験に着想を得た作品。\n裏面にシェーダーでレイマーチングを実装することで、幻想的な世界を演出。\n以下のサンプルgifでは円柱にこれを適用しているが、実際にはキャラクターモデルに適用することも可能である。\n反響は大きく、これの使用例の動画をX上で投稿した際に、インプレッション数約240,000、RP数1253、いいね数3433を獲得した。（2024/05/27現在）",
    tags: ["000", "011", "012", "108"],
    images: ["ikai.png", "ikai.gif"],
    year: 2022,
    links: ["https://github.com/1010mark/SIB"],
  },
  {
    directry_name: "xRAM",
    name: "xRAM 登壇",
    description:
      "xRAM「クラム」xR with Anything Meetupに登壇。\n1,000名超の勉強会コミュニティにて開催されているLT会にて、8分枠で競技プログラミングについて解説した。",
    tags: ["000", "013", "014"],
    images: ["xRAM.png"],
    year: 2021,
    links: [],
  },
  {
    directry_name: "W-emo",
    name: "W-emo",
    description:
      "Aboutページに書いた、中学２年生のときに作成したSNS。\nNode.js+Express+EJS+Gulp.jsにて作成。\n期間限定公開であり、現在は稼働を停止している。\n「感情共有SNS」と銘打って、投稿時に感情をプルダウンメニューから選択して投稿するようにした。\nアカウント機能にも対応しており、実際にアカウントを作成してログインできるようになっていた。",
    tags: ["000", "010", "012"],
    images: ["W-emo0.png", "W-emo1.png", "W-emo2.png"],
    year: 2017,
    links: ["https://github.com/1010mark/Vacation_HW"],
  },
];

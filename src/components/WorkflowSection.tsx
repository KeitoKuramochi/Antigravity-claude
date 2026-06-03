const flow = [
  {
    step: "01",
    icon: "🐙",
    title: "GitHubでリポジトリを作る",
    desc: "github.com で「New repository」を押して空のリポジトリを用意する。名前を決めてCreateするだけでOK。",
    sub: "リポジトリ = プロジェクトの保管場所",
  },
  {
    step: "02",
    icon: "🔗",
    title: "リポジトリのURLをClaudeに渡す",
    desc: "GitHubのリポジトリページを開いて、URLをそのままコピー。「ここにリポジトリ用意したので〇〇を作って」と一緒に貼るだけ。",
    sub: "例：「https://github.com/yourname/my-intro.git ここにリポジトリ用意しました。簡単な自己紹介ページを作ってください」",
  },
  {
    step: "03",
    icon: "🤖",
    title: "ClaudeがコードをGitHubにpushする",
    desc: "あとはClaudeが全部やってくれる。コードを書いてGitHubにアップロード（push）まで自動でやってくれます。",
    sub: "自分でコードを書く必要はゼロ",
  },
  {
    step: "04",
    icon: "▲",
    title: "VercelがURLを発行する",
    desc: "GitHubと連携したVercelが自動でビルド・デプロイ。数分でインターネット上に公開されたURLが手に入ります。",
    sub: "例：https://your-project.vercel.app",
  },
  {
    step: "05",
    icon: "🔔",
    title: "URLをシェアして完成！",
    desc: "発行されたURLをSlackやDMに貼るだけ。誰でもブラウザで見られるWebページのできあがり。",
    sub: "コードを知らなくても公開まで完走できる",
  },
];

export default function WorkflowSection() {
  return (
    <section className="bg-gray-950 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-400 text-xs font-mono tracking-widest uppercase mb-3">
            The Full Process
          </p>
          <h2 className="text-2xl font-bold text-white mb-3">
            GitHub → Claude → Vercel の全体の流れ
          </h2>
          <p className="text-gray-400 text-sm">
            このページ自体も、この流れで作られています
          </p>
        </div>

        <div className="relative">
          {/* 縦線（デスクトップのみ） */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gray-800" />

          <div className="space-y-6">
            {flow.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                {/* アイコン丸 */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 flex flex-col items-center justify-center">
                    <span className="text-xl leading-none">{item.icon}</span>
                    <span className="text-gray-500 text-xs font-mono mt-0.5">{item.step}</span>
                  </div>
                </div>

                {/* テキスト */}
                <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-5 min-w-0">
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">{item.desc}</p>
                  <span className="inline-block text-xs bg-gray-800 text-gray-500 px-2 py-1 rounded font-mono">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* まとめ一言 */}
        <div className="mt-10 border border-green-800 bg-green-950/40 rounded-2xl p-6 text-center">
          <p className="text-green-400 font-bold text-lg mb-2">
            やることはたった2つ
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            <span className="text-white font-bold">① GitHubでリポジトリを作る</span>
            　→
            <span className="text-white font-bold">② URLをClaudeに渡す</span>
            <br />
            あとはClaudeとVercelが全部やってくれます。
          </p>
        </div>
      </div>
    </section>
  );
}

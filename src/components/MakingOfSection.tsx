const log = [
  {
    user: "AntigravityでClaudeを使うまでの手順を教えるページをVercelで公開したい",
    built: "Next.jsでゼロから構築・GitHub push・Vercelデプロイまで完了",
  },
  {
    user: "IDEのチャットじゃなくてGeminiなどのオープンエージェントマネージャーのことを言ってる",
    built: "よくある疑問カードと対応表を修正",
  },
  {
    user: "ただ調べればいいで終わるから、このサイトならではの機能を追加して",
    built: "ステップチェックリスト・コピーボタン・プロンプト集を追加",
  },
  {
    user: "GitHub → Claude → Vercel の全体の流れを説明するセクションも作って",
    built: "5ステップのフロー図セクションを新設",
  },
  {
    user: "ターミナルを開くショートカットをMac・Windows両方ちゃんと調べてから入れて",
    built: "公式ドキュメントを検索・実機確認済みのショートカットを掲載",
  },
  {
    user: "ステップを実際の操作の流れに合わせて作り直して。画像の入れ方も教えて",
    built: "6ステップに刷新・step1.png〜step6.pngで自動差し替えする仕組みを実装",
  },
];

export default function MakingOfSection() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-3">Making Of</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            実は、このページもClaudeで作りました
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
            コードは一行も自分で書いていません。「こうしたい」を言葉にして渡すだけで、
            このサイト全体が完成しました。実際の会話の流れがこちらです。
          </p>
        </div>

        {/* 会話ログ */}
        <div className="space-y-4 mb-10">
          {log.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </div>
              <div className="flex-1 grid md:grid-cols-2 gap-2">
                <div className="bg-white border border-gray-200 rounded-xl px-4 py-3">
                  <p className="text-xs text-gray-400 font-bold mb-1">👤 渡した指示</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.user}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  <p className="text-xs text-green-600 font-bold mb-1">🤖 Claudeがやったこと</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.built}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* まとめ */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">
            あなたも同じことができます
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            GitHubにリポジトリを作って、URLをClaudeに渡して、「〇〇を作って」と言うだけ。<br />
            このページを読んだあなたには、もうその方法が全部書いてあります。
          </p>
        </div>
      </div>
    </section>
  );
}

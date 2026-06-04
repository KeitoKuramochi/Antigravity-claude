import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このサイトができるまで | AntiGravity × Claude Code",
  description: "このガイドページ自体がClaude Codeで作られました。実際の会話の流れをそのまま公開します。",
};

const steps = [
  {
    turn: 1,
    label: "サイトの構想",
    user: "アンチグラビティでClaudeを立ち上げて実際に使うまでのプランを共有するページを作りたいです。GitHubにリポジトリを用意したので、動作画面を画像で貼りつつ教えられるようなページを作成して、Vercel上で公開してリンクで共有できるようにしたいです。めちゃめちゃ段階的に教える感じでお願いします。",
    claude: "Next.js + Tailwind CSSでゼロからプロジェクトを構築。Hero・よくある疑問カード・5ステップガイド・アニメーション疑似ターミナルを実装し、GitHubにpush → Vercelに自動デプロイ。",
    output: "サイト公開 → https://antigravity-claude-guide.vercel.app",
    tag: "🚀 立ち上げ",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    turn: 2,
    label: "よくある疑問の修正",
    user: "IDEのチャットじゃなくて、GeminiなどのオープンエージェントマネージャーのAIのことを言ってると思うので、対応表を作り直してください。",
    claude: "「IDEのチャット」という表記をGemini等のオープンエージェントマネージャーに変更。対応表の比較項目も「ファイルを直接読む」「ターミナルでコマンド実行」など具体的な違いに更新。",
    output: "ConfusionCard・UsageTable を修正",
    tag: "✏️ 内容修正",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    turn: 3,
    label: "インタラクティブ機能の追加",
    user: "これだとただの『じゃあ調べればいい』で終わるから、このサイトならではの機能を追加してください。",
    claude: "①各ステップに「できた！」チェックボタン＋進捗バー（localStorageで保存）②ターミナルコマンドのワンクリックコピーボタン③「こう頼むとうまくいく！」プロンプト集セクションを新設。",
    output: "StepSection・PromptGallery コンポーネントを追加",
    tag: "⚡ 機能追加",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    turn: 4,
    label: "全体フローのセクション追加",
    user: "GitHubでリポジトリを作って、そのリンクをClaudeに渡してVercelで公開するって感じのプロセスなので、そこを特化したセクションを作っても面白いですね。",
    claude: "GitHub→Claude→Vercelの5ステップフローを図解するWorkflowSectionを追加。「やることはたった2つ」のまとめも掲載。",
    output: "WorkflowSection コンポーネントを新設",
    tag: "⚡ 機能追加",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    turn: 5,
    label: "例文をリアルな形に",
    user: "例が『トップページに〜』じゃなくて、GitHubのURLを渡して自己紹介ページを作ってくださいみたいな指示を出している例を出してください。",
    claude: "プロンプト集・WorkflowSection・アニメーションターミナルの例文を全てGitHubのURL＋指示という実際の形に変更。「yourname」→「【あなたのGitHubユーザー名】」に更新。",
    output: "3コンポーネントの例文を一括更新",
    tag: "✏️ 内容修正",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    turn: 6,
    label: "ターミナルアニメーションの改善",
    user: "最後まで入力されてから消えちゃうのはなんか不便だからやめて。",
    claude: "全行表示後にループリセットする処理を削除。最後の「✅ 完成！」まで流れたらそのまま止まるように変更。",
    output: "AnimatedTerminal のループ廃止",
    tag: "✏️ 内容修正",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    turn: 7,
    label: "ステップを実際の流れに刷新",
    user: "Antigravityを開く→フォルダ新規作成→ターミナルを探す→claude入力→シェアするか選ぶ→プロンプト入力→コマンド確認を選ぶ、って流れですかね。それぞれの画像を入れる場所と、どうやって入れればいいかを教えてください。",
    claude: "5ステップを実際の操作手順に合わせた6ステップに全面刷新。各ステップに対応する画像ファイル名（step1.png〜step6.png）を指定し、ファイルを入れると自動で表示・なければプレースホルダー表示する仕組みに変更。",
    output: "StepSection・ImagePlaceholder を再設計",
    tag: "🔄 大幅更新",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    turn: 8,
    label: "ターミナルショートカットキーを追加",
    user: "ターミナルを開くときのコマンドを、MacとWindowsで何か押すとターミナル出るよみたいなやつも出してください。ちゃんと検索してから記入してください。",
    claude: "公式ドキュメント・日本語チートシートを複数検索して確認。Mac：Shift+Ctrl+^、Windows：Ctrl+Shift+@（いずれもユーザー実機確認済み）をキーボードキー風UIで表示。",
    output: "Step 2にショートカット表示を追加",
    tag: "🔍 調査→実装",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    turn: 9,
    label: "このページの作成",
    user: "この会話をそのまま教材として残しておきたい。このセッションでどんなことをやって、どんな会話をしたらこのページが出来上がったかをまとめて作成してください。",
    claude: "制作の裏側ページ（/making）を新設。実際の会話の流れ・渡した指示・Claudeが行った作業を時系列でまとめ、「このページ自体が教材」になるよう構成。",
    output: "このページ",
    tag: "📖 まとめ",
    tagColor: "bg-gray-100 text-gray-700",
  },
];

export default function MakingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green-400 text-xs font-mono tracking-widest uppercase mb-4">
            Making Of
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            このサイトができるまで
          </h1>
          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto">
            このガイドページ自体が、Claude Codeで作られています。<br />
            どんな会話を経て完成したか、実際のやりとりをそのまま公開します。
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-400">
            <span>会話のターン数</span>
            <span className="text-white font-bold text-lg">{steps.length}</span>
            <span>回</span>
          </div>
        </div>
      </section>

      {/* ポイント */}
      <section className="bg-amber-50 border-b border-amber-100 px-6 py-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-800 text-sm leading-relaxed">
            💡 <strong>このページが伝えたいこと：</strong>
            特別な知識がなくても、「こうしたい」を言葉にしてClaudeに渡すだけで、
            こういうウェブサイトが作れます。コードは一行も自分で書いていません。
          </p>
        </div>
      </section>

      {/* タイムライン */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-10">
          {steps.map((step, i) => (
            <div key={i} className="relative flex gap-5">
              {/* 縦線 */}
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200" />
              )}

              {/* 番号 */}
              <div className="flex-shrink-0 z-10">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                  {step.turn}
                </div>
              </div>

              {/* カード */}
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${step.tagColor}`}>
                    {step.tag}
                  </span>
                  <h2 className="font-bold text-gray-900">{step.label}</h2>
                </div>

                {/* ユーザーの発言 */}
                <div className="mb-3">
                  <p className="text-xs text-gray-400 font-bold mb-1">👤 渡した指示</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                    <p className="text-sm text-gray-700 leading-relaxed">{step.user}</p>
                  </div>
                </div>

                {/* Claudeの作業 */}
                <div className="mb-3">
                  <p className="text-xs text-gray-400 font-bold mb-1">🤖 Claudeがやったこと</p>
                  <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                    <p className="text-sm text-gray-700 leading-relaxed">{step.claude}</p>
                  </div>
                </div>

                {/* アウトプット */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">OUTPUT →</span>
                  <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {step.output}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* まとめ */}
      <section className="bg-gray-950 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            まとめ
          </h2>
          <div className="grid gap-4 text-left mb-10">
            {[
              ["会話のターン数", `${steps.length}回`, "指示を出した回数"],
              ["コードの自作", "0行", "全部Claudeが書いた"],
              ["かかった時間", "1セッション", "会話しながら完成"],
              ["デプロイ先", "Vercel", "GitHubと連携で自動公開"],
            ].map(([label, value, desc], i) => (
              <div key={i} className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl px-5 py-4">
                <div>
                  <p className="text-gray-400 text-xs">{label}</p>
                  <p className="text-white font-bold text-lg">{value}</p>
                </div>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            「こうしたい」を言葉にして渡すだけで、ここまでできます。<br />
            コードの知識がなくても、アイデアと言葉があれば大丈夫。
          </p>
          <a
            href="/"
            className="inline-block bg-green-500 hover:bg-green-400 text-gray-950 font-bold py-3 px-8 rounded-full transition-colors"
          >
            ← 使い方ガイドに戻る
          </a>
        </div>
      </section>
    </main>
  );
}

export default function ConfusionCard() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
      <div className="flex items-start gap-3 mb-6">
        <span className="text-2xl">🤔</span>
        <div>
          <p className="font-bold text-amber-900 text-lg mb-1">こんな疑問、ありませんか？</p>
          <p className="text-amber-800 text-sm leading-relaxed">
            「Antigravity IDEのチャットで相談してたんだけど、これって配布されたClaudeを使えてるの...？」
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">❌</span>
            <p className="font-bold text-red-800 text-sm">IDEのチャット機能</p>
          </div>
          <p className="text-red-700 text-xs leading-relaxed">
            AntigravityのIDEに最初から付いているチャット。<br />
            <strong>配布された Claude ではありません。</strong><br />
            コードを書くときの補助AI（別物）です。
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">✅</span>
            <p className="font-bold text-green-800 text-sm">ターミナルから起動するClaude</p>
          </div>
          <p className="text-green-700 text-xs leading-relaxed">
            ターミナルで <code className="bg-green-100 px-1 rounded text-xs">claude</code> と打って起動するやつ。<br />
            <strong>こちらが配布されたClaude Code！</strong><br />
            ファイルを直接読んで、コードを書いてくれます。
          </p>
        </div>
      </div>

      <p className="text-center text-amber-700 text-sm mt-4 font-medium">
        👇 以下の手順でターミナルから起動してみよう！
      </p>
    </div>
  );
}

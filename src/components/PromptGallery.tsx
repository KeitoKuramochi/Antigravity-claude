"use client";

import { useState } from "react";

const prompts = [
  {
    tag: "まず最初にこれ",
    color: "bg-blue-50 border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
    text: "https://github.com/【あなたのGitHubユーザー名】/my-intro.git\n\nここにリポジトリ用意しました。簡単な自己紹介ページを作ってください。名前・好きなこと・SNSリンクを載せたシンプルなデザインでお願いします。",
    why: "GitHubのURLと「何を作りたいか」をセットで渡すのが基本の形。これだけでClaudeが勝手にコードを書いてGitHubにpushするところまでやってくれます。",
  },
  {
    tag: "もう少し詳しく頼む",
    color: "bg-purple-50 border-purple-200",
    tagColor: "bg-purple-100 text-purple-700",
    text: "https://github.com/【あなたのGitHubユーザー名】/portfolio.git\n\nここにリポジトリ用意しました。ポートフォリオサイトを作ってください。\n\n・トップに名前と一言キャッチコピー\n・作ったものを3枚カード形式で紹介\n・お問い合わせはTwitterのリンクに飛ばすだけでOK\n・デザインは黒背景でかっこよく",
    why: "箇条書きで「入れたい要素」を並べると、イメージ通りに仕上がりやすいです。デザインの雰囲気も一言添えるとなお◎",
  },
  {
    tag: "修正・直す",
    color: "bg-orange-50 border-orange-200",
    tagColor: "bg-orange-100 text-orange-700",
    text: "スマホで見たときにナビゲーションが崩れてる。直して。",
    why: "短くてOK！GitHubにpush済みのコードをClaudeが自分で読んで原因を探してくれます。",
  },
  {
    tag: "エラーを直す",
    color: "bg-red-50 border-red-200",
    tagColor: "bg-red-100 text-red-700",
    text: "エラーが出て動かない。↓これを見て原因と解決策を教えて。\n\n（エラーメッセージをここに貼り付ける）",
    why: "エラーメッセージをそのままコピペするだけでOK。原因と直し方を一緒に教えてくれます。",
  },
  {
    tag: "デザイン変更",
    color: "bg-pink-50 border-pink-200",
    tagColor: "bg-pink-100 text-pink-700",
    text: "ボタンの色を青から緑に変えて。ホバーしたときに少し暗くなるようにして。",
    why: "具体的な色と動作を伝えると一発で思い通りになりやすいです。",
  },
  {
    tag: "確認・レビュー",
    color: "bg-green-50 border-green-200",
    tagColor: "bg-green-100 text-green-700",
    text: "今のコードを見て、改善できるところがあれば教えて。特にスマホ表示とページの速さが気になってる。",
    why: "漠然とした「良くして」より、気になっている観点を伝えると的確なアドバイスが返ってきます。",
  },
];

export default function PromptGallery() {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = async (text: string, i: number) => {
    await navigator.clipboard.writeText(text);
    setCopied(i);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          こう頼むとうまくいく！プロンプト集
        </h2>
        <p className="text-gray-500 text-sm">
          Claude Codeへの伝え方のコツ。コピーしてそのまま使えます。
        </p>
      </div>

      <div className="grid gap-4">
        {prompts.map((p, i) => (
          <div
            key={i}
            className={`border rounded-xl p-5 ${p.color}`}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${p.tagColor}`}>
                {p.tag}
              </span>
              <button
                onClick={() => handleCopy(p.text, i)}
                className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  copied === i
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-600 border border-gray-300 hover:border-gray-400"
                }`}
              >
                {copied === i ? "✅ コピーしました" : "コピー"}
              </button>
            </div>

            <p className="font-mono text-sm text-gray-800 bg-white/70 rounded-lg px-4 py-3 whitespace-pre-wrap leading-relaxed mb-3">
              {p.text}
            </p>

            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="font-bold">なぜこれが効くか：</span>{p.why}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-900 text-white rounded-2xl p-6 text-center">
        <p className="font-bold mb-1">📌 共通のコツ</p>
        <p className="text-gray-300 text-sm leading-relaxed">
          「何を」「どんな状態にしたいか」「気になる点」の3つを伝えると、一発で思い通りになりやすいです。<br />
          うまくいかなかったら「さっきの修正を元に戻して」でリセットできます。
        </p>
      </div>
    </section>
  );
}

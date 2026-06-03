"use client";

import { useState, useEffect } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

interface Shortcut {
  os: string;
  keys: string[];
}

interface StepProps {
  number: number;
  title: string;
  description: string;
  detail?: string;
  code?: string;
  tip?: string;
  shortcuts?: Shortcut[];
  imagelabel: string;
  filename: string;
}

const steps: StepProps[] = [
  {
    number: 1,
    title: "Antigravityを開いてフォルダを用意する",
    description: "Antigravityを起動して、作業したいフォルダを開きます。新しく始める場合は新規フォルダを作ってそこを開いてもOKです。",
    detail: "フォルダを開くと左のサイドバーにファイル一覧が表示されます。ここがこれから作業する場所になります。",
    tip: "すでにGitHubからクローンしたフォルダがある場合はそれを開けばOKです。",
    imagelabel: "AntigravityでフォルダをOpenしているスクショ",
    filename: "step1.png",
  },
  {
    number: 2,
    title: "ターミナルを開く",
    description: "キーボードショートカットで一発で開くのが一番早いです。または画面下の「Terminal」タブをクリックしても開けます。",
    shortcuts: [
      { os: "Mac", keys: ["Ctrl", "`"] },
      { os: "Windows", keys: ["Ctrl", "`"] },
    ],
    tip: "ショートカットで開かない場合は、上のメニューから「View」→「Terminal」を探してみてください。",
    imagelabel: "Antigravityでターミナルが開いているスクショ",
    filename: "step2.png",
  },
  {
    number: 3,
    title: "「claude」と入力してEnterを押す",
    description: "ターミナルに以下のコマンドを入力して、Enterキーを押します。",
    code: "claude",
    detail: "Claude Codeが起動してロゴや文字が表示されます。これが「配布されたClaude」を使っている状態です！",
    tip: "「command not found」と出たらインストールが必要です。管理者に確認してみてください。",
    imagelabel: "claude と入力してEnterを押した直後の起動画面スクショ",
    filename: "step3.png",
  },
  {
    number: 4,
    title: "「シェアしますか？」を選ぶ",
    description: "初回起動時に、使用データを実験に提供するかどうかの質問が出ます。どちらを選んでもClaudeは使えます。",
    detail: "「シェアする」を選ぶと使用データがAnthropicの改善に使われます。「シェアしない」でも全く問題なく使えます。自分で選んでOKです。",
    tip: "この画面が出ない場合は、すでに設定済みなので次のステップに進んでください。",
    imagelabel: "「実験に協力しますか（シェアしますか）」のダイアログのスクショ",
    filename: "step4.png",
  },
  {
    number: 5,
    title: "プロンプト（指示）を入力する",
    description: "「>」が表示されたら、日本語で指示を入力します。GitHubのURLと一緒に「何を作ってほしいか」を伝えましょう。",
    code: "https://github.com/yourname/my-intro.git ここにリポジトリ用意しました。簡単な自己紹介ページを作ってください。",
    detail: "ClaudeはGitHubのリポジトリを読み込んで、実際にコードを書いてpushするところまでやってくれます。",
    tip: "「名前・好きなこと・SNSリンクを載せて」のように要素を伝えると、より思い通りになります。",
    imagelabel: "プロンプト入力画面でURLと指示を入力しているスクショ",
    filename: "step5.png",
  },
  {
    number: 6,
    title: "コマンドの確認が出たら選択する",
    description: "Claudeがファイルの作成や変更をしようとすると、確認画面が出ることがあります。内容を見て選んでください。",
    detail: "「Yes」で1回だけ許可、「No」でキャンセル、「今後全部Yes（Always allow）」にすると同じ種類の操作は次から確認なしで進みます。信頼できる指示なら「今後全部Yes」が楽です。",
    tip: "何をしようとしているか内容が表示されるので、確認してから選びましょう。",
    imagelabel: "コマンド確認ダイアログ（Yes/No/今後全部Yes）のスクショ",
    filename: "step6.png",
  },
];

function ShortcutDisplay({ shortcuts }: { shortcuts: Shortcut[] }) {
  return (
    <div className="mb-4 flex flex-col sm:flex-row gap-3">
      {shortcuts.map((s) => (
        <div key={s.os} className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3">
          <span className="text-xs font-bold text-gray-500 w-16 flex-shrink-0">{s.os}</span>
          <div className="flex items-center gap-1">
            {s.keys.map((key, i) => (
              <span key={i} className="flex items-center gap-1">
                <kbd className="inline-flex items-center justify-center min-w-[2rem] h-8 px-2 bg-white border border-gray-300 border-b-[3px] rounded-md text-xs font-mono font-bold text-gray-700 shadow-sm">
                  {key}
                </kbd>
                {i < s.keys.length - 1 && (
                  <span className="text-gray-400 text-xs font-bold">+</span>
                )}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-400 ml-1">を同時に押す</span>
        </div>
      ))}
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text.replace(/^>\s*/, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`text-xs px-2 py-1 rounded transition-all font-mono ${
        copied
          ? "bg-green-500 text-white"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
      }`}
    >
      {copied ? "✅ コピーしました" : "コピー"}
    </button>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="bg-gray-900 rounded-lg px-4 py-3 font-mono text-sm flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-gray-500 select-none flex-shrink-0">$</span>
        <span className="text-green-400 truncate">{code}</span>
      </div>
      <CopyButton text={code} />
    </div>
  );
}


function ProgressBar({ done, total }: { done: number; total: number }) {
  const pct = Math.round((done / total) * 100);
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          進捗：{done} / {total} ステップ完了
        </span>
        {done === total && (
          <span className="text-sm font-bold text-green-600 animate-pulse">
            🎉 全部できた！
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function StepSection() {
  const [checked, setChecked] = useState<boolean[]>(() => Array(steps.length).fill(false));

  useEffect(() => {
    const saved = localStorage.getItem("ag-claude-steps");
    if (saved) setChecked(JSON.parse(saved));
  }, []);

  const toggle = (i: number) => {
    const next = checked.map((v, idx) => (idx === i ? !v : v));
    setChecked(next);
    localStorage.setItem("ag-claude-steps", JSON.stringify(next));
  };

  const doneCount = checked.filter(Boolean).length;

  return (
    <div>
      <ProgressBar done={doneCount} total={steps.length} />

      <div className="space-y-16">
        {steps.map((step, i) => (
          <div key={step.number} className="flex gap-6 md:gap-10">
            {/* ステップ番号 */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                  checked[i]
                    ? "bg-green-500 text-white"
                    : "bg-gray-900 text-white"
                }`}
              >
                {checked[i] ? "✓" : step.number}
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 bg-gray-200 flex-1 mt-2 min-h-8" />
              )}
            </div>

            {/* コンテンツ */}
            <div className="flex-1 pb-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3
                  className={`text-xl font-bold transition-colors ${
                    checked[i] ? "text-green-700" : "text-gray-900"
                  }`}
                >
                  {step.title}
                </h3>
                <button
                  onClick={() => toggle(i)}
                  className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full border font-medium transition-all ${
                    checked[i]
                      ? "bg-green-100 border-green-400 text-green-700"
                      : "bg-white border-gray-300 text-gray-500 hover:border-gray-400"
                  }`}
                >
                  {checked[i] ? "✅ できた！" : "できた！"}
                </button>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

              {step.shortcuts && <ShortcutDisplay shortcuts={step.shortcuts} />}

              {step.code && (
                <div className="mb-4">
                  <CodeBlock code={step.code} />
                </div>
              )}

              <div className="mb-4">
                <ImagePlaceholder label={step.imagelabel} filename={step.filename} />
              </div>

              {step.detail && (
                <div className="bg-blue-50 border-l-4 border-blue-400 px-4 py-3 rounded-r-lg mb-3">
                  <p className="text-blue-800 text-sm leading-relaxed">
                    <span className="font-bold">ポイント：</span>{step.detail}
                  </p>
                </div>
              )}

              {step.tip && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                  <p className="text-gray-600 text-xs leading-relaxed">
                    <span className="font-bold text-gray-700">💡 Tips：</span>{step.tip}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

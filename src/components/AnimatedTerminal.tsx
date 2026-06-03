"use client";

import { useEffect, useState } from "react";

const lines = [
  { type: "cmd", text: "cd my-intro" },
  { type: "cmd", text: "claude" },
  { type: "output", text: "╭─────────────────────────────────────╮" },
  { type: "output", text: "│  Claude Code が起動しました！        │" },
  { type: "output", text: "╰─────────────────────────────────────╯" },
  { type: "prompt", text: "> https://github.com/otiek/my-intro.git ここにリポジトリ用意しました。簡単な自己紹介ページを作ってください。" },
  { type: "output", text: "# リポジトリを確認しました。" },
  { type: "output", text: "# index.html を作成しています..." },
  { type: "output", text: "# GitHubにpushしました！" },
  { type: "output", text: "# ✅ 完成！Vercelで公開されるまで少し待ってね" },
];

export default function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentChar, setCurrentChar] = useState<number>(0);

  useEffect(() => {
    // 全行表示し終わったら止まる
    if (visibleLines >= lines.length) return;

    const currentLine = lines[visibleLines];
    const isTypeableLine = currentLine.type === "cmd" || currentLine.type === "prompt";

    if (isTypeableLine && currentChar < currentLine.text.length) {
      const timer = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, 45);
      return () => clearTimeout(timer);
    } else {
      const delay = isTypeableLine ? 500 : 100;
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setCurrentChar(0);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, currentChar]);

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700">
      {/* ウィンドウバー */}
      <div className="flex items-center gap-2 bg-gray-800 px-4 py-3">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-gray-400 text-xs font-mono">Terminal — bash</span>
      </div>

      {/* ターミナル本体 */}
      <div className="bg-gray-950 p-5 font-mono text-sm min-h-[280px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="mb-1">
            {line.type === "cmd" && (
              <span>
                <span className="text-green-400">$ </span>
                <span className="text-white">{line.text}</span>
              </span>
            )}
            {line.type === "prompt" && (
              <span className="text-yellow-300">{line.text}</span>
            )}
            {line.type === "output" && (
              <span className="text-gray-400">{line.text}</span>
            )}
          </div>
        ))}

        {/* 現在タイピング中の行 */}
        {visibleLines < lines.length && (
          <div>
            {lines[visibleLines].type === "cmd" && (
              <span>
                <span className="text-green-400">$ </span>
                <span className="text-white">
                  {lines[visibleLines].text.slice(0, currentChar)}
                </span>
                <span className="animate-pulse text-green-400">|</span>
              </span>
            )}
            {lines[visibleLines].type === "prompt" && (
              <span className="text-yellow-300">
                {lines[visibleLines].text.slice(0, currentChar)}
                <span className="animate-pulse text-yellow-300">|</span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

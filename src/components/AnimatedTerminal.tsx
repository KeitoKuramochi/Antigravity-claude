"use client";

import { useEffect, useState } from "react";

const lines = [
  { type: "cmd", text: "cd my-project" },
  { type: "output", text: "# プロジェクトフォルダに移動しました" },
  { type: "cmd", text: "claude" },
  { type: "output", text: "╭─────────────────────────────────────╮" },
  { type: "output", text: "│  Claude Code が起動しました！        │" },
  { type: "output", text: "╰─────────────────────────────────────╯" },
  { type: "prompt", text: "> トップページのデザインを作って" },
  { type: "output", text: "# 承知しました！index.html を作成します..." },
  { type: "output", text: "# ✅ 完成しました！" },
];

export default function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentChar, setCurrentChar] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      setTimeout(() => {
        setVisibleLines(0);
        setCurrentChar(0);
      }, 3000);
      return;
    }

    const currentLine = lines[visibleLines];
    const isTypeableLine = currentLine.type === "cmd" || currentLine.type === "prompt";

    if (isTypeableLine && currentChar < currentLine.text.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, 60);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      const delay = isTypeableLine ? 400 : 80;
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

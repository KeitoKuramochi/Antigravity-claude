import ConfusionCard from "@/components/ConfusionCard";
import StepSection from "@/components/StepSection";
import AnimatedTerminal from "@/components/AnimatedTerminal";
import PromptGallery from "@/components/PromptGallery";
import WorkflowSection from "@/components/WorkflowSection";
import MakingOfSection from "@/components/MakingOfSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 text-sm font-mono mb-4 tracking-widest uppercase">
            AntiGravity × Claude Code
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Claude を<br />
            <span className="text-green-400">ターミナルで</span>動かそう
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
            配布されたClaude Codeを実際に使うまでの全手順を、解説します。
            <br />
            <span className="text-gray-400 text-sm">（スクショ多め・はじめての方向け）</span>
          </p>
          <div className="mt-8">
            <a
              href="#steps"
              className="inline-block bg-green-500 hover:bg-green-400 text-gray-950 font-bold py-3 px-8 rounded-full transition-colors"
            >
              手順を見る →
            </a>
          </div>
        </div>
      </section>

      {/* よくある疑問 */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          まず、よくある疑問を解決！
        </h2>
        <ConfusionCard />
      </section>

      {/* ステップ */}
      <section id="steps" className="max-w-3xl mx-auto px-6 py-8 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
          6ステップで使えるようになる
        </h2>
        <StepSection />
      </section>

      {/* プロンプト集 */}
      <div className="bg-gray-50 border-t border-gray-100">
        <PromptGallery />
      </div>

      {/* GitHub → Claude → Vercel の全体フロー */}
      <WorkflowSection />

      {/* アニメーションターミナル */}
      <section className="bg-gray-950 py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">
              実際はこんな感じ！
            </h2>
            <p className="text-gray-400 text-sm">
              ターミナルでClaudeを使うと、こんなふうにコマンドと返答がやりとりされます
            </p>
          </div>
          <AnimatedTerminal />
        </div>
      </section>

      {/* このページの制作過程 */}
      <MakingOfSection />

      {/* Footer */}
      <footer className="py-10 px-6 text-center border-t border-gray-100">
        <p className="text-gray-400 text-sm">
          このページはAntiGravity × Claude Codeの使い方を共有するために作りました
        </p>
        <p className="text-gray-300 text-xs mt-2">
          わからないことがあればSlackで気軽に聞いてください！
        </p>
      </footer>
    </main>
  );
}

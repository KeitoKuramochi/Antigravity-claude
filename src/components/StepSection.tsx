import ImagePlaceholder from "./ImagePlaceholder";

interface StepProps {
  number: number;
  title: string;
  description: string;
  detail?: string;
  code?: string;
  tip?: string;
  imagelabel: string;
}

const steps: StepProps[] = [
  {
    number: 1,
    title: "Antigravityを開いてターミナルを見つける",
    description: "AntigravityのIDEを開いたら、画面の下の方にある「ターミナル」タブをクリックします。",
    detail: "ターミナルは、コンピューターにコマンド（命令）を直接打ち込める場所です。黒い画面が出てきたら成功！",
    tip: "ターミナルが見当たらない場合は、上のメニューから「View」→「Terminal」を探してみてください。",
    imagelabel: "AntigravityのIDEでターミナルタブをクリックしている画面のスクショ",
  },
  {
    number: 2,
    title: "プロジェクトのフォルダに移動する",
    description: "ターミナルに以下のコマンドを打ち込んで、作業したいフォルダに移動しましょう。",
    code: "cd プロジェクトのフォルダ名",
    detail: "「cd」は「change directory（場所を変える）」の略です。フォルダ名の部分は自分のプロジェクト名に変えてください。",
    tip: "フォルダ名がわからないときは「ls」と打つと一覧が表示されます。",
    imagelabel: "ターミナルに cd コマンドを打ち込んでいるスクショ",
  },
  {
    number: 3,
    title: "「claude」コマンドで起動する",
    description: "フォルダに移動できたら、いよいよClaudeを起動します！",
    code: "claude",
    detail: "Enterキーを押すと、Claude Codeが起動してメッセージが表示されます。これが「配布されたClaude」を使っている状態です！",
    tip: "「command not found」と出た場合は、インストールが必要です。管理者に確認してみてください。",
    imagelabel: "claude コマンドを打って起動した直後の画面スクショ",
  },
  {
    number: 4,
    title: "日本語で指示を出してみよう",
    description: "「>」が表示されたら、日本語でやってほしいことを入力するだけ！",
    code: "> トップページにボタンを追加して",
    detail: "Claudeはプロジェクトのファイルを全部読んで理解した上で作業してくれます。「〇〇を修正して」「〇〇を作って」など、自然な言葉でOK！",
    tip: "長い指示も大丈夫です。「〜〜のようなページを作って。デザインはシンプルにして、スマホでも見やすくして」みたいに詳しく書くほど、思い通りになります。",
    imagelabel: "Claudeに日本語で指示を出して作業してもらっている画面スクショ",
  },
  {
    number: 5,
    title: "GeminiなどのAIとの使い分け",
    description: "AntigravityのIDEで開けるGeminiなどとClaude Code、どっちをいつ使うか迷わない！",
    detail: "",
    imagelabel: "GeminiなどのオープンエージェントマネージャーAIとClaude Codeの使い分けイメージのスクショ",
  },
];

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="bg-gray-900 rounded-lg px-4 py-3 font-mono text-green-400 text-sm flex items-center gap-2">
      <span className="text-gray-500 select-none">$</span>
      <span>{code.startsWith(">") ? code : code}</span>
    </div>
  );
}

function UsageTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-3 rounded-tl-lg font-semibold text-gray-600"></th>
            <th className="text-left p-3 font-semibold text-gray-600">
              <span className="block text-xs text-gray-400 mb-0.5">IDEから開く</span>
              Gemini等のAI
            </th>
            <th className="text-left p-3 rounded-tr-lg font-semibold text-gray-600">
              <span className="block text-xs text-green-500 mb-0.5">ターミナルから起動</span>
              Claude Code
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["コードについて質問する", "✅ できる", "✅ できる"],
            ["プロジェクトのファイルを直接読む", "❌ できない", "✅ 自動で読んでくれる"],
            ["ファイルを実際に書き換える", "❌ 提案だけ（自分でコピペが必要）", "✅ そのまま書いてくれる"],
            ["複数ファイルをまとめて修正", "❌ 難しい", "✅ 得意"],
            ["「〇〇を作って」と丸投げ", "△ 手順を教えてくれる", "✅ 実際に作ってくれる"],
            ["ターミナルでコマンドを実行", "❌ できない", "✅ できる（npm install等）"],
            ["気軽にサクッと質問", "✅ 手軽", "✅ こちらも可"],
          ].map(([feature, gemini, claude], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="p-3 font-medium text-gray-700">{feature}</td>
              <td className="p-3 text-gray-500">{gemini}</td>
              <td className="p-3 text-gray-700 font-medium">{claude}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-400 mt-3 text-center">
        💡 Geminiは「相談役」、Claude Codeは「実際に手を動かしてくれる人」というイメージ！
      </p>
    </div>
  );
}

export default function StepSection() {
  return (
    <div className="space-y-16">
      {steps.map((step) => (
        <div key={step.number} className="flex gap-6 md:gap-10">
          {/* ステップ番号 */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg">
              {step.number}
            </div>
            {step.number < steps.length && (
              <div className="w-0.5 bg-gray-200 mx-auto mt-2" style={{ height: "calc(100% - 3rem)" }} />
            )}
          </div>

          {/* コンテンツ */}
          <div className="flex-1 pb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

            {step.code && (
              <div className="mb-4">
                <CodeBlock code={step.code} />
              </div>
            )}

            {step.number === 5 ? (
              <div className="mb-4">
                <UsageTable />
              </div>
            ) : (
              <div className="mb-4">
                <ImagePlaceholder label={step.imagelabel} height="h-56" />
              </div>
            )}

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
  );
}

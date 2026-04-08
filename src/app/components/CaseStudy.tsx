const results = [
  "物流コスト 約22%削減",
  "365日・14時締め切り出荷を実現",
  "3ヶ月のシミュレーションで達成",
];

export default function CaseStudy() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="fade-in text-2xl md:text-3xl font-bold text-navy text-center">
          導入事例
        </h2>
        <div className="fade-in mt-14 bg-light-gray rounded-lg p-8 md:p-12">
          <div className="flex flex-col sm:flex-row sm:gap-12 gap-4 text-sm text-text-light">
            <div>
              <span className="font-bold text-navy">業種</span>
              <span className="ml-3">EC事業者（D2Cブランド）</span>
            </div>
            <div>
              <span className="font-bold text-navy">課題</span>
              <span className="ml-3">物流コスト削減・出荷体制の強化</span>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            {results.map((result, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-base font-medium text-navy"
              >
                <span className="text-accent">&#10003;</span>
                {result}
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-text-light leading-relaxed">
            ※通常、365日対応に切り替えるとコストは上がります。それでも約22%の削減を同時に実現しました。
          </p>
        </div>
      </div>
    </section>
  );
}

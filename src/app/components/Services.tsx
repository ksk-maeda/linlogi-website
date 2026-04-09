const steps = [
  {
    number: "01",
    title: "物流コスト診断",
    body: "現在の請求書をもとに、コスト構造を可視化します。どこに改善余地があるか、数字で示します。相見積もりや現状確認だけのご相談も歓迎です。",
  },
  {
    number: "02",
    title: "物流設計",
    body: "商品の特性・出荷件数・販売チャネルに合わせて、最適な物流の仕組みを設計します。WMS選定・フロー設計・梱包仕様まで対応します。",
  },
  {
    number: "03",
    title: "実行・改善",
    body: "設計だけで終わりません。実際に現場で動かし、データを見ながら改善し続けます。Keep improving. これが私たちの文化です。",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 px-6 bg-light-gray">
      <div className="max-w-5xl mx-auto">
        <h2 className="fade-in text-2xl md:text-3xl font-bold text-heading text-center">
          サービス
        </h2>
        <p className="fade-in mt-4 text-base text-body text-center">
          設計から実行まで、一気通貫でやり切ります。
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="fade-in">
              <div className="text-sm font-bold text-main-blue font-[family-name:var(--font-inter)] tracking-wider">
                STEP {step.number}
              </div>
              <h3 className="mt-3 text-lg font-bold text-heading">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-body">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

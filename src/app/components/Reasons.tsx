const reasons = [
  {
    title: "荷主の目線で設計する",
    body: "他の3PLが「倉庫の都合」で設計するところを、私たちは「荷主にとっての合理性」で設計します。他社が嫌がる細かい要求を、私たちは喜んで受けます。それが私たちのモチベーションだからです。",
  },
  {
    title: "完全オーダーメイドで対応する",
    body: "商品が違えば、最適な物流は違います。小型・大型、ピース単位・パレット単位、複数クライアントの混在管理まで、一社一社に合わせた設計をします。一律の運用はしません。",
  },
  {
    title: "365日14時出荷を実現している",
    body: "自社倉庫・自社運営だから、外部の制限がありません。365日14時締め切りで出荷します。FBAやRSLより低コストで、同等以上のスピードを実現できます。",
  },
];

export default function Reasons() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="fade-in text-2xl md:text-3xl font-bold text-navy text-center">
          LinLogiにしかできないこと
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="fade-in bg-light-gray rounded-lg p-8"
            >
              <h3 className="text-lg font-bold text-navy">{reason.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-light">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

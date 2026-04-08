const stats = [
  { value: "12年", label: "自社EC運営歴" },
  { value: "100社以上", label: "倉庫視察数" },
  { value: "6つ", label: "実費で試したWMS数" },
];

export default function About() {
  return (
    <section className="py-24 md:py-32 px-6 bg-light-gray">
      <div className="max-w-3xl mx-auto">
        <h2 className="fade-in text-2xl md:text-3xl font-bold text-navy text-center">
          私たちは、もともと荷主でした。
        </h2>
        <p className="fade-in mt-10 text-base md:text-lg leading-loose text-text-light">
          12年間、自社のEC物流と向き合い続けました。4拠点の移転、6つのWMSを実費で試し、100社以上の倉庫を視察してきた当事者です。
          円安による原価高騰で危機に直面したとき、物流を徹底的に内製化・改善した結果、物流コストが半減しました。
          業界のセオリーを外れた方法でしたが、圧倒的に合理的でした。
          物流の専門家が視察に来て「これがベンチャーか」と驚いた、その経験がLinLogiの原点です。
        </p>
        <div className="fade-in mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 text-center shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-bold text-navy">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-text-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

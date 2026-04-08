const problems = [
  "物流コストの削減余地がわからない",
  "土日・祝日・年末年始に出荷できていない",
  "今の3PL業者に課題を感じているが、切り替えが不安",
  "提案はされるが、実行まで伴走してくれない",
  "RSL・FBAのコストが高く、代替手段を探している",
  "自社出荷しているが、人件費と手間がかかりすぎている",
];

export default function Problems() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="fade-in text-2xl md:text-3xl font-bold text-navy text-center">
          こんなお悩みはありませんか？
        </h2>
        <ul className="mt-14 space-y-5">
          {problems.map((item, i) => (
            <li
              key={i}
              className="fade-in flex items-start gap-4 text-base md:text-lg text-text-light"
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

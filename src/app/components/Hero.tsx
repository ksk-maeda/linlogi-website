export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-main-blue to-blue-gradient-end">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          物流を、設計から変える。
        </h1>
        <p className="mt-8 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          荷主として12年間、自社の物流コストと向き合い続けた私たちが、
          あなたの会社に最適な物流を設計し、実行までやり切ります。
        </p>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block bg-white text-main-blue font-medium text-base px-8 py-4 rounded hover:bg-white/90 transition-colors"
          >
            物流コストを診断する &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-lg font-bold text-white font-[family-name:var(--font-inter)] tracking-tight">
          LinLogi
        </div>
        <p className="mt-2 text-xs text-white/50">
          リンテクト・ロジスティクス
        </p>
        <p className="mt-4 text-xs text-white/40 leading-relaxed">
          リンテクト・ジャパン株式会社
          <br />
          〒350-XXXX 埼玉県川越市
        </p>
        <p className="mt-6 text-sm text-white/30 font-[family-name:var(--font-inter)] italic">
          Keep improving.
        </p>
      </div>
    </footer>
  );
}

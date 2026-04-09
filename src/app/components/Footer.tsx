import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-blue border-t border-white/10 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <Image
          src="/logo/noBgColor.svg"
          alt="LinLogi"
          width={200}
          height={100}
          className="h-16 w-auto"
        />
        <p className="mt-4 text-xs text-white/50">
          リンテクト・ロジスティクス
        </p>
        <p className="mt-4 text-xs text-white/40 leading-relaxed">
          リンテクト・ジャパン株式会社
          <br />
          〒350-XXXX 埼玉県川越市
        </p>
      </div>
    </footer>
  );
}

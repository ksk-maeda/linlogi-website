"use client";

import { useState } from "react";

const logisticsOptions = [
  "自社出荷",
  "外注3PL",
  "FBA",
  "RSL",
  "その他",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section id="contact" className="py-24 md:py-32 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl font-bold text-white">
            お問い合わせありがとうございます。
          </p>
          <p className="mt-4 text-base text-white/70">
            2営業日以内にご連絡いたします。
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-navy">
      <div className="max-w-2xl mx-auto">
        <h2 className="fade-in text-2xl md:text-3xl font-bold text-white text-center">
          まず、物流コストを診断します。
        </h2>
        <p className="fade-in mt-6 text-base text-white/70 text-center leading-relaxed">
          直近の物流請求書をお持ちください。それだけで、改善できる余地が見えてきます。
          費用は一切かかりません。現状確認・相見積もりだけのご相談も歓迎です。
        </p>

        <form
          className="fade-in mt-14 space-y-6"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            fetch(form.action, {
              method: "POST",
              body: new FormData(form),
              headers: { Accept: "application/json" },
            }).then((res) => {
              if (res.ok) setSubmitted(true);
            });
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/80 mb-2">
                会社名 <span className="text-accent-light">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-2">
                お名前 <span className="text-accent-light">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/80 mb-2">
                メールアドレス <span className="text-accent-light">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-2">
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/80 mb-2">
                月間出荷件数（おおよそ）
              </label>
              <input
                type="text"
                name="monthly_shipments"
                placeholder="例：500件"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-2">
                現在の物流体制
              </label>
              <select
                name="current_logistics"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-accent"
              >
                <option value="" className="text-navy">
                  選択してください
                </option>
                {logisticsOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-navy">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/80 mb-2">
              お問い合わせ内容
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-accent resize-none"
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="inline-block bg-white text-navy font-medium text-base px-10 py-4 rounded hover:bg-white/90 transition-colors cursor-pointer"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      {/* Ultra-Premium Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/IMG_1994.jpg"
          alt="Keio University"
          fill
          quality={100}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Ultra-Thin Premium Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 font-light transition-all duration-500 hover:-translate-x-1">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ホームに戻る
            </Link>
            <h1 className="text-xl md:text-2xl font-light text-gray-900 tracking-wide">特定商取引法に基づく表記</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.15)] border border-white/30 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-violet-400/5 blur-3xl rounded-full translate-x-32 -translate-y-32"></div>
          <h1 className="text-3xl md:text-5xl font-thin text-gray-900 mb-16 tracking-wide relative">特定商取引法に基づく表記</h1>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="text-left py-6 px-10 w-1/3 bg-white/40 font-thin text-gray-700 tracking-wider text-sm uppercase">販売事業者</th>
                  <td className="py-6 px-10 text-gray-600 font-extralight tracking-wide">Shinonome Study Group</td>
                </tr>
                <tr>
                  <th className="text-left py-6 px-10 w-1/3 bg-white/40 font-thin text-gray-700 tracking-wider text-sm uppercase">運営責任者</th>
                  <td className="py-6 px-10 text-gray-600 font-extralight tracking-wide">代表者</td>
                </tr>
                <tr>
                  <th className="text-left py-6 px-10 w-1/3 bg-white/40 font-thin text-gray-700 tracking-wider text-sm uppercase">所在地</th>
                  <td className="py-6 px-10 text-gray-600 font-extralight tracking-wide">（ご請求があれば遅滞なく開示します）</td>
                </tr>
                <tr>
                  <th className="text-left py-6 px-10 w-1/3 bg-white/40 font-thin text-gray-700 tracking-wider text-sm uppercase">メールアドレス</th>
                  <td className="py-6 px-10 text-gray-600 font-extralight tracking-wide">
                    <a href="mailto:shinonome1898@gmail.com" className="text-blue-500 hover:text-blue-700 transition-all duration-500 hover:underline underline-offset-4 decoration-1">
                      shinonome1898@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-left py-6 px-10 w-1/3 bg-white/40 font-thin text-gray-700 tracking-wider text-sm uppercase">販売価格</th>
                  <td className="py-6 px-10 text-gray-600 font-extralight tracking-wide">各商品ページに記載</td>
                </tr>
                <tr>
                  <th className="text-left py-6 px-10 w-1/3 bg-white/40 font-thin text-gray-700 tracking-wider text-sm uppercase">商品代金以外の必要料金</th>
                  <td className="py-6 px-10 text-gray-600 font-extralight tracking-wide">インターネット接続料金等はお客様のご負担となります</td>
                </tr>
                <tr>
                  <th className="text-left py-6 px-10 w-1/3 bg-white/40 font-thin text-gray-700 tracking-wider text-sm uppercase">お支払い方法</th>
                  <td className="py-6 px-10 text-gray-600 font-extralight tracking-wide">クレジットカード、その他決済方法</td>
                </tr>
                <tr>
                  <th className="text-left py-6 px-10 w-1/3 bg-white/40 font-thin text-gray-700 tracking-wider text-sm uppercase">商品の引渡時期</th>
                  <td className="py-6 px-10 text-gray-600 font-extralight tracking-wide">決済完了後、即時ダウンロード可能</td>
                </tr>
                <tr>
                  <th className="text-left py-6 px-10 w-1/3 bg-white/40 font-thin text-gray-700 tracking-wider text-sm uppercase">返品・キャンセル</th>
                  <td className="py-6 px-10 text-gray-600 font-extralight tracking-wide">商品の性質上、返品・キャンセルはお受けできません</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">制定日: 2024年6月</p>
          </div>
        </div>
      </main>
    </div>
  );
} 
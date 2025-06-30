"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Ultra-Premium Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-violet-900/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/IMG_1994.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
          filter: 'contrast(1.3) brightness(1.1)'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-white/70"></div>
      </div>
      
      {/* Ultra-Thin Premium Header */}
      <header className="sticky top-0 z-50 glass border-b border-gray-200/20">
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
        <div className="card p-10 md:p-16">
          <h1 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-12 tracking-tight">特定商取引法に基づく表記</h1>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="text-left py-5 px-8 w-1/3 bg-gray-50/50 font-light text-gray-700 tracking-wide">販売事業者</th>
                  <td className="py-5 px-8 text-gray-600 font-light">Shinonome Study Group</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">運営責任者</th>
                  <td className="py-5 px-8 text-gray-600 font-light">代表者</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">所在地</th>
                  <td className="py-5 px-8 text-gray-600 font-light">（ご請求があれば遅滞なく開示します）</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">メールアドレス</th>
                  <td className="py-5 px-8 text-gray-600 font-light">
                    <a href="mailto:shinonome1898@gmail.com" className="text-blue-500 hover:text-blue-700 transition-all duration-500 hover:underline underline-offset-4 decoration-1">
                      shinonome1898@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">販売価格</th>
                  <td className="py-5 px-8 text-gray-600 font-light">各商品ページに記載</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">商品代金以外の必要料金</th>
                  <td className="py-5 px-8 text-gray-600 font-light">インターネット接続料金等はお客様のご負担となります</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">お支払い方法</th>
                  <td className="py-5 px-8 text-gray-600 font-light">クレジットカード、その他決済方法</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">商品の引渡時期</th>
                  <td className="py-5 px-8 text-gray-600 font-light">決済完了後、即時ダウンロード可能</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">返品・キャンセル</th>
                  <td className="py-5 px-8 text-gray-600 font-light">商品の性質上、返品・キャンセルはお受けできません</td>
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
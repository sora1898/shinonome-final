"use client";
import React from "react";
import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      </div>
      
      {/* Professional Header */}
      <header className="sticky top-0 z-50 glass border-b border-gray-200">
        <div className="container-main">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ホームに戻る
            </Link>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">特定商取引法に基づく表記</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>
      
      <main className="container-main py-12 max-w-4xl">
        <div className="card p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">特定商取引法に基づく表記</h1>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 w-1/3 bg-gray-50 font-semibold text-gray-900">販売事業者</th>
                  <td className="py-4 px-6 text-gray-700">Shinonome Study Group</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">運営責任者</th>
                  <td className="py-4 px-6 text-gray-700">代表者</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">所在地</th>
                  <td className="py-4 px-6 text-gray-700">（ご請求があれば遅滞なく開示します）</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">メールアドレス</th>
                  <td className="py-4 px-6 text-gray-700">
                    <a href="mailto:shinonome1898@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                      shinonome1898@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">販売価格</th>
                  <td className="py-4 px-6 text-gray-700">各商品ページに記載</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">商品代金以外の必要料金</th>
                  <td className="py-4 px-6 text-gray-700">インターネット接続料金等はお客様のご負担となります</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">お支払い方法</th>
                  <td className="py-4 px-6 text-gray-700">クレジットカード、その他決済方法</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">商品の引渡時期</th>
                  <td className="py-4 px-6 text-gray-700">決済完了後、即時ダウンロード可能</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-900">返品・キャンセル</th>
                  <td className="py-4 px-6 text-gray-700">商品の性質上、返品・キャンセルはお受けできません</td>
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
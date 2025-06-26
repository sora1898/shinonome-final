"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const books = [
  {
    id: "1",
    title: "慶應 法 英語 予想問題",
    description: "最新の出題傾向を徹底分析した予想問題集。",
    price: 0,
    category: "予想問題",
  },
  {
    id: "2",
    title: "慶應 法 英語 予想問題 三回分",
    description: "昨年度の傾向を押さえた予想問題集。",
    price: 1000,
    category: "予想問題",
  },
  {
    id: "3",
    title: "大問Ⅱ 難語推定対策問題集",
    description: "分野ごとに徹底演習できる大問別問題集。",
    price: 1700,
    category: "大問別問題集",
  },
  {
    id: "4",
    title: "大問Ⅳ インタビュー問題対策問題集",
    description: "分野ごとに徹底演習できる大問別問題集。",
    price: 1700,
    category: "大問別問題集",
  },
  {
    id: "5",
    title: "合格データ",
    description: "合格者のリアルな声を集めた体験記。",
    price: 500,
    category: "合格体験記",
  },
];

export default function Home() {
  const [purchasedItems, setPurchasedItems] = useState<string[]>([]);
  const [showPurchaseInfo, setShowPurchaseInfo] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePurchase = (id: string) => {
    setShowPurchaseInfo(id);
  };

  const confirmPurchase = (id: string) => {
    alert(`${books.find(b => b.id === id)?.title} の購入が完了しました！`);
    setPurchasedItems((prev) => [...prev, id]);
    setShowPurchaseInfo(null);
  };

  const cancelPurchase = () => {
    setShowPurchaseInfo(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // カテゴリごとに商品をグループ化
  const groupedBooks = books.reduce((acc, book) => {
    if (!acc[book.category]) {
      acc[book.category] = [];
    }
    acc[book.category].push(book);
    return acc;
  }, {} as Record<string, typeof books>);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] relative" style={{
      backgroundImage: 'url(/IMG_1994.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* 背景オーバーレイ - 全体に適用 */}
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>
      
      {/* ヘッダー */}
      <div className={`relative w-full text-center bg-gradient-to-r from-purple-50 via-blue-50 via-indigo-50 via-blue-50 to-purple-50 border-b border-purple-200 p-2 z-40 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-3 overflow-hidden">
              <Image 
                src="/IMG_3593.png" 
                alt="Shinonome Logo" 
                width={64} 
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">Shinonome Study Group</h1>
              <p className="text-xs text-gray-600 font-medium leading-tight">慶應義塾大学法学部 合格への道</p>
            </div>
          </div>
          
          {/* 右側のリンク */}
          <div className="flex items-center gap-4">
            <a 
              href="/timer" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              ⏱️ タイマー
            </a>
            <a 
              href="/answer-sheet" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              📝 解答用紙
            </a>
            {/* ハンバーガーメニューボタン */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">メニュー</h3>
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <a 
                  href="/legal" 
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={toggleMobileMenu}
                >
                  特定商取引法に基づく表記
                </a>
                <a 
                  href="/privacy" 
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={toggleMobileMenu}
                >
                  プライバシーポリシー
                </a>
                <a 
                  href="/terms" 
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={toggleMobileMenu}
                >
                  利用規約
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* メインコンテンツ */}
      <div className={`relative max-w-6xl mx-auto py-8 px-4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex flex-col gap-8 w-full">
          {Object.entries(groupedBooks).map(([category, categoryBooks], categoryIndex) => (
            <div key={category} className={`w-full transition-all duration-700 delay-${(categoryIndex + 1) * 200} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {category === "予想問題" && (
                <h1 className="text-4xl font-black mb-4 text-indigo-900 font-serif tracking-wide drop-shadow-sm">慶應義塾大学 法学部 英語編</h1>
              )}
              <h2 className="text-3xl font-black mb-6 text-indigo-900 font-serif tracking-wide drop-shadow-sm">{category}</h2>
              <div className="flex flex-wrap gap-4">
                {categoryBooks.map((book, bookIndex) => (
                  <div key={book.id} className={`border rounded-lg p-4 w-[300px] min-h-[200px] flex flex-col justify-between bg-white bg-opacity-95 shadow-lg transition-all duration-500 delay-${(categoryIndex * 100) + (bookIndex * 100)} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-indigo-700 select-none">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 mb-2 text-sm">{book.description}</p>
                      <span className="font-bold text-lg">¥{book.price.toLocaleString()}</span>
                      <p className="text-red-600 text-sm font-semibold mt-1">Coming Soon</p>
                    </div>
                    {showPurchaseInfo === book.id ? (
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700 bg-yellow-50 p-2 rounded">
                          この商品は電子書籍です。購入後、ダウンロードリンクをお送りします。
                        </p>
                        <div className="flex gap-4 pt-4">
                          <button
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold flex-1"
                            onClick={() => confirmPurchase(showPurchaseInfo)}
                          >
                            購入確定
                          </button>
                          <button
                            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 font-semibold flex-1"
                            onClick={cancelPurchase}
                          >
                            キャンセル
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex-1"
                          onClick={() => handlePurchase(book.id)}
                        >
                          購入
                        </button>
                        <button
                          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 flex-1"
                          onClick={() => alert(`${book.title}のサンプルページを表示します。`)}
                        >
                          サンプル
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* モーダルオーバーレイ */}
        {showPurchaseInfo && (
          <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border transform transition-all">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">購入確認</h2>
                <button
                  onClick={cancelPurchase}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ×
                </button>
              </div>
              
              {showPurchaseInfo && (() => {
                const book = books.find(b => b.id === showPurchaseInfo);
                return book ? (
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                      <p className="text-gray-600 mb-2">{book.description}</p>
                      <p className="text-2xl font-bold text-blue-600">¥{book.price.toLocaleString()}</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">ご購入について</h4>
                      <ul className="text-sm space-y-1">
                        <li>• この商品は電子書籍です</li>
                        <li>• 購入後、ダウンロードリンクをメールでお送りします</li>
                        <li>• PDF形式でダウンロードいただけます</li>
                        <li>• 返品・交換はできません</li>
                      </ul>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <button
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold flex-1"
                        onClick={() => confirmPurchase(showPurchaseInfo)}
                      >
                        購入確定
                      </button>
                      <button
                        className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 font-semibold flex-1"
                        onClick={cancelPurchase}
                      >
                        キャンセル
                      </button>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        )}
      </div>
      
      <footer className={`relative mt-8 py-4 bg-gray-100 border-t border-gray-200 transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex flex-col gap-2 text-xs text-gray-600">
            <div className="flex justify-center items-center gap-4">
              <a 
                href="/legal" 
                className="hover:text-blue-600 hover:underline"
              >
                特定商取引法に基づく表記
              </a>
              <span>|</span>
              <a 
                href="/privacy" 
                className="hover:text-blue-600 hover:underline"
              >
                プライバシーポリシー
              </a>
              <span>|</span>
              <a 
                href="/terms" 
                className="hover:text-blue-600 hover:underline"
              >
                利用規約
              </a>
            </div>
            <div>© 2024 Shinonome Study Group. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
} 
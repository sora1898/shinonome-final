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
    title: " 語句定義問題 対策問題集",
    description: "分野ごとに徹底演習できる大問別問題集。",
    price: 1700,
    category: "大問別問題集",
  },
  {
    id: "4",
    title: "インタビュー問題 対策問題集",
    description: "分野ごとに徹底演習できる大問別問題集。",
    price: 1700,
    category: "大問別問題集",
  },
  {
    id: "5",
    title: "合格データベース <英語・日本史・小論文>",
    description: "参考書ルート、現役時代の学力推移、合格データベース　英語・日本史・小論文を掲載！！",
    price: 500,
    category: "合格データベース",
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
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-50">
      {/* Professional Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/85 to-purple-50/90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/IMG_1994.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          filter: 'brightness(1.1)'
        }}></div>
      </div>
      
      {/* Professional Header */}
      <header className={`sticky top-0 z-50 glass border-b border-white/20 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="container-main">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
                <Image
                  src="/IMG_3593.png" 
                  alt="Shinonome Logo" 
                  width={56} 
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">Shinonome Study Group</h1>
                <p className="text-xs md:text-sm text-gray-600 font-medium">慶應義塾大学法学部 合格への道</p>
              </div>
            </div>

            {/* Navigation Actions */}
            <nav className="flex items-center space-x-3">
              <a
                href="/timer" 
                className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                タイマー
              </a>
              <a
                href="/マークシート.pdf"
                download
                className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border border-transparent rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                解答用紙
              </a>
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2.5 text-gray-700 hover:text-blue-600 focus:outline-none hover:bg-blue-50/70 rounded-xl transition-all duration-300 hover:shadow-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Professional Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-50" onClick={toggleMobileMenu}>
          <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform rounded-l-3xl" onClick={e => e.stopPropagation()}>
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">メニュー</h3>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 py-6">
                <div className="px-4 space-y-2">
                  <a 
                    href="/timer" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    タイマー
                  </a>
                  <a 
                    href="/マークシート.pdf"
                    download
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    解答用紙ダウンロード
                  </a>
                </div>
                
                <div className="mt-8 px-4">
                  <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">その他</p>
                  <div className="mt-3 space-y-2">
                    <a 
                      href="/legal" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      特定商取引法に基づく表記
                    </a>
                    <a
                      href="/privacy" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      プライバシーポリシー
                    </a>
                    <a
                      href="/terms" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      利用規約
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <main className={`container-main py-8 md:py-12 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col gap-8 w-full">
          
          {/* Hero Section - Study Guide */}
          <section className={`mb-16 animate-fadeIn`} style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">慶應義塾大学法学部入試のすゝめ 英語編</h2>
              <p className="text-lg text-gray-600 font-medium">現役合格者による傾向と対策を徹底解説</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="card p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                <div className="relative z-10">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">受験生時代に得たノウハウを無料で公開</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    地方の平凡な受験生から慶應法学部に合格した筆者が、独自の攻略法と合格への戦略を余すことなく公開します。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <button
                      onClick={() => window.open('/guide', '_blank')}
                      className="btn-primary"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      オンラインで読む
                    </button>
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/慶法　英語　すゝめ.pdf';
                        link.download = '慶法　英語　すゝめ.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="btn-success"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      PDF形式でダウンロード
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </section>

          {Object.entries(groupedBooks).map(([category, categoryBooks], categoryIndex) => (
            <section key={category} className={`mb-16 animate-fadeIn`} style={{ animationDelay: `${(categoryIndex + 1) * 0.1}s` }}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{category}</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent ml-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryBooks.map((book, bookIndex) => {
                  const previewId = book.id === "1" ? "english1" : 
                                   book.id === "2" ? "english2" : 
                                   book.id === "3" ? "question2" : 
                                   book.id === "4" ? "question4" : 
                                   book.id === "5" ? "data" : "guide";
                  
                  return (
                    <div key={book.id} className="card card-hover p-6 h-full flex flex-col group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      <div className="relative z-10 flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 pr-2 group-hover:text-blue-700 transition-colors duration-300">
                            {book.title}
                          </h3>
                          {book.id === "1" && (
                            <span className="badge badge-success animate-pulse">無料</span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2 font-medium">{book.description}</p>
                        <div className="flex items-baseline justify-between mb-4">
                          {book.id === "1" ? (
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">無料</span>
                          ) : (
                            <span className="text-2xl font-bold text-gray-900">¥{book.price.toLocaleString()}</span>
                          )}
                          {book.id !== "1" && (
                            <span className="text-sm text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded-lg">Coming Soon</span>
                          )}
                        </div>
                      </div>
                      <div className="space-y-3 mt-auto">
                        {book.id === "1" ? (
                          <button
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = '/慶試① (2).pdf';
                              link.download = '慶試① (2).pdf';
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                            }}
                            className="btn-success w-full"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            無料ダウンロード
                          </button>
                        ) : (
                          <>
                            <button
                              onClick={() => handlePurchase(book.id)}
                              className="btn-primary w-full"
                              disabled={true}
                            >
                              購入する（準備中）
                            </button>
                            {book.id === "3" && (
                              <button
                                onClick={() => {
                                  const link = document.createElement('a');
                                  link.href = '/語句定義問題 対策問題集① 完全版PDF.pdf';
                                  link.download = '語句定義問題 対策問題集① 完全版PDF.pdf';
                                  document.body.appendChild(link);
                                  link.click();
                                  document.body.removeChild(link);
                                }}
                                className="btn-secondary w-full text-sm"
                              >
                                試作品をダウンロード
                              </button>
                            )}
                          </>
                        )}
                      </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        
        {/* Professional Modal */}
        {showPurchaseInfo && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all animate-scaleIn border border-gray-100">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">購入確認</h2>
                <button
                  onClick={cancelPurchase}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {showPurchaseInfo && (() => {
                const book = books.find(b => b.id === showPurchaseInfo);
                return book ? (
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                      <p className="text-gray-600 mb-4">{book.description}</p>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-900">¥{book.price.toLocaleString()}</span>
                        <span className="text-gray-500 ml-2">（税込）</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 p-6 rounded-2xl">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ご購入について
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          この商品は電子書籍（PDF形式）です
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          購入後、ダウンロードリンクをメールでお送りします
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          商品の性質上、返品・交換はお受けできません
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex gap-4 pt-2">
                      <button
                        className="btn-primary flex-1"
                        onClick={() => confirmPurchase(showPurchaseInfo)}
                      >
                        購入を確定する
                      </button>
                      <button
                        className="btn-secondary flex-1 group"
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
      </main>
      
      {/* Professional Footer */}
      <footer className={`mt-auto border-t border-gray-100 bg-gradient-to-b from-white to-gray-50 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-main py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <Image
                    src="/IMG_3593.png" 
                    alt="Shinonome Logo" 
                    width={40} 
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Shinonome Study Group</h3>
                  <p className="text-sm text-gray-600">慶應義塾大学法学部 合格への道</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 max-w-md">
                現役慶應法学部生が運営する、受験生のための学習支援サービス。独自の攻略法と合格への戦略を提供します。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">コンテンツ</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/guide" className="text-gray-600 hover:text-blue-600 transition-colors">入試のすゝめ</a></li>
                <li><a href="/timer" className="text-gray-600 hover:text-blue-600 transition-colors">試験タイマー</a></li>
                <li><a href="/マークシート.pdf" className="text-gray-600 hover:text-blue-600 transition-colors">解答用紙</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">法的情報</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/legal" className="text-gray-600 hover:text-blue-600 transition-colors">特定商取引法に基づく表記</a></li>
                <li><a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">プライバシーポリシー</a></li>
                <li><a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">利用規約</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              © 2024 Shinonome Study Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
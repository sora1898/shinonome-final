"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Preview() {
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const previews = [
    {
      id: "guide",
      title: "慶應法学部入試のすゝめ",
      content: `
        <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">
          <h1 style="color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px;">慶應法学部入試のすゝめ</h1>
          
          <h2 style="color: #374151; margin-top: 30px;">慶應法学部合格への道筋</h2>
          <p>慶應義塾大学法学部の入試は、英語・国語・地歴公民の3科目で構成されています。特に英語は配点が高く、合格の鍵を握る重要な科目です。</p>
          
          <h3 style="color: #1e40af; margin-top: 25px;">各科目の特徴</h3>
          <ul style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <li><strong>英語：</strong>配点が高く、長文読解力が重要。大問Ⅰ〜Ⅳまで幅広い出題形式。</li>
            <li><strong>国語：</strong>論理的思考力と表現力を問われる。現代文・古文・漢文の総合的な力が必要。</li>
            <li><strong>地歴公民：</strong>幅広い知識と理解力が必要。世界史・日本史・政治経済から選択。</li>
          </ul>
          
          <h3 style="color: #1e40af; margin-top: 25px;">合格のポイント</h3>
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; border-left: 4px solid #1e40af;">
            <p><strong>1. 英語力の強化</strong><br>
            慶應法学部の英語は難易度が高く、特に長文読解が重要です。毎日英語に触れる習慣をつけましょう。</p>
            
            <p><strong>2. 論理的思考力</strong><br>
            国語では論理的な文章読解と論述力が求められます。文章の構造を理解する力を養いましょう。</p>
            
            <p><strong>3. 基礎知識の定着</strong><br>
            地歴公民では基礎知識をしっかりと身につけることが重要です。暗記だけでなく理解を深めましょう。</p>
          </div>
        </div>
      `
    },
    {
      id: "english1",
      title: "慶應 法 英語 予想問題",
      content: `
        <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">
          <h1 style="color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px;">慶應 法 英語 予想問題</h1>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">※ これはプレビュー版です。実際の問題はより詳細で充実した内容となっています。</p>
          </div>
          
          <h2 style="color: #374151; margin-top: 30px;">大問Ⅰ 長文読解</h2>
          <p>以下の英文を読んで、設問に答えなさい。</p>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <p style="font-style: italic; margin-bottom: 15px;">
              The concept of democracy has evolved significantly throughout human history. From the ancient Greek city-states to modern representative democracies, the fundamental principles of popular sovereignty and political equality have remained constant...
            </p>
            <p style="font-size: 0.9em; color: #6b7280;">（続きは実際の問題でご確認ください）</p>
          </div>
          
          <h3 style="color: #1e40af;">設問例</h3>
          <ol style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <li>本文の主旨として最も適切なものを選びなさい。</li>
            <li>下線部（A）の意味として最も適切なものを選びなさい。</li>
            <li>本文の内容と一致するものを選びなさい。</li>
          </ol>
        </div>
      `
    },
    {
      id: "english2",
      title: "慶應 法 英語 予想問題 三回分",
      content: `
        <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">
          <h1 style="color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px;">慶應 法 英語 予想問題 三回分</h1>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">※ これはプレビュー版です。実際の問題は3回分の完全な予想問題となっています。</p>
          </div>
          
          <h2 style="color: #374151; margin-top: 30px;">第1回 予想問題</h2>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">構成</h3>
            <ul>
              <li>大問Ⅰ：長文読解（配点：40点）</li>
              <li>大問Ⅱ：語彙・文法（配点：30点）</li>
              <li>大問Ⅲ：英作文（配点：20点）</li>
              <li>大問Ⅳ：リスニング（配点：10点）</li>
            </ul>
          </div>
          
          <h2 style="color: #374151; margin-top: 30px;">第2回 予想問題</h2>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">構成</h3>
            <ul>
              <li>大問Ⅰ：長文読解（配点：40点）</li>
              <li>大問Ⅱ：語彙・文法（配点：30点）</li>
              <li>大問Ⅲ：英作文（配点：20点）</li>
              <li>大問Ⅳ：リスニング（配点：10点）</li>
            </ul>
          </div>
          
          <h2 style="color: #374151; margin-top: 30px;">第3回 予想問題</h2>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">構成</h3>
            <ul>
              <li>大問Ⅰ：長文読解（配点：40点）</li>
              <li>大問Ⅱ：語彙・文法（配点：30点）</li>
              <li>大問Ⅲ：英作文（配点：20点）</li>
              <li>大問Ⅳ：リスニング（配点：10点）</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: "question2",
      title: "大問Ⅱ 難語推定対策問題集",
      content: `
        <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">
          <h1 style="color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px;">大問Ⅱ 難語推定対策問題集</h1>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">※ これはプレビュー版です。実際の問題集はより詳細で充実した内容となっています。</p>
          </div>
          
          <h2 style="color: #374151; margin-top: 30px;">難語推定の攻略法</h2>
          <p>慶應法学部の英語では、文脈から未知の語彙の意味を推測する問題が頻出します。この問題集では、その攻略法を徹底的に解説します。</p>
          
          <h3 style="color: #1e40af; margin-top: 25px;">推測のポイント</h3>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <ol>
              <li><strong>文脈からの推測</strong>：前後の文章から意味を推測する</li>
              <li><strong>語根・接頭辞・接尾辞</strong>：語の構成要素から意味を推測する</li>
              <li><strong>類義語・反義語</strong>：文中の類義語や反義語から推測する</li>
              <li><strong>例示・説明</strong>：具体例や説明から推測する</li>
            </ol>
          </div>
          
          <h3 style="color: #1e40af; margin-top: 25px;">練習問題例</h3>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <p><strong>問題：</strong>下線部の語の意味として最も適切なものを選びなさい。</p>
            <p style="font-style: italic;">
              The company's <u>lucrative</u> business model has attracted many investors.
            </p>
            <p style="font-size: 0.9em; color: #6b7280;">（選択肢は実際の問題集でご確認ください）</p>
          </div>
        </div>
      `
    },
    {
      id: "question4",
      title: "大問Ⅳ インタビュー問題対策問題集",
      content: `
        <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">
          <h1 style="color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px;">大問Ⅳ インタビュー問題対策問題集</h1>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">※ これはプレビュー版です。実際の問題集はより詳細で充実した内容となっています。</p>
          </div>
          
          <h2 style="color: #374151; margin-top: 30px;">インタビュー問題の特徴</h2>
          <p>慶應法学部の英語では、インタビュー形式の問題が頻出します。この問題集では、インタビュー問題の攻略法を徹底的に解説します。</p>
          
          <h3 style="color: #1e40af; margin-top: 25px;">攻略のポイント</h3>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <ul>
              <li><strong>質問と回答の対応関係</strong>：質問に対する適切な回答を選ぶ</li>
              <li><strong>話者の意図の理解</strong>：インタビュアーとインタビュイーの意図を理解する</li>
              <li><strong>文脈の把握</strong>：会話の流れを正確に把握する</li>
              <li><strong>語彙・表現の理解</strong>：会話で使われる自然な表現を理解する</li>
            </ul>
          </div>
          
          <h3 style="color: #1e40af; margin-top: 25px;">練習問題例</h3>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <p><strong>問題：</strong>以下のインタビューの続きとして最も適切なものを選びなさい。</p>
            <div style="background: #e5e7eb; padding: 15px; border-radius: 8px; margin: 10px 0;">
              <p><strong>Interviewer:</strong> What motivated you to start this project?</p>
              <p><strong>Interviewee:</strong> Well, I noticed that there was a gap in the market...</p>
            </div>
            <p style="font-size: 0.9em; color: #6b7280;">（選択肢は実際の問題集でご確認ください）</p>
          </div>
        </div>
      `
    },
    {
      id: "data",
      title: "合格データ",
      content: `
        <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">
          <h1 style="color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px;">合格データ</h1>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">※ これはプレビュー版です。実際のデータはより詳細で充実した内容となっています。</p>
          </div>
          
          <h2 style="color: #374151; margin-top: 30px;">合格者の声</h2>
          <p>実際に慶應法学部に合格した先輩たちの体験記を集めました。合格への道筋を参考にしてください。</p>
          
          <h3 style="color: #1e40af; margin-top: 25px;">合格体験記例</h3>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #374151; margin-top: 0;">Aさん（現役合格）</h4>
            <p><strong>合格の決め手：</strong>英語の長文読解力の向上</p>
            <p><strong>勉強法：</strong>毎日英語の長文を読む習慣をつけ、論理的な文章構造を理解する練習を重ねました。</p>
            <p style="font-size: 0.9em; color: #6b7280;">（詳細は実際のデータでご確認ください）</p>
          </div>
          
          <h3 style="color: #1e40af; margin-top: 25px;">合格データ</h3>
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <ul>
              <li><strong>合格者平均点：</strong>英語 85点、国語 78点、地歴公民 82点</li>
              <li><strong>合格者出身校：</strong>私立高校 60%、公立高校 35%、その他 5%</li>
              <li><strong>合格者勉強時間：</strong>1日平均 6-8時間</li>
              <li><strong>合格者開始時期：</strong>高校2年生から 70%、高校3年生から 30%</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  const handlePreview = (id: string) => {
    setSelectedPreview(id);
  };

  const closePreview = () => {
    setSelectedPreview(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← ホームに戻る
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">プレビュー</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {!selectedPreview ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">プレビューを選択してください</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {previews.map((preview) => (
                <div
                  key={preview.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => handlePreview(preview.id)}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{preview.title}</h3>
                  <p className="text-gray-600 text-sm">プレビューを表示</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {previews.find(p => p.id === selectedPreview)?.title}
              </h2>
              <button
                onClick={closePreview}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                閉じる
              </button>
            </div>
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: previews.find(p => p.id === selectedPreview)?.content || '' 
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
} 
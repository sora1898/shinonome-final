import React from "react";

export default function LegalPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">特定商取引法に基づく表記</h1>
      <table className="w-full mb-8 border border-gray-200">
        <tbody>
          <tr className="border-b"><th className="text-left p-2 w-1/3 bg-gray-50">販売事業者</th><td className="p-2">Shinonome Study Group</td></tr>
          <tr className="border-b"><th className="text-left p-2 bg-gray-50">運営責任者</th><td className="p-2">代表者</td></tr>
          <tr className="border-b"><th className="text-left p-2 bg-gray-50">所在地</th><td className="p-2">（ご請求があれば遅滞なく開示します）</td></tr>
          <tr className="border-b"><th className="text-left p-2 bg-gray-50">メールアドレス</th><td className="p-2">shinonome1898@gmail.com</td></tr>
          <tr className="border-b"><th className="text-left p-2 bg-gray-50">販売価格</th><td className="p-2">各商品ページに記載</td></tr>
          <tr className="border-b"><th className="text-left p-2 bg-gray-50">商品代金以外の必要料金</th><td className="p-2">インターネット接続料金等はお客様のご負担となります</td></tr>
          <tr className="border-b"><th className="text-left p-2 bg-gray-50">お支払い方法</th><td className="p-2">クレジットカード、その他決済方法</td></tr>
          <tr className="border-b"><th className="text-left p-2 bg-gray-50">商品の引渡時期</th><td className="p-2">決済完了後、即時ダウンロード可能</td></tr>
          <tr className="border-b"><th className="text-left p-2 bg-gray-50">返品・キャンセル</th><td className="p-2">商品の性質上、返品・キャンセルはお受けできません</td></tr>
        </tbody>
      </table>
      <p className="text-sm text-gray-500 mt-8">制定日: 2024年6月</p>
    </div>
  );
} 
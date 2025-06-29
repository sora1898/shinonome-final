export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-8 font-sans leading-relaxed text-gray-900 bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* ホーム画面と同じヘッダー */}
      <div className="relative w-full text-center bg-gradient-to-r from-purple-50 via-blue-50 via-indigo-50 via-blue-50 to-purple-50 border-b border-purple-200 p-2 z-40">
        <div className="flex items-center max-w-6xl mx-auto px-2">
          <div className="flex items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 overflow-hidden">
              <img
                src="/IMG_3593.png"
                alt="Shinonome Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">Shinonome Study Group</h1>
              <p className="text-xs text-gray-600 font-medium leading-tight">慶應義塾大学法学部 合格への道</p>
            </div>
          </div>
        </div>
      </div>

      {/* 洗練された表紙セクション */}
      <div className="relative mb-20 overflow-hidden">
        {/* メイン背景 */}
        <div className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          {/* アニメーション背景パターン */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          {/* グリッドパターン */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          {/* メインコンテンツ */}
          <div className="relative z-10 text-center py-20 px-8 flex flex-col items-center">
            {/* 装飾的なライン */}
            <div className="flex justify-center items-center mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="w-4 h-4 bg-white/90 rounded-full mx-4 shadow-lg"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>

            {/* メインタイトル */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight text-white drop-shadow-xl">
              慶応義塾大学法学部入試のすゝめ
            </h1>
            {/* 英語編バッジ */}
            <span className="inline-block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white text-2xl md:text-3xl font-bold px-8 py-2 rounded-full shadow-lg mb-6 tracking-widest border-2 border-white/30">
              英語編
            </span>

            {/* サブタイトル */}
            <div className="space-y-2 mb-10">
              <p className="text-2xl md:text-3xl font-semibold text-white/90 drop-shadow-sm">入試傾向と対策を徹底解説</p>
              <p className="text-lg md:text-xl text-white/70 font-light">現役合格者が教える攻略法</p>
            </div>

            {/* 著者情報 */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20 shadow-lg">
              <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></span>
              <span className="text-white font-medium tracking-wide">Shinonome study group</span>
            </div>
          </div>

          {/* コーナー装飾 */}
          <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-2xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-2xl"></div>
        </div>
        {/* 影効果 */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-black/20 rounded-full blur-xl"></div>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 pb-2 border-b-2 border-indigo-300 text-indigo-900">
        前書き
      </h2>

      <p className="mb-4 text-gray-700">初めまして。慶應義塾大学法学部のSと申します。</p>

      <p className="mb-4 text-gray-700">
        数年前、私は地方の平凡な受験生で、慶應義塾大学法学部の合格判定は常にDでした。しかし、慶應義塾大学法学部の入試問題を徹底的に研究し続けた結果、見事合格を掴み取り、現在は最高に充実したキャンパスライフを送っています。
      </p>

      <p className="mb-4 text-gray-700">
        このサイトでは、私が受験生時代に培った独自の攻略法、そして合格への戦略を余すことなく公開いたします。本コンテンツはその導入として作成いたしました。
      </p>

      <p className="mb-4 text-gray-700">
        今後も、他の教材を順次公開し、価格も受験生の皆さんが手に取りやすいよう最小限に抑える予定です。
      </p>

      <p className="mb-4 text-gray-700">
        きっと、受験生の皆さんに有益な情報となるはずですので、ぜひご活用ください。
      </p>

      <p className="text-center text-gray-700"></p>

      <h2 className="text-3xl font-bold mt-12 mb-6 pb-2 border-b-2 border-indigo-300 text-indigo-900">
        英語で点を取る重要性
      </h2>

      <p className="mb-4 text-gray-700">配点割合(総得点450点中)</p>

      <table className="w-full border-collapse mb-6 text-sm">
        <thead>
          <tr>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">学部</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">試験科目</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">配点</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">配点割合</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">合計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={3} className="border border-indigo-400 p-3 align-top text-gray-700">法学部</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">外国語(英語)</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">200</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">約44.4%</td>
            <td rowSpan={3} className="border border-indigo-400 p-3 align-top text-gray-700">450</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">地理歴史</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">150</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">約33.3%</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">小論文</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">100</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">約22.2%</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4 text-gray-700">
        慶應義塾大学法学部の入試において、上の図からもわかるように、英語だけで全体の約44.4%を占めています。つまり、英語の出来が合否を大きく左右すると言っても過言ではありません。
      </p>

      <p className="mb-4 text-gray-700">
        正直なところ、地理歴史(日本史や世界史)は年々出題傾向が変化しており、どれだけ学習しても安定して高得点を狙うのは困難な科目です。また、小論文も多くの受験生が40~60点程度に落ち着く傾向にあり、採点基準が不明瞭なため大きな差をつけにくい科目と言えるでしょう。
      </p>

      <p className="mb-4 text-gray-700">
        その一方で、英語は毎年ほぼ決まった形式で出題されており、対策の効果が出やすい科目です。
      </p>

      <p className="mb-4 text-gray-700">
        だからこそ、英語こそが得点差を生む最大のポイントなのです。
      </p>

      <p className="mb-4 text-gray-700">
        最終的に、皆さんには英語を得点源とし、8割の得点を目指してほしいと思っています。8割を取れれば、他の科目が多少失敗しても十分に補うことができるからです。
      </p>

      <p className="mb-4 text-gray-700">
        「しかし、こんなに難しい問題で本当に8割も取れるの?」と思う方もいるかもしれません。
      </p>

      <p className="mb-4 text-gray-700">
        しかし、ご安心ください。適切な問題の解き方のコツを習得すれば、8割の得点は決して不可能ではありません。
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 pb-2 border-b-2 border-indigo-300 text-indigo-900">
        傾向と対策 (2025年現在)
      </h2>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-indigo-900">大問Ⅰ:単語・文法問題</h3>

      <p className="mb-4 text-gray-700">
        近年の慶應義塾大学法学部英語入試における大問1は、AとBに分割されています。
      </p>

      <p className="mb-4 text-gray-700">
        Aは、2つの単語を組み合わせて別の単語を作る形式です。ここは可能な限り、素早く正確に解答することを心がけてください。
      </p>

      <p className="mb-4 text-gray-700">
        一方、Bでは、熟語問題が出題されます。難易度が高い熟語が多く、一般的な熟語帳だけでは対策しきれないのが現状です。
      </p>

      <p className="mb-4 text-gray-700">
        そこで私が慶應義塾大学法学部の出題傾向に最も合致していると感じた熟語帳が、『仕事で使える受験英熟語 940』(晴山陽一著)です。慶應義塾大学が求める実用的な英語力という出題意図にうまく合致しており、私自身も非常に重宝しました。
      </p>

      <p className="mb-4 text-gray-700">
        このような推奨参考書に関する詳細は、別コンテンツ「慶法合格分析」で詳しく解説していますので、そちらをぜひ参照してください。
      </p>

      <p className="mb-4 text-gray-700">
        また、過去には発音や文法問題も頻繁に出題されていました。近年の傾向とは異なるものの、再度出題される可能性もゼロではありませんので、念のため対策をしておくことをお勧めします。
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-indigo-900">大問Ⅱ 語句定義問題(クセあり+差がつく大問)</h3>

      <p className="mb-4 text-gray-700">
        大問IIでは毎年、語句定義問題が出題されます。これは、慶應義塾大学法学部ならではの独特で「クセのある」問題です。
      </p>

      <p className="mb-4 text-gray-700">
        出題される単語は、英検1級レベルを超えるような極めて難解な語彙であることが多く、意味を文脈から推測するのも容易ではありません。英文自体も読みにくく、単に英語が得意なだけでは解けない作りになっているのが特徴です。そのため、入念に対策すれば、ライバルに大きな差をつけるポイントになります。まさに"慶應法学部に本気で挑む人"のための問題だと言えるでしょう。
      </p>

      <p className="mb-4 text-gray-700">
        しかし、ご安心ください。この大問には明確な解き方があります。その正しいアプローチを理解し、それに沿ってトレーニングを積めば、7割以上の得点も十分に狙えます。
      </p>

      <p className="mb-4 text-gray-700">詳細な対策方法については、別コンテンツの「語句定義問題対策問題集」にて解説していますが、ここで少しだけヒントをお伝えします。この問題の攻略のカギは「品詞の分類」です。問題に出てくる語が名詞なのか、動詞なのか、形容詞なのかを瞬時に見抜ける力を鍛えておきましょう。</p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-indigo-900">大問Ⅲ 会話文問題</h3>

      <p className="mb-4 text-gray-700">
        大問IIIでは会話文問題が出題されます。以前は会話の流れを正確に追わないと解けない難問が多かったのですが、近年は易化傾向にあり、得点源にしやすい印象です。
      </p>

      <p className="mb-4 text-gray-700">
        しかし、注意が必要です。この大問は、一つのミスが複数の問題の不正解に繋がる連鎖失点の構造になっています。油断すると大きな失点に繋がりかねない「諸刃の剣」的な大問と言えるでしょう。
      </p>

      <p className="mb-4 text-gray-700">
        いかに文の流れを丁寧に把握し、適切な文を挿入できるかが、この大問を攻略する鍵です。
      </p>

      <p className="mb-4 text-gray-700">
        大問IIだけでなく、他の大問にも共通することですが、「絶対にこの空欄に入るだろう」と確信できる選択肢以外は、最後まで文を読み切ってから解答することをお勧めします。似たような表現の選択肢が多いため、全体を俯瞰してから最適なものを選ぶようにしましょう。
      </p>

      <p className="mb-4 text-gray-700">
        巷では、対策参考書として『英会話問題のトレーニング』が推奨されています。こちらも活用し、対策を進めるのも良いでしょう。
      </p>

      <p className="mb-4 text-gray-700">
        私の方でも、この大問に特化した対策問題集を出す予定です。
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-indigo-900">大問IV インタビュー問題(クセあり)</h3>

      <p className="mb-4 text-gray-700">
        大問IVではインタビュー問題が出題され、大問IIと同様に「クセのある」問題です。インタビュアーの質問に対する適切な応答を選択する形式となっています。
      </p>

      <p className="mb-4 text-gray-700">
        私の個人的な感想ですが、この大問は慶應法学部の英語の中で最も難易度が高いと感じています。しかし、その分配点も大きく得点源にしていきたい問題です。
      </p>

      <p className="mb-4 text-gray-700">この大問もコツが必要となります。</p>

      <p className="mb-4 text-gray-700">
        まず一つ目のコツは、問題文を必ず読むことです。多くの受験生が読み飛ばしがちですが、ここには登場人物に関する詳しい説明が記載されており、会話の流れを正確に把握するために非常に役立ちます。
      </p>

      <p className="mb-4 text-gray-700">
        二つ目のコツは、キーワードをチェックすることです。
      </p>

      <p className="mb-4 text-gray-700">
        代名詞や固有名詞は必ず印をつけておきましょう。
      </p>

      <p className="mb-4 text-gray-700">
        この大問は著作権の問題から赤本での掲載数が限られています。「インタビュー問題対策問題集」 オリジナル予想問題やコツを豊富に掲載しているのでぜひ参照してください。
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-indigo-900">大問 V 長文読解</h3>

      <p className="mb-4 text-gray-700">
        大問Vでは、長文読解問題が出題されます。特に、2025年からは単語挿入や文の並べ替えといった形式が出題され、難化傾向にあります。
      </p>

      <p className="mb-4 text-gray-700">
        文量が多く、また問題の選択肢も紛らわしく作られているため、速読力と正確な内容把握の両方が求められる大問です。しかし、長文読解は配点が高く、文章自体の難易度は「やや難」程度なので、内容理解を問われる問題については、ノーミスを目指したいところです。
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 pb-2 border-b-2 border-indigo-300 text-indigo-900">
        予想配点
      </h2>

      <p className="mb-4 text-gray-700">
        大問ごとの配点は公開されていませんが、例年の動向を分析し、本サイトでは以下のような配点と予想します。
      </p>

      <p className="text-sm text-center mt-4 text-indigo-600">※必ずしも2026年度が以下の傾向、配点になるとは限りません。</p>

      <table className="w-full border-collapse mb-6 text-sm">
        <thead>
          <tr>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">大問</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">形式</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">配点</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">問題数</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">合計点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">I</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">単語・熟語問題</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">2点</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">10問</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">20点</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">II</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">語句定義問題</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">4点</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">10問</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">40点</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">III</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">会話文問題</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">3点</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">10問</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">30点</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">IV</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">インタビュー問題</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">5点</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">9問</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">45点</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">V</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">長文読解</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">-</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">-</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">65点</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">合計</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700"></td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700"></td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700"></td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">200点</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4 text-gray-700">上記の配点予想からもわかるように、長文読解(大問V)、インタビュー問題(大問IV)、語句定義問題(大問II) の順で配点が高くなっています。</p>

      <p className="mb-4 text-gray-700">
        慶應義塾大学法学部の英語で8割の得点を目指すならば、これらの大問は特に重要であり、高得点を確実に狙っていく必要があります。
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 pb-2 border-b-2 border-indigo-300 text-indigo-900">
        時間配分と戦略
      </h2>

      <p className="mb-4 text-gray-700">得点する上で自分に合った解き進め方と時間配分が重要です。</p>

      <p className="mb-4 text-gray-700">現役時代の解き進め方と回答時間を例示しますので、参考にしてください。</p>

      <table className="w-full border-collapse mb-6 text-sm">
        <thead>
          <tr>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">回答順</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">大問</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">形式</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">推奨解答時間</th>
            <th className="border border-indigo-400 p-3 text-left bg-indigo-200 font-bold text-indigo-900">戦略・理由</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">1</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">I</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">単語・熟語問題</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">5分</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">頭を問題に慣れさせるため</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">2</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">V</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">長文読解</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">35分</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">ノーミスを目指すため、集中力と時間があるうちに解く</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">3</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">IV</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">インタビュー問題</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">15分</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">高得点を目指すため、余裕のある時間帯に解く</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">4</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">II</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">語句定義問題</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">15分</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">高得点を目指すため、余裕のある時間帯に解く</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">5</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">III</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">会話問題</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">10分</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">比較的配点が低く、短時間で解けるので最後に解く</td>
          </tr>
          <tr>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">合計</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700"></td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700"></td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700">80分</td>
            <td className="border border-indigo-400 p-3 align-top text-gray-700"></td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4 text-gray-700">コツとして、各大問における「撤退ライン」をあらかじめ決めておくことが挙げられます。</p>

      <p className="mb-4 text-gray-700">
        特に、語句定義(大問II)、インタビュー問題(大問IV)、会話問題(大問III)は、紛らわしい選択肢が多く、悩もうと思えばいくらでも時間を費やしてしまいます。しかし、長時間悩んで1つの問題の正解を得るよりも、他の大問に移って多くの問題を確実に正解する方が、はるかに効率的です。
      </p>

      <p className="mb-4 text-gray-700">
        あらかじめ自分の中で撤退ラインを決め、ある程度の時間を費やしても答えが出ないようであれば、思い切って次の問題に移りましょう。
      </p>

      <p className="mb-4 text-gray-700">
        この戦略は、長文読解(大問V) にも当てはまります。もし2025年のように長文が難化した場合、その問題に固執して他の3つの大問(インタビュー、語句定義、会話)に割く時間を大幅に消費してしまうのは非常にリスクが高いです。そのような場合は、無理に最初から長文に取り組まず、一度後に回して他の大問から解き始めるといった柔軟な対応も検討しましょう。
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 pb-2 border-b-2 border-indigo-300 text-indigo-900">
        予想問題を解こう
      </h2>

      <p className="mb-4 text-gray-700">以上が「慶応義塾大学法学部 英語」の基本的な傾向と対策でした。ではこれらの知識を念頭に置いた上で、実際に予想問題を解いてみましょう。</p>

      <p className="mb-4 text-gray-700">予想問題はサイトから無料でダウンロードできます。</p>

      <p className="mb-4 text-gray-700">
        今回の問題の難易度は、本番よりも少し優しく設定してあります。初めて慶應法学部の問題を解く方は50%、ある程度過去問演習を積んだ経験がある方は60%を目安に得点できれば、順調な滑り出しと言えるでしょう。
      </p>

      <p className="mb-4 text-gray-700">ぜひ、これまでの学びを実践し、ご自身の力を試してみてください!</p>

      <div className="text-center mt-16 mb-8">
        <h1 className="text-4xl font-bold leading-tight text-indigo-900">
          慶応義塾大学法学部入試のすゝめ
        </h1>
        <p className="text-center text-indigo-700">入試傾向と対策を徹底解説</p>
        <p className="text-sm text-center mt-4 text-indigo-600">©2025 Shinonome Study Group. All rights reserved.</p>
      </div>
    </div>
  );
}
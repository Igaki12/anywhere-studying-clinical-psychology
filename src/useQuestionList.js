import { useState } from 'react'
// import imageSample1 from './img/question/sample.png'
// import imageSample2 from './img/answer/sampleAnswer.JPG'
// import ans2 from './img/answer/DSC_0188.JPG'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '神経心理学検査',
      groupContents: [
        {
          detailInfo: '★★★',
          questionImg: [],
          questionSentence: '長谷川式簡易知能評価スケール(HDS-R)とは',
          choices: [],
          answerImg: [],
          answer: '主として高齢者を対象に約10分間行われる認知症の評価',
          commentary:
            '30点満点で、20点以下は認知症が疑われる。10点以下は重症度が高度と判定されることが多い。年齢・日時の見当識・場所の見当識・3つの言葉の記銘・計算・数字の逆唱・3つの言葉の遅延再生・5つの物品記銘・言語の流暢性の9項目',
        },
        {
          detailInfo: '★★★',
          questionImg: [],
          questionSentence: 'MMSE-Jとは',
          choices: [],
          answerImg: [],
          answer: '18～65歳を対象に10～15分間で行われる認知症の評価',
          commentary:
            '30点満点で、27点以下は軽度認知障害（MCI)が、23点以下は軽度認知症が疑われる。時に関する見当識・場所に関する見当識・記銘・注意と計算・再生・呼称・復唱・理解・読字・書字・描画の11項目で構成',
        },
        {
          detailInfo: '★★★',
          questionImg: [],
          questionSentence: '新版K式発達検査とは',
          choices: [],
          answerImg: [],
          answer:
            '0歳3か月～成人を対象に45分～75分間行われる姿勢・運動領域・認知・適応領域・言語・社会領域の発達の測定',
          commentary:
            '発達指数を算出する。発達状況や行動特性の理解、望ましい発達を補助する手がかりを得る。',
        },
        {
          detailInfo: '★★★',
          questionImg: [],
          questionSentence: 'KABC-2 心理教育アセスメントバッテリーとは',
          choices: [],
          answerImg: [],
          answer:
            '2歳6か月～18歳11か月を対象に約45分～75分間行われ、認知処理能力の水準を測定する',
          commentary:
            '継次処理（入ってくる情報を1つずつ順番に処理して問題を解決）、同時処理（入ってくる情報を全体として統合して問題を解決）、学習能力（新たな情報を効率的に習得していく能力）、計画能力（問題解決のための方針決定にかかわる能力）から、認知処理能力の水準を測定。平均100、標準偏差15。学習に関する技能の習得度も測定。個別的な教育的介入の方法を把握。',
        },
        {
          detailInfo: '★★★',
          questionImg: [],
          questionSentence: 'Vineland-2（適応行動尺度第2版）とは',
          choices: [],
          answerImg: [],
          answer:
            '0歳～92歳を対象に20分～60分間で行われる全般的な適応行動のアセスメント',
          commentary:
            '保護者や近親者、評価対象者を良く知るものに半構造化面接を行う。「適応行動評価」についてコミュニケーション、日常生活スキル、社会性、運動スキルの各領域の標準スコアが算出される。また、総合した「適応行動総合点」が算出される。これらのスコアは、平均100、標準偏差15で表される。各領域を構成する下位領域からは、v評価点と呼ばれる標準スコア（平均15、標準偏差3）が得られる（不適応行動評価）',
        },
      ],
    },
    {
      groupTag: 'パーソナリティ・健康検査',
      groupContents: [
        {
          detailInfo: '★★★',
          questionImg: [],
          questionSentence: 'TEG(東大式エゴグラム)とは',
          answerImg: [],
          answer: '15歳～成人を対象に20分程度行われる自我状態の測定。',
          commentary:
            '以下の自我状態を測定し、パーソナリティを理解する。CP：父親的な役割を担う批判的な親。NP：母親的な役割を担う養育的な親。A:客観的・論理的な成人の自我状態。FC:自然な姿である自由なこども。AC：親の影響を受けた順応したこども',
        },
        {
          detailInfo: '★★★',
          questionImg: [],
          questionSentence: '矢田部ギルフォード性格検査法とは',
          answerImg: [],
          answer: '小学生～成人を対象に約30～40分間行われる検査。',
          commentary:
            '12因子による特性論的理解と、A～D型論的理解から、対象のパーソナリティを理解する。120問。',
        },
        {
          detailInfo: '★★★',
          questionImg: [],
          questionSentence: 'ミネソタ多面的人格目録(MMPI)とは',
          answerImg: [],
          answer: '15歳以上を対象に45分～80分間行われる検査',
          commentary:
            '精神病理を査定する10個の臨床尺度と受検者の受検態度を査定する4つの妥当性尺度による理解を行う。4個の妥当性尺度は、1.？尺度：どちらともいえない（？）が30個超えの場合、検査結果の妥当性を欠く。2.L尺度：好ましく見せようとする態度。3.F尺度：詐病や、窮状を誇張する態度。4.K態度：防衛的な態度',
        },
        {
          detailInfo: '★★★',
          questionImg: [],
          questionSentence: '日本版BDI-2　ベック抑うつ質問票とは',
          answerImg: [],
          answer: '13歳～80歳を対象に約5～10分行われる抑うつの重症度判定。',
          commentary:
            '14点以上で軽症。20点以上で中等症。29点以上で重症が目安。所要時間が短い。21項目',
        },
        {
          detailInfo: '★★★',
          questionImg: [],
          questionSentence: '内田クレベリン精神作業検査とは',
          answerImg: [],
          answer: '幼児～成人を対象に約60分間行われる検査。',
          commentary:
            '連続加算作業を行い、単位時間当たりの作業量の変化を折れ線グラフで表し作業曲線とする。主に産業分野で、作業能率や注意持続力の評価目的で使われることが多い。',
        },
      ],
    },
    {
      groupTag: 'エリクソンのライフサイクル（表）',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '乳児期の心理社会的危機（調和的・失調的）・基本的強さ（徳）は？',
          answerImg: [],
          answer:
            '（心理社会的危機）調和的：基本的信頼　失調的：基本的不信　基本的強さ（徳）：希望',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '幼児前期の心理社会的危機（調和的・失調的）・基本的強さ（徳）は？',
          answerImg: [],
          answer:
            '（心理社会的危機）調和的：自律性　失調的：恥・疑惑　基本的強さ（徳）：意志',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '幼児後期の心理社会的危機（調和的・失調的）・基本的強さ（徳）は？',
          answerImg: [],
          answer:
            '（心理社会的危機）調和的：自主性　失調的：罪悪感　基本的強さ（徳）：目的',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '学童期の心理社会的危機（調和的・失調的）・基本的強さ（徳）は？',
          answerImg: [],
          answer:
            '（心理社会的危機）調和的：勤勉性　失調的：劣等感　基本的強さ（徳）：適格',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '青年期の心理社会的危機（調和的・失調的）・基本的強さ（徳）は？',
          answerImg: [],
          answer:
            '（心理社会的危機）調和的：同一性達成　失調的：同一性混乱　基本的強さ（徳）：忠誠',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '成人期の心理社会的危機（調和的・失調的）・基本的強さ（徳）は？',
          answerImg: [],
          answer:
            '（心理社会的危機）調和的：親密　失調的：孤立　基本的強さ（徳）：愛',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '中年期の心理社会的危機（調和的・失調的）・基本的強さ（徳）は？',
          answerImg: [],
          answer:
            '（心理社会的危機）調和的：生殖　失調的：停滞　基本的強さ（徳）：世話',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '老年期の心理社会的危機（調和的・失調的）・基本的強さ（徳）は？',
          answerImg: [],
          answer:
            '（心理社会的危機）調和的：統合　失調的：絶望　基本的強さ（徳）：英知',
          commentary: '',
        },
      ],
    },
    {
      groupTag: '主な知能検査・発達検査の対象年齢一覧(表)',
      groupContents: [
        {
          detailInfo: '知能検査',
          questionImg: [],
          questionSentence: 'WPPSIの対象年齢は？',
          answerImg: [],
          answer: '2歳6か月～7歳3か月',
          commentary: '',
        },
        {
          detailInfo: '知能検査',
          questionImg: [],
          questionSentence: 'WISCの対象年齢は？',
          answerImg: [],
          answer: '5歳0か月～16歳11か月',
          commentary: '',
        },
        {
          detailInfo: '知能検査',
          questionImg: [],
          questionSentence: 'WAISの対象年齢は？',
          answerImg: [],
          answer: '16歳0か月～90歳11か月',
          commentary: '',
        },
        {
          detailInfo: '知能検査',
          questionImg: [],
          questionSentence: '鈴木ビネー知能検査の対象年齢は？',
          answerImg: [],
          answer: '2歳0か月～18歳11か月',
          commentary: '',
        },
        {
          detailInfo: '知能検査',
          questionImg: [],
          questionSentence: '田中ビネー知能検査の対象年齢は？',
          answerImg: [],
          answer: '2歳0か月～成人',
          commentary: '',
        },
        {
          detailInfo: '知能検査',
          questionImg: [],
          questionSentence: 'KABC-2の対象年齢は？',
          answerImg: [],
          answer: '2歳6か月～18歳11か月',
          commentary: '',
        },
        {
          detailInfo: '発達検査',
          questionImg: [],
          questionSentence: '新版K式発達検査の対象年齢は？',
          answerImg: [],
          answer: '0歳3か月～成人',
          commentary: '',
        },
        {
          detailInfo: '発達検査',
          questionImg: [],
          questionSentence: '遠城寺式乳幼児分析的発達検査の対象年齢は？',
          answerImg: [],
          answer: '0歳～4歳7,8か月',
          commentary: '',
        },
        {
          detailInfo: '発達検査',
          questionImg: [],
          questionSentence: '津守式乳幼児精神発達検査表の対象年齢は？',
          answerImg: [],
          answer: '0歳～7歳',
          commentary: '',
        },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}

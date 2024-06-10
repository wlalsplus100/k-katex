const grammarData: Grammar[] = [
  {
    index: 0,
    searchKeyword: ['로고', '카텍스 로고', '카텍스'],
    sign: '\\KaTeX',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 1,
    searchKeyword: ['정의', '변수', '변수 선언'],
    sign: '\\def',
    usage: '\\def\\foo{x^2} \\foo+\\foo',
    category: '매크로',
    isBookmark: false,
  },
  {
    index: 2,
    searchKeyword: ['분수'],
    sign: '\\frac',
    usage: '\\frac {a}{b}',
    category: '분수 및 이항식',
    isBookmark: false,
  },
  {
    index: 3,
    searchKeyword: ['알파', 'a'],
    sign: '\\alpha',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 4,
    searchKeyword: ['베타', 'beta'],
    sign: '\\beta',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 5,
    searchKeyword: ['생략', '점', '점3개'],
    sign: '\\cdots',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: true,
  },
  {
    index: 6,
    searchKeyword: ['점', '곱하기'],
    sign: '\\cdot',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 7,
    searchKeyword: ['사인', '삼각법', '삼각함수'],
    sign: '\\sin',
    usage: '',
    category: '각 및 삼각법',
    isBookmark: false,
  },
  {
    index: 8,
    searchKeyword: ['코사인', '삼각법', '삼각함수'],
    sign: '\\cos',
    usage: '',
    category: '각 및 삼각법',
    isBookmark: false,
  },
  {
    index: 9,
    searchKeyword: ['탄젠트', '삼각법', '삼각함수'],
    sign: '\\tan',
    usage: '',
    category: '각 및 삼각법',
    isBookmark: false,
  },
  {
    index: 10,
    searchKeyword: ['나누기', '사칙연산'],
    sign: '\\div',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 11,
    searchKeyword: ['부등호', '왼쪽', '큼'],
    sign: '\\gt',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 12,
    searchKeyword: ['각도', '각'],
    sign: '\\measuredangle',
    usage: '',
    category: '각 및 삼각법',
    isBookmark: false,
  },
  {
    index: 13,
    searchKeyword: ['같지 않다', '다르다'],
    sign: '\\ne',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 14,
    searchKeyword: ['약분', '아니다', '부정'],
    sign: '\\not',
    usage: '\\not a',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 15,
    searchKeyword: ['오메가'],
    sign: '\\omega',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 16,
    searchKeyword: ['파이', '원주율'],
    sign: '\\pi',
    usage: '',
    category: '각 및 삼각법',
    isBookmark: false,
  },
  {
    index: 17,
    searchKeyword: ['시그마'],
    sign: '\\sigma',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 18,
    searchKeyword: ['그러므로', '그래서'],
    sign: '\\therefore',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 19,
    searchKeyword: ['세타'],
    sign: '\\theta',
    usage: '',
    category: '각 및 삼각법',
    isBookmark: false,
  },
  {
    index: 20,
    searchKeyword: ['부등호', '오른쪽', '작음'],
    sign: '\\lt',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 21,
    searchKeyword: ['함수', '정의'],
    sign: '\\gdef',
    usage: '\\gdef\\foo#1{#1^2} \\foo{y} + \\foo{y}',
    category: '매크로',
    isBookmark: false,
  },
  {
    index: 22,
    searchKeyword: ['제곱근', '루트'],
    sign: '\\sqrt',
    usage: '\\sqrt[3]{x}',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 23,
    searchKeyword: ['부등호', '왼쪽', '크거나 같음'],
    sign: '\\leq',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 24,
    searchKeyword: ['부등호', '오른쪽', '작거나 같음'],
    sign: '\\geq',
    usage: '',
    category: '기호 및 문장부호',
    isBookmark: false,
  },
  {
    index: 25,
    searchKeyword: ['제곱'],
    sign: '^',
    usage: 'a^b',
    category: '기호 및 문장부호',
    isBookmark: true,
  },
  {
    index: 26,
    searchKeyword: ['밑'],
    sign: '_',
    usage: 'a_b',
    category: '기호 및 문장부호',
    isBookmark: true,
  },
  {
    index: 27,
    searchKeyword: ['시그마', '합'],
    sign: '\\sum',
    usage: '\\sum_{n=5}^{10} 3 \\cdot 4^{n-1}',
    category: '기호 및 문장부호',
    isBookmark: true,
  },
];

const syncGrammarData = (): Grammar[] => {
  const bookmark: Array<number> | null = localStorage.getItem('bookmark')
    ? JSON.parse(localStorage.getItem('bookmark') as string)
    : null;
  return grammarData.map((grammar) => {
    if (bookmark !== null && bookmark.includes(grammar.index)) {
      grammar.isBookmark = true;
    }
    return grammar;
  });
};

export const categorys = [
  '기호 및 문장부호',
  '매크로',
  '분수 및 이항식',
  '각 및 삼각법',
] as const;

export interface Grammar {
  index: number;
  searchKeyword: string[];
  sign: string;
  usage?: string;
  category: (typeof categorys)[number] | '카테고리';
  isBookmark: boolean;
}

export default syncGrammarData;

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
    searchKeyword: [
      '정의',
      '변수',
      '변수 선언',
      '아주아주 엄청엄청 길고길고길고 긴 서치키워드라서 아래로 내려가요',
    ],
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

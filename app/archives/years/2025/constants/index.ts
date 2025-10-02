// 레이아웃 상수
export const LAYOUT = {
  CONTAINER: {
    MAX_WIDTH: '1520px',
    RESPONSIVE_WIDTH: '1368px', // 1520px * 0.9
  },
  SPACING: {
    HERO_HEIGHT: '674.1px', // 749px * 0.9
    SECTION_PADDING: {
      TOP: '58px',
      BOTTOM: '38.7px', // 43px * 0.9
    },
    GRID_GAP: '84px',
  },
  BORDERS: {
    VERTICAL_WIDTH: '16px',
    HORIZONTAL_HEIGHT: '16px',
  }
} as const

// 색상 상수
export const COLORS = {
  PRIMARY: {
    GREEN: '#C8FF65',
    BLUE: '#B5EEFF',
    BROWN: '#D5B27D',
    GRAY: '#DFDFDF',
  },
  TEXT: {
    BLACK: '#000000',
    DARK_GRAY: '#3D3D3D',
    WHITE: '#FBFBFB',
  },
  BACKGROUND: {
    BLACK: '#171717',
    WHITE: '#FFFFFF',
  }
} as const

// 전시 정보 상수
export const EXHIBITION_INFO = {
  YEAR: 2025,
  TITLE: '지우고, 다시 쓰고, 반복하는',
  SUBTITLE: 'Erased, Rewritten, Repeated',
  DATES: {
    START: '2025.11.14(금)',
    END: '11.18(화)',
    TIME: '11:00 – 19:00',
    OPENING: '11.14(금) 17:00'
  },
  VENUE: {
    NAME: 'THE SEOULITEUM',
    KOREAN_NAME: '더 서울라이티움, 제1전시장',
    ADDRESS: '서울특별시 성동구 서울숲2길 32-14',
    DETAIL: '갤러리아포레 G층(B2층)',
    FULL_NAME: '제이아이브이일렉트릭 G동(B2층)'
  },
  CONTACT: {
    INSTAGRAM: '@smucd2025',
    PHONE: '031-0000-0000'
  }
} as const

// 반응형 계산 함수들
export const RESPONSIVE = {
  left: (offset: number) => `max(${offset}px, calc((100vw - ${LAYOUT.CONTAINER.MAX_WIDTH}) / -2 - 100px))`,
  right: (offset: number) => `max(${offset}px, calc((100vw - ${LAYOUT.CONTAINER.MAX_WIDTH}) / -2 - 100px))`,
  sectionLabel: (offset: number) => `max(${offset}px, calc((100vw - ${LAYOUT.CONTAINER.MAX_WIDTH}) / -2 - 180px))`,
  hero: (offset: number) => `max(${offset}px, calc((100vw - ${LAYOUT.CONTAINER.MAX_WIDTH}) / -2 - 167px))`,
} as const

import { Exhibition, Professor } from '../types';

// 2025년 전시 정보
export const exhibition2025: Exhibition = {
  id: 1,
  year: 2025,
  title: '제 38회 졸업전시회',
  subtitle: 'Erased, Rewritten, Repeated',
  theme: '지우고, 다시 쓰고, 반복하는',
  startDate: '2025-11-14',
  endDate: '2025-11-18',
  location: 'THE SEOULITEUM 더 서울라이티움, 제1전시장',
  address: '서울특별시 성동구 서울숲2길 32-14 제이아이브이일렉트릭 G동(B2층)',
  openingDate: '2025-11-14',
  openingTime: '17:00'
};

// 교수진 정보
export const professors: Professor[] = [
  // 혁신디자인스튜디오
  { id: 1, name: '김한솔', studio: '혁신디자인스튜디오' },
  { id: 2, name: '손우성', studio: '혁신디자인스튜디오' },
  { id: 3, name: '서승연', studio: '혁신디자인스튜디오' },
  { id: 4, name: '안혜선', studio: '혁신디자인스튜디오' },
  
  // 융합디자인스튜디오
  { id: 5, name: '유동관', studio: '융합디자인스튜디오' },
  { id: 6, name: '이원제', studio: '융합디자인스튜디오' },
  { id: 7, name: '신윤진', studio: '융합디자인스튜디오' },
  { id: 8, name: '남정', studio: '융합디자인스튜디오' }
];

// 졸업전시위원회 정보 (실제 학생 데이터 기반)
export const committee = {
  chairman: { name: '명규민', role: '위원장' },
  viceChairmen: [
    { name: '금예은', role: '부위원장' },
    { name: '김재겸', role: '부위원장' }
  ],
  teams: {
    promotion: {
      name: '홍보',
      members: ['유서윤', '고세진', '박하빈']
    },
    design: {
      name: '디자인',
      members: ['조은영', '박시온', '김수인']
    },
    web: {
      name: '웹',
      members: ['이혁수', '강규리', '김혜림']
    },
    planning: {
      name: '기획',
      members: ['박규영', '유경주', '최지윤', '송시후']
    },
    general: {
      name: '총무',
      members: ['이유진', '김세미']
    }
  }
};

// 후원업체 정보
export const sponsors = [
  {
    name: 'THE SEOULITEUM',
    logo: '/svg/seoul.svg',
    type: '공간제공'
  },
  {
    name: 'RixFont',
    logo: '/svg/rix.svg',
    type: '서체 지원'
  },
  {
    name: 'Yoondesign',
    logo: '/svg/yoon.svg',
    type: '서체 지원'
  },
  {
    name: '무주 ADSLAND',
    logo: '/svg/ads.svg',
    type: '자료 지원'
  }
];

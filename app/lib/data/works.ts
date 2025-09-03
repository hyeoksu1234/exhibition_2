import { Work } from '../types';
import { designers } from './designers';

// 작품 제목 템플릿
const titlePrefixes = ['새로운', '변화하는', '연결된', '지속가능한', '미래의', '공감하는', '소통하는', '창의적인', '실험적인', '혁신적인'];
const titleSuffixes = ['시선', '이야기', '경험', '여정', '공간', '순간', '감각', '리듬', '조화', '울림'];

// 프로젝트 타입
const projectTypes = ['브랜딩', 'UI/UX 디자인', '편집 디자인', '타이포그래피', '일러스트레이션', '모션 그래픽', '패키지 디자인', '웹 디자인', '광고 디자인', '환경 디자인'];

// 사용 도구
const toolsOptions = [
  ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
  ['Figma', 'Sketch', 'Adobe XD'],
  ['After Effects', 'Cinema 4D', 'Blender'],
  ['Procreate', 'Adobe Fresco'],
  ['HTML/CSS', 'JavaScript', 'React']
];

// 태그
const tagOptions = [
  ['그래픽디자인', '타이포그래피', '브랜딩'],
  ['UI디자인', 'UX디자인', '인터랙션'],
  ['모션그래픽', '영상디자인', '3D'],
  ['일러스트레이션', '캐릭터디자인', '스토리텔링'],
  ['웹디자인', '반응형디자인', '프론트엔드']
];

// 작품 설명 템플릿
const descriptionTemplates = [
  "이 작품은 현대 사회의 복잡한 관계성을 시각적으로 풀어낸 프로젝트입니다. 다양한 디자인 요소와 창의적인 접근을 통해 새로운 시각적 경험을 제공하며, 세부적인 디테일과 조화로운 구성을 통해 관람객에게 깊은 인상을 남기는 것을 목표로 하였습니다.",
  "일상에서 쉽게 지나칠 수 있는 순간들을 포착하여 재해석한 작업입니다. 미니멀한 디자인 언어를 통해 본질적인 메시지를 전달하고자 했으며, 사용자와의 인터랙션을 통해 완성되는 경험을 설계했습니다.",
  "전통과 현대의 조화를 추구한 이 프로젝트는 한국적 정서를 현대적으로 재해석하였습니다. 디지털 매체의 특성을 활용하면서도 아날로그적 감성을 놓치지 않으려 노력했으며, 문화적 정체성에 대한 고민을 담았습니다.",
  "사용자 경험을 중심으로 설계된 이 작품은 직관적이면서도 혁신적인 인터페이스를 제공합니다. 데이터 분석을 바탕으로 사용자의 니즈를 파악하고, 이를 시각적으로 구현하여 효과적인 커뮤니케이션을 달성했습니다.",
  "환경과 지속가능성에 대한 메시지를 담은 프로젝트입니다. 친환경 소재와 공정을 고려한 디자인으로 실질적인 변화를 추구했으며, 시각적 아름다움과 사회적 가치를 동시에 실현하고자 했습니다."
];

// 교수 명단
const professors = {
  '혁신디자인스튜디오': ['김한솔 교수님', '손우성 교수님', '서승연 교수님', '안혜선 교수님'],
  '융합디자인스튜디오': ['유동관 교수님', '이원제 교수님', '신윤진 교수님', '남정 교수님']
};

// 작품 데이터 생성 함수
function generateWorks(): Work[] {
  const works: Work[] = [];
  let workId = 1;
  
  designers.forEach((designer) => {
    // 각 디자이너당 1-3개의 작품 생성
    const numWorks = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < numWorks; i++) {
      const projectType = projectTypes[Math.floor(Math.random() * projectTypes.length)];
      const toolsIndex = Math.floor(Math.random() * toolsOptions.length);
      const tagIndex = Math.floor(Math.random() * tagOptions.length);
      
      // 이미지 개수 (3-6개)
      const numImages = Math.floor(Math.random() * 4) + 3;
      const images = Array.from({ length: numImages }, (_, idx) => 
        `/images/works/work-${workId}-${idx + 1}.jpg`
      );
      
      works.push({
        id: workId,
        title: `${titlePrefixes[Math.floor(Math.random() * titlePrefixes.length)]} ${titleSuffixes[Math.floor(Math.random() * titleSuffixes.length)]}`,
        description: descriptionTemplates[Math.floor(Math.random() * descriptionTemplates.length)],
        images: images,
        thumbnail: `/images/works/work-${workId}-thumb.jpg`,
        category: designer.studio,
        professor: professors[designer.studio][Math.floor(Math.random() * professors[designer.studio].length)],
        tags: tagOptions[tagIndex],
        userId: designer.id,
        projectType: projectType,
        tools: toolsOptions[toolsIndex],
        year: 2025
      });
      
      workId++;
    }
  });
  
  return works;
}

// 작품 데이터 export
export const works: Work[] = generateWorks();

// ID로 작품 찾기
export function getWorkById(id: number): Work | undefined {
  return works.find(work => work.id === id);
}

// 사용자 ID로 작품 찾기
export function getWorksByUserId(userId: number): Work[] {
  return works.filter(work => work.userId === userId);
}

// 카테고리별 작품 찾기
export function getWorksByCategory(category: '혁신디자인스튜디오' | '융합디자인스튜디오'): Work[] {
  return works.filter(work => work.category === category);
}

// 프로젝트 타입별 작품 찾기
export function getWorksByProjectType(projectType: string): Work[] {
  return works.filter(work => work.projectType === projectType);
}

// 태그로 작품 검색
export function searchWorksByTag(tag: string): Work[] {
  return works.filter(work => work.tags.includes(tag));
}

// 제목이나 설명으로 작품 검색
export function searchWorks(query: string): Work[] {
  const lowerQuery = query.toLowerCase();
  return works.filter(work => 
    work.title.toLowerCase().includes(lowerQuery) ||
    work.description.toLowerCase().includes(lowerQuery)
  );
}

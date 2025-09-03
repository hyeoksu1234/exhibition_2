import { Designer } from '../types';

// 한국 성씨
const lastNames = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '오', '서', '신', '권', '황', '안', '송', '전', '홍'];

// 한국 이름 (남성)
const maleFirstNames = ['민준', '서준', '도윤', '예준', '시우', '주원', '하준', '지호', '지후', '준서', '준우', '도현', '건우', '현우', '지훈', '우진', '선우', '서진', '민재', '현준'];

// 한국 이름 (여성)
const femaleFirstNames = ['서연', '서윤', '지우', '서현', '하은', '하윤', '민서', '지유', '윤서', '채원', '수아', '지아', '다은', '예은', '은서', '수빈', '예린', '소율', '지안', '하린'];

// 인터뷰 질문 답변 템플릿
const interview1Templates = [
  "이번 전시를 통해 4년간의 배움과 경험을 표현할 수 있어서 뜻깊었습니다. 많은 시행착오와 고민을 거쳐 완성된 작품들이라 더욱 의미가 있습니다.",
  "졸업 전시는 제게 있어 하나의 마침표이자 새로운 시작점입니다. 그동안 배운 것들을 종합하여 보여줄 수 있는 기회였고, 앞으로 나아갈 방향을 고민하는 시간이었습니다.",
  "처음엔 막막했지만, 작품을 하나씩 완성해가며 성장하는 제 자신을 발견할 수 있었습니다. 특히 동료들과 함께 준비하며 많은 것을 배웠습니다.",
  "전시를 준비하면서 디자이너로서의 정체성을 확립할 수 있었습니다. 제 작품을 통해 관객들과 소통할 수 있다는 점이 가장 보람있었습니다.",
  "긴장되면서도 설레는 경험이었습니다. 4년간의 노력이 결실을 맺는 순간이라 감회가 새롭고, 많은 분들께 제 작품을 선보일 수 있어 기뻤습니다."
];

const interview2Templates = [
  "작업 과정에서 가장 어려웠던 점은 콘셉트를 명확히 정의하고 그것을 시각적으로 표현하는 과정이었습니다. 여러 번의 피드백과 수정을 거쳐 최종 결과물을 만들어내는 과정이 기억에 남습니다.",
  "아이디어는 많았지만, 그것을 구체화하고 실현하는 과정이 가장 도전적이었습니다. 특히 기술적인 한계를 극복하면서도 창의성을 잃지 않으려 노력했습니다.",
  "사용자의 관점에서 생각하고 디자인하는 것이 가장 큰 고민이었습니다. 단순히 예쁜 디자인이 아닌, 실제로 가치를 전달할 수 있는 작품을 만들고자 했습니다.",
  "주제를 선정하는 과정부터 쉽지 않았습니다. 제가 진정으로 표현하고 싶은 것이 무엇인지 깊이 고민했고, 그 과정에서 저 자신에 대해서도 많이 알게 되었습니다.",
  "디테일을 놓치지 않으면서도 전체적인 조화를 이루는 것이 어려웠습니다. 작은 요소 하나하나가 전체 작품에 미치는 영향을 고려하며 작업했습니다."
];

const bioTemplates = [
  "디자인을 통해 새로운 가치를 창출하고자 합니다. 시각 디자인을 중심으로 다양한 미디어와 플랫폼에서 사용자 경험을 향상시키는 작업을 진행해왔습니다.",
  "일상 속 작은 불편함을 해결하는 디자인을 추구합니다. 사용자 중심의 사고로 더 나은 경험을 만들어가는 디자이너가 되고자 합니다.",
  "창의적인 시각 언어로 메시지를 전달하는 것에 관심이 많습니다. 브랜딩과 아이덴티티 디자인을 중심으로 활동하고 있습니다.",
  "디지털과 아날로그의 경계를 넘나들며 실험적인 작업을 추구합니다. 새로운 기술과 전통적인 디자인 방법론을 융합하여 독창적인 결과물을 만들어냅니다.",
  "소통과 공감을 중시하는 디자이너입니다. 디자인이 사회에 긍정적인 영향을 미칠 수 있다고 믿으며, 의미 있는 프로젝트에 참여하고자 합니다."
];

// 100명의 디자이너 데이터 생성
function generateDesigners(): Designer[] {
  const designers: Designer[] = [];
  
  for (let i = 1; i <= 100; i++) {
    const isFemale = Math.random() > 0.5;
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const firstName = isFemale 
      ? femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)]
      : maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
    
    const studio = i % 2 === 0 ? '융합디자인스튜디오' : '혁신디자인스튜디오';
    
    designers.push({
      id: i,
      name: lastName + firstName,
      major: '커뮤니케이션디자인',
      studio: studio,
      profile_image: `/images/profiles/user-${i}.jpg`,
      bio: bioTemplates[Math.floor(Math.random() * bioTemplates.length)],
      email: `designer${i}@smu.ac.kr`,
      instagram: `smu_designer_${i}`,
      website: Math.random() > 0.5 ? `https://portfolio${i}.com` : undefined,
      interview1: interview1Templates[Math.floor(Math.random() * interview1Templates.length)],
      interview2: interview2Templates[Math.floor(Math.random() * interview2Templates.length)],
      student_number: `20${19 + Math.floor(i/25)}${String(10000 + i).slice(-4)}`
    });
  }
  
  return designers;
}

// 디자이너 데이터 export
export const designers: Designer[] = generateDesigners();

// ID로 디자이너 찾기
export function getDesignerById(id: number): Designer | undefined {
  return designers.find(designer => designer.id === id);
}

// 스튜디오별 디자이너 찾기
export function getDesignersByStudio(studio: '혁신디자인스튜디오' | '융합디자인스튜디오'): Designer[] {
  return designers.filter(designer => designer.studio === studio);
}

// 이름으로 디자이너 검색
export function searchDesignersByName(query: string): Designer[] {
  const lowerQuery = query.toLowerCase();
  return designers.filter(designer => 
    designer.name.toLowerCase().includes(lowerQuery)
  );
}

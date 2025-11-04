// 모든 데이터 export
export * from './designers';
export * from './works';
export * from './exhibition';

// 통계 정보
import { designers } from './designers'
import { works } from './works'

const innovationDesignerIds = new Set<number>()
const convergenceDesignerIds = new Set<number>()

works.forEach((work) => {
  if (work.category === '혁신디자인스튜디오') {
    innovationDesignerIds.add(work.userId)
  }
  if (work.category === '융합디자인스튜디오') {
    convergenceDesignerIds.add(work.userId)
  }
})

export const statistics = {
  totalDesigners: designers.length,
  totalWorks: works.length,
  designersByStudio: {
    innovation: innovationDesignerIds.size,
    convergence: convergenceDesignerIds.size,
  },
  worksByCategory: {
    innovation: works.filter(w => w.category === '혁신디자인스튜디오').length,
    convergence: works.filter(w => w.category === '융합디자인스튜디오').length
  }
};

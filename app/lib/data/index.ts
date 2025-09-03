// 모든 데이터 export
export * from './designers';
export * from './works';
export * from './exhibition';

// 통계 정보
import { designers } from './designers';
import { works } from './works';

export const statistics = {
  totalDesigners: designers.length,
  totalWorks: works.length,
  designersByStudio: {
    innovation: designers.filter(d => d.studio === '혁신디자인스튜디오').length,
    convergence: designers.filter(d => d.studio === '융합디자인스튜디오').length
  },
  worksByCategory: {
    innovation: works.filter(w => w.category === '혁신디자인스튜디오').length,
    convergence: works.filter(w => w.category === '융합디자인스튜디오').length
  }
};

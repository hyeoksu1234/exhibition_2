import Link from 'next/link'
import { FOOTER_STYLES, FOOTER_CONSTANTS } from '../constants/footer'
import { 
  FooterLabel, 
  FooterMainTitle, 
  FooterContentContainer, 
  ColorBar 
} from './FooterComponents'

export default function Footer() {
  return (
    <>
      <footer className="footer-root pretendard-font" style={FOOTER_STYLES.container}>
        <div className="footer-bound" style={FOOTER_STYLES.bound}>
          {/* 메인 타이틀 */}
          <FooterMainTitle />
          {/* 모바일: 타이틀 하단 구분선 */}
          <div className="footer-title-divider" />

          {/* 라벨들 */}
          <FooterLabel top="36px" left={FOOTER_CONSTANTS.POSITIONS.LABEL_LEFT}>
            {FOOTER_CONSTANTS.LABELS.OPENING}
          </FooterLabel>

          <FooterLabel top="82px" left={FOOTER_CONSTANTS.POSITIONS.LABEL_LEFT}>
            {FOOTER_CONSTANTS.LABELS.VENUE}
          </FooterLabel>

          <FooterLabel top="200px" left={FOOTER_CONSTANTS.POSITIONS.LABEL_LEFT}>
            {FOOTER_CONSTANTS.LABELS.INSTAGRAM}
          </FooterLabel>

          {/* 문의전화 라벨 제거 */}

          {/* 컨텐츠 컨테이너 */}
          <FooterContentContainer />

          {/* 아카이브 링크 */}
          <Link
            href="/"
            className="footer-archive-link"
            style={FOOTER_STYLES.archiveLink}
          >
            {FOOTER_CONSTANTS.LABELS.ARCHIVE}
          </Link>
        </div>
      </footer>
      
      {/* 컬러바 */}
      <ColorBar />
    </>
  )
}

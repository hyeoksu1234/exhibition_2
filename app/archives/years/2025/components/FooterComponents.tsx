import { FOOTER_STYLES, FOOTER_CONSTANTS } from '../constants/footer'

// 푸터 라벨 컴포넌트
export const FooterLabel = ({ children, top, left }: {
  children: React.ReactNode
  top: string
  left: string
}) => (
  <div className="footer-label" style={{
    ...FOOTER_STYLES.labelStyle,
    top,
    left
  }}>
    {children}
  </div>
)

// 푸터 컨텐츠 아이템 컴포넌트
export const FooterContentItem = ({ children }: {
  children: React.ReactNode
}) => (
  <div style={FOOTER_STYLES.contentStyle}>
    {children}
  </div>
)

// 컬러바 컴포넌트
export const ColorBar = () => (
  <div style={FOOTER_STYLES.colorBar}>
    <div style={FOOTER_STYLES.colorSegment(FOOTER_CONSTANTS.COLORS.BAR.GRAY)} />
    <div style={FOOTER_STYLES.colorSegment(FOOTER_CONSTANTS.COLORS.BAR.GREEN)} />
    <div style={FOOTER_STYLES.colorSegment(FOOTER_CONSTANTS.COLORS.BAR.BROWN)} />
    <div style={FOOTER_STYLES.colorSegment(FOOTER_CONSTANTS.COLORS.BAR.BLUE)} />
  </div>
)

// 메인 타이틀 컴포넌트
export const FooterMainTitle = () => (
  <div className="rix-font footer-main-title" style={FOOTER_STYLES.mainTitle}>
    {FOOTER_CONSTANTS.EXHIBITION_DATA.TITLE.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < FOOTER_CONSTANTS.EXHIBITION_DATA.TITLE.split('\n').length - 1 && <br />}
      </span>
    ))}
  </div>
)

// 컨텐츠 컨테이너 컴포넌트
export const FooterContentContainer = ({ compact = false }: { compact?: boolean }) => (
  <div
    className="footer-content-container"
    style={{
      ...FOOTER_STYLES.contentContainer,
      marginLeft: compact ? '120px' : FOOTER_STYLES.contentContainer.marginLeft,
      width: compact ? 'calc(100% - 140px)' : FOOTER_STYLES.contentContainer.width,
    }}
  >
    {/* 모바일 그리드에서는 label/value 쌍으로 표시되며, 데스크톱에서는 아래 절대 배치를 사용 */}
    <span className="footer-mobile-label" aria-hidden>
      {FOOTER_CONSTANTS.LABELS.OPENING}
    </span>
    <div
      className="footer-content-item footer-mobile-value"
      style={{
        ...FOOTER_STYLES.contentStyle,
        position: 'absolute',
        top: '0px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {FOOTER_CONSTANTS.EXHIBITION_DATA.DATES}
    </div>

    <span className="footer-mobile-label" aria-hidden>
      {FOOTER_CONSTANTS.LABELS.VENUE}
    </span>
    <div
      className="footer-content-item footer-mobile-value"
      style={{
        ...FOOTER_STYLES.contentStyle,
        position: 'absolute',
        top: compact ? '40px' : '46px',
      }}
    >
      {FOOTER_CONSTANTS.EXHIBITION_DATA.VENUE.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < FOOTER_CONSTANTS.EXHIBITION_DATA.VENUE.split('\n').length - 1 && <br />}
        </span>
      ))}
    </div>

    <span className="footer-mobile-label" aria-hidden>
      {FOOTER_CONSTANTS.LABELS.INSTAGRAM}
    </span>
    <div
      className="footer-content-item footer-mobile-value"
      style={{
        ...FOOTER_STYLES.contentStyle,
        position: 'absolute',
        top: compact ? '144px' : '164px',
      }}
    >
      {FOOTER_CONSTANTS.EXHIBITION_DATA.INSTAGRAM}
    </div>
  </div>
)

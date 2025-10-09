import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'
import Footer from './components/Footer'
import {
  STYLES,
  LAYOUT,
  RoleBox,
  ProfessorRoleBox,
  PersonName,
  HorizontalBorder,
  ContainerRails,
} from './components/CommonComponents'

type HeroLabelConfig = {
  id: string
  content: ReactNode
  style: CSSProperties
  className?: string
}

type RotatedRailLabelProps = {
  text: ReactNode
  position: 'left' | 'right'
  top: string
  offset?: number
  align?: 'left' | 'right'
}

type SectionContentProps = {
  children: ReactNode
  label?: ReactNode
  labelPosition?: 'left' | 'right'
  labelTop?: string
  labelOffset?: number
  labelAlign?: 'left' | 'right'
  className?: string
  style?: CSSProperties
  railExtend?: number
  railExtendTop?: number
  railExtendBottom?: number
  railWidth?: number
  railClassName?: string
  railStyle?: CSSProperties
}

const SECTION_CONTENT_STYLE: CSSProperties = {
  width: '964px',
  maxWidth: '100%',
  paddingLeft: '52px',
  paddingRight: '52px',
  boxSizing: 'border-box',
}

const PRETENDARD_MEDIUM: CSSProperties = {
  fontSize: '18px',
  fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
  fontWeight: 500,
  letterSpacing: '-0.02em',
}

const PRETENDARD_FONT_FAMILY = 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif'
const PRETENDARD_NAME_ONLY: CSSProperties = { fontFamily: PRETENDARD_FONT_FAMILY }

const HERO_LABEL_FONT = '"rixdongnimgothic-pro", sans-serif'

const HERO_LABELS: HeroLabelConfig[] = [
  {
    id: 'department',
    content: (
      <>
        상명대학교 디자인대학 <br />
        커뮤니케이션디자인전공
      </>
    ),
    style: {
      top: '128px',
      left: 'calc(50% - 482px - 32px - 20px)',
      transform: 'translateX(-50%) translateY(-50%) rotate(90deg)',
      fontSize: '24px',
      lineHeight: '1.3',
    },
  },
  {
    id: 'edition',
    content: '제 38회 졸업전시회',
    style: {
      top: '440px',
      left: 'calc(50% - 482px - 16px - 20px)',
      transform: 'translateX(-50%) translateY(-50%) rotate(90deg)',
      fontSize: '24px',
    },
  },
  {
    id: 'theme',
    content: 'Erased, Rewritten, Repeated',
    style: {
      top: '218px',
      right: 'calc(50% - 482px - 16px - 20px)',
      transform: 'translateX(50%) translateY(-50%) rotate(90deg)',
      fontSize: '29px',
    },
    className: 'text-right',
  },
]

const EXHIBITION_SCHEDULE = [
  { label: '오프닝', value: '11.14(금) 17:00' },
  { label: '시간', value: '11:00-19:00' },
] as const

type TransportationItem = {
  icon: string
  alt: string
  description: ReactNode
  align?: 'start' | 'center'
  iconMarginTop?: number
}

const TRANSPORTATION: TransportationItem[] = [
  {
    icon: '/svg/su.svg',
    alt: '지하철',
    description: '서울숲역 4번 출구에서 200m(도보 2분)',
  },
  {
    icon: '/svg/two.svg',
    alt: '지하철 2호선',
    description: '뚝섬역 8번 출구에서 600m(도보 5분)',
  },
  {
    icon: '/svg/bus.svg',
    alt: '버스',
    description: (
      <>
        2014, 2224, 2413 - 성동구민종합체육센터
        <br />
        2016 - 뚝섬역8번출구
      </>
    ),
    align: 'start' as const,
    iconMarginTop: 4,
  },
] 

const PROFESSOR_GROUPS = [
  {
    role: '혁신디자인스튜디오',
    color: '#C8FF65',
    professors: ['김한솔 교수님', '손우성 교수님', '서승연 교수님', '안혜선 교수님'],
  },
  {
    role: '융합디자인스튜디오',
    color: '#B5EEFF',
    professors: ['유동관 교수님', '이원제 교수님', '신윤진 교수님', '남정 교수님'],
  },
] as const

const COMMITTEE_GROUPS = [
  { role: '위원장', color: '#C8FF65', members: ['명규민'] },
  { role: '부위원장', color: '#C8FF65', members: ['금예은', '김재겸'] },
  { role: '홍보', color: '#B5EEFF', members: ['유서윤', '고세진', '박하빈'] },
  { role: '디자인', color: '#C8FF65', members: ['조은영', '박시온', '김수인'] },
  { role: '웹', color: '#B5EEFF', members: ['이혁수', '강규리', '김혜림'] },
  { role: '기획', color: '#B5EEFF', members: ['박규영', '유경주', '최지윤', '송시후'] },
  { role: '총무', color: '#C8FF65', members: ['이유진', '김세미'] },
] as const

const SPONSORS = [
  { logo: '/svg/seoul.svg', alt: 'THE SEOULITEUM', description: '공간제공' },
  { logo: '/svg/rix.svg', alt: 'RixFont', description: '서체 지원' },
  { logo: '/svg/yoon.svg', alt: 'Yoondesign', description: '서체 지원' },
  { logo: '/svg/ads.svg', alt: '무주 ADSLAND', description: '자료 지원' },
] as const

const Spacer = ({ size }: { size: number }) => (
  <div className="spacer" style={{ height: `${size}px` }} />
)

const SectionDivider = ({ before = 38, after = 58 }: { before?: number; after?: number }) => (
  <>
    <Spacer size={before} />
    <HorizontalBorder />
    <Spacer size={after} />
  </>
)

const RotatedRailLabel = ({
  text,
  position,
  top,
  offset = position === 'left' ? 2 : 34,
  align = position === 'left' ? 'left' : 'right',
}: RotatedRailLabelProps) => {
  const sideStyle =
    position === 'left'
      ? { right: `calc(100% + ${LAYOUT.BORDERS.VERTICAL_WIDTH}px + ${offset}px)` }
      : { left: `calc(100% + ${LAYOUT.BORDERS.VERTICAL_WIDTH}px + ${offset}px)` }

  return (
    <div
      className="label-outer absolute z-20"
      style={{
        top,
        transform: 'translateY(-50%)',
        width: 0,
        height: 0,
        ...sideStyle,
      }}
    >
      <div
        className={`section-label text-black whitespace-nowrap ${align === 'right' ? 'text-right' : 'text-left'}`}
        style={{
          ...STYLES.sectionLabel,
          position: 'absolute',
          top: 0,
          [position === 'left' ? 'right' : 'left']: 0,
          transformOrigin: `${position === 'left' ? 'right' : 'left'} top`,
          transform: 'rotate(90deg)',
        }}
      >
        {text}
      </div>
    </div>
  )
}

const SectionContent = ({
  children,
  label,
  labelPosition = 'left',
  labelTop = '0px',
  labelOffset,
  labelAlign,
  className = '',
  style,
  railExtend,
  railExtendTop,
  railExtendBottom,
  railWidth,
  railClassName,
  railStyle,
}: SectionContentProps) => (
  <div
    className={`section-content mx-auto relative ${className}`.trim()}
    style={{ ...SECTION_CONTENT_STYLE, ...style }}
  >
    <ContainerRails
      extend={railExtend ?? undefined}
      extendTop={railExtendTop ?? undefined}
      extendBottom={railExtendBottom ?? undefined}
      railWidth={railWidth ?? undefined}
      className={railClassName}
      style={railStyle}
    />
    {label ? (
      <RotatedRailLabel
        text={label}
        position={labelPosition}
        top={labelTop}
        offset={labelOffset}
        align={labelAlign}
      />
    ) : null}
    {children}
  </div>
)

const ScheduleRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-baseline gap-6 pretendard-font" style={{ ...PRETENDARD_MEDIUM }}>
    <span className="min-w-[72px] pretendard-font font-semibold" style={{ fontWeight: 600 }}>
      {label}
    </span>
    <span className="pretendard-font font-semibold" style={{ fontWeight: 600 }}>
      {value}
    </span>
  </div>
)

const TransportRow = ({
  icon,
  alt,
  description,
  align,
  iconMarginTop = 0,
}: TransportationItem) => (
  <div className={`flex ${align === 'start' ? 'items-start' : 'items-center'} gap-2`}>
    <img
      src={icon}
      alt={alt}
      className="shrink-0"
      style={{ width: '34px', height: '34px', marginTop: `${iconMarginTop}px` }}
    />
    <span style={{ ...PRETENDARD_MEDIUM, fontSize: '16px', display: 'block' }}>{description}</span>
  </div>
)

export default function Exhibition2025Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="w-full mx-auto relative">
        <div className="page-shell mx-auto max-w-[1368px] px-[36px] sm:px-[72px] lg:px-[108px]">
          <section
            className="hero-section relative bg-white flex flex-col justify-center items-center px-8"
            style={{ height: '542px', marginTop: '30px', marginBottom: '60px' }}
          >
            {HERO_LABELS.map(({ id, content, style, className }) => (
              <div
                key={id}
                className={`hero-label absolute text-black z-20 whitespace-nowrap ${className ?? ''}`.trim()}
                style={{ fontFamily: HERO_LABEL_FONT, ...style }}
              >
                {content}
              </div>
            ))}
            <div
              className="hero-box relative mx-auto flex justify-center"
              style={{ width: '100%', maxWidth: '964px', aspectRatio: '964 / 542' }}
            >
              {/* Rails: slightly shorter than default by reducing extend */}
              <ContainerRails railWidth={LAYOUT.BORDERS.VERTICAL_WIDTH} extend={0} />
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                {/* Default hero (desktop/tablet): video */}
                <video
                  className="object-cover hero-default w-full h-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/images/hero/hero_main.mp4"
                >
                  <source src="/images/hero/hero_main.mp4" type="video/mp4" />
                </video>
                {/* 390 breakpoint hero replacement: static image */}
                <img
                  src="/images/hero/hero_360.png"
                  alt="Hero 360 Image"
                  className="hero-360 object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          <section className="exhibition-info_1">
            <SectionContent
              label="【 1 】 소개"
              labelPosition="left"
              labelTop="74px"
              className="pb-[22px]"
            >
              <div className="flex">
                <div className="w-2" />
                <div className="flex-1">
                  <h2 className="mt-4 mb-4 text-black main-title" style={STYLES.mainTitle}>
                    지우고,
                    <br />
                    다시 쓰고,
                    <br />
                    반복하는
                  </h2>
                  <p className="font-medium subtitle-text" style={STYLES.subtitle}>
                    Erased, Rewritten, Repeated
                  </p>
                  <p className="leading-relaxed mb-12 body-copy" style={STYLES.bodyText}>
                    지우고, 다시쓰고, 반복하는 디자인 과정 속 수많은 시행착오와 반복, 그리고 다시 써 내려간 고민의 흔적을 담고 있다.
                    각기 다른 배경과 문제의식에서 출발한 프로젝트들은 서로 다른 결과물을 낳았지만, 결국 표현이라는 하나의 공통된 지점을 향해 수렴된다.
                    이 공간 안에서 펼쳐지는 모든 작업은 우리 안에 쌓인 기억과 경험을 반추하고, 그것을 시각적으로 재구성해 보는 시도이다. 익숙함을 지우고 새로 쓰는 이 실험이다.
                  </p>
                </div>
              </div>
            </SectionContent>
          </section>

          <SectionDivider />

          <section className="relative bg-white px-8 offline-section">
            <SectionContent
              label="【 2 】 오프라인 전시"
              labelPosition="right"
              labelTop="-18px"
              labelOffset={34}
              labelAlign="right"
              className="pb-0 md:pb-[22px]"
            >
              <div className="flex">
                <div className="w-2" />
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-0 md:mt-8">
                    <div className="main-section-image order-2 md:order-1" style={{ width: '364px', height: '498px' }}>
                      {/* Default (desktop/tablet) map */}
                      <img
                        src="/images/hero/map.png"
                        alt="전시장 위치 지도"
                        className="map-default"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      {/* Mobile 390 map */}
                      <img
                        src="/images/hero/map_360.png"
                        alt="전시장 위치 지도 (모바일)"
                        className="map-360"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="mb-8">
                        <h3
                          className="font-medium mb-2"
                          style={{ fontSize: '24px', fontFamily: HERO_LABEL_FONT, letterSpacing: '-0.02em' }}
                        >
                          2025.11.14(금) - 11.18(화)
                        </h3>
                        <div className="space-y-3">
                          {EXHIBITION_SCHEDULE.map(({ label, value }) => (
                            <ScheduleRow key={label} label={label} value={value} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3
                          className="font-medium mb-4"
                          style={{ fontSize: '24px', letterSpacing: '-0.02em', fontFamily: HERO_LABEL_FONT }}
                        >
                          THE SEOULITEUM
                          <br />
                          더 서울라이티움, 제1전시장
                        </h3>
                        <p className="mb-8" style={PRETENDARD_MEDIUM}>
                          서울특별시 성동구 서울숲2길 32-14
                          <br />
                          갤러리아포레 G층(B2층)
                        </p>
                        <div className="space-y-4">
                          {TRANSPORTATION.map((option) => (
                            <TransportRow key={option.alt} {...option} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionContent>
          </section>

          <SectionDivider />

          <section className="bg-white px-8 professors-section">
            <SectionContent
              label="【 3 】 지도교수"
              labelPosition="left"
              labelTop="124px"
            >
              <div className="flex">
                <div className="w-2" />
                <div className="flex-1 pl-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-4 mb-8">
                    {PROFESSOR_GROUPS.map(({ role, color, professors }) => (
                      <div key={role} className="prof-group flex items-baseline gap-[52px]">
                        <ProfessorRoleBox bgColor={color}>{role}</ProfessorRoleBox>
                        <div className="prof-list flex flex-col items-end gap-4">
                          {professors.map((name) => (
                            <div
                              key={name}
                              className="professor-name"
                              style={{
                                ...STYLES.professorName,
                                fontFamily: PRETENDARD_FONT_FAMILY,
                                fontSize: '16px',
                              }}
                            >
                              {name}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionContent>
          </section>

          <SectionDivider after={48} />

          <section className="bg-white px-8 committee-section">
            <Spacer size={16} />
            <SectionContent
              label="【 4 】 졸업전시위원회"
              labelPosition="right"
              labelTop="-18px"
              labelOffset={34}
              labelAlign="right"
              className="mb-8"
              style={{ paddingBottom: 0 }}
              railExtendTop={LAYOUT.BORDERS.HORIZONTAL_HEIGHT}
              railExtendBottom={LAYOUT.BORDERS.HORIZONTAL_HEIGHT + 20}
            >
              <div className="flex">
                <div className="w-2" />
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-6xl">
                    <div className="flex justify-center gap-[54px] flex-wrap">
                      {COMMITTEE_GROUPS.map(({ role, color, members }) => (
                        <div key={role} className="committee-group flex flex-col items-center">
                          <RoleBox bgColor={color}>{role}</RoleBox>
                          <Spacer size={8} />
                          <div className="committee-list flex flex-col items-center gap-4">
                            {members.map((member) => (
                              <div key={member} className="committee-name">
                                <PersonName style={{ ...PRETENDARD_NAME_ONLY, fontSize: '16px' }}>{member}</PersonName>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionContent>
            <Spacer size={0} />
          </section>

          <SectionDivider after={28} />

          <section
            className="bg-white px-8 sponsors-section"
            style={{ paddingTop: '28px', paddingBottom: '28px', height: '200px' }}
          >
            <SectionContent
              label="【 5 】 협찬업체"
              labelPosition="left"
              labelTop="124px"
              className="flex items-start justify-start"
              style={{ height: '100%' }}
            >
              <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center">
                    {SPONSORS.map(({ logo, alt, description }) => (
                    <div key={alt} className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        <img className="sponsor-logo" src={logo} alt={alt} style={{ width: '162px', height: 'auto' }} />
                      </div>
                      <div
                        style={{
                          fontSize: '1rem',
                          fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: 400,
                          color: '#666',
                        }}
                      >
                        {description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionContent>
          </section>

          <Spacer size={10} />
        </div>

        <Footer />
      </div>
    </div>
  )
}

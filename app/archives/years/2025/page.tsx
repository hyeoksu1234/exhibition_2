import Link from 'next/link'
import Image from 'next/image'

// 공통 스타일 상수
const STYLES = {
  // 폰트 스타일
  mainTitle: {
    fontSize: '4.05rem',
    fontFamily: '"rixdongnimgothic-pro", sans-serif',
    fontWeight: 'normal',
    letterSpacing: '-0.02em',
    lineHeight: '1.27',
    wordBreak: 'keep-all' as const
  },
  sectionLabel: {
    fontSize: '1.97rem'
  },
  subtitle: {
    fontSize: '1.8rem',
    lineHeight: '38px',
    wordBreak: 'keep-all' as const,
    marginBottom: '74px'
  },
  bodyText: {
    fontSize: '1.69rem',
    fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '500',
    wordBreak: 'keep-all' as const
  },
  roleTitle: {
    fontSize: '22px',
    fontFamily: '"rixdongnimgothic-pro", sans-serif',
    fontWeight: '500',
    lineHeight: '37px',
    whiteSpace: 'nowrap' as const,
    letterSpacing: '-0.02em',
    color: '#000000'
  },
  personName: {
    color: '#3D3D3D',
    fontSize: '22px',
    fontFamily: 'RixDongnimGothic_Pro',
    fontWeight: '500',
    lineHeight: '37px',
    whiteSpace: 'nowrap' as const,
    letterSpacing: '-0.02em',
    textAlign: 'right' as const
  },
  professorName: {
    color: '#3D3D3D',
    fontSize: '22px',
    fontFamily: 'RixDongnimGothic_Pro',
    fontWeight: '500',
    lineHeight: '37px',
    whiteSpace: 'nowrap' as const,
    letterSpacing: '-0.02em',
    textAlign: 'right' as const
  }
}

// 공통 컴포넌트들
const RoleBox = ({ children, bgColor, className = "" }: { 
  children: React.ReactNode, 
  bgColor: string, 
  className?: string 
}) => (
  <div 
    className={`flex items-center justify-center text-black font-medium px-3 py-1 rounded-none transform -rotate-2 ${className}`}
    style={{ ...STYLES.roleTitle, backgroundColor: bgColor, minWidth: '60px' }}
  >
    {children}
  </div>
)

const ProfessorRoleBox = ({ children, bgColor, className = "" }: { 
  children: React.ReactNode, 
  bgColor: string, 
  className?: string 
}) => (
  <div 
    className={`flex items-center justify-center text-black font-medium px-2 py-1 rounded-none transform -rotate-2 ${className}`}
    style={{ ...STYLES.roleTitle, backgroundColor: bgColor }}
  >
    {children}
  </div>
)

const PersonName = ({ children, style = {} }: { 
  children: React.ReactNode, 
  style?: React.CSSProperties 
}) => (
  <div style={{ ...STYLES.personName, ...style }}>
    {children}
  </div>
)

const ProfessorName = ({ children }: { children: React.ReactNode }) => (
  <div style={STYLES.professorName}>
    {children}
  </div>
)

const SectionBorder = () => (
  <>
    <div className="absolute top-0 h-full bg-black z-15" 
         style={{
           left: 'max(-20px, calc((100vw - 1520px) / -2 - 100px))',
           width: '20px'
         }}></div>
    <div className="absolute top-0 h-full bg-black z-15"
         style={{
           right: 'max(-20px, calc((100vw - 1520px) / -2 - 100px))',
           width: '20px'
         }}></div>
  </>
)

const HorizontalBorder = () => (
  <div className="relative mx-auto">
    <div className="absolute h-[20px] bg-black"
         style={{
           left: 'max(-160px, calc((100vw - 1520px) / -2 - 80px))',
           right: 'max(-160px, calc((100vw - 1520px) / -2 - 80px))'
         }}></div>
  </div>
)

const SectionLabel = ({ children, position, top }: { 
  children: React.ReactNode, 
  position: 'left' | 'right', 
  top: string 
}) => (
  <div 
    className={`absolute ${position === 'left' ? 'text-left' : 'text-right'} transform -translate-y-1/2 rotate-90 font-medium z-20 whitespace-nowrap`}
    style={{ 
      ...STYLES.sectionLabel, 
      top,
      [position]: 'max(-60px, calc((100vw - 1520px) / -2 - 160px))',
      transform: position === 'left' ? 'translateX(-50%) translateY(-50%) rotate(90deg)' : 'translateX(50%) translateY(-50%) rotate(90deg)'
    }}
  >
    {children}
  </div>
)

export default function Exhibition2025Home() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Responsive container for various screen sizes */}
      <div className="w-full mx-auto relative">
        {/* Left margin space - responsive */}
        <div className="fixed top-[110px] bg-white z-5" 
             style={{
               left: '0px',
               width: 'max(40px, calc((100vw - 1520px) / 2 + 80px))',
               height: 'calc(100% - 110px)'
             }}></div>
        
        {/* Right margin space - responsive */}
        <div className="fixed top-[110px] bg-white z-5" 
             style={{
               right: '0px',
               width: 'max(40px, calc((100vw - 1520px) / 2 + 80px))',
               height: 'calc(100% - 110px)'
             }}></div>
        
        {/* Main Content with responsive margins */}
        <div className="mx-auto max-w-[1520px] px-[40px] sm:px-[80px] lg:px-[120px]">
        {/* Hero Section - Video Area */}
        <section className="relative bg-white flex flex-col justify-center items-center px-8" style={{ height: '749px' }}>
          {/* Custom SectionBorder with fixed height for Hero */}
          <>
            <div className="absolute top-0 bg-black z-15" 
                 style={{
                   left: 'max(-20px, calc((100vw - 1520px) / -2 - 100px))',
                   width: '20px',
                   height: '749px'
                 }}></div>
            <div className="absolute top-0 bg-black z-15"
                 style={{
                   right: 'max(-20px, calc((100vw - 1520px) / -2 - 100px))',
                   width: '20px',
                   height: '749px'
                 }}></div>
          </>
          
          {/* Left Side Text - Upper Section */}
          <div className="absolute top-[113px] transform -translate-x-1/2 rotate-90 font-medium z-20 text-left" style={{
            ...STYLES.sectionLabel,
            left: 'max(-77px, calc((100vw - 1520px) / -2 - 167px))'
          }}>
            상명대학교 디자인대학 <br />
            커뮤니케이션디자인전공
          </div>
          
          {/* Left Side Text - Lower Section */}
          <div className="absolute top-[590px] transform -translate-x-1/2 rotate-90 font-medium z-20 whitespace-nowrap" style={{
            ...STYLES.sectionLabel,
            left: 'max(-54px, calc((100vw - 1520px) / -2 - 144px))'
          }}>
            제 38회 졸업전시회
          </div>
          
          {/* Right Side Text */}
          <div className="absolute top-[211px] transform translate-x-1/2 rotate-90 font-medium z-20 whitespace-nowrap" style={{
            ...STYLES.sectionLabel,
            right: 'max(-54px, calc((100vw - 1520px) / -2 - 144px))'
          }}>
            Erased, Rewritten, Repeated
          </div>
          
          {/* Video Container - Larger centered with 16:9 aspect ratio */}
          <div className="w-full max-w-[1200px] mx-auto px-4">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              {/* Hero Main Image (temporary, will be replaced with video later) */}
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <Image 
                  src="/images/hero/hero_main.png" 
                  alt="Hero Main Image" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
              </section>

        {/* Spacing after Hero */}
        <div style={{ height: '43px' }}></div>

        {/* <HorizontalBorder /> */}

        {/* Spacing before next section */}
        <div style={{ height: '100px' }}></div>

      {/* Exhibition Info Section */}
      <section className="relative bg-white px-8">
          <SectionBorder />
          <SectionLabel position="left" top="59px">【 1 】 소개</SectionLabel>
        <div className="max-w-6xl mx-auto">
          {/* Left side - Year indicator */}
          <div className="flex">
            {/* Main content */}
            <div className="flex-1">
              <h2 className="mt-4 mb-4 text-black" style={STYLES.mainTitle}>
                지우고,<br />
                다시 쓰고,<br />
                반복하는
              </h2>
              <p className="font-medium" style={STYLES.subtitle}>Erased, Rewritten, Repeated</p>
              
              <p className="leading-relaxed mb-12" style={STYLES.bodyText}>
               지우고, 다시쓰고, 반복하는 디자인 과정 속 수많은 시행착오와 반복, 그리고 다시 써 내려간 고민의 흔적을 담고 있다. 각기 다른 배경과 문제의식에서 출발한 프로젝트들은 서로 다른 결과물을 낳았지만, 결국 표현이라는 하나의 공통된 지점을 향해 수렴된다. 이 공간 안에서 펼쳐지는 모든 작업은 우리 안에 쌓인 기억과 경험을 반추하고, 그것을 시각적으로 재구성해 보는 시도이다. 익숙함을 지우고 새로 쓰는 이 실험이다.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom padding for Exhibition Info Section */}
        <div style={{ height: '22px' }}></div>
      </section>

      {/* Additional spacing below section border */}
      <div style={{ height: '38px' }}></div>

      <HorizontalBorder />

      {/* Spacing after horizontal line */}
      <div style={{ height: '58px' }}></div>

      {/* Exhibition Details */}
      <section className="relative bg-white px-8">
        <SectionBorder />
        <SectionLabel position="right" top="124px">【 2 】 오프라인 전시</SectionLabel>

        <div className="max-w-6xl mx-auto">
          <div className="flex">
            {/* Left vertical line space */}
            <div className="w-2"></div>
            
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                                    {/* Map */}
                    <div style={{ width: '540px', height: '730px' }}>
                      <img 
                        src="/images/hero/map.png" 
                        alt="전시장 위치 지도" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
      </div>

                {/* Exhibition Info */}
          <div>
                  <div className="mb-8">
                    <h3 className="font-medium mb-6" style={{ fontSize: '2.1875rem' }}>2025.11.14(금) - 11.18(일)</h3>
                                         <div className="space-y-2">
                      <div style={{ 
                        fontSize: '1.875rem',
                        fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: '500', 
                        wordBreak: 'keep-all' 
                      }}>오프닝　　11.14(금) 17:00</div>

                      <div style={{ 
                        fontSize: '1.875rem',
                        fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: '500', 
                        wordBreak: 'keep-all' 
                      }}>시간　　　11:00-19:00</div>
                    </div>
                  </div>

              <div>
                    <h3 className="font-medium mb-8" style={{ fontSize: '2.1875rem', letterSpacing: '-0.02em' }}>
                      THE SEOULITEUM<br />
                      더 서울라이티움, 제1전시장
                    </h3>
                    <p className="mb-12" style={{ 
                      fontSize: '1.75rem',
                      fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: '500',
                      letterSpacing: '-0.02em'
                    }}>
                      서울특별시 성동구 서울숲2길 32-14<br />
                      제이아이브이일렉트릭 G동(B2층)
                    </p>
                    
                    {/* Transportation */}
                    <div className="space-y-8" style={{ 
                      fontSize: '1.75rem',
                      fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: '500'
                    }}>
                      <div className="flex items-center">
                        <img src="/svg/su.svg" alt="지하철" style={{ width: '38px', height: '38px', marginRight: '8px' }} />
                        <span style={{ 
                          fontSize: '1.625rem',
                          fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: '500',
                          letterSpacing: '-0.02em'
                        }}>서울숲역 4번 출구에서 200m(도보 2분)</span>
              </div>
                      <div className="flex items-center">
                        <img src="/svg/two.svg" alt="지하철 2호선" style={{ width: '38px', height: '38px', marginRight: '8px' }} />
                        <span style={{ 
                          fontSize: '1.625rem',
                          fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: '500',
                          letterSpacing: '-0.02em'
                        }}>뚝섬역 8번 출구에서 600m(도보 5분)</span>
              </div>
                      <div className="flex items-start">
                        <img src="/svg/bus.svg" alt="버스" style={{ width: '38px', height: '38px', marginRight: '8px', marginTop: '4px' }} />
                        <span style={{ 
                          fontSize: '1.625rem',
                          fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: '500',
                          letterSpacing: '-0.02em'
                        }}>2014, 2224, 2413 - 성동구민종합체육센터<br/>2016 - 뚝섬역8번출구</span>
              </div>
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom padding for Exhibition Details Section */}
        <div style={{ height: '43px' }}></div>
      </section>

      {/* Additional spacing below section border */}
      <div style={{ height: '38px' }}></div>

        <HorizontalBorder />

        {/* Spacing after horizontal line */}
        <div style={{ height: '58px' }}></div>

      {/* Committee Section */}
      <section className="relative bg-white px-8">
          <SectionBorder />
          <SectionLabel position="left" top="92px">【 3 】 지도교수</SectionLabel>

        <div className="max-w-6xl mx-auto">
          <div className="flex">

            
            <div className="flex-1 pl-8">
              <div className="grid grid-cols-2 gap-16 mt-4 mb-8">
                                {/* 왼쪽 열 - 혁신디자인스튜디오 */}
                <div style={{
                  width: '100%', 
                  height: '100%', 
                  justifyContent: 'flex-start', 
                  alignItems: 'baseline', 
                  gap: '52px', 
                  display: 'inline-flex',
                  marginLeft: '-18px'
                }}>
                  <ProfessorRoleBox bgColor="#C8FF65">혁신디자인스튜디오</ProfessorRoleBox>
                  <div style={{
                    flexDirection: 'column', 
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-end', 
                    gap: '8px', 
                    display: 'inline-flex'
                  }}>
                    <ProfessorName>김한솔 교수님</ProfessorName>
                    <ProfessorName>손우성 교수님</ProfessorName>
                    <ProfessorName>서승연 교수님</ProfessorName>
                    <ProfessorName>안혜선 교수님</ProfessorName>
        </div>
      </div>

                {/* 오른쪽 열 - 융합디자인스튜디오 */}
                <div style={{
                  width: '100%', 
                  height: '100%', 
                  justifyContent: 'flex-start', 
                  alignItems: 'baseline', 
                  gap: '52px', 
                  display: 'inline-flex',
                  marginLeft: '-22px'
                }}>
                  <ProfessorRoleBox bgColor="#B5EEFF">융합디자인스튜디오</ProfessorRoleBox>
                  <div style={{
                    flexDirection: 'column', 
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-end', 
                    gap: '8px', 
                    display: 'inline-flex'
                  }}>
                    <ProfessorName>유동관 교수님</ProfessorName>
                    <ProfessorName>이원제 교수님</ProfessorName>
                    <ProfessorName>신윤진 교수님</ProfessorName>
                    <ProfessorName>남정 교수님</ProfessorName>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing before horizontal line */}
      <div style={{ height: '38px' }}></div>

      <HorizontalBorder />

      {/* Spacing after horizontal line */}
      <div style={{ height: '58px' }}></div>

      {/* Committee Table */}
      <section className="relative bg-white" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        <SectionBorder />
        <SectionLabel position="right" top="136px">【 4 】 졸업전시위원회</SectionLabel>
        
        {/* Top spacing for content */}
        <div style={{ height: '28px' }}></div>
        
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex">

            

            
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-6xl">
                <div className="flex justify-center gap-24">
                  {/* 위원장 그룹 */}
                  <div className="flex flex-col items-center">
                    <RoleBox bgColor="#C8FF65">위원장</RoleBox>
                    <div style={{ height: '12px' }}></div>
                    <div className="flex flex-col items-center gap-1">
                      <PersonName>명규민</PersonName>
                    </div>
                  </div>
                  
                  {/* 부위원장 그룹 */}
                  <div className="flex flex-col items-center">
                    <RoleBox bgColor="#C8FF65">부위원장</RoleBox>
                    <div style={{ height: '12px' }}></div>
                    <div className="flex flex-col items-center gap-1">
                      <PersonName>금예은</PersonName>
                      <PersonName>김재겸</PersonName>
                    </div>
                  </div>
                  
                  {/* 홍보 그룹 */}
                  <div className="flex flex-col items-center">
                    <RoleBox bgColor="#B5EEFF">홍보</RoleBox>
                    <div style={{ height: '12px' }}></div>
                    <div className="flex flex-col items-center gap-1">
                      <PersonName>유서윤</PersonName>
                      <PersonName>고세진</PersonName>
                      <PersonName>박하빈</PersonName>
                    </div>
                  </div>
                  
                  {/* 디자인 그룹 */}
                  <div className="flex flex-col items-center">
                    <RoleBox bgColor="#C8FF65">디자인</RoleBox>
                    <div style={{ height: '12px' }}></div>
                    <div className="flex flex-col items-center gap-1">
                      <PersonName>조은영</PersonName>
                      <PersonName>박시온</PersonName>
                      <PersonName>김수인</PersonName>
                    </div>
                  </div>
                  
                  {/* 웹 그룹 */}
                  <div className="flex flex-col items-center">
                    <RoleBox bgColor="#B5EEFF">웹</RoleBox>
                    <div style={{ height: '12px' }}></div>
                    <div className="flex flex-col items-center gap-1">
                      <PersonName>이혁수</PersonName>
                      <PersonName>강규리</PersonName>
                      <PersonName>김혜림</PersonName>
                    </div>
                  </div>
                  
                  {/* 기획 그룹 */}
                  <div className="flex flex-col items-center">
                    <RoleBox bgColor="#B5EEFF">기획</RoleBox>
                    <div style={{ height: '12px' }}></div>
                    <div className="flex flex-col items-center gap-1">
                      <PersonName>박규영</PersonName>
                      <PersonName>유경주</PersonName>
                      <PersonName>최지윤</PersonName>
                      <PersonName>송시후</PersonName>
                    </div>
                  </div>
                  
                  {/* 총무 그룹 */}
                  <div className="flex flex-col items-center">
                    <RoleBox bgColor="#C8FF65">총무</RoleBox>
                    <div style={{ height: '12px' }}></div>
                    <div className="flex flex-col items-center gap-1">
                      <PersonName>이유진</PersonName>
                      <PersonName>김세미</PersonName>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom spacing for section */}
        <div style={{ height: '40px' }}></div>
      </section>

        {/* Spacing before horizontal line */}
        <div style={{ height: '38px' }}></div>

        <HorizontalBorder />

        {/* Spacing after horizontal line */}
        <div style={{ height: '58px' }}></div>

      {/* Sponsors */}
      <section className="relative bg-white px-8" style={{ 
        paddingTop: '32px',
        paddingBottom: '32px',
        height: '280px'
      }}>
        <SectionBorder />
        <SectionLabel position="left" top="92px">【 5 】 후원업체</SectionLabel>
        
        <div className="max-w-6xl mx-auto h-full flex items-center justify-center">
          <div className="w-full">
            <div className="grid grid-cols-4 gap-12 items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <img src="/svg/seoul.svg" alt="THE SEOULITEUM" style={{ width: '180px', height: 'auto' }} />
                  </div>
                  <div style={{ 
                    fontSize: '1rem',
                    fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400',
                    color: '#666'
                  }}>공간제공</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <img src="/svg/rix.svg" alt="RixFont" style={{ width: '180px', height: 'auto' }} />
                  </div>
                  <div style={{ 
                    fontSize: '1rem',
                    fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400',
                    color: '#666'
                  }}>서체 지원</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <img src="/svg/yoon.svg" alt="Yoondesign" style={{ width: '180px', height: 'auto' }} />
                  </div>
                  <div style={{ 
                    fontSize: '1rem',
                    fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400',
                    color: '#666'
                  }}>서체 지원</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <img src="/svg/ads.svg" alt="무주 ADSLAND" style={{ width: '180px', height: 'auto' }} />
                  </div>
                  <div style={{ 
                    fontSize: '1rem',
                    fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400',
                    color: '#666'
                  }}>자료 지원</div>
                </div>
            </div>
          </div>
        </div>
      </section>

        {/* Spacing */}
        <div style={{ height: '43px' }}></div>
        </div>

        {/* Footer */}
        <footer style={{
          width: '100%', 
          height: '100%', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          display: 'inline-flex'
        }}>
          <div style={{
            alignSelf: 'stretch', 
            height: '346px', 
            position: 'relative', 
            background: '#171717', 
            overflow: 'hidden'
          }}>
            <div style={{
              width: 'min(432px, 35vw)', 
              left: 'max(40px, 10vw)', 
              top: '36px', 
              position: 'absolute', 
              color: '#FBFBFB', 
              fontSize: 'clamp(20px, 2.5vw, 28px)', 
              fontFamily: 'Pretendard', 
              fontWeight: '700', 
              lineHeight: '1.5', 
              wordWrap: 'break-word'
            }}>
              2025 상명대학교<br/>
              커뮤니케이션디자인전공 졸업전시<br/>
              지우고, 다시 쓰고, 반복하는
            </div>
            
            <div style={{
              left: 'max(60vw, 600px)', 
              top: '36px', 
              position: 'absolute', 
              color: '#FBFBFB', 
              fontSize: 'clamp(16px, 1.8vw, 22px)', 
              fontFamily: 'Pretendard', 
              fontWeight: '500', 
              lineHeight: '1.8', 
              wordWrap: 'break-word'
            }}>
              전시오프닝
            </div>
            
            <div style={{
              left: 'max(60vw, 600px)', 
              top: '82px', 
              position: 'absolute', 
              color: '#FBFBFB', 
              fontSize: 'clamp(16px, 1.8vw, 22px)', 
              fontFamily: 'Pretendard', 
              fontWeight: '500', 
              lineHeight: '1.8', 
              wordWrap: 'break-word'
            }}>
              전시장 위치
            </div>
            
            <div style={{
              left: 'max(60vw, 600px)', 
              top: '200px', 
              position: 'absolute', 
              color: '#FBFBFB', 
              fontSize: 'clamp(16px, 1.8vw, 22px)', 
              fontFamily: 'Pretendard', 
              fontWeight: '500', 
              lineHeight: '1.8', 
              wordWrap: 'break-word'
            }}>
              인스타그램
            </div>
            
            <div style={{
              left: 'max(60vw, 600px)', 
              top: '244px', 
              position: 'absolute', 
              color: '#FBFBFB', 
              fontSize: 'clamp(16px, 1.8vw, 22px)', 
              fontFamily: 'Pretendard', 
              fontWeight: '500', 
              lineHeight: '1.8', 
              wordWrap: 'break-word'
            }}>
              문의전화
            </div>
            
            <div style={{
              width: 'min(500px, 35vw)', 
              left: 'max(70vw, 750px)', 
              top: '36px', 
              position: 'absolute', 
              flexDirection: 'column', 
              justifyContent: 'flex-start', 
              alignItems: 'flex-start', 
              gap: '12px', 
              display: 'inline-flex'
            }}>
              <div style={{
                color: '#FBFBFB', 
                fontSize: 'clamp(14px, 1.6vw, 22px)', 
                fontFamily: 'Pretendard', 
                fontWeight: '500', 
                lineHeight: '1.6', 
                wordWrap: 'break-word'
              }}>
                2025.11.14(금) – 11.18(화) 11:00 – 19:00
              </div>
              
              <div style={{
                color: '#FBFBFB', 
                fontSize: 'clamp(14px, 1.6vw, 22px)', 
                fontFamily: 'Pretendard', 
                fontWeight: '500', 
                lineHeight: '1.6', 
                wordWrap: 'break-word'
              }}>
                더 서울라이티움 제1전시장 <br />서울특별시 성동구 서울숲2길 32-14 <br /> 갤러리아포레 G층(B2층)
              </div>
              
              <div style={{
                color: '#FBFBFB', 
                fontSize: 'clamp(14px, 1.6vw, 22px)', 
                fontFamily: 'Pretendard', 
                fontWeight: '500', 
                lineHeight: '1.6', 
                wordWrap: 'break-word'
              }}>
                @smucd2025
              </div>
              
              <div style={{
                color: '#FBFBFB', 
                fontSize: 'clamp(14px, 1.6vw, 22px)', 
                fontFamily: 'Pretendard', 
                fontWeight: '500', 
                lineHeight: '1.6', 
                wordWrap: 'break-word'
              }}>
                031-0000-0000
              </div>
            </div>
            
            <Link 
              href="/"
              className="footer-archive-link"
              style={{
                left: 'max(40px, 10vw)', 
                top: '244px', 
                position: 'absolute', 
                color: '#FBFBFB', 
                fontSize: 'clamp(16px, 1.8vw, 22px)', 
                fontFamily: 'Pretendard', 
                fontWeight: '500', 
                textDecoration: 'underline', 
                lineHeight: '1.8', 
                wordWrap: 'break-word',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease'
              }}
            >
              졸업전시 아카이브
            </Link>
          </div>
          
          <div style={{
            position: 'absolute',
            left: '0px',
            right: '0px',
            bottom: '0px',
            display: 'flex',
            flexDirection: 'row'
          }}>
            <div style={{flex: '1', height: '11px', background: '#DFDFDF'}} />
            <div style={{flex: '1', height: '11px', background: '#DDFF8E'}} />
            <div style={{flex: '1', height: '11px', background: '#D5B27D'}} />
            <div style={{flex: '1', height: '11px', background: '#B5EEFF'}} />
          </div>
        </footer>
      </div>
    </div>
  )
} 

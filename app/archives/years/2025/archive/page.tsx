import Image from 'next/image';
import Link from 'next/link';

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Coming Soon 섹션 */}
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Image 
            src="/svg/soon.svg" 
            alt="Coming Soon" 
            width={400} 
            height={200}
            className="mx-auto"
          />
        </div>
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
  );
}
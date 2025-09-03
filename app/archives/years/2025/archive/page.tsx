import Image from 'next/image';
import Footer from '../components/Footer';

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

      <Footer />
    </div>
  );
}
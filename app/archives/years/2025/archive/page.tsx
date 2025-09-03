import Image from 'next/image';

export default function ArchivePage() {
  return (
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
  );
}
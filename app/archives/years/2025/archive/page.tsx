import Footer from '../components/Footer'

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white flex justify-center px-4 pt-8 pb-12 sm:pt-10 lg:pt-12">
        <div className="w-full max-w-4xl">
          <video
            src="/images/archive/archive_video.mp4"
            role="presentation"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/archive/Group 1074.png"
            className="w-full h-auto"
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

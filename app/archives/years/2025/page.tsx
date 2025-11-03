import Footer from './components/Footer'

export default function Exhibition2025Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <section className="flex w-full flex-col items-center gap-10">
        <div className="home-hero-container hero-media-wrapper w-full">
          <picture className="block w-full">
            <source media="(min-width: 961px)" srcSet="/page/1440_hero.png" />
            <source media="(min-width: 601px)" srcSet="/page/1280_hero.png" />
            <img
              src="/page/mobile_hero.png"
              alt="2025 Exhibition hero"
              className="home-hero-image h-auto w-full object-cover"
            />
          </picture>
          <div className="home-hero-video-wrapper">
            <video
              className="home-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/hero/hero_main.png"
            >
              <source src="/images/hero/hero_main.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

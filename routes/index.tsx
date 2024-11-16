import Layout from "../components/Layout.tsx";
import GreenBreaker from "../components/GreenBreaker.tsx"

export default function HomePage() {
  return (
    <Layout>
      {/* Hero section */}
      <div className="relative -mt-6 md:-mt-8 mb-12">
        <div className="bg-enl-red h-72 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl mx-auto px-4">
              <GreenBreaker/>
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
                IT-POLITISK UDVALG
              </h1>
              <p className="text-white text-xl">
                Vi kæmper for digital retfærdighed og demokratisk kontrol med
                teknologien
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* About section */}
        <section>
          <div className="h-1 w-16 bg-enl-green mb-4" />
          <h2 className="text-3xl font-bold mb-4">OM UDVALGET</h2>
          <p className="text-lg mb-6">
            IT-Politisk Udvalg arbejder med Enhedslistens politik inden for
            digitalisering, teknologi og internetrettigheder. Vi fokuserer på at
            sikre borgernes digitale rettigheder og fremme åbne, demokratiske
            teknologiløsninger.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-enl-gray rounded-md">
              <h3 className="font-bold mb-2">Vores fokusområder:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Digital privatliv og databeskyttelse</li>
                <li>Demokratisk kontrol med tech-giganter</li>
                <li>Open source og digitale fællesskaber</li>
                <li>Offentlig IT og digitalisering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* News section */}
        <section>
          <div className="h-1 w-16 bg-enl-green mb-4" />
          <h2 className="text-3xl font-bold mb-4">SENESTE NYT</h2>
          <div className="space-y-6">
            <article className="border-b border-enl-gray pb-4">
              <h3 className="font-bold mb-2">Høringssvar om ny datalov</h3>
              <p className="text-sm text-gray-600 mb-2">15. november 2024</p>
              <p>
                Læs udvalgets høringssvar til den nye lov om dataindsamling.
              </p>
            </article>
            <article className="border-b border-enl-gray pb-4">
              <h3 className="font-bold mb-2">
                Workshop om digital overvågning
              </h3>
              <p className="text-sm text-gray-600 mb-2">14. november 2024</p>
              <p>
                Deltag i vores kommende workshop om digital overvågning og
                privatliv.
              </p>
            </article>
          </div>
        </section>
      </div>

      {/* Current issues section */}
      <section className="mb-12">
        <div className="h-1 w-16 bg-enl-green mb-4" />
        <h2 className="text-3xl font-bold mb-6">AKTUELLE SAGER</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-enl-gray p-6 rounded-md">
            <h3 className="font-bold mb-2">AI-lovgivning</h3>
            <p className="text-sm mb-4">
              EU's AI Act og Danmarks implementering. Hvordan sikrer vi
              demokratisk kontrol?
            </p>
            <a
              href="/aktuelle-sager/ai"
              className="text-enl-red hover:text-enl-red-dark font-bold"
            >
              Læs mere →
            </a>
          </div>
          <div className="bg-enl-gray p-6 rounded-md">
            <h3 className="font-bold mb-2">Digital infrastruktur</h3>
            <p className="text-sm mb-4">
              Offentlig ejerskab af kritisk digital infrastruktur og demokratisk
              kontrol.
            </p>
            <a
              href="/aktuelle-sager/infrastruktur"
              className="text-enl-red hover:text-enl-red-dark font-bold"
            >
              Læs mere →
            </a>
          </div>
          <div className="bg-enl-gray p-6 rounded-md">
            <h3 className="font-bold mb-2">Tech-monopoler</h3>
            <p className="text-sm mb-4">
              Opgør med tech-giganternes magt og kontrol over vores data.
            </p>
            <a
              href="/aktuelle-sager/tech-monopoler"
              className="text-enl-red hover:text-enl-red-dark font-bold"
            >
              Læs mere →
            </a>
          </div>
        </div>
      </section>

      {/* Get involved section */}
      <section className="bg-enl-red text-white p-8 md:p-12 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <div className="h-1 w-16 bg-enl-green mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">DELTAG I UDVALGET</h2>
          <p className="text-lg mb-6">
            Er du medlem af Enhedslisten og interesseret i IT-politik? Vores
            udvalg mødes hver måned og arbejder løbende med aktuelle
            IT-politiske sager.
          </p>
          <div className="space-x-4">
            <a
              href="/bliv-aktiv"
              className="inline-block bg-white text-enl-red px-6 py-3 rounded-md font-bold hover:bg-enl-gray transition-colors"
            >
              Bliv aktiv i udvalget
            </a>
            <a
              href="/moeder"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-enl-red transition-colors"
            >
              Se kommende møder
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

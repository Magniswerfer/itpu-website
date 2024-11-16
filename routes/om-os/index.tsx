import Layout from "../../components/Layout.tsx"
import GreenBreaker from "../../components/GreenBreaker.tsx";

export default function AboutPage(){

  const members = [
      {
        name: "Magnus Høholt Kaspersen",
        role: "Kontaktperson",
        expertise: "Kunstig Intelligens",
      },
      {
        name: "Allan Dukat",
        role: "Styregruppemedlem",
        expertise: "Fri Software",
      },
      {
        name: "Morten Skov",
        role: "Styregruppemedlem",
        expertise: "Altmuligmand",
      },
    ];

  return (
    <Layout>
      <GreenBreaker/>
      <h1 className="text-4cl md:text-5xl font-bold mb-12">
        OM IT-POLITISK UDVALG
      </h1>

      {/* Members section */}
              <section className="mb-12">
                <div className="h-1 w-16 bg-enl-green mb-4" />
                <h2 className="text-3xl font-bold mb-6">STYREGRUPPEMEDLEMMER</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {members.map((member, index) => (
                    <div key={index} className="bg-enl-gray p-6 rounded-md">
                      <h3 className="font-bold mb-2">{member.name}</h3>
                      <p className="text-sm mb-1">{member.role}</p>
                      <p className="text-sm text-gray-600">{member.expertise}</p>
                    </div>
                  ))}
                </div>
              </section>
    </Layout>
  )
}

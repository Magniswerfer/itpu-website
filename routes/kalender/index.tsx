import Layout from "../../components/Layout.tsx";
import GreenBreaker from "../../components/GreenBreaker.tsx";
import MeetingCalendar from "../../components/MeetingCalendar.tsx"

export default function CurrentEvents() {
  return (
    <Layout>
      <GreenBreaker/>
      <h1 className="text-4cl md:text-5xl font-bold mb-12">KALENDER</h1>
      <MeetingCalendar/>
    </Layout>
  );
}

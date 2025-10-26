import PageHeader from "../components/layout/PageHeader";
import ClientList from "../components/sections/ClientList";
import Testimonials from "../components/sections/Testimonials";

export default function Clients() {
  return (
    <>
      {/* Hero + Client List Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        <PageHeader
          title="Our Clients"
          subtitle="Over the years, Aquaclear Water Management has partnered with
              leading environmental organisations, councils, golf courses, and
              private estates across the UK. We take pride in providing
              sustainable solutions for waterway management and ecological
              restoration."
          caption="From nationally protected reserves to world-class sporting venues,
              our trusted partners reflect our commitment to excellence and
              environmental care."
          align="left"
        />
        <ClientList />
      </section>
      <div className="divider bg-base-200 m-0 p-0"></div>

      <Testimonials />
    </>
  );
}

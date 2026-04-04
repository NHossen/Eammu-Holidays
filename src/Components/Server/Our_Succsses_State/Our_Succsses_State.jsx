// Our_Succsses_State.jsx
// IMPORTANT: No 'use client' here. This is a Server Component for maximum SEO Indexing.

const Our_Succsses_State = () => {
  const statsData = [
    {
      title: "Study Destination",
      value: "22[+]",
      desc: "From January, 2022",
      seo: "Global study destinations from Bangladesh"
    },
    {
      title: "Happy Clients",
      value: "4,200[+]",
      desc: "↗︎ 40 (2%)",
      valueClass: "text-secondary",
      descClass: "text-secondary",
      seo: "Successful student visa applicants Dhaka"
    },
    {
      title: "Colleges & Universities",
      value: "145[+]",
      desc: "↘︎ 90 (14%)",
      seo: "Partner universities in UK USA Canada"
    },
    {
      title: "New Registers",
      value: "38",
      desc: "↘︎ 90 (14%)",
      seo: "New student registrations 2026"
    }
  ];

  return (
    <section className="px-4 container mx-auto" aria-label="Success Statistics">
      {/* Hidden SEO heading for search engines */}
      <h2 className="sr-only">Eammu Holidays Success Statistics and Visa Approval Rates 2026</h2>
      
      <div className="grid lg:grid-cols-4 grid-cols-2 my-12">
        {statsData.map((stat, index) => (
          <article key={index} className="stat text-center place-items-center">
            <h3 className="stat-title text-gray-600 font-medium">{stat.title}</h3>
            <div className={`stat-value font-bold text-4xl ${stat.valueClass || 'text-gray-900'}`}>
              {stat.value}
            </div>
            <p className={`stat-desc font-semibold ${stat.descClass || 'text-gray-500'}`}>
              {stat.desc}
            </p>
            
            {/* Semantic SEO keyword support */}
            <span className="sr-only">{stat.seo}</span>
          </article>
        ))}
      </div>

      {/* Supporting SEO Text for Crawlers */}
      <div className="mt-4 text-center">
        <p className="text-gray-500 text-xs italic">
          As the <strong>best education consultancy in Bangladesh</strong>, Eammu Holidays has 
          facilitated <strong>4,200+ student visas</strong> across <strong>22+ global destinations</strong> with <strong>145+ partner universities</strong>.
        </p>
      </div>
    </section>
  );
};

export default Our_Succsses_State;
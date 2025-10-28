import "../styles/home.scss";

function Home() {
  const features = [
    {
      title: "Nutrition Counseling",
      desc: "Personalized meal plans and dietary guidance for diabetes.",
      img: "/images/nutrition.jpg",
    },
    {
      title: "Insulin Therapy",
      desc: "Customized insulin programs for effective management.",
      img: "/images/insulin.jpg",
    },
    {
      title: "Foot & Eye Care",
      desc: "Screenings to prevent diabetic complications.",
      img: "/images/feet.jpg",
    },
    {
      title: "Blood Sugar Test",
      desc: "Quick and accurate monitoring for healthy blood sugar levels.",
      img: "/images/glucose.jpg",
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Lives with Diabetes Care</h1>
          <p>Your trusted clinic for comprehensive diabetes management and wellness.</p>
          <a href="/services" className="btn btn-primary mt-3">View Our Services</a>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-5 what-we-do">What We Do</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <img src={feature.img} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

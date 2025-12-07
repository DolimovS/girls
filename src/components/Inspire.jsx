import onlayn_miting from "../assets/onlayn_miting.jpg";
export default function Inspire() {
  const inspireText = `
To inspire and empower every girl to unlock her potential, pursue knowledge, and create her own path. 
Through mentorship, educational resources, and a supportive community, Girls Hub helps young women build confidence, explore global opportunities, and develop the skills they need to thrive. 
We believe that when girls are guided and encouraged, they not only shape their own futures but also contribute positively to their families, communities, and the world.
  `;

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <img
            src={onlayn_miting}
            alt="Inspire Girls"
            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg">Mission</h2>
          <p className="text-white/90 text-lg leading-relaxed">{inspireText}</p>
        </div>
      </div>
    </section>
  );
}































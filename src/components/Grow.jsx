import { AcademicCapIcon, LightBulbIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function Grow() {
  const cards = [
    {
      title: "Mentorship",
      icon: AcademicCapIcon,
      text: "Guidance on scholarships, university applications, and personal growth.",
    },
    {
      title: "Education",
      icon: LightBulbIcon,
      text: "Workshops, resources, and learning opportunities to build skills and confidence.",
    },
    {
      title: "Community",
      icon: UsersIcon,
      text: "A safe space for girls to connect, share ideas, and support each other.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center drop-shadow-lg">
          Grow with Girls Hub
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 backdrop-blur-md animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <card.icon className="h-12 w-12 mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-white/90">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

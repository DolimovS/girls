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
































// import React from "react";
// import { AcademicCapIcon, UsersIcon, LightBulbIcon } from "@heroicons/react/24/outline";

// export default function InspireCards() {
//   const inspireCards = [
//     {
//       title: "Mentorship",
//       icon: AcademicCapIcon,
//       text: "Guidance on scholarships, university applications, and personal growth.",
//     },
//     {
//       title: "Education",
//       icon: LightBulbIcon,
//       text: "Workshops, resources, and learning opportunities to build skills and confidence.",
//     },
//     {
//       title: "Community",
//       icon: UsersIcon,
//       text: "A safe space for girls to connect, share ideas, and support each other.",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto px-6 lg:px-20">
//         <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
//           Inspire with Girls Hub
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {inspireCards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 backdrop-blur-sm animate-fadeInUp"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <card.icon className="h-12 w-12 mb-4 text-white" />
//               <h3 className="text-xl font-bold mb-2">{card.title}</h3>
//               <p className="text-sm font-medium text-white/90">{card.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

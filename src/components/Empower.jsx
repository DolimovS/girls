import React from "react";
import { RocketLaunchIcon, GlobeAltIcon, StarIcon } from "@heroicons/react/24/outline";

export default function Empower() {
  const achievements = [
    {
      title: "International Collaborations",
      icon: GlobeAltIcon,
      text: "Collaborated with PORLA and Mawoud Academy to offer girls workshops, vision boards, and study-abroad guidance.",
    },
    {
      title: "STEM & Self-Improvement",
      icon: RocketLaunchIcon,
      text: "Guest speaking, hosting discussions on STEM opportunities, empowering girls to explore new fields and develop skills.",
    },
    {
      title: "Global Impact",
      icon: StarIcon,
      text: "So far, we have two international collaborations and are continuing to expand our reach.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-teal-600 to-green-500 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center drop-shadow-lg">
          Empower with Girls Hub
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 backdrop-blur-md animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <item.icon className="h-12 w-12 mb-4 text-yellow-300" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/90">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


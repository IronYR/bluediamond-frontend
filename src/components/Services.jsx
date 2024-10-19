import React from "react";
import ServiceCard from "./ServiceCard";

// Array of service data for testing
const services = [
  {
    title: "Trust us for your foundational data needs",
    description:
      "Our dataset creation service provides high-quality, tailored datasets using advanced techniques for accuracy and reliability. We collaborate with your team to deliver actionable datasets that drive insights and innovation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    title: "Revolutionize Hiring with Our Intelligent HR Chatbot",
    description:
      "Our HR chatbot transforms hiring with text, voice, and video interviews. It engages candidates and analyzes physical gestures for non-verbal cues. With transparent AI evaluations, it ensures fair, data-driven decisions, enhancing the recruitment experience and empowering HR teams to make informed choices efficiently",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
  },
  {
    title: "Service 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  // {
  //   title: "Service 4",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       class="w-6 h-6"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       stroke="currentColor"
  //     >
  //       <path
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //         stroke-width="2"
  //         d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  //       />
  //     </svg>
  //   ),
  // },
  // {
  //   title: "Service 5",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       class="w-6 h-6"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       stroke="currentColor"
  //     >
  //       <path
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //         stroke-width="2"
  //         d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  //       />
  //     </svg>
  //   ),
  // },
  // {
  //   title: "Service 6",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       class="w-6 h-6"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       stroke="currentColor"
  //     >
  //       <path
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //         stroke-width="2"
  //         d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  //       />
  //     </svg>
  //   ),
  // },
  // Add the rest of the services here with their respective icons
];

export default function Services() {
  return (
    <section>
      <div className="container px-6 py-10 mx-auto my-24" id="services">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our <span className="text-blue-500">Services</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

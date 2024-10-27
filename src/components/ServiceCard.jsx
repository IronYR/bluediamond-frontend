import React, {useRef, useEffect} from 'react'

const ServiceCard = ({ title, description, icon }) => {
    const cardRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
  
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);
  
    return (
      <div ref={cardRef} className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-gray-800 opacity-0 translate-y-4">
        <span className="inline-block p-3 rounded-full dark:text-white bg-blue-500">
          {icon}
        </span>
        <div className="h-12">
        <h1 className="text-xl font-semibold capitalize dark:text-white">
          {title}
        </h1>
        </div>
        
  
        <p className="h-52 dark:text-gray-300 text-left">{description}</p>
  
        <a
          href="/services"
          className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >
          <span className="mx-1">Learn more</span>
          <svg
            className="w-4 h-4 mx-1 rtl:-scale-x-100"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    );
  };
  export default ServiceCard;
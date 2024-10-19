import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ServiceCard({ title, description }) {
  return (
    <div className="min-h-[40vh] flex flex-col justify-center rounded-lg p-8 shadow-lg" style={{backgroundColor:"rgba(0, 27, 102, 1)"}}>
      <h1 className="text-6xl font-semibold mb-6">{title}</h1>
      <p className="text-gray-400 text-2xl leading-relaxed">{description}</p>
    </div>
  );
}
function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="space-y-12">
          <ServiceCard
            title="Tailored Dataset Creation"
            description="Our dataset creation service specializes in curating high-quality, relevant datasets tailored to your specific needs. We leverage advanced data collection techniques and methodologies to ensure accuracy and reliability, whether for training machine learning models, conducting research, or enhancing analytics. By collaborating closely with your team, we identify key data points and sources, ensuring that the datasets we deliver are comprehensive and actionable. Trust us to provide the foundational data that drives your insights and innovation."
          />
          <ServiceCard
            title="Revolutionize Hiring with Our Intelligent HR Chatbot"
            description="Our explainable and reliable HR chatbot transforms the hiring process with its advanced capabilities in conducting text-based interviews, voice calls, and video interviews. This intelligent chatbot not only engages candidates through multiple formats but also analyzes physical gestures during video calls to assess non-verbal communication cues. Its explainable AI provides transparency in candidate evaluations, ensuring that hiring decisions are fair and data-driven. By integrating these innovative features, our chatbot enhances the recruitment experience, allowing HR teams to make informed choices while fostering a more engaging and efficient hiring process."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}



export default ServicesPage;

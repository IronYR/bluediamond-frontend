import "../App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import BlogLanding from "../components/BlogLanding";
function Index() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Navbar />
      <Hero />
      <Services />
      <BlogLanding />
      <div className="w-full flex justify-center items-center">
        <video
          className="w-full max-w-3xl"
          src="/static/cta-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <Footer />
    </div>
  );
}

export default Index;

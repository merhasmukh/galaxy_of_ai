import { 
  Code, 
  Brain, 
  BookOpen, 
  Users
} from 'lucide-react';

const About = () => {
  const skills = [
    "Python", 
    "Next.js", 
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "LLM Development", 
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "OpenAI API",
    "Hugging Face",
    "Scikit-Learn",
    "Streamlit",
    "Flask"
  ];

  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] min-h-screen py-16 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* About Us */}
        <div className="bg-[#1E293B] shadow-xl rounded-2xl p-10 mb-12 border border-white/20 hover:border-white/40 transition duration-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center text-white">
            <Brain className="mr-3 text-[#38BDF8]" /> 
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#9333EA] text-transparent bg-clip-text">
              About Us
            </span>
          </h3>
          <p className="text-white/60 italic mb-4">
          Learn, Build, and Collaborate in the World of AI.
        </p>

          <p className="text-white/80 leading-relaxed">
            Welcome to <span className="font-semibold text-[#38BDF8]">Galaxy of AI</span>—an open-source platform for AI/ML, NLP, and Generative AI (LLMs) enthusiasts, researchers, and developers.  
            Our mission is to create a knowledge-sharing ecosystem that fosters collaboration, accelerates AI research, and helps developers stay ahead of technological advancements.
          </p>

        </div>

        {/* Mission Statement */}
        <div className="bg-[#1E293B] shadow-xl rounded-2xl p-10 mb-12 border border-white/20 hover:border-white/40 transition duration-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center text-white">
            <BookOpen className="mr-3 text-[#38BDF8]" /> 
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#9333EA] text-transparent bg-clip-text">
              Our Mission
            </span>
          </h3>
          <p className="text-white/80 leading-relaxed">
            <span className="font-semibold text-[#38BDF8]">Galaxy of AI</span> is built to empower the developer community by providing high-quality tutorials, research articles, and real-world project collaborations.  
            We believe in the power of open-source contributions, where AI enthusiasts can learn, build, and innovate together.  
            By staying updated with the latest AI trends, tools, and research, we aim to shape the future of AI development.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-[#1E293B] shadow-xl rounded-2xl p-10 border border-white/20 hover:border-white/40 transition duration-300">
          <h3 className="text-3xl font-bold mb-6 flex items-center text-white">
            <Code className="mr-3 text-[#38BDF8]" /> 
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#9333EA] text-transparent bg-clip-text">
              Technical Skills
            </span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#38BDF8] hover:text-black transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Community */}
      <div className="bg-[#1E293B] shadow-xl rounded-2xl p-10 mt-12 border border-white/20 hover:border-white/40 transition duration-300">
        <h3 className="text-3xl font-bold mb-4 flex items-center text-white">
          <Users className="mr-3 text-[#38BDF8]" />
          <span className="bg-gradient-to-r from-[#38BDF8] to-[#9333EA] text-transparent bg-clip-text">
            Community Driven
          </span>
        </h3>
        <p className="text-white/80 leading-relaxed">
          Galaxy of AI thrives because of its vibrant community. From contributors to curious learners, 
          every member adds value to our journey. Want to join? Collaborate with us on GitHub and be a part of something big.
        </p>
      </div>
      


      </div>
    </div>
  );
};

export default About;

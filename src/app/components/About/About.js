
import { 
  Code, 
  Brain, 
  BookOpen, 

  Link
} from 'lucide-react';

const About = () => {
  const skills = [
    "Python", 
    "React", 
    "GenAI", 
    "LLM Development", 
    "Machine Learning",
    "TensorFlow",
    "PyTorch",
    "Langchain",
    "OpenAI API",
    "Hugging Face"
  ];

  const professionalSummary = `
    Currently, I am working as a Machine Learning Engineer, and I want to share my knowledge and experience with everyone.

    Python is a very simple language. It gives you just enough to get started and doesn’t add extra features for small things.

    Moreover, the recent boom in Artificial Intelligence And Machine Learning has helped Python to grow like never before, thanks to the vast number of Python libraries in these fields.
    Some of them I personally like are TensorFlow, NumPy, Pandas, Scikit-Learn, Keras, Streamlit, Flask, etc.
  `;

  const missionStatement = `
    This is our platform to share our knowledge and experience with the developers’ community. 
    We hope our articles will save you time and help you get things done quickly.

    Our mission is not only to write high-quality articles but also to keep them updated with the latest changes in the language and technologies.
  `;

  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] min-h-screen py-16 text-white">
      <div className="container mx-auto px-6">
        
        {/* Professional Summary */}
        <div className="bg-white-50 shadow-lg rounded-lg p-8 mb-12 border border-white-100">
          <h3 className="text-2xl font-semibold mb-4 flex items-center text-white-900">
            <Brain className="mr-3 text-white-600" /> About Me
          </h3>
          <p className="text-white-800">{professionalSummary}</p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white-50 shadow-lg rounded-lg p-8 mb-12 border border-white-100">
          <h3 className="text-2xl font-semibold mb-4 flex items-center text-white-900">
            <BookOpen className="mr-3 text-white-600" /> Why Did I Start Galaxy Of AI?
          </h3>
          <p className="text-white-800">{missionStatement}</p>
        </div>

        {/* Skills Section */}
        <div className="bg-white-50 shadow-lg rounded-lg p-8 mb-12 border border-white-100">
          <h3 className="text-2xl font-semibold mb-4 flex items-center text-white-900">
            <Code className="mr-3 text-white-600" /> Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-white-200 text-white-900 px-3 py-1 rounded-full text-sm hover:bg-white-300 hover:text-black transition duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white-50 shadow-lg rounded-lg p-8 border border-white-100">
          <h3 className="text-2xl font-semibold mb-4 flex items-center text-white-900">
            <Link className="mr-3 text-white-600" /> How Can You Contact Us?
          </h3>
          <p className="text-white-800">
            Please feel free to share your views about the blog via comments. If you want to contact me, please drop an email at:
            <a 
              href="mailto:your-email@example.com" 
              className="text-blue-500 hover:underline ml-2"
            >
             contact@galaxyofai.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

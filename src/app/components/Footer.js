import Image from "next/image";
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 py-4 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white w-full text-center">
      <div className="flex gap-6 flex-wrap justify-center">
       
        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.galaxyofai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/galaxy-of-ai-logo.png"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Galaxy Of AI
        </a>
      </div>
      {/* <div className="flex items-center gap-4 mt-4">
            <SocialIcon network="github" url="https://github.com/merhasmukh" />
            <SocialIcon network="linkedin" url="https://www.linkedin.com/in/mer-hasmukh-49a181135/" />
        </div> */}
      <p className="text-sm text-gray-400 mt-2">
        &copy; 2024 Galaxy Of AI. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

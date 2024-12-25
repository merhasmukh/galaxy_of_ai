import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 py-4 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white w-full text-center">
      <div className="flex gap-6 flex-wrap justify-center">
        <Link
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
        </Link>
      </div>

      <div className="flex gap-4 mt-4 text-sm text-gray-300">
        <Link
          href="/disclaimer"
          className="hover:underline hover:text-white"
        >
          Disclaimer
        </Link>
        <Link
          href="/privacy-policy"
          className="hover:underline hover:text-white"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-conditions"
          className="hover:underline hover:text-white"
        >
          Terms of Conditions
        </Link>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        &copy; 2024 Galaxy Of AI. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

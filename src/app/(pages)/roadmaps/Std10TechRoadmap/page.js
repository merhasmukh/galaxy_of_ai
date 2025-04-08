import Std10TechRoadmap from "../../../components/Roadmaps/Std10/Std10TechRoadmap";

export const metadata = {
  title: "Std. 10th Tech Roadmap – Learn Programming & Tech Skills from Scratch",
  description:
    "Start your tech career after 10th class with this structured roadmap. Learn Python, web development, digital tools, and build real projects.",
  keywords: [
    "10th class roadmap",
    "programming after 10th",
    "learn coding from scratch",
    "python roadmap for beginners",
    "web development after 10th",
    "tech skills for teenagers",
    "coding for school students",
    "freelancing roadmap after 10th",
  ],
  author: "Hasmukh Mer",
  openGraph: {
    title: "Std. 10th Tech Roadmap – Learn Programming & Tech Skills from Scratch",
    description:
      "A complete learning path for students after 10th class to start coding, web development, and freelancing. Begin your career in tech now!",
    url: "https://galaxyofai.com/roadmaps/std10",
    images: [
      {
        url: "https://galaxyofai.com/tech/svg/Laptop.svg",
        width: 1200,
        height: 630,
        alt: "Tech roadmap after 10th class",
      },
    ],
    type: "website",
  },
};

export default async function Page() {
  return <Std10TechRoadmap />;
}

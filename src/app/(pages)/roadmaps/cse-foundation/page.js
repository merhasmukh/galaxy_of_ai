import CSERoadmap from "../../../components/Roadmaps/CSE/CSERoadmap";

export const metadata = {
  title: "Computer Science and Engineering (CSE) Roadmap for Future Developers",
  description:
    "Explore the complete roadmap to master Computer Science and Engineering (CSE). Ideal for students and developers building strong core CS foundations.",
  keywords: [
    "CSE roadmap",
    "Computer Science roadmap",
    "learn programming",
    "data structures and algorithms",
    "OS and DBMS roadmap",
    "CSE subjects guide",
    "developer roadmap",
    "CSE learning path",
    "computer engineering roadmap",
  ],
  author: "Hasmukh Mer",
  openGraph: {
    title: "Computer Science and Engineering (CSE) Roadmap for Future Developers",
    description:
      "Start your journey in Computer Science with this structured and practical CSE roadmap for students and aspiring developers.",
    url: "https://galaxyofai.com/roadmaps/cse",
    images: [
      {
        url: "https://galaxyofai.com/tech/svg/Laptop.svg",
        width: 1200,
        height: 630,
        alt: "CSE roadmap for students and developers",
      },
    ],
    type: "website",
  },
};

export default async function Page() {
  return <CSERoadmap />;
}

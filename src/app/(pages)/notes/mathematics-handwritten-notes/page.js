
import MathNotesPage from "../../../components/Notes/MathNotes";

export const metadata = {
    title: "Mathematics for Machine Learning | Galaxy Of AI",
    description: "Explore handwritten notes on Linear Algebra, Vectors, Matrices, and more. Download PDFs covering essential mathematics for machine learning and data science.",
    keywords: [
      "Mathematics notes",
      "Linear algebra",
      "Vector operations",
      "Machine learning mathematics",
      "Mathematics for data science",
      "Handwritten notes on math",
      "Tensors and matrices",
    ],
    openGraph: {
      title: "Mathematics for Machine Learning | Galaxy Of AI",
      description: "Master math essentials for AI and data science with our handwritten notes and downloadable PDFs.",
      url: "https://galaxyofai.com/notes/mathematics-handwritten-notes",
      type: "website",
    },
  };
  
const page = () =>{
    return <MathNotesPage />
     
};

export default page;
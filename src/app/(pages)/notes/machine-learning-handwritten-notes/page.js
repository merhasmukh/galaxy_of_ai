
import MLNotes from "../../../components/Notes/MLNotes";

export const metadata = {
    title: "Machine Learning Handwritten Notes | Galaxy Of AI",
    description: "Learn Machine Learning fundamentals with handwritten notes on topics like Supervised and Unsupervised Learning, Linear Regression, Ridge and Lasso Regression, Logistic Regression, and more. Download PDFs for each topic.",
    keywords: [
      "Machine Learning notes",
      "Supervised learning",
      "Unsupervised learning",
      "Linear regression",
      "Ridge regression",
      "Lasso regression",
      "Logistic regression",
      "Confusion matrix",
      "Handwritten ML notes",
      "Download ML notes PDFs",
    ],
    openGraph: {
      title: "Machine Learning Handwritten Notes | Galaxy Of AI",
      description: "Explore ML concepts with handwritten notes and downloadable PDFs for each topic.",
      url: "https://galaxyofai.com/notes/machine-learning-handwritten-notes",
      type: "website",
    },
  };
  
const page = () =>{
    return <MLNotes />
     
};

export default page;
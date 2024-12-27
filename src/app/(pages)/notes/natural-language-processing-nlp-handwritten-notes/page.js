
import NLPNotesPage from "../../../components/Notes/NLPNotes";


export const metadata = {
    title: "Natural Language Processing (NLP) Notes | Galaxy Of AI",
    description: "Access handwritten NLP notes for topics like Tokenization, Stemming, Lemmatization, Bag of Words, Cosine Similarity, and more. Download PDFs to enhance your learning journey.",
    keywords: [
      "NLP handwritten notes",
      "Tokenization",
      "Stemming",
      "Lemmatization",
      "Bag of Words",
      "Cosine Similarity",
      "TFIDF",
      "Natural Language Processing notes",
    ],
    openGraph: {
      title: "Natural Language Processing (NLP) Notes | Galaxy Of AI",
      description: "Learn NLP concepts with our comprehensive handwritten notes and downloadable PDFs.",
      url: "https://galaxyofai.com/notes/natural-language-processing-nlp-handwritten-notes",
      type: "website",
    },
  };
  
const page = () =>{
    return <NLPNotesPage />
     
};

export default page;
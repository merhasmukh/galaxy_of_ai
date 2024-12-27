'use client';

import Link from 'next/link';

export default function NLPNotesPage() {
  const notes = [
    {
      day: "Day-1",
      topics: [
        "Tokenization",
        "Stemming",
        "Lemmatization",
      ],
      pdfLink: "https://drive.google.com/file/d/1dHtP-x2qD6oFY0jf7smVNfi3Nzl3J2FO/view?usp=sharing",
    },
    {
      day: "Day-2",
      topics: [
        "Basic Terminologies Used In NLP",
        "One Hot Encoding",
        "Bag Of Words (BOW)",
        "Cosine Similarity",
      ],
      pdfLink: "https://drive.google.com/file/d/1RbAsWwleDgv3E4ROBUFEAaKcRy-BNZGz/view?usp=sharing",
    },
    {
      day: "Day-3",
      topics: [
        "Recap Bag Of Words (BOW)",
        "TFIDF (Term Frequency-Inverse Document Frequency)",
      ],
      pdfLink: "https://drive.google.com/file/d/1xJXEoAaLLJnOq5zHYeScMbZnZCRPABDY/view?usp=sharing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      <section id="nlp-notes" className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-300 mb-8">
          Natural Language Processing (NLP) Handwritten Notes
        </h1>

        <div className="space-y-8">
          {notes.map((note, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <h2 className="text-xl font-semibold text-blue-300 mb-4">{note.day}</h2>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                {note.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
              <Link
                href={note.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
              >
                Download PDF
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

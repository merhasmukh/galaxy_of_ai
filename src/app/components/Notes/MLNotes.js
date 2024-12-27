'use client';

import Link from 'next/link';

export default function MLNotes() {
  const notes = [
    {
      day: "Day-1",
      topics: [
        "Introduction To Machine Learning",
        "Supervised Machine Learning (ML) And Unsupervised Machine Learning (ML)",
        "Linear Regression",
        "R2 & Adjusted R2",
      ],
      pdfLink: "https://drive.google.com/file/d/1VDpSeJfoA0BqZva3eTANYwp3JueO7JeU/view?usp=drive_link",
    },
    {
      day: "Day-2",
      topics: [
        "Ridge And Lasso Regression",
        "Assumption Of Linear Regression",
        "Logistic Regression",
        "Confusion Matrix",
      ],
      pdfLink: "https://drive.google.com/file/d/1U2KC6hc9WWCYlugPmilG8ehUwdpbkdHL/view?usp=sharing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      <section id="notes" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Machine Learning Hand-Written Notes
        </h2>

        <div className="space-y-8">
          {notes.map((note, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-4">{note.day}</h3>
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

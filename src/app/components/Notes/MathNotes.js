'use client';

import Link from 'next/link';

export default function MathNotesPage() {
  const notes = [
    {
      title: "Introduction To Linear Algebra",
      topics: [
        "Introduction to linear algebra",
        "Points And Vectors",
        "Distance Formula",
        "Position Vector",
        "Vectors",
        "Matrices",
        "Row/Column Vectors",
        "Scalar",
        "Tensors",
        "Scalar Multiplication",
      ],
      pdfLink: "https://drive.google.com/file/d/1IBXRqVJS8VZMphaSYYp1TZMs21inZZOj/view?usp=sharing",
    },
    {
      title: "Vector Operations",
      topics: [
        "Vector Transposition",
        "Norm Of a Vector",
        "Types Of Norm",
        "L1 Norm",
        "L2 Norm",
        "Lp Norm",
        "Dot Product Of Vectors",
        "Geometrical Representation Of Dot Product",
        "Dot Product of Vector With Itself",
        "Orthogonal Vector",
        "Projection of Vectors",
        "Unit Vector",
        "Line, Plane, and Hyperplane",
      ],
      pdfLink: "https://drive.google.com/file/d/1Q40qYIiqu-YEUDXu_3f83rsT1-3-tzGe/view?usp=sharing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      <section id="math-notes" className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-300 mb-8">
          Mathematics Handwritten Notes
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Here we provide some notes on mathematics for machine learning and data science.
        </p>
        
        <div className="space-y-8">
          {notes.map((note, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <h2 className="text-xl font-semibold text-blue-300 mb-4">{note.title}</h2>
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
        
        <p className="text-center text-gray-400 mt-12">
          Happy Learning And Keep Learning… <br /> Thank You…
        </p>
      </section>
    </div>
  );
}

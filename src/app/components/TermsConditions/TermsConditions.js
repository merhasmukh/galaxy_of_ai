"use client"
import { useEffect } from "react";
import { BookOpen } from "lucide-react";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms and Conditions - Galaxy Of AI";
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] min-h-screen py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="bg-white-50 shadow-lg rounded-lg p-8 border border-white-100">
          <h1 className="text-3xl font-bold mb-6 flex items-center text-white-900">
            <BookOpen className="mr-3 text-white-600" /> Terms and Conditions
          </h1>

          <p className="text-white-800 mb-4">
            Please read these Terms and Conditions (“Terms”, “Terms and Conditions”) carefully
            before using the <a href="https://galaxyofai.com/" className="underline">https://galaxyofai.com/</a> website
            (the “Service”) operated by https://galaxyofai.com/ (“us”, “we”, or “our”).
          </p>

          <h2 className="text-xl font-semibold mb-3 text-white-900">Acceptance of Terms</h2>
          <p className="text-white-800 mb-4">
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
          <p className="text-white-800 mb-4">
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-white-900">Links To Other Web Sites</h2>
          <p className="text-white-800 mb-4">
            Our Service may contain links to third-party websites or services that are not owned or controlled by https://galaxyofai.com/.
          </p>
          <p className="text-white-800 mb-4">
            https://galaxyofai.com/ has no control over and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that https://galaxyofai.com/ shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
          </p>
          <p className="text-white-800 mb-4">
            We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-white-900">Termination</h2>
          <p className="text-white-800 mb-4">
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="text-white-800 mb-4">
            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-white-900">Governing Law</h2>
          <p className="text-white-800 mb-4">
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>
          <p className="text-white-800 mb-4">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-white-900">Changes</h2>
          <p className="text-white-800 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we may try to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p className="text-white-800 mb-4">
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-white-900">Contact Us</h2>
          <p className="text-white-800 mb-4">
            If you have any questions about these Terms, please contact us at <a href="https://galaxyofai.com/contact/" className="underline">https://galaxyofai.com/contact/</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

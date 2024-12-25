import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  const disclaimerSections = [
    {
      title: "Disclaimers for galaxyofai.com",
      content: `All the information on this website is published in good faith and for general information purposes only. Galaxy of AI does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website is strictly at your own risk. Galaxy of AI will not be liable for any losses and/or damages in connection with the use of our website.

From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link that may have gone ‘bad’.

Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.`
    },
    {
      title: "Consent",
      content: `By using our website, you hereby consent to our disclaimer and agree to its terms.`
    },
    {
      title: "Update",
      content: `Should we update, amend or make any changes to this document, those changes will be prominently posted here.`
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] min-h-screen py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="bg-white-50 shadow-lg rounded-lg p-8 mb-12 border border-white-100">
          <h3 className="text-2xl font-semibold mb-4 flex items-center text-white-900">
            <AlertTriangle className="mr-3 text-white-600" /> Disclaimer
          </h3>

          {disclaimerSections.map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-bold mb-2 text-white-800">{section.title}</h4>
              <p className="text-white-700 whitespace-pre-line">{section.content}</p>
            </div>
          ))}

          <p className="text-white-700 mt-4">
            If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at:
            <a 
              href="mailto:contact@galaxyofai.com" 
              className="text-blue-500 hover:underline ml-2"
            >
              contact@galaxyofai.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;

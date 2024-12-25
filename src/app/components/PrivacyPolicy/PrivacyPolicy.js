import {  Shield} from 'lucide-react';

const PrivacyPolicy = () => {
  const privacySections = [
    {
      title: "Who we are",
      content: `Our website address is https://galaxyofai.com.`
    },
    {
      title: "Comments",
      content: `When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.

An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://galaxyofai.com/privacy-policy. After approval of your comment, your profile picture is visible to the public in the context of your comment.`
    },
    {
      title: "Media",
      content: `If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.`
    },
    {
      title: "Cookies",
      content: `If you leave a comment on our site you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.`
    },
    {
      title: "Embedded content from other websites",
      content: `Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.

These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.`
    },
    {
      title: "Who do we share your data with",
      content: `If you request a password reset, your IP address will be included in the reset email.`
    },
    {
      title: "How long we retain your data",
      content: `If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.

For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.`
    },
    {
      title: "What rights do you have over your data?",
      content: `If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.`
    },
    {
      title: "Where your data is sent",
      content: `Visitor comments may be checked through an automated spam detection service.`
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white-50 shadow-lg rounded-lg p-8 mb-12 border border-white-100">
          <h3 className="text-2xl font-semibold mb-4 flex items-center text-white-900">
            <Shield className="mr-3 text-white-600" /> Privacy Policy
          </h3>

          {privacySections.map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-bold mb-2 text-white-800">{section.title}</h4>
              <p className="text-white-700 whitespace-pre-line">{section.content}</p>
            </div>
          ))}

          <p className="text-white-700 mt-4">
            For more information, visit our website at:
            <a 
              href="https://galaxyofai.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline ml-2"
            >
              galaxyofai.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

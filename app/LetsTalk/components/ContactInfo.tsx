import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="md:w-1/2 pr-8">
      <h2 className="theme-heading">
        Let's Build Something <span className="text-theme">Amazing</span> Together
      </h2>
      <p className="mt-4 text-lg theme-text">
        Whether you're looking to enhance your customer communication, streamline your business operations,
        or explore innovative solutions, Dexotel is here to help you achieve your goals.
      </p>

      <div className="mt-8 space-y-6">
        <ContactDetail
          Icon={MapPin}
          title="Our Location"
          detail="D-45, Cyber City, Gurugram, Haryana, India"
        />
        <ContactDetail
          Icon={Phone}
          title="Phone Number"
          detail="+91 9999999999"
        />
        <ContactDetail
          Icon={Mail}
          title="Email Address"
          detail="hr@dexotel.com"
        />
        <ContactDetail
          Icon={Clock}
          title="Business Hours"
          detail="Monday - Friday: 9:00 AM - 6:00 PM"
        />
      </div>

      <div className="mt-8">
        <h3 className="theme-subheading mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <SocialLink href="https://linkedin.com" Icon={Linkedin} />
          <SocialLink href="https://twitter.com" Icon={Twitter} />
          <SocialLink href="https://facebook.com" Icon={Facebook} />
          <SocialLink href="https://instagram.com" Icon={Instagram} />
        </div>
      </div>
    </div>
  );
};

interface ContactDetailProps {
  Icon: React.ElementType;
  title: string;
  detail: string;
}

const ContactDetail = ({ Icon, title, detail }: ContactDetailProps) => (
  <div className="flex items-start space-x-4">
    <div className="bg-theme-50 p-3 rounded-lg">
      <Icon className="w-6 h-6 text-theme" />
    </div>
    <div>
      <h3 className="theme-subheading">{title}</h3>
      <p className="mt-1 theme-text">{detail}</p>
    </div>
  </div>
);

interface SocialLinkProps {
  href: string;
  Icon: React.ElementType;
}

const SocialLink = ({ href, Icon }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-theme-50 p-3 rounded-lg text-theme hover:bg-theme-100 transition-all duration-300"
  >
    <Icon className="w-6 h-6" />
  </a>
);

export default ContactInfo; 
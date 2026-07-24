import type { Metadata } from "next";
import { ContactInfo } from "@/components/home/contact/contact-info";
import { ContactForm } from "@/components/home/contact/contact-form";
import { ContactServices } from "@/components/home/contact/contact-services";
import { ContactCTA } from "@/components/home/contact/contact-cta";

export const metadata: Metadata = {
  title: "Contact Us | Kaizen Infinities",
  description: "Get in touch with Kaizen Infinities for ERP solutions, custom software, AI, cloud modernization, cybersecurity, or enterprise training. Request a free consultation today.",
};

export default function Contact() {
  return (
    <div className="flex flex-col">
      <ContactInfo />
      <ContactForm />
      <ContactServices />
      <ContactCTA />
    </div>
  );
}

import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Prestige Productions",
  description: "How Prestige Productions collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Last updated: November 13, 2026. Here is how Prestige Productions handles your data when you use our website."
    >
      <LegalSection title="What we collect">
        <p>
          When you reach out through our forms, we collect your name, email, event date, and
          project details. Our hosting providers also collect basic technical data (like browser
          type, IP address, and essential cookies) to keep the site running securely.
        </p>
      </LegalSection>

      <LegalSection title="How we use it">
        <p>
          We use your details strictly to reply to your inquiries, plan your event, improve our
          services, and keep our website safe. We never sell or rent your personal information.
        </p>
      </LegalSection>

      <LegalSection title="Sharing and storage">
        <p>
          We only share your data with trusted tools needed to run our website and emails (such as
          our hosting and form providers). We keep your information only as long as needed to
          manage your event or meet basic legal requirements.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          You can ask to see, update, or delete the personal information you have shared with us
          at any time. Just send us an email, and we will process your request promptly.
        </p>
      </LegalSection>

      <LegalSection title="Updates and contact">
        <p>
          We may update this policy occasionally as our services grow. If you have any questions or
          data requests, contact us at{" "}
          <a
            className="text-[#a77d16] underline"
            href="mailto:PrestigeProductionsqc@gmail.com"
          >
            PrestigeProductionsqc@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
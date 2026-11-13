import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Prestige Productions",
  description: "How Prestige Productions collects and uses personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Last updated: November 12, 2026. This policy explains how Prestige Productions handles information submitted through this website."
    >
      <LegalSection title="Information we collect">
        <p>
          When you contact us, we may collect your name, email address, event date, and the
          message or details you choose to provide. We may also receive technical information
          such as your browser, device, and approximate usage data from our hosting or security
          providers.
        </p>
      </LegalSection>
      <LegalSection title="How we use information">
        <p>
          We use this information to respond to inquiries, discuss event services, schedule
          communications, protect the website, and improve our services. We do not sell personal
          information.
        </p>
      </LegalSection>
      <LegalSection title="Sharing and retention">
        <p>
          We may share information with service providers that host, secure, or operate the
          website and contact system. They may only use it to provide services to us. We retain
          inquiry information only as long as reasonably necessary for business, legal, or
          recordkeeping purposes.
        </p>
      </LegalSection>
      <LegalSection title="Your choices">
        <p>
          You may request access to, correction of, or deletion of information you submitted by
          emailing PrestigeProductionsqc@gmail.com. We may need to verify your request and may
          retain information when required by law.
        </p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>
          Questions about this policy can be sent to{" "}
          <a className="text-[#a77d16] underline" href="mailto:PrestigeProductionsqc@gmail.com">
            PrestigeProductionsqc@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}

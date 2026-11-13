import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Prestige Productions",
  description: "Terms for using the Prestige Productions website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="Last updated: November 12, 2026. These terms apply to your use of the Prestige Productions website."
    >
      <LegalSection title="Website use">
        <p>
          You may use this website for lawful purposes and to learn about or inquire about
          Prestige Productions services. Do not misuse the website, interfere with its operation,
          or submit unlawful, misleading, or harmful content.
        </p>
      </LegalSection>
      <LegalSection title="Services and bookings">
        <p>
          Website content is informational and does not create a booking or service agreement.
          Services, pricing, availability, cancellation terms, and other obligations are governed
          by a separate written agreement accepted by both parties.
        </p>
      </LegalSection>
      <LegalSection title="Content">
        <p>
          The website and its content are owned by or licensed to Prestige Productions. You may
          not copy, modify, distribute, or use that content commercially without prior written
          permission.
        </p>
      </LegalSection>
      <LegalSection title="Disclaimer and limitation">
        <p>
          The website is provided as available without warranties of uninterrupted operation or
          complete accuracy. To the extent allowed by law, Prestige Productions is not liable for
          indirect, incidental, or consequential losses arising from website use.
        </p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>
          Questions about these terms can be sent to{" "}
          <a className="text-[#a77d16] underline" href="mailto:PrestigeProductionsqc@gmail.com">
            PrestigeProductionsqc@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}

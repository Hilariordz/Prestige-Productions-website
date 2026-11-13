import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement | Prestige Productions",
  description: "Prestige Productions' commitment to an accessible website.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      description="Last updated: November 12, 2026. Prestige Productions is committed to making this website accessible and easy to use."
    >
      <LegalSection title="Our commitment">
        <p>
          We aim to support an inclusive experience for people with disabilities and to improve
          the website as accessibility standards and technology evolve.
        </p>
      </LegalSection>
      <LegalSection title="Feedback and assistance">
        <p>
          If you have difficulty accessing any part of the website or need information in another
          format, please contact us at{" "}
          <a className="text-[#a77d16] underline" href="mailto:PrestigeProductionsqc@gmail.com">
            PrestigeProductionsqc@gmail.com
          </a>{" "}
          or call 563.949.2762. Please describe the page or feature and the assistance you need.
        </p>
      </LegalSection>
      <LegalSection title="Ongoing improvements">
        <p>
          We review feedback and work to improve navigation, text alternatives, keyboard access,
          contrast, and other aspects of the website. Some third-party content may not be fully
          under our control, but we will try to help you access the information.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Prestige Productions",
  description: "Information about cookies and similar technologies on the Prestige Productions website.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="Last updated: November 12, 2026. This policy explains how cookies and similar technologies may be used on this website."
    >
      <LegalSection title="What cookies are">
        <p>
          Cookies are small files stored on your device by a website. Similar technologies may
          remember preferences, help secure the site, or provide information about website usage.
        </p>
      </LegalSection>
      <LegalSection title="How we use them">
        <p>
          Prestige Productions may use essential cookies needed for website operation and security.
          If analytics, advertising, or other third-party tools are enabled, those providers may
          place additional cookies as described by their own policies.
        </p>
      </LegalSection>
      <LegalSection title="Your choices">
        <p>
          You can manage or delete cookies through your browser settings. Disabling essential
          cookies may affect website functionality. Your browser may also provide controls for
          limiting advertising or tracking technologies.
        </p>
      </LegalSection>
      <LegalSection title="Questions">
        <p>
          For questions about cookies, email{" "}
          <a className="text-[#a77d16] underline" href="mailto:PrestigeProductionsqc@gmail.com">
            PrestigeProductionsqc@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}

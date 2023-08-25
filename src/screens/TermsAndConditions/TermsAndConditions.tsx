import { Newsletter } from "../../components/Newsletter/Newsletter";
import { Questions } from "../../components/Questions/Questions";

import { termsAndConditions } from "../../data/termsAndConditions";

export const TermsAndConditions = () => (
  <>
    <Questions sectionTitle="Hygge - Terms and Conditions" sectionSubtitle="Legal" data={termsAndConditions} />
    <Newsletter />
  </>
);

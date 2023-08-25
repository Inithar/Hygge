import { Newsletter } from "../../components/Newsletter/Newsletter";
import { Questions } from "../../components/Questions/Questions";

import { faq } from "../../data/faq";

export const Faq = () => (
  <>
    <Questions sectionTitle="Frequently Asked Questions" sectionSubtitle="Find the Answers" data={faq} />
    <Newsletter />
  </>
);

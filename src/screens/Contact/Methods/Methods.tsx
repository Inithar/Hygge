import { Link } from "react-router-dom";

import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Container, Method, StyledSection } from "./Methods.styled";

import { methodsSectionData } from "../../../data/contact";

export const Methods = () => {
  const emailPattern = /\b[\w.-]+@[\w.-]+\.\w+\b/;

  function handleEmailClick(email: string) {
    window.location.href = `mailto:${email}`;
  }

  return (
    <StyledSection>
      <SectionTitle title={methodsSectionData.sectionTitle} subtitle={methodsSectionData.sectionSubtitle} margin />

      <Container>
        {methodsSectionData.methods.map(({ title, body }) => {
          const email = body.match(emailPattern);
          let bodyWithEmail;

          if (email) {
            const [before, after] = body.split(email[0]);

            bodyWithEmail = (
              <>
                {before}
                <Link to="#" onClick={() => handleEmailClick(email[0])}>
                  {email[0]}
                </Link>
                {after}
              </>
            );
          }

          return (
            <Method key={crypto.randomUUID()}>
              <h3>{title}</h3>
              <p>{email ? bodyWithEmail : body}</p>
            </Method>
          );
        })}
      </Container>
    </StyledSection>
  );
};

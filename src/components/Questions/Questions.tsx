import { DropdownBox } from "../DropdownBox/DropdownBox";
import { Heading } from "../Heading";
import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Container, QuestionsContainer } from "./Questions.styled";

type Question = {
  question: string;
  answer: string;
};

type QuestionsProps = {
  sectionTitle: string;
  sectionSubtitle: string;
  data: {
    topic: string;
    questions: Question[];
  }[];
};

export const Questions = ({ sectionTitle, sectionSubtitle, data }: QuestionsProps) => (
  <Section>
    <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} margin />

    <Container>
      {data.map(({ topic, questions }) => (
        <div key={crypto.randomUUID()}>
          <Heading as="h3">{topic}</Heading>
          <QuestionsContainer>
            {questions.map(({ question, answer }, index) => (
              <DropdownBox heading={`${index + 1}. ${question}`} content={answer} key={crypto.randomUUID()} />
            ))}
          </QuestionsContainer>
        </div>
      ))}
    </Container>
  </Section>
);

import { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown as ArrowDown } from "react-icons/md";

import { Heading } from "../Heading";
import { StyledDropdownBox, Button, ArrowIconBox, Content } from "./DropdownBox.styled";

interface DropdownBoxProps {
  heading: string;
  content: string;
}

export function DropdownBox({ heading, content }: DropdownBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const id = crypto.randomUUID();
  const contentHeight = isOpen ? contentRef.current!.scrollHeight : 0;

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <StyledDropdownBox>
      <Heading as="h4">
        <Button type="button" isOpen={isOpen} onClick={handleToggle} aria-expanded={isOpen} aria-controls={id}>
          <span>{heading}</span>
          <ArrowIconBox>
            <ArrowDown />
          </ArrowIconBox>
        </Button>
      </Heading>

      <Content id={id} ref={contentRef} fontSize="sm" height={contentHeight} aria-hidden={!isOpen}>
        {content}
      </Content>
    </StyledDropdownBox>
  );
}

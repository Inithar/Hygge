import { useSearchParams } from "react-router-dom";
import { Button, Buttons, Container, Text } from "./Pagination.styled";

type PaginationProps = {
  count: number;
  pageSize: number;
};

export const Pagination = ({ count, pageSize }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / pageSize);

  function handleNextClick() {
    const page = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  }

  function handlePrevClick() {
    const page = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) {
    return null;
  }

  return (
    <Container>
      <Text>
        Showing <span>{(currentPage - 1) * pageSize + 1}</span> to{" "}
        <span>{currentPage === pageCount ? count : currentPage * pageSize}</span> of <span>{count}</span> results
      </Text>

      <Buttons>
        <Button onClick={handlePrevClick} disabled={currentPage === 1}>
          <img src="/icons/arrow-prev.svg" alt="Arrow pointing to the left" />
          <span>Previous</span>
        </Button>

        <Button onClick={handleNextClick} disabled={currentPage === pageCount}>
          <span>Next</span>
          <img src="/icons/arrow-next.svg" alt="Arrow pointing to the right" />
        </Button>
      </Buttons>
    </Container>
  );
};

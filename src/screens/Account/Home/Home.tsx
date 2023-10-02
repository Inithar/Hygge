import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Wrapper } from "../Wrapper/Wrapper";
import { Orders } from "../../../components/Orders/Orders";

import { RECENT_ORDERS_PERIOD } from "../../../constants/settings";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set("period", RECENT_ORDERS_PERIOD.toString());
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <Wrapper title="Recent Orders">
      <Orders />
    </Wrapper>
  );
};

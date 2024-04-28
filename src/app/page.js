import Home_V5 from "./(home)/home-v5/page";
import Wrapper from "./layout-wrapper/wrapper";
import { Suspense } from "react";

export const metadata = {
  title: "Prop Cliq",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V5 />
    </Wrapper>
  );
}

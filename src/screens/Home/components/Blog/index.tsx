import React from "react";
import { Banner, Container, HashTag, TextApp } from "./styles";

function Blog() {
  return (
    <Container>
      <Banner>
        <TextApp>
          Order your <br />
          Daily Groceries
        </TextApp>
        <HashTag>#free delivery</HashTag>
      </Banner>
    </Container>
  );
}

export default Blog;

import React from "react";
import { Banner, Container, HashTag, Layer, TextApp } from "./styles";

function Blog() {
  return (
    <Container>
      <Layer />
      <Banner>
        <TextApp>order location daily groceries</TextApp>
        <HashTag>#free delivery</HashTag>
      </Banner>
    </Container>
  );
}

export default Blog;

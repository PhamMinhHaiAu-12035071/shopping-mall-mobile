import React from "react";
import { Container, WrapperTitle } from "./styles";

interface Props {
  title: React.ReactElement;
  content: React.ReactElement;
}

function SubjectLayout(props: Props) {
  const { title, content } = props;

  return (
    <Container>
      <WrapperTitle>{title}</WrapperTitle>
      {content}
    </Container>
  );
}

export default SubjectLayout;

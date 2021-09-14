import React from "react";
import {
  Container,
  Description,
  Header,
  Title,
  WrapperContent,
  WrapperImage,
  Image,
} from "./styles";

const Ellipsis = require("ftellipsis/lib/index");

interface Props {
  id: string;
  svg: any;
  title: string;
  description: string;
}

function Step(props: Props) {
  const { id, svg, title, description } = props;
  const descriptionRef = React.useRef<any>();
  React.useLayoutEffect(() => {
    const ellipsis = new Ellipsis(descriptionRef.current);
    ellipsis.calc();
    ellipsis.set();
    descriptionRef.current.style.opacity = "1";
  }, []);
  return (
    <Container>
      <Header />
      <WrapperImage>
        <Image src={svg} alt={`step-${id}`} />
      </WrapperImage>
      <WrapperContent>
        <Title>{title}</Title>
        <Description ref={descriptionRef}>
          <div>{description}</div>
        </Description>
      </WrapperContent>
    </Container>
  );
}

export default Step;

import React from "react";
import {
  Container,
  Description,
  FlexContent,
  Footer,
  Image,
  Title,
  WrapperContent,
  WrapperImage,
} from "./styles";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const Ellipsis = require("ftellipsis/lib/index");

interface Props {
  id: string;
  svg: any;
  title: string;
  description: string;
}

function Step(props: Props) {
  const { id, svg, title, description } = props;
  const { width } = useWindowDimensions();
  const descriptionRef = React.useRef<any>();
  React.useLayoutEffect(() => {
    const ellipsis = new Ellipsis(descriptionRef.current);
    ellipsis.calc();
    ellipsis.set();
    descriptionRef.current.style.opacity = "1";
  }, []);
  return (
    <Container>
      <FlexContent>
        <WrapperImage>
          <Image src={svg} alt={`step-${id}`} width={width} />
        </WrapperImage>
        <WrapperContent>
          <Title>{title}</Title>
          <Description ref={descriptionRef}>
            <div>{description}</div>
          </Description>
        </WrapperContent>
      </FlexContent>
      <Footer />
    </Container>
  );
}

export default Step;

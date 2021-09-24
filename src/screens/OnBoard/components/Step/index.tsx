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
  Spacing,
  SpacingContent,
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
  const { width, height } = useWindowDimensions();
  const descriptionRef = React.useRef<any>();
  React.useLayoutEffect(() => {
    const ellipsis = new Ellipsis(descriptionRef.current);
    ellipsis.calc();
    ellipsis.set();
    descriptionRef.current.style.opacity = "0.6";
  }, []);
  return (
    <Container>
      <FlexContent height={height}>
        <WrapperImage>
          <Image src={svg} alt={`step-${id}`} width={width} />
        </WrapperImage>
        <SpacingContent />
        <WrapperContent width={width}>
          <Title>{title}</Title>
          <SpacingContent />
          <Description ref={descriptionRef}>
            <div>{description}</div>
          </Description>
        </WrapperContent>
      </FlexContent>
      <Spacing />
      <Footer height={height} />
    </Container>
  );
}

export default Step;

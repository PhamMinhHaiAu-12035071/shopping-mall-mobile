import React, { Dispatch, SetStateAction } from "react";
import {
  Absolute,
  ArrowIcon,
  Container,
  ContainerBtnStep,
  FabButton,
  Progress,
  Swiper,
  SwiperSlide,
  SwiperWrapper,
  WrapperBtnStep,
} from "./styles";
import StepOne from "../../assets/images/step-one.png";
import StepTwo from "../../assets/images/step-two.png";
import StepThree from "../../assets/images/step-three.png";
import Step from "./components/Step";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const steps = [
  {
    id: "0",
    svg: StepOne,
    title: "titleStepOne",
    description: "descriptionStepOne",
  },
  {
    id: "1",
    svg: StepTwo,
    title: "titleStepTwo",
    description: "descriptionStepTwo",
  },
  {
    id: "2",
    svg: StepThree,
    title: "titleStepThree",
    description: "descriptionStepThree",
  },
];

const STEP = 33.3;

interface Props {
  setIsStep: Dispatch<SetStateAction<boolean>>;
}

function OnBoard(props: Props) {
  const { setIsStep } = props;
  const { t } = useTranslation("onBoard");
  const [progress, setProgress] = React.useState<number>(STEP);
  const { height } = useWindowDimensions();
  const nextStep = () => {
    if (progress < 100) {
      setProgress(Math.round(progress + STEP));
    } else if (Math.round(progress) === 100) {
      setIsStep(false);
    }
  };
  const animate = {
    x: `-${Math.round(progress / STEP - 1) * 100}%`,
  };
  return (
    <Container height={height}>
      <Swiper>
        <SwiperWrapper animate={animate}>
          {steps.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Step
                  {...item}
                  title={t(`onBoard:${item.title}`)}
                  description={t(`onBoard:${item.description}`)}
                />
              </SwiperSlide>
            );
          })}
        </SwiperWrapper>
      </Swiper>
      <WrapperBtnStep>
        <ContainerBtnStep>
          <Progress value={progress} />
          <Absolute>
            <FabButton aria-label="step-icon" onClick={nextStep}>
              <ArrowIcon />
            </FabButton>
          </Absolute>
        </ContainerBtnStep>
      </WrapperBtnStep>
    </Container>
  );
}

export default OnBoard;

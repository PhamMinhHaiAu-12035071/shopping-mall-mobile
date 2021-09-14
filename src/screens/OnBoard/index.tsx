import React from "react";
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
import StepOne from "../../assets/images/on-board-step-one.svg";
import StepTwo from "../../assets/images/on-board-step-two.svg";
import StepThree from "../../assets/images/on-board-step-three-temp.svg";
import { useMotionValue } from "framer-motion";
import Step from "./components/Step";

const steps = [
  {
    id: "0",
    svg: StepOne,
    title: "Browse all the category",
    description:
      "in aliquip aute exerciation ut et nisi ut mollit Deserunt dolor elit pariatur aute au dep trai",
  },
  {
    id: "1",
    svg: StepTwo,
    title: "Browse all the category",
    description:
      "in aliquip aute exerciation ut et nisi ut mollit Deserunt dolor elit pariatur aute au dep trai",
  },
  {
    id: "2",
    svg: StepThree,
    title: "Browse all the category",
    description:
      "in aliquip aute exerciation ut et nisi ut mollit Deserunt dolor elit pariatur aute au dep trai",
  },
];

const STEP = 33.3;

function OnBoard() {
  const x = useMotionValue(0);
  const [progress, setProgress] = React.useState<number>(STEP);

  const nextStep = () => {
    if (progress < 100) {
      setProgress(Math.round(progress + STEP));
    }
  };
  const animate = {
    x: `-${Math.round(progress / STEP - 1) * 100}%`,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  };
  return (
    <Container>
      <Swiper>
        <SwiperWrapper animate={animate}>
          {steps.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Step {...item} />
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

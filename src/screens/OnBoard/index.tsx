import React from "react";
import {
  Absolute,
  ArrowIcon,
  Container,
  ContainerBtnStep,
  ContainerBtnStepAbsolute,
  FabButton,
  Progress,
  STEP,
  Swiper,
  SwiperSlide,
  SwiperWrapper,
  WrapperBtnStep,
} from "./styles";
import Step from "./components/Step";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import {
  selectStepComplete,
  stepCompleted,
} from "../../stores/reducers/onBoardReducers";
import SplashScreen from "../SplashScreen";
import { DefaultTheme, withTheme } from "styled-components";

interface Props {
  theme: DefaultTheme;
}

function OnBoard(props: Props) {
  const { circleColor, circleDisabledColor } =
    props.theme.colors.onBoardScreenColor;
  const { stepOne, stepTwo, stepThree } = props.theme.onBoardImage;
  const steps = [
    {
      id: "0",
      svg: stepOne,
      title: "titleStepOne",
      description: "descriptionStepOne",
    },
    {
      id: "1",
      svg: stepTwo,
      title: "titleStepTwo",
      description: "descriptionStepTwo",
    },
    {
      id: "2",
      svg: stepThree,
      title: "titleStepThree",
      description: "descriptionStepThree",
    },
  ];
  const { t, ready } = useTranslation("onBoard");
  const [progress, setProgress] = React.useState<number>(STEP);
  const dispatch = useAppDispatch();
  const step = useAppSelector(selectStepComplete);
  const { height } = useWindowDimensions();
  const history = useHistory();
  const nextStep = () => {
    if (progress < 100) {
      setProgress(Math.round(progress + STEP));
    } else if (Math.round(progress) === 100) {
      history.push("/home");
      dispatch(stepCompleted());
    }
  };
  const swiperProps: { step: boolean; progress: number } = {
    step,
    progress,
  };
  if (!ready) {
    return <SplashScreen />;
  }
  return (
    <Container height={height}>
      <Swiper>
        <SwiperWrapper {...swiperProps}>
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
          <ContainerBtnStepAbsolute>
            <Progress value={100} colorProgress={circleDisabledColor} />
          </ContainerBtnStepAbsolute>
          <Progress value={step ? 100 : progress} colorProgress={circleColor} />
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

export default withTheme(OnBoard);

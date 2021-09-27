import React from "react";
import { Container, WrapperBtnSeeAll } from "./styles";
import { Grid } from "@material-ui/core";
import ButtonCustom from "../../../components/ButtonCustom";

interface Props {
  list: Array<string>;
}

function MultiChoice(props: Props) {
  const { list } = props;
  return (
    <Container>
      <Grid
        container
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        {list.map((item: string, index: number) => (
          <Grid item xs={4} key={index.toString()}>
            <ButtonCustom>{item}</ButtonCustom>
          </Grid>
        ))}
      </Grid>
      <WrapperBtnSeeAll>
        <Grid
          container
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={4}>
            <ButtonCustom>See All</ButtonCustom>
          </Grid>
        </Grid>
      </WrapperBtnSeeAll>
    </Container>
  );
}

export default MultiChoice;

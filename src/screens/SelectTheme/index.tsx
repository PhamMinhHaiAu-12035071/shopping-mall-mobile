import React from "react";
import styled from "styled-components";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { selectNameTheme, setTheme } from "../../stores/reducers/themeReducers";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Absolute = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function SelectTheme() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectNameTheme);

  const handleChange = (event: any) => {
    dispatch(setTheme(event.target.value));
  };
  const onSave = () => {
    history.push("/");
  };
  return (
    <Container>
      <Absolute>
        <FormControl component="fieldset">
          <FormLabel component="legend">Select theme</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="orange"
              control={<Radio />}
              label="Orange"
            />
            <FormControlLabel value="green" control={<Radio />} label="Green" />
          </RadioGroup>
          <Button color={"primary"} variant="contained" onClick={onSave}>
            Save
          </Button>
        </FormControl>
      </Absolute>
    </Container>
  );
}

export default SelectTheme;

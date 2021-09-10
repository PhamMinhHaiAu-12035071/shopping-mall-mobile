import { makeStyles } from "@material-ui/core/styles";
import { Props } from "./";

const useStyles = makeStyles({
  homeIcon: (props: Props) => ({
    "& .MuiButtonBase-root": {
      borderRadius: 9999,
      backgroundColor: props.theme.colors.mainTwo,
      boxShadow: "none",
      "& .MuiTouchRipple-root": {
        color: "white",
      },
      "&:hover": {
        backgroundColor: "rgb(239, 212, 212)",
      },
    },
  }),
});

export { useStyles };

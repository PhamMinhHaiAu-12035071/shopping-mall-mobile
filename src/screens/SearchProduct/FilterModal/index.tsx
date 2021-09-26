import React from "react";
import {
  AccordionSummaryCustom,
  ButtonReset,
  DrawerCustom,
  FlexCenter,
  IconButtonClose,
  Line,
  Row,
  Title,
  WrapperButtonClose,
  RowControls,
  WrapperButtonReset,
} from "./styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import CloseIcon from "@material-ui/icons/Close";

interface Props {
  open?: boolean;
  onClose?: (event: any) => void;
}

const defaultProps = {
  open: false,
};

function FilterModal(props: Props) {
  const { t } = useTranslation("searchProduct");
  const { open, onClose } = props;
  const [expanded, setExpanded] = React.useState<boolean>(false);
  React.useEffect(() => {
    setTimeout(() => {
      setExpanded(true);
    }, 10000);
  }, []);
  const pressClose = (event: any) => {
    if (typeof onClose === "function") {
      onClose(event);
    }
  };

  return (
    <React.Fragment>
      <DrawerCustom open={open} onClose={pressClose}>
        <Accordion expanded={expanded}>
          <AccordionSummaryCustom>
            <FlexCenter>
              <Line />
            </FlexCenter>
            <RowControls>
              <WrapperButtonClose>
                <IconButtonClose>
                  <CloseIcon />
                </IconButtonClose>
              </WrapperButtonClose>
              <Title>{t("searchProduct:Filter")}</Title>
              <WrapperButtonReset>
                <ButtonReset>{t("searchProduct:Reset")}</ButtonReset>
              </WrapperButtonReset>
            </RowControls>
          </AccordionSummaryCustom>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </DrawerCustom>
    </React.Fragment>
  );
}

FilterModal.defaultProps = defaultProps;

export default FilterModal;

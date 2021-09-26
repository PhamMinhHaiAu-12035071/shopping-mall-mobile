import React from "react";
import {
  AccordionSummaryCustom,
  ButtonReset,
  CustomPriceRange,
  DrawerCustom,
  FlexCenter,
  IconButtonClose,
  Line,
  RowControls,
  SortByCustom,
  TextPrice,
  TextSortBy,
  Title,
  WrapperButtonClose,
  WrapperButtonReset,
  WrapperPrice,
} from "./styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, InputBase } from "@material-ui/core";
import { DefaultTheme, withTheme } from "styled-components";
import ArrowDownSvg from "../../../components/ArrowDownSvg";
import MultiChoice from "../MultiChoice";
import { useSwipeable } from "react-swipeable";

enum SortBy {
  popularity = "Popularity",
  featured = "Featured",
  rating = "Rating",
}

interface Props {
  open?: boolean;
  onClose?: (event: any) => void;
  theme: DefaultTheme;
}

const defaultProps = {
  open: false,
};

function valuetext(value: number) {
  return `${value}$`;
}

function FilterModal(props: Props) {
  const { t } = useTranslation("searchProduct");
  const { open, onClose, theme } = props;
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [sortBy, setSortBy] = React.useState<string>(SortBy.popularity);
  const [priceRange, setPriceRange] = React.useState<number[]>([20, 37]);
  React.useEffect(() => {
    // setTimeout(() => {
    //   setExpanded(true);
    // }, 10000);
  }, []);
  const pressClose = (event: any) => {
    if (typeof onClose === "function") {
      onClose(event);
    }
  };
  const handleSortBy = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSortBy(event.target.value as string);
  };
  const handleChangePrice = (event: any, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };
  const handlers = useSwipeable({
    onSwipedUp: () => setExpanded(true),
    onSwipedDown: () => setExpanded(false),
  });
  return (
    <React.Fragment>
      <DrawerCustom open={open} onClose={pressClose} {...handlers}>
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
            <Grid
              container
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <TextSortBy>{t("searchProduct:Sort By")}</TextSortBy>
              </Grid>
              <Grid item xs={6}>
                <Grid
                  container
                  direction={"row"}
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Grid item>
                    <SortByCustom
                      native
                      id="sort-by"
                      value={sortBy}
                      input={<InputBase />}
                      IconComponent={() => (
                        <ArrowDownSvg
                          color={
                            theme.colors.searchProductScreenColor
                              .sortByIconColor
                          }
                        />
                      )}
                      onChange={handleSortBy}
                    >
                      <option value={SortBy.popularity}>
                        {t(`searchProduct:${SortBy.popularity}`)}
                      </option>
                      <option value={SortBy.featured}>
                        {t(`searchProduct:${SortBy.featured}`)}
                      </option>
                      <option value={SortBy.rating}>
                        {t(`searchProduct:${SortBy.rating}`)}
                      </option>
                    </SortByCustom>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <WrapperPrice>
              <TextPrice>{t("searchProduct:Price range")}</TextPrice>
              <CustomPriceRange
                min={0}
                max={100}
                valueLabelDisplay="on"
                value={priceRange}
                onChange={handleChangePrice}
                aria-labelledby="range-slider"
                valueLabelFormat={valuetext}
              />
            </WrapperPrice>
            <MultiChoice
              title={t("searchProduct:Categories")}
              list={["Office Supplies", "Gardening", "Vegetables"]}
            />
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

export default withTheme(FilterModal);

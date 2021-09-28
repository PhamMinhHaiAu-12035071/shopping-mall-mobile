import React from "react";
import {
    AccordionDetailsCustom,
    AccordionSummaryCustom,
    ButtonReset,
    ButtonSave,
    CustomPriceRange,
    DrawerCustom,
    FlexCenter,
    IconButtonClose,
    Line,
    RowControls,
    SortByCustom,
    TextSortBy,
    Title,
    WrapperButtonClose,
    WrapperButtonReset,
    WrapperMarginTop,
} from "./styles";
import Accordion from "@material-ui/core/Accordion";
import {useTranslation} from "react-i18next";
import CloseIcon from "@material-ui/icons/Close";
import {Grid, InputBase} from "@material-ui/core";
import {DefaultTheme, withTheme} from "styled-components";
import ArrowDownSvg from "../../../components/ArrowDownSvg";
import MultiChoice from "../MultiChoice";
import {useSwipeable} from "react-swipeable";
import RatingStar from "../../../components/RatingStar";
import SubjectLayout from "../SubjectLayout";

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

const defaultValueFilter = {
    sortBy: SortBy.popularity,
    priceRange: [20, 37],
    rating: 4,
    categories: [
        {
            id: "0",
            name: "Office Supplies",
            isSelected: false,
        },
        {
            id: "1",
            name: "Gardening",
            isSelected: false,
        },
        {
            id: "2",
            name: "Vegetables",
            isSelected: false,
        }
    ],
    brands: [
        {
            id: "0",
            name: "Any",
            isSelected: false,
        },
        {
            id: "1",
            name: "Square",
            isSelected: false,
        },
        {
            id: "2",
            name: "ACI Limited",
            isSelected: false,
        }
    ]
};

export interface ItemData {
    id: string;
    name: string;
    isSelected: boolean
}

function FilterModal(props: Props) {
    const {t} = useTranslation("searchProduct");
    const {open, onClose, theme} = props;
    const [expanded, setExpanded] = React.useState<boolean>(false);
    const [sortBy, setSortBy] = React.useState<string>(defaultValueFilter.sortBy);
    const [priceRange, setPriceRange] = React.useState<number[]>(defaultValueFilter.priceRange);
    const [rating, setRating] = React.useState<number>(defaultValueFilter.rating);
    const [categories, setCategories] = React.useState<Array<ItemData>>(defaultValueFilter.categories);
    const [brands, setBrands] = React.useState<Array<ItemData>>(defaultValueFilter.brands);
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
        delta: 10, // min distance(px) before a swipe starts. *See Notes*
        preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
        trackTouch: true, // track touch input
        trackMouse: true, // track mouse input
        rotationAngle: 0,
        onSwipedUp: () => setExpanded(true),
        onSwipedDown: () => setExpanded(false),
    });

    const handleClickReset = () => {
        setSortBy(defaultValueFilter.sortBy);
        setPriceRange(defaultValueFilter.priceRange);
        setCategories(defaultValueFilter.categories);
        setBrands(defaultValueFilter.brands);
        setRating(defaultValueFilter.rating);
    }
    return (
        <React.Fragment>
            <DrawerCustom open={open} onClose={pressClose}>
                <Accordion expanded={expanded}>
                    <AccordionSummaryCustom>
                        <FlexCenter {...handlers}>
                            <Line/>
                        </FlexCenter>
                        <RowControls>
                            <WrapperButtonClose>
                                <IconButtonClose onClick={pressClose}>
                                    <CloseIcon/>
                                </IconButtonClose>
                            </WrapperButtonClose>
                            <Title>{t("searchProduct:Filter")}</Title>
                            <WrapperButtonReset>
                                <ButtonReset onClick={handleClickReset}>{t("searchProduct:Reset")}</ButtonReset>
                            </WrapperButtonReset>
                        </RowControls>
                        <WrapperMarginTop>
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
                                                input={<InputBase/>}
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
                        </WrapperMarginTop>
                        <SubjectLayout
                            title={t("searchProduct:Price range")}
                            content={
                                <CustomPriceRange
                                    min={0}
                                    max={100}
                                    valueLabelDisplay="on"
                                    value={priceRange}
                                    onChange={handleChangePrice}
                                    aria-labelledby="range-slider"
                                    valueLabelFormat={valuetext}
                                />
                            }
                        />
                        <SubjectLayout
                            title={t("searchProduct:Categories")}
                            content={
                                <MultiChoice
                                    list={categories}
                                    setList={setCategories}
                                />
                            }
                        />
                    </AccordionSummaryCustom>
                    <AccordionDetailsCustom>
                        <SubjectLayout
                            title={t("searchProduct:Brand")}
                            content={<MultiChoice list={brands} setList={setBrands}/>}
                        />
                        <SubjectLayout
                            title={t("searchProduct:Rating Star")}
                            content={
                                <RatingStar
                                    rating={rating}
                                    setRating={setRating}
                                    size={30}
                                    color={theme.colors.starRatingColor}
                                />
                            }
                        />
                        <ButtonSave>{t("searchProduct:Apply Filter")}</ButtonSave>
                    </AccordionDetailsCustom>
                </Accordion>
            </DrawerCustom>
        </React.Fragment>
    );
}

FilterModal.defaultProps = defaultProps;

export default withTheme(FilterModal);

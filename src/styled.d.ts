// import original module declarations
import "styled-components";
// and extend them!
declare module "styled-components" {
    import React = require("react");

    export interface OnboardScreenColor {
        titleColor: string;
        descriptionColor: string;
        circleColor: string;
        circleHoverColor: string;
        circleShadowColor: string;
        circleDisabledColor: string;
    }

    export interface SplashScreenColor {
        cartSvgColor: string;
        loadingColor: string;
    }

    export interface BottomNavigatorColor {
        iconDisabledColor: string;
        iconActiveColor: string;
    }

    export interface HomeScreenColor {
        titleLocationColor: string;
        valueLocationColor: string;
        checkedSvgColor: string;
        circleHeaderIcon: string;
        circleHoverHeaderIcon: string;
        bannerColor: string;
        hashTagColor: string;
        titleListFoodColor: string;
        viewMoreListFoodColor: string;
        viewMoreHoverListFoodColor: string;
        titleFoodItemColor: string;
        categoryFoodItemColor: string;
        priceFoodItemColor: string;
        deprecatedPriceFoodItemColor: string;
        btnCartFoodItemColor: string;
        btnCartHoverFoodItemColor: string;
        foodItemBorderColor: string;
    }

    export interface SearchProductScreenColor {
        iconSearchColor: string;
        iconSearchHoverColor: string;
        placeholderColor: string;
        iconFilterColor: string;
        iconFilterHoverColor: string;
        titleRecentSearchColor: string;
        itemRecentSearchColor: string;
        iconRecentSearchColor: string;
        iconRecentSearchHoverColor: string;
        itemRecentSearchBorderColor: string;
        inputSearchColor: string;
        inputSearchBorderColor: string;
        lineFilterModalColor: string;
        iconCloseFilterModalColor: string;
        resetTextFilterModalColor: string;
        sortByTextColor: string;
        sortByIconColor: string;
        priceRangeSliderActiveColor: string;
        priceRangeSliderDeActiveColor: string;
        priceRangeSlideThumbShadowColor: string;
        priceRangeSlideTextColor: string;
        buttonOutlineBorderColor: string;
        buttonOutlineTextColor: string;
        buttonApplyFilterColor: string;
        buttonApplyFilterHoverColor: string;
    }

    export interface PageNotFoundColor {
        circleColor: string;
        titleColor: string;
        descriptionColor: string;
        buttonColor: string;
        buttonHoverColor: string;
    }

    export interface PageNewItemsColor {
        searchColor: string;
        iconSearchColor: string;
        iconSearchHoverColor: string;
        placeholderColor: string;
        inputSearchColor: string;
        inputSearchBorderColor: string;
        textTabSelected: string;
        textTabNotSelected: string;
        backgroundTabSelected: string;
        itemBorderColor: string;
        itemTitleColor: string;
        itemPriceColor: string;
        itemMassColor: string;
    }

    export interface OnboardImage {
        stepOne: string;
        stepTwo: string;
        stepThree: string;
    }

    export interface PageNotFoundImage {
        image: React.ReactElement;
        viewBox: string;
    }

    export interface Color {
        starRatingColor: string;
        onBoardScreenColor: OnboardScreenColor;
        homeScreenColor: HomeScreenColor;
        splashScreenColor: SplashScreenColor;
        bottomNavigatorColor: BottomNavigatorColor;
        searchProductScreenColor: SearchProductScreenColor;
        pageNotFoundColor: PageNotFoundColor;
        headerBorderBottomColor: string;
        pageNewItemsColor: PageNewItemsColor;
    }

    export interface Typography {
        font25: number;
        font24: number;
        font20: number;
        font18: number;
        font16: number;
        font14: number;
        font12: number;
    }

    export interface FontWeight {
        fontThin: number;
        fontExtraLight: number;
        fontLight: number;
        fontNormal: number;
        fontMedium: number;
        fontSemiBold: number;
        fontBold: number;
        fontExtraBold: number;
        fontBlack: number;
    }

    export interface DefaultTheme {
        colors: Color;
        typography: Typography;
        fontWeight: FontWeight;
    }
}

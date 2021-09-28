import {DefaultTheme} from "styled-components";
import {fontWeight, typography} from "./common";

const orangeTheme: DefaultTheme = {
    colors: {
        starRatingColor: "rgba(255, 193, 7, 1)",
        onBoardScreenColor: {
            titleColor: "rgba(22, 22, 46, 1)",
            descriptionColor: "rgba(22, 22, 46, 0.6)",
            circleColor: "rgba(244, 116, 88, 1)",
            circleHoverColor: "rgba(241, 90, 56, 1)",
            circleShadowColor: "rgba(244, 116, 88, 0.35)",
            circleDisabledColor: "rgba(247, 247, 247, 1)",
        },
        homeScreenColor: {
            titleLocationColor: "rgba(22, 22, 46, 1)",
            valueLocationColor: "rgba(22, 22, 46, 0.5)",
            checkedSvgColor: "rgba(240, 144, 102, 1)",
            circleHeaderIcon: "rgba(249, 236, 233, 1)",
            circleHoverHeaderIcon: "rgba(243, 219, 214, 1)",
            bannerColor: "rgba(252, 231, 218, 1)",
            hashTagColor: "rgba(246, 125, 73, 1)",
            titleListFoodColor: "rgba(22, 22, 46, 1)",
            viewMoreListFoodColor: "rgba(244, 116, 88, 1)",
            viewMoreHoverListFoodColor: "rgba(253, 241, 238, 1)",
            titleFoodItemColor: "rgba(22, 22, 46, 1)",
            categoryFoodItemColor: "rgba(139, 139, 151, 1)",
            priceFoodItemColor: "rgba(0, 0, 0, 1)",
            deprecatedPriceFoodItemColor: "rgba(139, 139, 151, 1)",
            btnCartFoodItemColor: "rgba(244, 116, 88, 1)",
            btnCartHoverFoodItemColor: "rgba(186 , 43, 12, 1)",
            foodItemBorderColor: "rgba(236, 236, 236, 1)",
        },
        splashScreenColor: {
            cartSvgColor: "rgba(247, 125, 73, 1)",
            loadingColor: "rgba(244, 116, 88, 1)",
        },
        bottomNavigatorColor: {
            iconDisabledColor: "rgba(22, 22, 46, 0.4)",
            iconActiveColor: "rgba(244, 116, 88, 1)",
        },
        searchProductScreenColor: {
            iconSearchColor: "rgba(244, 116, 88, 1)",
            iconSearchHoverColor: "rgba(253, 241, 238, 1)",
            placeholderColor: "rgba(22, 22, 46, 1)",
            iconFilterColor: "rgba(244, 116, 88, 1)",
            iconFilterHoverColor: "rgba(186 , 43, 12, 1)",
            titleRecentSearchColor: "rgba(22, 22, 46, 1)",
            itemRecentSearchColor: "rgba(139, 139, 151, 1)",
            iconRecentSearchColor: "rgba(244, 116, 88, 1)",
            iconRecentSearchHoverColor: "rgba(253, 241, 238, 1)",
            itemRecentSearchBorderColor: "rgba(236, 236, 236, 1)",
            inputSearchColor: "rgba(247, 247, 247, 1)",
            lineFilterModalColor: "rgba(22, 22, 46, 1)",
            iconCloseFilterModalColor: "rgba(247, 247, 247, 1)",
            resetTextFilterModalColor: "rgba(22, 22, 46, 1)",
            sortByTextColor: "rgba(22, 22, 46, 1)",
            sortByIconColor: "rgba(244, 116, 88, 1)",
            priceRangeSliderActiveColor: "rgba(244, 116, 88, 1)",
            priceRangeSliderDeActiveColor: "rgba(225, 225, 225, 1)",
            priceRangeSlideThumbShadowColor: "rgba(0, 0, 0, 0.25)",
            priceRangeSlideTextColor: "rgba(22, 22, 46, 1)",
            buttonOutlineBorderColor: "rgba(244, 116, 88, 1)",
            buttonOutlineTextColor: "rgba(139, 139, 151, 1)",
            buttonApplyFilterColor: "rgba(244, 116, 88, 1)",
            buttonApplyFilterHoverColor: "rgba(186 , 43, 12, 1)",
        },
        pageNotFoundColor: {
            headerBorderBottomColor: "rgba(221, 221, 221, 1)",
            circleColor: "rgba(249, 236, 233, 1)",
            titleColor: "rgba(22, 22, 46, 1)",
            descriptionColor: "rgba(139, 139, 151, 1)"
        }
    },
    typography,
    fontWeight,
};
export default orangeTheme;

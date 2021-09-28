import {ReactComponent as PeopleSorrySvg} from "../assets/images/people-sorry.svg";
import {ReactComponent as CarrotSvg} from "../assets/images/carrot.svg";
import {greenTheme, orangeTheme} from "../themes";
import {Theme} from "../stores/reducers/themeReducers";
import stepOne from "../assets/images/step-one.png";
import stepTwo from "../assets/images/step-two.png";
import stepThree from "../assets/images/step-three.png";
import {default as stepOneGreen} from "../assets/images/step-one-green.png";
import {default as stepTwoGreen} from "../assets/images/step-two-green.png";
import {default as stepThreeGreen} from "../assets/images/step-three-green.png";

const storeThemes: Array<Theme> = [
    {
        name: "orange",
        value: orangeTheme,
    },
    {
        name: "green",
        value: greenTheme,
    },
];

const ON_BOARD_IMAGE = {
    orange: {
        stepOne,
        stepTwo,
        stepThree
    },
    green: {
        stepOne: stepOneGreen,
        stepTwo: stepTwoGreen,
        stepThree: stepThreeGreen,
    }
}
const PAGE_NOT_FOUND_IMAGE = {
    orange: {
        image: <PeopleSorrySvg/>,
        viewBox: "0 0 246 249"
    },
    green: {
        image: <CarrotSvg/>,
        viewBox: "0 0 243 162"
    }
}

export {
    storeThemes,
    PAGE_NOT_FOUND_IMAGE,
    ON_BOARD_IMAGE
}


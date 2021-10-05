import React from 'react';
import {
    ButtonCustom,
    Circle,
    Container,
    Description,
    Header,
    SvgIconCustom,
    Title,
    WrapperButton,
    WrapperContent,
    WrapperDescription,
    WrapperText
} from './styles';
import {IconButton} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useAppSelector} from "../../stores/hooks";
import {selectNameTheme} from "../../stores/reducers/themeReducers";
import _ from 'lodash';
import {PAGE_NOT_FOUND_IMAGE} from "../../constants/themes";
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";

function PageNotFound() {
    const nameTheme = useAppSelector(selectNameTheme);
    const history = useHistory();
    const {t} = useTranslation("pageNotFound");
    const description = t("pageNotFound:Sorry, something went wrong\nplease try again .");
    const goBack = () => {
        history.goBack();
    }
    return (
        <Container>
            <Header>
                <IconButton onClick={goBack}>
                    <ArrowBackIcon/>
                </IconButton>
            </Header>
            <WrapperContent>
                <Circle>
                    <SvgIconCustom viewBox={_.get(PAGE_NOT_FOUND_IMAGE, `${nameTheme}.viewBox`)}>
                        {_.get(PAGE_NOT_FOUND_IMAGE, `${nameTheme}.image`)}
                    </SvgIconCustom>
                </Circle>
                <WrapperText>
                    <Title>{t("pageNotFound:oppss!! something wrong")}</Title>
                    <WrapperDescription>
                        {
                            description.split("\n").map((item: string, index: number) => (
                                <Description key={index.toString()}>{item}</Description>
                            ))
                        }
                    </WrapperDescription>
                </WrapperText>
            </WrapperContent>
            <WrapperButton>
                <ButtonCustom>{t("pageNotFound:Try Again")}</ButtonCustom>
            </WrapperButton>
        </Container>
    )
};

export default PageNotFound;

import React from 'react';
import {Grid} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import _ from "lodash";
import {useHistory, useLocation} from "react-router-dom";
import {IconButtonBack, TitleHeader} from './styles';

function Header() {
    const location = useLocation();
    const history = useHistory();
    const goBack = () => history.goBack();
    return (
        <Grid container alignItems={"center"}>
            <Grid item xs={3}>
                <IconButtonBack onClick={goBack}>
                    <ArrowBackIcon/>
                </IconButtonBack>
            </Grid>
            <Grid item xs={6}>
                <Grid container justifyContent={"center"}>
                    <TitleHeader>
                        {_.get(location, "state.title", "")}
                    </TitleHeader>
                </Grid>
            </Grid>
            <Grid item xs={3}/>
        </Grid>
    )
};

export default Header;

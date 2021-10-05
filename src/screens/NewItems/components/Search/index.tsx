import React from 'react';
import {InputSearch, SvgIconSearch, WrapperGridIcon, IconSearch} from './styles';
import {Grid, IconButton} from "@material-ui/core";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import SearchSvg from "../../../../components/SearchSvg";
import {DefaultTheme, withTheme} from "styled-components";
import {useTranslation} from "react-i18next";

interface Props {
    theme: DefaultTheme;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Search(props: Props) {
    const {theme, search, setSearch} = props;
    const {t} = useTranslation("newItems");
    const setTextSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(event.target.value);
    return (
        <InputSearch
            value={search}
            onChange={setTextSearch}
            InputProps={{
                disableUnderline: true,
                endAdornment: (
                    <WrapperGridIcon>
                        <Grid item xs zeroMinWidth>
                            {
                                search && <IconButton aria-label="clear text" onClick={() => setSearch("")}>
                                    <CancelRoundedIcon/>
                                </IconButton>
                            }
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <IconSearch>
                                <SvgIconSearch>
                                    <SearchSvg
                                        color={
                                            theme.colors.pageNewItemsColor.iconSearchColor
                                        }
                                    />
                                </SvgIconSearch>
                            </IconSearch>
                        </Grid>
                    </WrapperGridIcon>
                ),
            }}
            placeholder={t("newItems:Search Product")}
        />
    )
};

export default withTheme(Search);

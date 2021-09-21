import React, { Dispatch, SetStateAction } from "react";
import { IconButton } from "@material-ui/core";
import { ReactComponent as SearchIcon } from "../../../assets/images/search.svg";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import { ReactComponent as FilterIcon } from "../../../assets/images/filter.svg";
import {
  IconButtonFilter,
  InputSearch,
  SvgIconFilter,
  SvgIconSearch,
  WrapperIconFilter,
  WrapperInput,
  WrapperSearch,
} from "./styles";
import { useTranslation } from "react-i18next";

interface Props {
  autoFocus?: boolean;
  search: string;
  width: number;
  setSearch: Dispatch<SetStateAction<string>>;
  onFocusIn?: () => void;
  onFocusOut?: () => void;
  onSearch?: (strSearch: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFilter?: () => void;
}

const defaultProps = {
  autoFocus: false,
};

function Search(props: Props) {
  const {
    search,
    setSearch,
    onFocusIn,
    onFocusOut,
    autoFocus,
    width,
    onSearch,
    onKeyPress,
    onFilter,
  } = props;
  const { t } = useTranslation("searchProduct");
  const setTextSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);
  const focusSearch = () => {
    if (typeof onFocusIn === "function") {
      onFocusIn();
    }
  };
  const focusOutSearch = () => {
    if (typeof onFocusOut === "function") {
      onFocusOut();
    }
  };
  const pressSearch = () => {
    if (typeof onSearch === "function") {
      onSearch(search);
    }
  };
  const onKeyPressSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (typeof onKeyPress === "function") {
      onKeyPress(event);
    }
  };
  const pressFilter = () => {
    if (typeof onFilter === "function") {
      onFilter();
    }
  };
  return (
    <WrapperSearch width={width}>
      <WrapperInput>
        <InputSearch
          autoFocus={autoFocus}
          value={search}
          onChange={setTextSearch}
          onFocus={focusSearch}
          onBlur={focusOutSearch}
          onKeyPress={onKeyPressSearch}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <IconButton onClick={pressSearch}>
                <SvgIconSearch>
                  <SearchIcon />
                </SvgIconSearch>
              </IconButton>
            ),
            endAdornment: search && (
              <IconButton aria-label="clear text" onClick={() => setSearch("")}>
                <CancelRoundedIcon />
              </IconButton>
            ),
          }}
          placeholder={t("searchProduct:search")}
        />
      </WrapperInput>
      <WrapperIconFilter>
        <IconButtonFilter onClick={pressFilter}>
          <SvgIconFilter>
            <FilterIcon />
          </SvgIconFilter>
        </IconButtonFilter>
      </WrapperIconFilter>
    </WrapperSearch>
  );
}

Search.defaultProps = defaultProps;

export default Search;

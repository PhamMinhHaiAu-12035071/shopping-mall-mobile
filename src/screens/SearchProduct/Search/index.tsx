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

interface Props {
  autoFocus?: boolean;
  search: string;
  width: number;
  setSearch: Dispatch<SetStateAction<string>>;
  onFocusIn?: () => void;
  onFocusOut?: () => void;
}

const defaultProps = {
  autoFocus: false,
};

function Search(props: Props) {
  const { search, setSearch, onFocusIn, onFocusOut, autoFocus, width } = props;
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
  return (
    <WrapperSearch width={width}>
      <WrapperInput>
        <InputSearch
          autoFocus={autoFocus}
          value={search}
          onChange={setTextSearch}
          onFocus={focusSearch}
          onBlur={focusOutSearch}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <IconButton>
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
        />
      </WrapperInput>
      <WrapperIconFilter>
        <IconButtonFilter>
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
import React from "react";
import {
  ButtonArrowBack,
  Container,
  Header,
  LeftHeader,
  RightHeader,
  SlideTransition,
  SvgIconBack,
  TitleRecentSearch,
  WrapperList,
  WrapperRecentSearch,
} from "./styles";
import { ReactComponent as ArrowBack } from "../../assets/images/arrow-back.svg";
import { useHistory, useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Search from "./Search";
import RecentSearch from "./RecentSearch";
import SearchResults from "../SearchResults";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import {
  addHistorySearch,
  selectListRecentSearch,
} from "../../stores/reducers/searchReducers";
import _ from "lodash";

const HEIGHT_HEADER = 60;
const PADDING_BOTTOM = 25;
const TITLE = 62;

function SearchProduct() {
  const location = useLocation();
  const list = useAppSelector(selectListRecentSearch);
  const dispatch = useAppDispatch();
  const [queryParam, setQueryParam] = React.useState<string | null>(null);
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const resultQuery = searchParams.get("q");
    if (resultQuery) {
      dispatch(addHistorySearch(resultQuery));
    }
    setQueryParam(resultQuery);
  }, [location, dispatch]);
  const history = useHistory();
  const { width, height } = useWindowDimensions();
  const widthSearch = width * 0.75 - 20;
  const [search, setSearch] = React.useState<string>("");
  const goBack = () => history.push("/home");
  const heightList = height - HEIGHT_HEADER - TITLE - PADDING_BOTTOM;
  const resetSearch = () => setSearch("");
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(search);
    }
  };

  const onSearch = (strSearch: string) => {
    resetSearch();
    history.replace(`/search?q=${_.trim(strSearch)}`);
  };
  if (queryParam) {
    return <SearchResults />;
  }
  return (
    <SlideTransition>
      <Container>
        <Header>
          <LeftHeader>
            <ButtonArrowBack onClick={goBack}>
              <SvgIconBack>
                <ArrowBack />
              </SvgIconBack>
            </ButtonArrowBack>
          </LeftHeader>
          <RightHeader>
            <Search
              autoFocus={false}
              width={widthSearch}
              search={search}
              setSearch={setSearch}
              onSearch={onSearch}
              onKeyPress={onKeyPress}
            />
          </RightHeader>
        </Header>
        <WrapperRecentSearch>
          <TitleRecentSearch>Recent Searches</TitleRecentSearch>
          <WrapperList>
            <RecentSearch width={width} height={heightList} list={list} />
          </WrapperList>
        </WrapperRecentSearch>
      </Container>
    </SlideTransition>
  );
}

export default SearchProduct;

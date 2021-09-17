import React from "react";
import {
  ButtonArrowBack,
  Container,
  Header,
  LeftHeader,
  RightHeader,
  SlideTransition,
  SvgIconBack,
  WrapperRecentSearch,
  TitleRecentSearch,
  WrapperList,
} from "./styles";
import { ReactComponent as ArrowBack } from "../../assets/images/arrow-back.svg";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Search from "./Search";
import RecentSearch from "./RecentSearch";

const HEIGHT_HEADER = 192;
const PADDING_BOTTOM = 25;

function SearchProductAndroid() {
  const history = useHistory();
  const { width, height } = useWindowDimensions();
  const widthSearch = width * 0.75 - 20;
  const heightList = height - HEIGHT_HEADER - PADDING_BOTTOM;
  const [search, setSearch] = React.useState<string>("");
  const [isFocusSearch, setIsFocusSearch] = React.useState<boolean>(false);
  const goBack = () => history.goBack();
  const onFocusIn = () => setIsFocusSearch(true);
  const onFocusOut = () => setIsFocusSearch(false);
  const variantInput = {
    slideUp: {
      x: width - 40 - widthSearch,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 920,
        damping: 38,
      },
    },
    slideDown: {
      x: (width - 40 - widthSearch) / 2,
      y: 80,
      transition: {
        type: "spring",
        stiffness: 920,
        damping: 108,
      },
    },
  };
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
            <RightHeader
              animate={isFocusSearch ? "slideUp" : "slideDown"}
              variants={variantInput}
            >
              <Search
                width={widthSearch}
                search={search}
                setSearch={setSearch}
                onFocusIn={onFocusIn}
                onFocusOut={onFocusOut}
              />
            </RightHeader>
          </LeftHeader>
        </Header>
        <WrapperRecentSearch>
          <TitleRecentSearch
            animate={{
              y: isFocusSearch ? -80 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 920,
              damping: 38,
            }}
          >
            Recent Searches
          </TitleRecentSearch>
          <WrapperList
            style={{
              maxHeight: isFocusSearch ? heightList : heightList,
            }}
            animate={{
              y: isFocusSearch ? -80 : 0,
              // height: isFocusSearch ? 200 : 500,
            }}
            transition={{
              type: "spring",
              stiffness: 920,
              damping: 38,
            }}
          >
            <RecentSearch />
          </WrapperList>
        </WrapperRecentSearch>
      </Container>
    </SlideTransition>
  );
}

export default SearchProductAndroid;

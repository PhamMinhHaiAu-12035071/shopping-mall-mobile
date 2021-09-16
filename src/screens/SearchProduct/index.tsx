import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React from "react";
import { ReactComponent as ArrowBack } from "../../assets/images/arrow-back.svg";
import { useHistory } from "react-router-dom";
import Search from "./Search";
import { isMobile } from "react-device-detect";
import {
  ButtonArrowBack,
  Container,
  Header,
  LeftHeader,
  RightHeader,
  SlideTransition,
  SvgIconBack,
  TitleRecentSearch,
  WrapperRecentSearch,
  WrapperSearchFullWidth,
} from "./styles";
import RecentSearch from "./RecentSearch";

function SearchProduct() {
  const history = useHistory();
  const [search, setSearch] = React.useState<string>("");
  const [isFocusSearch, setIsFocusSearch] = React.useState<boolean>(false);
  const goBack = () => history.goBack();
  const onFocusIn = () => setIsFocusSearch(true);
  const onFocusOut = () => setIsFocusSearch(false);
  return (
    <SlideTransition>
      <Container>
        <AnimateSharedLayout type={"crossfade"}>
          <Header>
            <LeftHeader>
              <ButtonArrowBack onClick={goBack}>
                <SvgIconBack>
                  <ArrowBack />
                </SvgIconBack>
              </ButtonArrowBack>
            </LeftHeader>
            <RightHeader>
              {isMobile && (
                <AnimatePresence>
                  {isFocusSearch && (
                    <Search
                      search={search}
                      setSearch={setSearch}
                      onFocusIn={onFocusIn}
                      onFocusOut={onFocusOut}
                    />
                  )}
                </AnimatePresence>
              )}
            </RightHeader>
          </Header>
          <WrapperSearchFullWidth>
            <Search
              search={search}
              setSearch={setSearch}
              onFocusIn={onFocusIn}
              onFocusOut={onFocusOut}
            />
          </WrapperSearchFullWidth>
        </AnimateSharedLayout>
        {/*<WrapperRecentSearch>*/}
        {/*  <TitleRecentSearch>Recent Search</TitleRecentSearch>*/}
        {/*  <RecentSearch />*/}
        {/*</WrapperRecentSearch>*/}
      </Container>
    </SlideTransition>
  );
}

export default SearchProduct;

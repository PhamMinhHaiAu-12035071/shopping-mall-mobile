import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Category} from "../../index";
import TabPanel from "../TabPanel";
import {styledSwipeView} from './styles';

interface Props {
    indexCategory: number,
    setIndexCategory: React.Dispatch<React.SetStateAction<number>>;
    list: Array<Category>
}

function ListTabPanel(props: Props) {
    const {indexCategory, setIndexCategory, list} = props;

    const handleChangeIndex = (index: number) => {
        setIndexCategory(index);
    };
    return (
        <SwipeableViews
            axis={'x'}
            index={indexCategory}
            onChangeIndex={handleChangeIndex}
            containerStyle={styledSwipeView}
        >
            {
                list.map((item: Category, index: number) => {
                    return (
                        <TabPanel index={index} value={indexCategory}/>
                    )
                })
            }
        </SwipeableViews>
    )
};
export default ListTabPanel;

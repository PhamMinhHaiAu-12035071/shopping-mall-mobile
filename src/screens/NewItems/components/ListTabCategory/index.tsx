import React from 'react';
import {Category} from '../..';
import {CustomTab, CustomTabs} from './styles';
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

function a11yProps(index: any) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

interface Props {
    list: Array<Category>;
    indexCategory: number;
    setIndexCategory: React.Dispatch<React.SetStateAction<number>>;
}

function ListTabCategory(props: Props) {
    const {list, indexCategory, setIndexCategory} = props;
    const {width} = useWindowDimensions();
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setIndexCategory(newValue);
    };
    return (
        <CustomTabs
            value={indexCategory}
            onChange={handleChange}
        >
            {
                list.map((item: Category, index: number) => {
                    return (
                        <CustomTab label={item.name} key={item.id} {...a11yProps(index)} width={width}/>
                    )
                })
            }
        </CustomTabs>
    )
};
export default ListTabCategory;

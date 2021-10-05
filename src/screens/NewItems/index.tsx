import React from 'react';
import Header from './components/Header';
import {Container, WrapperHeader, WrapperList, WrapperSearch, WrapperTabs} from "./styles";
import Search from './components/Search';
import Tabs from "./components/ListTabCategory";
import ListTabPanel from "./components/ListTabPanel";

export interface Category {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    image: any;
    title: string;
    mass: number;
    price: number;
    unitOfMass: string;
    imageWidth: number;
    imageHeight: number;
}

function NewItems() {
    const [search, setSearch] = React.useState<string>('');
    const [indexCategory, setIndexCategory] = React.useState<number>(0);
    const [listCategory, setListCategory] = React.useState<Array<Category>>([
        {
            id: "0",
            name: "Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable"
        },
        {
            id: "1",
            name: "Meat & Fish"
        },
        {
            id: "2",
            name: "Medicine"
        },
        {
            id: "3",
            name: "Food"
        },
        {
            id: "4",
            name: "Fruit"
        }
    ]);
    return (
        <Container>
            <WrapperHeader>
                <Header/>
            </WrapperHeader>
            <WrapperSearch>
                <Search search={search} setSearch={setSearch}/>
            </WrapperSearch>
            <WrapperTabs>
                <Tabs list={listCategory} indexCategory={indexCategory} setIndexCategory={setIndexCategory}/>
            </WrapperTabs>
            <WrapperList>
                <ListTabPanel list={listCategory} indexCategory={indexCategory} setIndexCategory={setIndexCategory}/>
            </WrapperList>
        </Container>
    )
};

export default NewItems;

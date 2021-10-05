import React from 'react';
import CauliflowerImage from '../../../../assets/images/cauliflower.png';
import CarrotImage from '../../../../assets/images/carrot.png';
import PotatoImage from '../../../../assets/images/potato.png';
import CauliflowerImage2 from '../../../../assets/images/cauliflower2.png';
import TomatoImage from '../../../../assets/images/tomato.png';
import PapayaImage from '../../../../assets/images/papaya.png';
import {AutoSizer, CellMeasurer, CellMeasurerCache, createMasonryCellPositioner, Masonry} from 'react-virtualized';
import {Product} from "../../index";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import {Container, styledMasonry, WrapperItemProduct} from "./styles";
import ItemProduct from "../ItemProduct";
import _ from 'lodash';

const dumpData: Array<Product> = [
    {
        id: "0",
        title: "Cauliflower\nForm The Garden",
        image: CauliflowerImage,
        mass: 1,
        unitOfMass: "kg",
        price: 13,
        imageWidth: 80,
        imageHeight: 72,
    },
    {
        id: "1",
        title: "Potato",
        image: PotatoImage,
        mass: 1,
        unitOfMass: "kg",
        price: 12,
        imageWidth: 80,
        imageHeight: 63,
    },
    {
        id: "2",
        title: "Fresh Tomato",
        image: TomatoImage,
        mass: 1,
        unitOfMass: "kg",
        price: 15,
        imageWidth: 80,
        imageHeight: 49,
    },
    {
        id: "3",
        title: "Cauliflower\nForm The Farmer",
        image: CauliflowerImage2,
        mass: 1,
        unitOfMass: "kg",
        price: 14,
        imageWidth: 73,
        imageHeight: 80,
    },
    {
        id: "4",
        title: "Carrot\nForm The Garden",
        image: CarrotImage,
        mass: 1,
        unitOfMass: "kg",
        price: 12,
        imageWidth: 80,
        imageHeight: 48,
    },
    {
        id: "5",
        title: "Papaya",
        image: PapayaImage,
        mass: 1,
        unitOfMass: "kg",
        price: 35,
        imageWidth: 80,
        imageHeight: 50,
    },

    {
        id: "6",
        title: "Cauliflower\nForm The Garden",
        image: CauliflowerImage,
        mass: 1,
        unitOfMass: "kg",
        price: 13,
        imageWidth: 80,
        imageHeight: 72,
    },
    {
        id: "7",
        title: "Potato",
        image: PotatoImage,
        mass: 1,
        unitOfMass: "kg",
        price: 12,
        imageWidth: 80,
        imageHeight: 63,
    },
];

const PADDING = 16;
const SPACER = 15;

function ListProduct() {

    const [list, setList] = React.useState<Array<Product>>(dumpData);
    const {width} = useWindowDimensions()
    let masonryRef: any;

    const widthMasonry = width - PADDING * 2;
    const defaultWidth = widthMasonry / 2 - SPACER;

    // Default sizes help Masonry decide how many images to batch-measure
    const cache = new CellMeasurerCache({
        defaultHeight: 190,
        defaultWidth: defaultWidth,
        fixedWidth: true,
    });

    // Our masonry layout will use 3 columns with a 10px gutter between
    const cellPositioner = createMasonryCellPositioner({
        cellMeasurerCache: cache,
        columnCount: 2,
        columnWidth: defaultWidth,
        spacer: SPACER,
    });

    const cellRenderer = ({index, key, parent, style}: any) => {
        const product: Product = list[index];
        const styledContainer = {
            ...style,
        }
        return (
            <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
                <WrapperItemProduct style={styledContainer}>
                    <ItemProduct {...product} />
                </WrapperItemProduct>
            </CellMeasurer>
        );
    }
    const onScroll = ({clientHeight, scrollHeight, scrollTop}: any) => {
        console.log('scroll');
        console.log({clientHeight, scrollHeight, scrollTop})
    }
    const onResize = () => {
        cache.clearAll();
        cellPositioner.reset({
            columnCount: 2,
            columnWidth: defaultWidth,
            spacer: SPACER,
        });
        masonryRef.recomputeCellPositions();
    }
    React.useLayoutEffect(() => {
        const innerMasonryDom = document.querySelector("#masonry-list-product > .ReactVirtualized__Masonry__innerScrollContainer");
        if (innerMasonryDom) {
            setTimeout(() => {
                const height = innerMasonryDom.clientHeight;
                _.set(innerMasonryDom, 'style.height', `${height}px`)
            })
        }

    }, [])
    return (
        <Container>
            <AutoSizer
                overscanByPixels={0}
                onResize={onResize}
            >
                {({height, width}) => {
                    return (
                        (
                            <Masonry
                                autoHeight={false}
                                height={height}
                                cellCount={list.length}
                                cellMeasurerCache={cache}
                                cellPositioner={cellPositioner}
                                cellRenderer={cellRenderer}
                                width={width}
                                overscanByPixels={0}
                                onScroll={onScroll}
                                style={styledMasonry}
                                ref={ref => (masonryRef = ref)}
                                id={'masonry-list-product'}
                            />
                        )
                    )
                }}
            </AutoSizer>
        </Container>
    )
};
export default ListProduct;

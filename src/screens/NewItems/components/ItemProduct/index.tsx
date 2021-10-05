import React from 'react';
import {Product} from "../../index";
import {Grid} from "@material-ui/core";
import {GridContainer, GridContent, Mass, Price, Title, GridImage} from "./styles";

interface Props extends Product {

}

function ItemProduct(props: Props) {
    const {image, imageHeight, imageWidth, title, price, mass, unitOfMass} = props;
    return (
        <GridContainer container direction={"column"} justifyContent="space-between" spacing={2}>
            <Grid item>
                <GridImage container justifyContent="center" alignItems="center">
                    <img src={image} width={imageWidth} height={imageHeight} alt={"image"}/>
                </GridImage>
            </Grid>
            <Grid item>
                <GridContent container direction={"column"} justifyContent={"space-between"} spacing={2}>
                    <Grid item>
                        <Grid container direction={"column"} justifyContent={"space-between"} spacing={1}>
                            <Grid item>
                                {
                                    title.split("\n").map((item: string, index: number) => {
                                        return (
                                            <Title key={index.toString()}>{item}</Title>
                                        )
                                    })
                                }
                            </Grid>
                            <Grid item>
                                <Mass>{mass} {unitOfMass}</Mass>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Price>$ {price}</Price>
                    </Grid>
                </GridContent>
            </Grid>
        </GridContainer>
    )
};

export default ItemProduct;

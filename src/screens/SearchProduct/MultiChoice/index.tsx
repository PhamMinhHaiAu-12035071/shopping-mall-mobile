import React from "react";
import {Container, WrapperBtnSeeAll} from "./styles";
import {Grid} from "@material-ui/core";
import ButtonCustom from "../../../components/ButtonCustom";
import {ItemData} from "../FilterModal";
import ButtonSeeAll from "../../../components/ButtonSeeAll";

interface Props {
    list: Array<ItemData>;
    setList: React.Dispatch<React.SetStateAction<Array<ItemData>>>;
}

function MultiChoice(props: Props) {
    const {list, setList} = props;
    const [selectedSeeAll, setSelectedSeeAll] = React.useState<boolean>(false);
    const handleSelectedIndex = (id: string, isSelected: boolean) => {
        setList([...list.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    ...{
                        isSelected: !isSelected,
                    }
                }
            }
            return item;
        })]);
    }
    const handleClickSeeAll = () => {
        setSelectedSeeAll(!selectedSeeAll);
    }
    return (
        <Container>
            <Grid
                container
                direction={"row"}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                {list.map((item: ItemData) => (
                    <Grid item xs={4} key={item.id}>
                        <ButtonCustom item={item} onClick={handleSelectedIndex}>{item.name}</ButtonCustom>
                    </Grid>
                ))}
            </Grid>
            <WrapperBtnSeeAll>
                <Grid
                    container
                    direction={"row"}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={4}>
                        <ButtonSeeAll isSelected={selectedSeeAll} onClick={handleClickSeeAll}>See All</ButtonSeeAll>
                    </Grid>
                </Grid>
            </WrapperBtnSeeAll>
        </Container>
    );
}

export default MultiChoice;

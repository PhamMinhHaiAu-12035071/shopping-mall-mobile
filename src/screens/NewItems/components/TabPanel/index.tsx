import React from 'react';
import ListProduct from "../ListProduct";

interface Props {
    index: any;
    value: any;
}

function TabPanel(props: Props) {
    const {value, index} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
        >
            {value === index && (
                <ListProduct/>
            )}
        </div>
    );
};

export default TabPanel;

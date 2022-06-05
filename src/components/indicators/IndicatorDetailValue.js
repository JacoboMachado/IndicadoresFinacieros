import React from "react";
import { Text } from "@react-native-material/core";
import { ListItem } from "@react-native-material/core";

export default function IndicatorDetailValue({item}) {

    return (
        <ListItem
            title={ item.Fecha }
            meta={ item.Valor+' $' }
        />
    )
}
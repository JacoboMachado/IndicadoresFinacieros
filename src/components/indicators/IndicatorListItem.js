import React from "react";
import { ListItem } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton } from "@react-native-material/core";

export default function IndicatorListItem({ item, onPress}) {

    const toHistory = () => {
        return (
            <IconButton 
                onPress={ onPress.iconOnPress } 
                icon={ <Icon name="information-outline" size={24} color="blue" />} 
            />
        )
    }

    return (
        <ListItem
            title={ item.title }
            secondaryText = { item.secondaryText ? item.secondaryText : undefined }
            trailing={props => <Icon name="chevron-right" {...props} />}
            meta={ toHistory() }
            onPress={ onPress.handleOnPress }
        />
    )
}
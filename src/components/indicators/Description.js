import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Divider } from "@react-native-material/core";


const Description = ({title, value}) => {
    return (
        <View style={styles.row}>
            <Text>
                <Text>{title}</Text> 
                <Text style={{fontWeight: "bold"}}> { value }</Text>
            </Text>
            <Divider color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        marginBottom: 15,
    }
});

export default Description;
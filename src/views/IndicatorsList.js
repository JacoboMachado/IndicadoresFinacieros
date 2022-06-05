import React from 'react';
import { View, FlatList } from 'react-native';
import IndicatorListItem from '../components/indicators/IndicatorListItem';
import { INDICATORS_LIST } from '../const/const';

const IndicatorsList = ({navigation}) => {

    const handleOnPress = (route, item) => {
        navigation.navigate( route, { item: item });
    }

    return (
        <View>
            <FlatList 
                data={ INDICATORS_LIST }
                renderItem={ ({item}) => 
                    <IndicatorListItem 
                        item={ item }  
                        onPress={ {
                            handleOnPress: () => handleOnPress('Indicador', item),
                            iconOnPress: () => handleOnPress('Historial', item),
                        } }
                    /> 
                }
                keyExtractor={ item => item.id }
            />
        </View>
    )
}

export default IndicatorsList;
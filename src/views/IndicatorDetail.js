import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import IndicatorDetailValue from '../components/indicators/IndicatorDetailValue';
import usePost from '../components/api/usePost';

const IndicatorDetail = (props) => {

    const iden = props.route.params.item.iden;
    const [ indicator, setIndicator ] = useState([]);
    const { data, isSuccess, error } = usePost(iden);

    useEffect(() => {
        if(isSuccess) setIndicator(data.data[iden].reverse());
    }, [isSuccess]);

    return (
        <View>
            <FlatList 
                data={ indicator }
                renderItem={ ({item}) => <IndicatorDetailValue item={ item } /> }
                keyExtractor={ (item, index) => index.toString() }
            />
        </View>
    )
}

export default IndicatorDetail;
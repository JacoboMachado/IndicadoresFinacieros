import React, { useEffect, useState } from 'react';
import { Flex, Text } from '@react-native-material/core';
import { Dimensions } from "react-native";
import usePost from '../components/api/usePost';
import Description from '../components/indicators/Description';
import { LineChart } from 'react-native-chart-kit';


const style = {
    title: {
        color: 'blue',
        marginBottom: 10,
    }
}

const IndicatorHistory = (props) => {

    const iden = props.route.params.item.iden;
    const [ indicator, setIndicator ] = useState([]);
    const [ val, setVal ] = useState([]);
    const { data } = usePost(iden);


    const changeValues = () => {
        setIndicator([...data.data[iden]].reverse()); 
        setVal([...data.data[iden].slice(0, 10)])
    }

    useEffect(() => {
        (data) && changeValues();
    }, [data]);

    return (
        <Flex self='center' style={{alignItems: 'center'}}>
            

            { indicator[0] &&
                <Text variant='h2' style={style.title}>{indicator[0].Valor+' $'}</Text>
            } 
            <Description 
                title={'Nombre'}
                value={props.route.params.item.title}
            />
            <Description 
                title={'Unidad de Medída:'}
                value={props.route.params.item.unit}
            />
            { indicator[0] &&
                <Description 
                    title={'Fecha del ultimo valor:'}
                    value={ indicator[0].Fecha }
                />
                
            }
            {   val[0] &&
                <LineChart
                    data={{
                    labels: val.map(values => values.Fecha),
                    datasets: [
                        {
                        data: val.map(values => values.Valor.replace(',', '.'))
                        }
                    ]
                    }}
                    width={ Dimensions.get("window").width -20 } 
                    height={300}
                    yAxisSuffix="$"
                    chartConfig={{
                        backgroundGradientFrom: "blue",
                        backgroundGradientTo: "#ffa726",
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            }

        </Flex>
    )

}

export default IndicatorHistory;
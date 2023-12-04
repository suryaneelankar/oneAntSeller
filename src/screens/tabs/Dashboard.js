import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../constants/Colors';
import PrimaryButton from '../../components/common/buttons/PrimaryButton';
import { Chart, HorizontalAxis, VerticalAxis, Line, Area, Tooltip } from 'react-native-responsive-linechart'

const Dashboard = () => {
    const data = [
        { x: -2, y: 15 },
        { x: -1, y: 10 },
        { x: 0, y: 12 },
        { x: 1, y: 7 },
        { x: 2, y: 6 },
        { x: 3, y: 3 },
        { x: 4, y: 5 },
        { x: 5, y: 8 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 },
    ]


    const [filterType, setFilterType] = useState('Last 7 days')

    const ref = React.useRef()
    const ref2 = React.useRef()

    const onPressFilterCalender = () => {

    }

    return (
        <View style={{ flex: 1 }}>

            <View style={{ backgroundColor: '#562299', width: '100%', height: '46%' }}>
                <Text style={{ alignSelf: 'center', marginTop: 30, fontWeight: '600', color: 'white',fontSize:18 }}>Dashboard</Text>

                <TouchableOpacity style={{ backgroundColor: '#281047', width: 200, alignSelf: 'center', borderRadius: 20,marginTop:20 }}
                    onPress={() => onPressFilterCalender()}
                >
                    <Text style={{ alignSelf: 'center',  fontWeight: '500', color: 'white',padding:12,fontSize:16 }}>{filterType}</Text>
                </TouchableOpacity>

                <Text style={{ alignSelf: 'center', marginTop: 20, fontWeight: '500', color: 'white', fontSize: 48 }}>$17,242.98</Text>
                <Text style={{ alignSelf: 'center', marginTop: 10, fontWeight: '500', color: '#bb87fe', fontSize: 16 }}>REVENUE</Text>

                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View>
                        <Text style={{ alignSelf: 'center', marginTop: 10, fontWeight: '500', color: 'white', fontSize: 24 }}>74</Text>
                        <Text style={{ alignSelf: 'center', marginTop: 10, fontWeight: '500', color: '#bb87fe', fontSize: 12 }}>ORDERS</Text>
                    </View> 
                    <View style={{height:60,backgroundColor:'#281047',width:2,marginTop:10}}/>

                    <View>
                        <Text style={{ alignSelf: 'center', marginTop: 10, fontWeight: '500', color: 'white', fontSize: 24 }}>498k</Text>
                        <Text style={{ alignSelf: 'center', marginTop: 10, fontWeight: '500', color: '#bb87fe', fontSize: 12 }}>VIEWS</Text>
                    </View>
                    <View style={{height:60,backgroundColor:'#281047',width:2,marginTop:10}}/>

                    <View>
                        <Text style={{ alignSelf: 'center', marginTop: 10, fontWeight: '500', color: 'white', fontSize: 24 }}>498k</Text>
                        <Text style={{ alignSelf: 'center', marginTop: 10, fontWeight: '500', color: '#bb87fe', fontSize: 12 }}>VIEWS</Text>
                    </View>
                </View>

                <View>

                </View>
            </View>

            <Text style={{color:'grey',marginTop:10}}>Sales this week</Text>
            <View style={{flexDirection:'row',marginTop: 10,}}>
            <Text style={{ fontWeight: '500', color: 'black', fontSize: 24, }}>$8,003.98</Text>
            <Text style={{color:'#2F9461',marginHorizontal:15}}>+7.6%</Text>
            </View>


            <Chart
                style={{ height: 200, width: '100%' }}
                data={data}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                xDomain={{ min: -2, max: 10 }}
                yDomain={{ min: -4, max: 20 }}
            >
                <VerticalAxis tickCount={10} theme={{ labels: { formatter: (v) => v.toFixed(2) }, grid: { stroke: { dashArray: [10, 2] } } }} />
                <HorizontalAxis tickCount={5} theme={{ grid: { stroke: { dashArray: [10, 2] } } }} />
                <Area theme={{ gradient: { from: { color: '#9038FF' }, to: { color: '#9038FF', opacity: 0.2 } } }} />
                <Line
                    initialTooltipIndex={3}
                    ref={ref}
                    hideTooltipOnDragEnd
                    // hideTooltipAfter={750}
                    smoothing="cubic-spline"
                    tooltipComponent={<Tooltip />}
                    theme={{
                        stroke: { color: '#44bd32', width: 5 },
                        scatter: { default: { width: 8, height: 8, rx: 4, color: '#44ad32' }, selected: { color: 'black' } },
                    }}
                />
            </Chart>
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    h1: {
        color: COLORS.primary,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
        marginTop: 20,
    },
    desc: {
        color: COLORS.gray800,
        fontSize: 12,
        textAlign: 'center',
    },
    lable: {
        color: COLORS.black,
        fontSize: 14,
        fontWeight: '500',
        marginTop: 20,
        marginLeft: 10,
    },
});

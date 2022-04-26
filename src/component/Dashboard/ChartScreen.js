import { View, Text, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LineChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
import React from 'react'

export default function ChartScreen() {

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };


  return (
    <View style={{width: 420,height: 150,backgroundColor: '#fff',marginTop: 5,marginBottom: 3}}>
                        <View style={{display: 'flex', flexDirection: 'row',width: 390,justifyContent: 'center',alignItems: 'center'}}>
                          <View>
                            <Text>Monthly Chart</Text>
                          </View>
                          <View style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                            <MaterialCommunityIcons
                              name="chart-timeline-variant"
                              color="#32CD32"
                              size={14}
                            />
                            <Text>Close Job</Text>
                          </View>
                          <View style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                            <MaterialCommunityIcons
                              name="chart-timeline-variant"
                              color="#FFA500"
                              size={14}
                            />
                            <Text>Tatal</Text>
                          </View>
      </View>

<View>
<LineChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>

</View>
    </View>
  )
}
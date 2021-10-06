import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import EnterDetails from './screens/EnterDetails'
import ReadDetails from './screens/ReadDetails'
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {
  render(){
    return(
      <SafeAreaProvider>
      <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  IngresarDetalles: EnterDetails,
  LeerDetalles: ReadDetails
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "IngresarDetalles"){
        return(
          <Image
          source={require("./assets/job1.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "LeerDetalles"){
        return(
          <Image
          source={require("./assets/job2.webp")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

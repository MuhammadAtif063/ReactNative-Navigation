import React from 'react';
import {Header,Input} from 'react-native-elements';
import {AsyncStorage,Platform,Text,View,Button,ToastAndroid} from 'react-native';
import HomeStyles from '../../resources/css/app-styles';
const styles = HomeStyles;

 class Home extends React.Component {
     static navigationOptions = {
     title: 'Welcome',
   };
   render() {
       const { navigate } = this.props.navigation;
       console.log("navigate")
        console.log(navigate)
       return (
       <View >
         <Text style={styles.welcome}>
            Your Personal Health Assistant!
         </Text>
         <Text style={styles.instructions}>
              Please Login to Access features from your  device!
         </Text>
         <View
         style={styles.buttonMargin}>
           <Button
             title="UserLogin"
             style={styles.buttonMargin}
             onPress={() =>
               navigate('UserLogin')
             }
           />
        </View>
         <View
         style={styles.buttonMargin}>
           <Button
             title="DoctorLogin"
             onPress={() =>
               navigate('DoctorLogin')
             }
           />
         </View>
       </View>
     );
   }
}
export default Home;
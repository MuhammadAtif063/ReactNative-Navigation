import React from 'react';
import Home from './component/home/Home';
import UserLogin from './component/login/UserLogin';
import UserHome from './component/home/UserHome';
import DoctorLogin from './component/login/DoctorLogin';
import OutPatient from './component/home/OutPatient';
import DoctorHome from './component/home/DoctorHome'
import DoctorAppointment from './component/home/DoctorsAppointment';
import PrescribedMedicines from './component/home/PrescribedMedicines';
import MedicineIntake from './component/home/MedicineIntake';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';


const AppNav = StackNavigator({
   Home: {screen : Home},
   UserLogin: {screen : UserLogin},
   UserHome : {screen :UserHome},
   DoctorLogin :{screen :DoctorLogin},
   DoctorHome :{screen :DoctorHome},
   OutPatients: { screen: OutPatient},
   DoctorAppointments: { screen: DoctorAppointment },
   PrescribedMedicines: { screen: PrescribedMedicines },
   MedicineIntake: { screen: MedicineIntake },
   });
//AppRegistry.registerComponent(App , () => App );
export default class App extends React.Component {
  render() {
    return (
      <AppNav />
    );
  }
}
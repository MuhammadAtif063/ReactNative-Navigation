import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input , Button , Text , CheckBox} from 'native-base';
import { View ,StyleSheet ,TextInput} from 'react-native';
import Expo from "expo";
import loginService from '../../services/LoginService';
import User from '../../model/User';
import NewUser from '../../model/NewUser';
import Doctor from '../../model/Doctor';
import Patient from '../../model/Patient';

 export default class Login extends Component {
 constructor(props) {
     super(props);
     this.state = { loading: true ,
//                     user : new User (new Doctor('','','','','','','','','','',''), new Patient('','','','','','P')),
                    newUser:new NewUser('','','','P'), 
                    checkeds:true,
                     
                    };
     this.login = this.login.bind(this);
     this.checked = this.checked.bind(this);
   }
    async componentWillMount() {
       await Expo.Font.loadAsync({
         Roboto: require("native-base/Fonts/Roboto.ttf"),
         Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
         Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
       });
       this.setState({ loading: false });
     }
  async login() {
        console.log("Login");
        console.log(this.state.newUser);
        let response = await loginService.login(this.state.newUser);
        console.log("After Response...")
        console.log(response);
        }
  async checked(){
      console.log("Checked");
      console.log(this.state.checkeds);
  }     
handleChange=(value,name)=>{
    console.log("value--------------");
    console.log(value);
    console.log("name--------------");
    console.log(name);
//    const name = e.target.name;
//        const value = e.target.value;
        this.setState(function (prevState) {
            let updated = prevState.newUser;
            if(name=="email")
           updated['email'] =value;
       else if(name=="password")
           updated['password']=value;
            return {
                newUser: updated
            };
        });
        console.log(this.state.newUser);
}
    render() {
    if (this.state.loading) {
          return <Expo.AppLoading />;
        }
       return (
        <Container>
               <Header />
               <Content>
                 <Form>
                  <TextInput name="email"  onChangeText={(email) => this.handleChange(email,"email")} />
                  <TextInput name="password" onChangeText={(password) => this.handleChange(password,"password")}  />
                    <Button block  onPress = {() => this.login()}>
                     <Text>Login</Text></Button>
                 </Form>
               </Content>
             </Container>
       );
     }
}

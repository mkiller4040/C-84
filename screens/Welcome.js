// import React, { Component } from 'react'
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
// import db from '../config'
// import firebase from 'firebase'

// export default class Welcome extends Component 
// {
//   constructor()
//   {
//     super();
//     this.state = 
//     {
//       emailID : '',
//       password : '',
//       lastName : '',
//       firstName : '',
//       address : '',
//       phoneNO : '',
//       confirmPassword : '',
//       isModalVisible : ''
//     }
//   }

//   showModal = () => 
//   {
//     return(
//       <Modal 
//       animationType = "fade"
//       transparent = {true}
//       visible = {this.state.isModalVisible}
//       > <View style = {styles.modalContainer}>
//         <ScrollView style = {{width : '100%'}}>
//           <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
//             <Text style = {styles.modalTitle}>Registration</Text>
//             <TextInput 
//             style = {styles.formTextInput} 
//             placeholder = {"firstName"}
//             maxLength = {12}
//             onChangeText = {(text) => 
//             {
//               this.setState(
//                 {
//                   firstName : text
//                 })
//             }}>
//             </TextInput>
//             <TextInput 
//             style = {styles.formTextInput} 
//             placeholder = {"lastName"}
//             maxLength = {12}
//             onChangeText = {(text) => 
//             {
//               this.setState(
//                 {
//                   lastName : text
//                 })
//             }}>
//             </TextInput>
//             <TextInput 
//             style = {styles.formTextInput} 
//             placeholder = {"Enter phone number here"}
//             maxLength = {10}
//             keyboardType = {"numeric"}
//             onChangeText = {(text) => 
//             {
//               this.setState(
//                 {
//                   phoneNO : text
//                 })
//             }}>
//             </TextInput>
//             <TextInput 
//             style = {styles.formTextInput} 
//             placeholder = {"Enter address here"}
//             multiline = {true}
//             onChangeText = {(text) => 
//             {
//               this.setState(
//                 {
//                   address : text
//                 })
//             }}>
//             </TextInput>
//             <TextInput 
//             style = {styles.formTextInput} 
//             placeholder = {"Enter emailID here"}
//             keyboardType = {"email-address"}
//             onChangeText = {(text) => 
//             {
//               this.setState(
//                 {
//                   emailID : text
//                 })
//             }}>
//             </TextInput>
//             <TextInput 
//             style = {styles.formTextInput} 
//             placeholder = {"Enter password here"}
//             secureTextEntry = {true}
//             onChangeText = {(text) => 
//             {
//               this.setState(
//                 {
//                   password : text
//                 })
//             }}>
//             </TextInput>
//             <TextInput 
//             style = {styles.formTextInput} 
//             placeholder = {"Confirm password"}
//             secureTextEntry = {true}
//             onChangeText = {(text) => 
//             {
//               this.setState(
//                 {
//                   confirmPasswword : text
//                 })
//             }}>
//             </TextInput>
//             <View style = {styles.cancelButton}>
//             <TouchableOpacity 
//             style = {styles.registerButton}
//             onPress = {() => 
//             {
//               this.userSignUp(this.state.emailID, this.state.password, this.state.confirmPassword)
//             }}>
//             <Text style = {styles.registerButtonText}>Register</Text>
//             </TouchableOpacity>
//             </View>
//             <View style = {styles.cancelButton}>
//             <TouchableOpacity 
//             style = {styles.cancelButton}
//             onPress = {() => 
//             {
//               this.setState(
//                 {
//                   isModalVisible : false,
//                 })
//             }}>
//             <Text style = {{color : 'red'}}>Cancel</Text>
//             </TouchableOpacity>
//             </View>
//           </KeyboardAvoidingView>
//         </ScrollView>
//         </View>
//       </Modal>
//     )
//   }

//   userLogin = (emailId, password) =>
//   {
//     firebase.auth().signInWithEmailAndPassword(emailId, password).then(() => 
//     {
//       return Alert.alert("Successfully logged in !")
//     })
//     .catch((error) => 
//     {
//       var errorCode = error.code
//       var errorMessage = error.message
//       return Alert.alert(errorMessage)

//     })
//   }

//   userSignUp = (emailId, password, confirmPassword) => 
//   {
//     if(password !== confirmPasswword)
//     {
//       return Alert.alert("Password entered does not match !")
//     }
//     else
//     {
//      firebase.auth().createUserWithEmailAndPassword(emailId, password).then(() => 
//      {
//        db.collection('Users').add(
//          {
//            firstName : this.state.firstName,
//            lastName : this.state.lastName,
//            address : this.state.address,
//            phoneNO : this.state.phoneNO,
//            emailAddress : this.state.emailID,
//          })
//        return Alert.alert("Successfully signed up !", " ", [{text : 'Okay', onPress : () => 
//        {
//          this.setState(
//            {
//              isModalVisible : false
//            })
//        }}])
//      })
//      .catch((error) => 
//      {
//        var errorCode = error.code
//        var errorMessage = error.message
//        return Alert.alert(errorMessage)

//      })
//   }

//   render()
//   {
//     return(
//         <View>
//           <View>
//             {this.showModal()}
//           </View>
//         <TextInput placeholder = "abc@example.com" 
//         style = {styles.loginBox} 
//         keyboardType = 'email-address' 
//         onChangeText = {(text) => 
//         {
//           this.setState(
//             {
//               emailID : text
//             })
//         }}>
//         </TextInput>
//         <TextInput 
//         placeholder = "Enter Password" 
//         style = {styles.loginBox}
//         onChangeText = {(text) => 
//         {
//           this.setState(
//             {
//               password : text
//             })
//         }}>
//         </TextInput>
//         <TouchableOpacity style = {styles.button} onPress = {() => 
//             {
//               this.userLogin(this.state.emailID, this,state.password)
//             }}>
//             <Text>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style = {styles.button} onPress = {() => 
//             {
//               this.setState(
//                 {
//                   isModalVisible : true
//                 })
//             }}>
//             <Text>Sign Up</Text>
//         </TouchableOpacity>
//         </View>
//     )
//   }
// }

// styles = StyleSheet.create({
//   container: 
//   {
//     flex: 1,
//     backgroundColor: '#F8BE85',

//   },
//   profileContainer: 
//   {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: 
//   {
//     fontSize: 65,
//     fontWeight: '300',
//     paddingBottom: 30,
//     color: '#ff3d00'
//   },
//   loginBox: 
//   {
//     width: 300,
//     height: 40,
//     borderBottomWidth: 1.5,
//     borderColor: '#ff8a65',
//     fontSize: 20,
//     margin: 10,
//     paddingLeft: 10
//   },
//   button: 
//   {
//     width: 300,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 25,
//     backgroundColor: "#ff9800",
//     shadowColor: "#000",
//   },
      
//   shadowOffset: 
//   {
//     width: 0,
//     height: 8,
//     shadowOpacity: 0.30,
//     shadowRadius: 10.32,
//     elevation: 16,
//   },

//   buttonText: 
//   {
//     color: '#ffff',
//     fontWeight: '200',
//     fontSize: 20
//   },
//   buttonContainer: 
//   {
//     flex: 1,
//     alignItems: 'center'
//   },
//   modalTitle: 
//   {
//     justifyContent: 'center',
//     alignSelf: 'center',
//     fontSize: 30,
//     color: '#ff5722',
//     margin: 50
//   },
//   modalContainer: 
//   {
//     flex: 1,
//     borderRadius: 20,
//     justifyContent: 'center',
//      alignItems: 'center',
//       backgroundColor: "#ffff",
//       marginRight: 30,
//       marginLeft: 30,
//       marginTop: 80,
//       marginBottom: 80,
//   },
//   cancelButton:{
//       width:200,
//       height:30,
//       justifyContent:'center',
//       alignItems:'center',
//       marginTop:5,
//     },
//   KeyboardAvoidingView: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//   },
//   formTextInput:{
//       width:"75%",
//       height:35,
//       alignSelf:'center',
//       borderColor:'#ffab91',
//       borderRadius:10,
//       borderWidth:1,
//       marginTop:20,
//       padding:10
//     },
//     registerButtonText:{
//       color:'#ff5722',
//       fontSize:15,
//       fontWeight:'bold'
//     },
// })

import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Alert, Image, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
import firebase from 'firebase';
import Bird from '../components/flyingbird'
import db from '../config.js';

export default class Welcome extends Component {
 constructor() {
 super();
 this.state = {
 emailId: '',
 password: '',
 isModalVisible: false,
 firstName: '',
 lastName: '',
 address: '',
 contact: '',
 confirmPassword: ''
 }
 }
 userSignUp = (emailId, password, confirmPassword) => {
 if (password !== confirmPassword) {
 return Alert.alert("password doesn't match \n check your password")
 }
 else {
 firebase.auth().createUserWithEmailAndPassword(emailId, password)
 .then(() => {
 db.collection('users').add({
 first_name : this.state.firstName,
 last_name : this.state.lastName,
 contact : this.state.contact,
 email_Id: this.state.emailId,
 address: this.state.address
 })
 return Alert.alert(" user added succesfully", "", [{text : 'ok', onPress:()=>this.setState({isModalVisible:false})}])
 })
 .catch(function (error) {

 var errorMessage = error.message
 return Alert.alert(errorMessage)
 })
 }
 }

 userLogin = (emailId, password) => {
 firebase.auth().signInWithEmailAndPassword(emailId, password)
 .then(() => {
 this.props.navigation.navigate('DonateBooks')



































 Alert.alert("successful login")
 })
 .catch(function (error) {

 var errorMessage = error.message
 return Alert.alert(errorMessage)
 })
 }
 showModel = () => {
 return (
 <Modal
 animationType="fade"
 transparent={true}
 visible={this.state.isModalVisible}>
 <View style={styles.modalContainer}>
 <ScrollView style={{ width: '100%' }}>
 <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
 <Text style= {styles.modalTitle}>
 Registration
 </Text>
 <TextInput style={styles.formTextInput}
 placeholder = "first Name"
 maxLength = {8}
 onChangeText ={(text)=>{
 this.setState({firstName:text})
 }}
 />
 <TextInput style={styles.formTextInput}
 placeholder = "Last Name"
 maxLength = {8}
 onChangeText ={(text)=>{
 this.setState({lastName:text})
 }}
 />
 <TextInput style={styles.formTextInput}
 placeholder = "Contact"
 maxLength = {10}
 onChangeText ={(text)=>{
 this.setState({contact:text})
 }}
 />
 <TextInput style={styles.formTextInput}
 placeholder = "address"
 multiline={true}
 onChangeText ={(text)=>{
 this.setState({address:text})
 }}
 />
 <TextInput style={styles.formTextInput}
 placeholder = "Email"
 keyboardType = {'email-address'}
 onChangeText ={(text)=>{
 this.setState({emailId:text})
 }}
 />
 <TextInput style={styles.formTextInput}
 placeholder = "Password"
 secureTextEntry = {true}
 onChangeText ={(text)=>{
 this.setState({password:text})
 }}
 />
 <TextInput style={styles.formTextInput}
 placeholder = "Confirm Password"
 secureTextEntry = {true}
 onChangeText ={(text)=>{
 this.setState({confirmPassword:text})
 }}
 />
 <View>
 <TouchableOpacity
 style = {styles.registerButton}
 onPress = {()=>
 this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}>
 <Text style = {styles. registerButtonText}>Register</Text>
 </TouchableOpacity>
 </View>
 
 <View >
 <TouchableOpacity
 style = {styles.cancelButton}
 onPress = {()=>
 this.setState({isModalVisible: false})}>
 <Text style = {{color: '#ff5722'}}>Cancel</Text>
 </TouchableOpacity>
 </View>
 </KeyboardAvoidingView>
 </ScrollView>

 </View>
 </Modal>
 )
 }
 render() {
 return (
 <View style={styles.container}>
 <View style = {{justifyContent :"center", alignItems : "center"}}>

 </View>
 {
 this.showModel()
 }
 <View style={styles.profileContainer}>
 
 {/* <SantaAnimation /> */}
 <Image style={{ width: 100, height: 180 }} source={require("../assets/17732-flying-bird.json")} />
 <Text style={styles.title}>Book Santa</Text>
 </View>

 <TextInput
 style={styles.loginBox}
 placeholder='abc@example.com'
 keyboardType='email-address'
 onChangeText={(text) => {
 this.setState({
 emailId: text
 })
 }}
 ></TextInput>
 <TextInput
 style={styles.loginBox}
 placeholder='password'
 secureTextEntry={true}
 onChangeText={(text) => {
 this.setState({
 password: text
 })
 }}
 ></TextInput>
 <TouchableOpacity
 style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
 onPress={() => {
 this.userLogin(this.state.emailId, this.state.password)
 }}>
 <Text style={styles.buttonText}> Login</Text>
 </TouchableOpacity>
 <TouchableOpacity
 style={styles.button}
 onPress={() => {
 this.setState({isModalVisible:true})
 }}>
 <Text style={styles.buttonText}> Sign up</Text>
 </TouchableOpacity>
 </View>

 )
 }
}

const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#F8BE85',

 },
 profileContainer: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 },
 title: {
 fontSize: 65,
 fontWeight: '300',
 paddingBottom: 30,
 color: '#ff3d00'
 },
 loginBox: {
 width: 300,
 height: 40,
 borderBottomWidth: 1.5,
 borderColor: '#ff8a65',
 fontSize: 20,
 margin: 10,
 paddingLeft: 10
 },
 button: {
 width: 300,
 height: 50,
 justifyContent: 'center',
 alignItems: 'center',
 borderRadius: 25,
 backgroundColor: "#ff9800",
 shadowColor: "#000",
 shadowOffset: {
 width: 0,
 height: 8,
 },
 shadowOpacity: 0.30,
 shadowRadius: 10.32,
 elevation: 16,
 },
 buttonText: {
 color: '#ffff',
 fontWeight: '200',
 fontSize: 20
 },
 buttonContainer: {
 flex: 1,
 alignItems: 'center'
 },
 modalTitle: {
 justifyContent: 'center',
 alignSelf: 'center',
 fontSize: 30,
 color: '#ff5722',
 margin: 50
 },
 modalContainer: {
 flex: 1,
 borderRadius: 20,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: "#ffff",
 marginRight: 30,
 marginLeft: 30,
 marginTop: 80,
 marginBottom: 80,
 },
 cancelButton:{
 width:200,
 height:30,
 justifyContent:'center',
 alignItems:'center',
 marginTop:5,
 },
 KeyboardAvoidingView: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center'
 },
 formTextInput:{
 width:"75%",
 height:35,
 alignSelf:'center',
 borderColor:'#ffab91',
 borderRadius:10,
 borderWidth:1,
 marginTop:20,
 padding:10
 },
 registerButtonText:{
 color:'#ff5722',
 fontSize:15,
 fontWeight:'bold'
 },
})
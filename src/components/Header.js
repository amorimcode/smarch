import React from 'react';
import { ViewPropTypes } from 'react-native';
import { StyleSheet, View, Text} from 'react-native';
// import { View, text} from 'react-native';

// // statefull component
// class Component extends React.Component {
//     render() {
//         return (
//             <h1>batata</h1>
//         )
//     }
// }

// Stateless
const Header = (props) => (
    // estilos como no html, espera sempre um objeto js
    <View style={ style.container }>
      <Text style={ style.title }>{ props.title }</Text>
    </View>
);

// style sheet
const style = StyleSheet.create({
    container: {
      marginTop: 25,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontSize: 50,
    }
  });




// exporta o arquivo Header.js para possibilitar o import dele em outro arquivo
export default Header;
                        
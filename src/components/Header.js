import React from 'react';
import { ViewPropTypes } from 'react-native';
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
    <View>
        <Text>Esse é o nosso Header!</Text>

    </View>
);

// exporta o arquivo Header.js para possibilitar o import dele em outro arquivo
export default Header;

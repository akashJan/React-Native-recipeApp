/* eslint-disable react-native/no-inline-styles */
import { Text, View } from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ headerText, headerIcon }) => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ flex: 1, fontSize: 22, fontWeight: '700' }}>{headerText}</Text>
            {/* <Icon icon={headerIcon} size={24} color="#f96163" name="bell-o" /> */}
            <Icon name="bell-o" size={24} color="#f96163" />
        </View>
    );
};

export default Header;

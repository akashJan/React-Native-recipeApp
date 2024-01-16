/* eslint-disable react-native/no-inline-styles */
import { TextInput, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchFilter = ({ icon, placeholder }) => {
    return (
        <View style={{ backgroundColor: '#fff', flexDirection: 'row', marginVertical: 16, paddingVertical: 3, paddingHorizontal: 16, borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 7 }}>
            <Icon name="bell-o" size={20} color="#f96163" style={{ marginTop: 15 }} />
            <TextInput style={{ fontSize: 16, marginLeft: 3 }}>{placeholder}</TextInput>
        </View>
    );
};

export default SearchFilter;


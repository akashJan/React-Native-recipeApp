/* eslint-disable react-native/no-inline-styles */
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image style={{ height: 500, borderRadius: 10 }} source={require('../../assets/images/welcome1.png')} />

                <Text style={{ color: '#f96163', fontSize: 22, fontWeight: 'bold' }}>
                    40K+ Premium Recipes
                </Text>
                <Text style={{ fontSize: 42, fontWeight: 'bold', color: '#3c444c', marginTop: 44, marginBottom: 20 }}>
                    Cook Like A Chef
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RecipeList')}
                    style={{ backgroundColor: '#f96163', borderRadius: 18, paddingVertical: 18, width: '80%' }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, color: '#fff', fontWeight: '700' }}>Let's Go</Text>
                </TouchableOpacity>
            </View >
        </ScrollView>
    );
};

export default WelcomeScreen;


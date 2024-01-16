/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { colors, recipeList } from '../../constants';
import { useNavigation } from '@react-navigation/native';
// import { Icon } from 'react-native-vector-icons/FontAwesome';

const RecipeCard = () => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={recipeList}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => navigation.navigate('RecipeDetails', { item: item })}
                    style={{
                        backgroundColor: colors.COLOR_LIGHT,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 7,
                        borderRadius: 16,
                        marginVertical: 16,
                        alignItems: 'center',
                        paddingHorizontal: 3,
                        paddingVertical: 15,
                    }}>
                    <Image source={item.image} style={{ width: 150, height: 150, resizeMode: 'center' }} />
                    <Text>{item.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Text>{item.time}</Text>
                        <Text> | </Text>
                        <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                        {/* <Icon name="bell-o" size={24} color="#f96163" /> */}
                    </View>
                </Pressable>
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
                justifyContent: 'space-between',
            }}
        />
    );
};

export default RecipeCard;

/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { Image, Text, View, ScrollView } from 'react-native';
import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Icon } from 'react-native-vector-icons/FontAwesome';

const RecipeDetailsScreen = ({ navigation, route }) => {

    const { item } = route.params;
    // console.log(item);
    return (
        // <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: item.color, flex: 1 }}>
            {/* <SafeAreaView style={{ flexDirection: 'row' }}>
                <Pressable style={{ flex: 1 }} >
                    <Icon name="arrow-circle-left" size={28} color="red" onPress{() => navigation.goBack()} />
                </Pressable>
                <Icon name="heart-o" size={28} color="red" />
            </SafeAreaView> */}
            <View style={{
                backgroundColor: '#fff', flex: 1, marginTop: 240, borderTopLeftRadius: 56,
                borderTopRightRadius: 56, alignItems: 'center', paddingHorizontal: 16,
            }}>
                <View style={{ height: 300, width: 300, position: 'absolute', top: -150 }}>
                    <Image source={item.image} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </View>

                {/* Recipe Name */}
                <Text style={{ marginTop: 150, fontSize: 28, fontWeight: 'bold' }}>
                    {item.name}
                </Text>

                <View style={{ flex: 1 }}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Recipe Description */}
                        <Text style={{ fontSize: 20, marginVertical: 16 }}>
                            {item.description}
                        </Text>
                        {/* </View> */}

                        {/* Recipe Extra Details */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                            <View style={{ backgroundColor: 'rgba(255,0,0,0.38)', width: 100, paddingVertical: 26, borderRadius: 8, alignItems: 'center' }}>
                                <Text style={{ fontSize: 40 }}>⏰</Text>
                                <Text style={{ fontSize: 20, fontWeight: 400 }}>{item.time}</Text>
                            </View>

                            <View style={{ backgroundColor: 'rgba(135,206,235,0.8)', width: 100, paddingVertical: 26, borderRadius: 8, alignItems: 'center' }}>
                                <Text style={{ fontSize: 40 }}>🥣</Text>
                                <Text style={{ fontSize: 20, fontWeight: 400 }}>{item.difficulty}</Text>
                            </View>

                            <View style={{ backgroundColor: 'rgba(255,165,0,0.48)', width: 100, paddingVertical: 26, borderRadius: 8, alignItems: 'center' }}>
                                <Text style={{ fontSize: 40 }}>🔥</Text>
                                <Text style={{ fontSize: 20, fontWeight: 400 }}>{item.calories}</Text>
                            </View>
                        </View>

                        {/* Recipe Ingridents */}
                        <View style={{ alignSelf: 'flex-start', marginVertical: 22, marginBottom: 6 }}>
                            <Text style={{ fontSize: 22, fontWeight: '600' }}> Ingredients: </Text>
                            {
                                item.ingredients.map((ingredients, index) => {
                                    return (
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}
                                            key={index}>
                                            <View style={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 5 }}>
                                            </View>
                                            <Text style={{ fontSize: 18, marginLeft: 6 }}>{ingredients}</Text>
                                        </View>
                                    );
                                })
                            }
                        </View>

                        {/* Recipe Extra Details */}
                        <View style={{ alignSelf: 'flex-start', marginVertical: 22, marginBottom: 6 }}>
                            <Text style={{ fontSize: 22, fontWeight: '600' }}> Recipe Steps: </Text>
                            {
                                item.steps.map((steps, index) => {
                                    return (
                                        <Text key={index} style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}>{`${index + 1}) ${steps}`}</Text>
                                    );
                                })
                            }
                        </View>
                    </ScrollView >
                </View>
            </View>
        </View >
        //    </ScrollView >
    );
};

export default RecipeDetailsScreen;


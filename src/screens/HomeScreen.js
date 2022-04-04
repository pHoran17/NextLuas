import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import { Header } from '../components/Header';


export default class HomeScreen extends React.Component
{
    
    render()
    {
        return(
            <>

                <View style={styles.container}>
                    <Text>This is the Home Screen</Text>
                    <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}/>
                </View>
            </>
            
        );
        
    }
}

const renderItem = ({item}) => (
    <Item title={item.title} />
);

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.station}>{title}</Text>
    </View>    
);

const DATA = [
    {
        id: '00',
        title: 'Brides Glen'
    },
    {
        id: '01',
        title: 'Cherrywood'
    },
    {
        id: '02',
        title: 'Laughanstown'
    },
];
const styles = StyleSheet.create({
    container:{
        flex: 10,
        alignItems:'center'
    },
    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:8,
    },
    title:{
        fontSize:24
    },
});
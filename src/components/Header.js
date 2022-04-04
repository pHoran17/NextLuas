import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Header extends React.Component
{
    render()
    {
        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>NextLuas</Text>
                <TouchableOpacity 
                style={styles.button}
                onPress={this.navToPrevPage}>
                    <Text style={styles.buttonText}>Button</Text>
                </TouchableOpacity>
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    header:{
        flex: 2,
        flexDirection:'row',
        alignSelf:'stretch',
        paddingTop:5,
        paddingBottom: 5,
        backgroundColor: 'purple',
        top: 0,
        position: 'relative'    
    },
    headerText:{
        fontWeight:'bold',
        fontSize: 16,
        textAlign:'center',
        marginLeft:150,
        marginTop: 50,
        position: 'relative'
    },
    button:{
        padding: 5,
        marginRight:0,
        marginTop:20,
        position:'relative',
        right:0
    },
    buttonText:{
        fontWeight:'bold',
        fontSize: 12,
        textAlign:'center',
        position: 'relative'
    }
});
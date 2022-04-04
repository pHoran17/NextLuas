import axios from 'axios';
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import { Header } from '../components/Header';
//import axios from 'axios';


export default class HomeScreen extends React.Component
{
    /*useEffect(() => {
        axios.get('https://luasforecasts.rpa.ie/analysis/view.aspx?id=48').then(res => {
            if(res.status == 200){
                console.log(res);
            }
        }).catch(function(err){
            console.log(err);
        });
    },[]);
    */
   constructor(props)
   {
       super(props);
       this.state = {
           stationData:[]
       };
   }
   //Currently returns whole web page, create way to convert data in table below monitoring row to JSON
   async componentDidMount()
   {
    const url = 'https://luasforecasts.rpa.ie/analysis/view.aspx?id=48';

    const sRequest = {
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        responseType: 'json',
        url: url
    };
    await axios.get(url, sRequest).then(res => {
            if(res.status == 200){
                console.log(res.data);
                this.setState({stationData: res});
            }
        }).catch(function(err){
            console.log(err);
        });
    
   }


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
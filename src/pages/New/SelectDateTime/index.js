import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import api from "../../../services/api";
import DateInput from "../../../components/DateInput";
import Background from "../../../components/background";
import { Container, HourList, Hour, Title } from "./styles";

// pego a propriedade data e a onCancel que é a funçao que vai no botao de cancelamento
export default function SelectDateTime({ navigation }) {

    const [ date, setDate ] = useState(new Date());
    const [ hours, setHours ] = useState([]);
    const provider = navigation.getParam('provider');

    // Para passar o id como parametro da rota nos pegamos eles como parametro da rota
    useEffect(() => {
        async function loadAvailable() {
            const response = await api.get(`providers/${provider.id}/avaliable`, {
                params: {
                    date: date.getTime(),
                }
            });
            setHours(response.data);
        }
        loadAvailable();
    }, [date, provider.id]);

    function handleSelectHour(time) {
        navigation.navigate('Confirm', {
            provider,
            time,
        })
    }

    return (
            <Background>
                <Container>
                    <DateInput date={date} onChange={setDate}/>
                    <HourList 
                        data={hours}
                        keyExtractor={item => item.time}
                        renderItem={({ item }) => (
                            <Hour onPress={() => handleSelectHour(item.value)} enabled={item.avaliable}>
                                <Title> {item.time} </Title>
                            </Hour>
                        )}
                    />
                </Container>
            </Background>
    )
}

SelectDateTime.navigationOptions = ({navigation}) => ({
    title: 'Selecione o horário',
    headerLeft: () => (
        <TouchableOpacity onPress={() => {
            navigation.goBack();
        }} >
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    )
});
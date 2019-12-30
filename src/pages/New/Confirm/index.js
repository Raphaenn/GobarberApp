import React, { useMemo } from 'react';
import { TouchableOpacity } from "react-native";
import { formatRelative, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import Icon from "react-native-vector-icons/MaterialIcons";

import api from "../../../services/api";
import Background from "../../../components/background";
import { Container, Avatar, Name, Time, SubmitButton } from "./styles";

// pego a propriedade data e a onCancel que é a funçao que vai no botao de cancelamento
export default function Confirm({ navigation }) {

    const provider = navigation.getParam('provider');
    const time = navigation.getParam('time');
    //
    const timeFormatted = useMemo(
        () => formatRelative(parseISO(time), new Date(), {
            locale: pt,
        }), [time]
    )

    // fazer o post do agendamento e redirecionar para a tela do Dash
    async function handleAppointment() {
        await api.post('appointments', {
            provider_id: provider.id,
            date: time,
        });

        navigation.navigate('Dash')
    }

    return (
        <Background>
            <Container>
                <Avatar source={{ uri: provider.avatar ? 
                provider .avatar.url : 
                `https://api.adorable.io/avatars/50/${provider.name}.png`}} />

                <Name>{provider.name}</Name>
                <Time>{timeFormatted}</Time>

                <SubmitButton onPress={handleAppointment}>Confirmar agendamento</SubmitButton>
            </Container>
        </Background>
    )
}

Confirm.navigationOptions = ({navigation}) => ({
    title: 'Confirmar agendamento',
    headerLeft: () => (
        <TouchableOpacity onPress={() => {
            navigation.goBack();
        }} >
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    )
});
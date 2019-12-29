import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import Background from "../../components/background";
import Appointment from "../../components/Appointment";

import { Container, Title, List } from "./styles";

const data = [1, 2, 3, 4, 5];

export default function Dash() {

    return (
        <Background>
            <Container>
                <Title>Agendamentos</Title>

                <List
                    data={data}
                    keyExtractor={item => String(item)}
                    renderItem={({item}) => (
                        <Appointment data={item} />
                   )}
                ></List>
            </Container>
        </Background>
    )
}

Dash.navigationOptions = {
    tabBarLabel: 'Agendamentos',
    tabBarIcon: ({tintColor}) => <Icon name="event" size={20} color={tintColor} />
    // tintColor vem direto do react navigation
}
                        
import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

import api from "../../services/api";

import Background from "../../components/background";
import Appointment from "../../components/Appointment";

import { Container, Title, List } from "./styles";

function Dash({ isFocused }) {

    const [ appointments, setAppointments ] = useState([]);

    async function loadAppointments() {
        const response = await api.get('appointments');
        setAppointments(response.data);
    }

    // Loading em tempo real do dash com novos agendamentos
    useEffect(() => {
        if (isFocused) {
            loadAppointments()
        }
    }, [isFocused]);


    // função para cancelar o agendamento
    async function handleCancel(id) {
        const response = await api.delete(`/appointments/${id}`);

        // buscar o appontment e setar a propriedade canceledat
        setAppointments(
            appointments.map(appointment => appointment.id === id ?
                {
                    ...appointment,
                    canceled_at: response.data.canceled_at,
                } : appointment
                )
        );
    };

    return (
        <Background>
            <Container>
                <Title>Agendamentos</Title>

                <List
                    data={appointments}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => (
                        <Appointment onCancel={() => handleCancel(item.id)} data={item} />
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
        
export default withNavigationFocus(Dash);
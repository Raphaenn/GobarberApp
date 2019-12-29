import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import Background from "../../components/background";

import { Container } from "./styles";

export default function Profile() {

    return (
        <Background>
            <Container>
            </Container>
        </Background>
    )
}

Profile.navigationOptions = {
    tabBarLabel: 'Meu perfil',
    tabBarIcon: ({tintColor}) => <Icon name="person" size={20} color={tintColor} />
    // tintColor vem direto do react navigation - arquivo de routes
}
                        
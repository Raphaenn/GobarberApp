import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import api from "../../../services/api";
import Background from "../../../components/background";
import { Container, ProvidersList, Provider, Avatar, Name } from "./styles";

// pego a propriedade data e a onCancel que é a funçao que vai no botao de cancelamento
export default function SelectProvider({ navigation }) {

    const [ providers, setProviers ] = useState([]);

    useEffect(() => {
        async function loadProviders() {
            const response = await api.get('providers');

            setProviers(response.data);
        }
        loadProviders();
    }, []);

    return (
            <Background>
                <Container>
                    <ProvidersList 
                        data={providers}
                        keyExtractor={provider => String(provider.id)}
                        renderItem={({item: provider}) => (
                            // Provider como é um botao ele faz o navigate passando o provider como parametro
                            <Provider onPress={() => navigation.navigate('SelectDateTime', { provider })} >
                                <Avatar source={{ uri: provider.avatar ? 
                                    provider .avatar.url : 
                                    `https://api.adorable.io/avatars/50/${provider.name}.png`}} />
                                <Name> {provider.name} </Name>
                            </Provider>
                        )}
                    />
                </Container>
            </Background>
    )
}


SelectProvider.navigationOptions = ({navigation}) => ({
    title: 'Selecione o prestador',
    headerLeft: () => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Dash')
        }} >
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    )
});

// A navigationOptions options pode ser uma funcao e assim podemos pegar a propriedade navigation

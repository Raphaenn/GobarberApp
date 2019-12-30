import React, { useMemo } from 'react';
import { parseISO, formatRelative } from "date-fns"
import pt from "date-fns/locale/pt";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";

import { Container, Left, Avatar, Info, Name, Time } from "./styles";

// pego a propriedade data e a onCancel que é a funçao que vai no botao de cancelamento
export default function Appointment({ data, onCancel }) {

    const dateParsed = useMemo(
        () => {
            return formatRelative(parseISO(data.date), new Date(), {
                locale: pt,
                addSuffix: true,
            });
        }, [data.date]
    );

    return (
            <Container past={data.past}>
                <Left>
                    <Avatar source={{ uri: data.provider.avatar ? 
                        data.provider.avatar.url : 
                        `https://api.adorable.io/avatars/50/${data.provider.name}.png`}} />

                    <Info>
                        <Name>{data.provider.name}</Name>
                        <Time>{dateParsed}</Time>
                    </Info>
                </Left>

                { data.cancelable && !data.canceled_at && (
                    <TouchableOpacity onPress={onCancel} >
                    <Icon  name="event-busy" size={20} color="#f64c75" />
                </TouchableOpacity>
                )}
            </Container>
    )
}


import React, { useState, useMemo } from 'react';
import { DatePickerAndroid } from "react-native";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, DateButton, DataText } from "./styles";

// pego a propriedade data e a onCancel que é a funçao que vai no botao de cancelamento
export default function DateInput({ date, onChange}) {

    const [ opened, setOpened ] = useState(false);

    const dateFormatted = useMemo(
        () => 
            format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt}), [date]
    )

    // função para fazer o calendário do android
    async function handleOpenPicker() {
        const { action, year, month, day } = await DatePickerAndroid.open({
            mode: 'spinner',
            date,
        })

        // verifca se o usuário selecionou uma data
        if(action === DatePickerAndroid.dateSetAction) {
            const selectedDate = new Date(year, month, day);

            onChange(selectedDate);
        }
    }

    return (
        <Container>
            <DateButton onPress={handleOpenPicker}>
                <Icon name="event" size={20} color="#fff"/>
                <DataText> {dateFormatted} </DataText>
            </DateButton>

            {
                opened && (
                    <Picker>
                        <DatePickerIOS 
                            date={date}
                            onDateChange={onChange}
                            minimumDate={new Date()}
                            minuteInterval={60}
                            locale='pt'
                            mode="date"
                        />
                    </Picker>
                )
            }

        </Container>
    )
};
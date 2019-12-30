import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from "react-native";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import Icon from "react-native-vector-icons/MaterialIcons";

// import Background from "../../../components/background";
import { Container, DateButton, DataText, Picker } from "./styles";

// pego a propriedade data e a onCancel que é a funçao que vai no botao de cancelamento
export default function DateInput({ date, onChange}) {

    const [ opened, setOpened ] = useState(false);

    const dateFormatted = useMemo(
        () => 
            format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt}), [date]
    )

    return (
        <Container>
            <DateButton onPress={() => setOpened(!opened)}>
                <Icon name="event" size={20} color="#fff"/>
                <DataText> {dateFormatted} </DataText>
            </DateButton>

            {/* mostra o DatePicker somente se opened */}
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
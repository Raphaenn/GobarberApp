import styled from "styled-components/native";
import { Platform } from "react-native";

import Button from "../../components/Button";
import Input from "../../components/Input";

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding'
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const Form = styled.View`
    align-self: stretch; /* Matem o tamanho do form da largura correta */
    margin-top: 50px;
`; 

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
    margin-top: 20px;
`;

export const SignLinkText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
`;
import React from 'react';
import { Image } from 'react-native';

import logo from "../../assets/logo.png";
import Background from "../../components/background";

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from "./styles";

export default function SignIn({ navigation }) {
    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>
                    <FormInput 
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu email"
                    />

                <FormInput 
                        icon="lock-outline"
                        secureTextEntry /* colocar pontinho no lugar da senha */
                        keyboardType="email-address"
                        placeholder="Digite sua senha"
                    />

                    <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignUp')} >
                    <SignLinkText>Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    )
}
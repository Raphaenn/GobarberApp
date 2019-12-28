import React from 'react';
import { Image } from 'react-native';

import logo from "../../assets/logo.png";
import Background from "../../components/background";

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from "./styles";

export default function SignUp({ navigation }) {
    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>

                    <FormInput 
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu nome completo"
                    />

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

                    <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignIn')} >
                    <SignLinkText>Já Possuo um Conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    )
}
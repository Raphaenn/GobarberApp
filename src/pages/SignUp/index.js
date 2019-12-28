import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from "../../assets/logo.png";
import Background from "../../components/background";

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from "./styles";

export default function SignUp({ navigation }) {

    const emailRef = useRef();
    const passwordRef = useRef();

    function handlesubmit() {

    }

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
                        returnKeyType="next"
                        onSubmitEditing={() => emaildRef.current.focus() }
                    />

                    <FormInput 
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu email"
                        ref={passwordRef}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus() }
                    />

                <FormInput 
                        icon="lock-outline"
                        secureTextEntry /* colocar pontinho no lugar da senha */
                        keyboardType="email-address"
                        placeholder="Digite sua senha"
                        ref={passwordRef}
                    />

                    <SubmitButton onPress={handlesubmit}>Criar conta</SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignIn')} >
                    <SignLinkText>Já Possuo um Conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    )
}
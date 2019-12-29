import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/logo.png";
import Background from "../../components/background";
import { signInRequest } from "../../store/modules/auth/actions";

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from "./styles";

export default function SignIn({ navigation }) {

    const dispatch = useDispatch();
    const passwordRef = useRef();

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const loading = useSelector(state => state.auth.loading);

    function handlesubmit() {
        dispatch(signInRequest(email, password))
    }

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
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus() }
                        value={email}
                        onChangeText={setEmail} /* receber o texto de email */
                    />

                <FormInput 
                        icon="lock-outline"
                        secureTextEntry /* colocar pontinho no lugar da senha */
                        keyboardType="email-address"
                        placeholder="Digite sua senha"
                        ref={passwordRef}
                        value={password}
                        onChangeText={setPassword} /* receber o texto de email */
                    />

                    <SubmitButton loading={loading} onPress={handlesubmit}>Acessar</SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignUp')} >
                    <SignLinkText>Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    )
}

// const passwordRef = useRef(); + returnKeyType="next" onSubmitEditing={() => passwordRef.current.focus() } ref={passwordRef} sao usados para passar referencias de teclado para os inputs. dessa forma ao clicar em next no teclado, o foco do input muda para o campo debaixo
                        
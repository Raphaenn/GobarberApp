import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from "react-redux";

import logo from "../../assets/logo.png";
import Background from "../../components/background";
import { signUpRequest } from "../../store/modules/auth/actions";

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from "./styles";

export default function SignUp({ navigation }) {

    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handlesubmit() {
        dispatch(signUpRequest(name, email, password))
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
                        onSubmitEditing={() => emailRef.current.focus() }
                        value={name}
                        onChangeText={setName}
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
                        value={email}
                        onChangeText={setEmail}
                    />

                <FormInput 
                        icon="lock-outline"
                        secureTextEntry /* colocar pontinho no lugar da senha */
                        keyboardType="email-address"
                        placeholder="Digite sua senha"
                        ref={passwordRef}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <SubmitButton loading={loading} onPress={handlesubmit}>Criar conta</SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignIn')} >
                    <SignLinkText>Já Possuo um Conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    )
}
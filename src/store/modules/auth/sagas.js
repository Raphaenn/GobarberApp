import { takeLatest, call, put, all } from 'redux-saga/effects'; 
import { Alert } from "react-native";

import api from '../../../services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
        email,
        password,
    });

    const { token, user } = response.data;    

    // validação se usuário é provider e nao deixa logar
    if (user.provider) {
        Alert.alert('Erro no login', 'Usuário sem acesso');
        return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    // passa o token e usuário para a action
    yield put(signInSuccess(token, user));

    // faz a navegação para a rota dashboard
    /* history.push('/dashboard'); */
    } catch (err) {
        Alert.alert("Falha na autenticação", "Houve um erro no login")
        yield put(signFailure());
    }
}

// cadsatro de usuário no sistema
export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        // rota users é a definida no back para criar uma novo usuário
        yield call(api.post, 'users', {
            name,
            email,
            password,
        });

        /* history.push('/'); */

    } catch (err) {
        Alert.alert("Falha no cadastro", "Houve um erro no cadastro");
        yield put(signFailure())
    }
}

// fazer com que todas as reqs a api incluam o token no header da aplicação
export function setToken({ payload }) {
    if(!payload) return;

    const { token } = payload.auth

    if(token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function signOut() {
    /* history.push('/'); */
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
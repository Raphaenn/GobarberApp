import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from "react-native";

import api from "../../../services/api";
import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest } = payload.data

        // Object.assign() serve para unir dois objetos
        const profile = Object.assign(
            {name, email},
            rest.oldPassword ? rest : {}
        );

        // rota users fazendo um put e passando as informacoes dentro de profile
        const response = yield call(api.put, 'users', profile)

        Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');

        yield put(updateProfileSuccess(response.data))

        } catch (err) {
            Alert.alert("Erro ao atualizar" ,'Erro ao atualizar perfil, confira os dados!');
            yield put(updateProfileFailure())
        }
};

export default all([
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);
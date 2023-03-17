import { authReducer } from "../../../../src/auth/context/authReducer";
import { types } from "../../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {

    const initialState = {
        logged: false,
    };

    test('debe de retornar el estado por defecto', () => {

        const newState = authReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('login debe autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'Sidow'
            }
        }

        const newState = authReducer(initialState, action);
        expect(newState).toEqual({logged: !initialState.logged, user: action.payload});
    });

    test('logout debe borrar nombre de usuario y logged en false', () => {

        const user = {
            logged: true,
            user: {
                id: '123',
                name: 'Sidow'
            }
        };

        const action2 = {
            type: types.logout,
        }

        const newState = authReducer(user, action2);

        expect(newState).toEqual({logged: false});
    });

});
import { types } from "../../../../src/auth/types/types";

describe('Pruebas en types', () => {

    test('deben de coincidir con los types', () => {

        expect(types).toEqual({
            login: '[AUTH] Login',
            logout: '[AUTH] Logout',
        })
    });
});
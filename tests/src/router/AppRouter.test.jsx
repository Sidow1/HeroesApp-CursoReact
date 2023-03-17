import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { AppRouter } from "../../../src/router/AppRouter";

describe('Pruebas en <AppRouter />', () => {

    test('debe de mostrar el login si no está auntenticado', () => {

        const contextValue = {
            logged: false,
        };

        render(
            <MemoryRouter initialEntries={['/dc']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(2);
    });

    test('debe de mostrar el componente de dc si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Sidow'
            }
        };

        render(
            <MemoryRouter initialEntries={['/dc']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('DC Comics')).toBeTruthy();
    });
});
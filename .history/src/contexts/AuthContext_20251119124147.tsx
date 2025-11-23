import { createContext, useState, type ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";


interface AuthContextProps{
    usuario: UsuarioLogin
    handleLogout(): void 
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}

/**
 * React context that provides authentication state and actions throughout the app.
 *
 * The context value conforms to the AuthContextProps interface and typically
 * contains the current user (or null), authentication token/status, and functions
 * to perform authentication-related operations (e.g. login, logout, refreshToken).
 *
 * Note: the exported context is created with an empty object cast to AuthContextProps
 * as a placeholder. Consumers should access this context only when wrapped by the
 * corresponding provider to avoid relying on the placeholder default.
 *
 * @example
 * // inside a component
 * const { user, login, logout } = useContext(AuthContext)
 *
 * @see AuthContextProps
 */
export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){

    // Inicializando o Estado usuario (Guardar os dados do usuário autenticado)
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    });

    // Inicializar o Estado isLoading (Exibir e Ocultar o loader no Formulário de login)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Implementação da Função de login (Autenticação no Backend)
    async function handleLogin(usuarioLogin: UsuarioLogin){
        setIsLoading(true);

        try{
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            alert("Usuário autenticado com sucesso!");
        }catch(error){
            console.error(error);
            alert("Os dados do usuários estão inconsistentes!")
        }

        setIsLoading(false);
    }

    // Implementação da Função de logout (desconectar o usuário)
    function handleLogout(){
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        });
    }

    return(
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )

}
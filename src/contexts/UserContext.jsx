import { createContext, useReducer, useContext } from "react";
import userReducer, { initialUserState } from "../reducers/UserReducer";

const UserContext = createContext();

export function UserProvider({ children }) {

    const [state, dispatch] = useReducer(userReducer, initialUserState);

    return (
        <UserContext.Provider value={{ user: state.user, isLoading: state.isLoading, userData: state.userData, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}

export default function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

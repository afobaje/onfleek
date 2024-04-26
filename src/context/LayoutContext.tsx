import { createContext, useContext, useState } from "react";

export const LayoutContextProvider = createContext('dark')


export function useLayoutContext() {
    return useContext(LayoutContextProvider)
}

export default function LayoutContext({ children }: { children: React.ReactNode }) {
    const [toggle, setToggle] = useState('dark')
    return (
        <LayoutContextProvider.Provider value={toggle}>
            {children}
        </LayoutContextProvider.Provider>
    )
}

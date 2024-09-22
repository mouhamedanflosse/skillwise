"use client"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const useNvigation = () => {
    const pathName = usePathname()
    const [section, setSetiom] = useState<string>(pathName)
    const onSetSection = (path: string) => setSetiom(path)

    return { section, onSetSection }
}

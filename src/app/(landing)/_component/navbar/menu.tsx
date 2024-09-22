"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useNvigation } from "@/hooks/navigation"

interface Props {
    orientation: "desktop" | "mobile"
}

export default function LnadingPageMenu({ orientation }: Props) {
    const { section, onSetSection } = useNvigation()
    switch (orientation) {
        case "desktop":
            return (
                <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl">
                    <CardContent className="p-0 flex gap-2"></CardContent>
                </Card>
            )
        case "mobile":
            return <div></div>

        default:
            return <div></div>
    }
}

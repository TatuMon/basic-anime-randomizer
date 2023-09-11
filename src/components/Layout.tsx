import { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <head>
                <title>Basic Anime Randomizer</title>
                <link rel="stylesheet" href="css/styles.css" />
            </head>
            <body>
                { children }
            </body>
        </>
    )
}

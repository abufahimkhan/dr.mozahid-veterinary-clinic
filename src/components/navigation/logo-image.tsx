import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { allImages } from "../assets/images"

export function Logo() {
    const { theme, systemTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme

    return (
        <Link href="/" className="flex items-center ml-4">
            {currentTheme === "dark" ? (
                <Image
                    src={allImages.lDark} // replace with your dark logo
                    alt="VetCare Dark Logo"
                    width={90}
                    height={20}
                    priority
                />
            ) : (
                <Image
                        src={allImages.lWhite} // replace with your light logo
                    alt="VetCare Light Logo"
                    width={100}
                    height={40}
                    priority
                />
            )}
        </Link>
    )
}
import Link from "next/link"

export  default function Header() {
    return (
        <div className="header">
            <ul className="header-button">
            <Link href= {"/"}>
                <li>Home</li>
            </Link>
                <Link href= {"/about-us"}>
                <li>About</li>
                </Link>
                <Link href= {"/contact"}>
                <li>Contact</li>
                </Link>
              
            </ul>
        </div>
    );
}
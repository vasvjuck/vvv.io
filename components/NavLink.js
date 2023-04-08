import Link from "next/link";
import cn from "clsx";
import { useRouter } from "next/router";

export default function NavLink({ href, children }) {
    const { pathname } = useRouter();
    const slug = `/${pathname.split("/")[1]}`;
    const active = slug === href;

    return (
        <Link
            className={cn(
                "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
                active ? "bg-secondaryA text-primary" : "text-secondary"
            )}
            href={href}
        >
            {children}
        </Link>
    );
}

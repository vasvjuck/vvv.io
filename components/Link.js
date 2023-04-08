import NextLink from "next/link";
import cn from "clsx";

const Link = ({ children, href, underline, className, ...props }) => {
    const isExternal = !href.toString().startsWith("/");
    return (
        <NextLink
            className={cn(
                (isExternal || underline) && "underline underline-offset-4",
                className
            )}
            href={href}
            target={isExternal ? "_blank" : undefined}
            {...props}
        >
            {children}
        </NextLink>
    );
}

export default Link;

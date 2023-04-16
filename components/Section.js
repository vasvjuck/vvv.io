import cn from "clsx";

const Section = ({
  heading,
  headingAlignment,
  className,
  children,
}) => {
  return (
    <section className={cn("items-center md:items-start flex flex-col md:flex-row gap-2 md:gap-9 col-reverse", className)}>
      <h2
        className={cn(
          "text-secondary shrink-0",
          headingAlignment === "right" && "md:text-right"
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}

export default Section;
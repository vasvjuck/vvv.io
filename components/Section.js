import cn from "clsx";

const Section = ({
  heading,
  headingAlignment,
  children,
}) => {
  return (
    <section className="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
      <h2
        className={cn(
          "md:w-28 text-secondary shrink-0",
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
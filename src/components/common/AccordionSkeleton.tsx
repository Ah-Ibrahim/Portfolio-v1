function AccordionSkeleton({ count }: { count: number }) {
  const loadingItems = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className="border-b border-dark-gray px-4 md:px-6 md:py-4 py-2 text-3xl font-bold-condensed uppercase tracking-tighter md:text-4xl lg:md:text-5xl"
    >
      loading...
    </div>
  ));
  return <div>{loadingItems}</div>;
}
export default AccordionSkeleton;

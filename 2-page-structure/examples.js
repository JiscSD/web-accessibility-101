// Good - correct structure
const HeadingItemsGood = ({ item }) => (
    <>
      <h1>{item.term}</h1>
      <h2>{item.description}</h2>
    </>
);

// Bad - not semantic, can only use one <h1> per page
const HeadingItemsBad = ({ item }) => (
    <>
      <h1>{item.term}</h1>
      <h1>{item.description}</h1>
    </>
);
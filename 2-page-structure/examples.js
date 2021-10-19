// example of a React fragment (shorthand) without any props or keys on the Fragment tag

function HeadingItems({ item }) {
  return (
    <>
      <h1>{item.term}</h1>
      <h2>{item.description}</h2>
    </>
  );
}

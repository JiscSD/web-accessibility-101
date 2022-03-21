structure, semantic html, landmarks

### Introduction

When you use HTML tags 'semantically', you use the word in a way that is properly aligned with the meaning of the word. The tag will have meaning in relation to the information inside it.  
For example, `<form>`, `<table>` and `<nav>` are semantic elements.  
But `<div>` and `<span>` are non-semantic elements.

---

Using Material UI as a component library means that components may be wrapped in excess div elements, so getting in Semantic HTML around these components will be really beneficial for the accessibility of your product.

---

From [React docs:](https://reactjs.org/docs/accessibility.html)  
Sometimes we break HTML semantics when we add `<div>` elements to our JSX to make our React code work, especially when working with lists (`<ol>`, `<ul>` and `<dl>`) and the HTML `<table>`. In these cases we should rather use React Fragments to group together multiple elements.

Here is an example of a React fragment (shorthand) without any props or keys on the Fragment tag

```
const HeadingItems = () => {
  return (
    <>
      <h1>Heading one</h1>
      <h2>Heading two</h2>
    </>
  );
}
```

---

## Useful Tools

---

## Bibliography

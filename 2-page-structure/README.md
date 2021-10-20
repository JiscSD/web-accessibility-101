structure, semantic html, landmarks

Notes: div vs section

## What is Semantic HTML?
When you use HTML tags 'semantically', you use the word in a way that is properly aligned with the meaning of the word. The tag will have meaning in relation to the information inside it.  
For example, `<form>`, `<table>` and `<nav>` are semantic elements.  
But `<div>` and `<span>` are non-semantic elements.

---
Using Material UI as a component library means that components may be wrapped in excess div elements, so getting in Semantic HTML around these components will be really beneficial for the accessibility of your product.  

---
From [React docs:](https://reactjs.org/docs/accessibility.html)  
Sometimes we break HTML semantics when we add `<div>` elements to our JSX to make our React code work, especially when working with lists (`<ol>`, `<ul>` and `<dl>`) and the HTML `<table>`. In these cases we should rather use React Fragments to group together multiple elements.

If you want to check if your HTML is semantic, go to the [W3 Validator](https://validator.w3.org/#validate_by_input).

### Table

A table should only contain the following tags [*](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table): 

- `<caption>`
- `<colgroup>`
- `<thead>`
- `<tbody>`
- `<tr>`
- `<tfoot>`

Both `<thead>` and `<tbody>` can container zero or more `<tr>`.

The `<tr>` tag can contain any number of `<th>` and `<td>`.

An example of a semantic table would be:

```html
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Nathan</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Carly</td>
        </tr>
    </tbody>
</table>
```

Note that `<td>` and `<th>` can contain any [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#flow_content).
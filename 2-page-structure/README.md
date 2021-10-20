## What is Semantic HTML?
When you use HTML tags 'semantically', you use the word in a way that is properly aligned with the meaning of the word. The tag will have meaning in relation to the information inside it.  
For example, `<form>`, `<table>` and `<nav>` are semantic elements.  
But `<div>` and `<span>` are non-semantic elements.

Using Material UI as a component library means that components may be wrapped in excess div elements, so getting in Semantic HTML around these components will be really beneficial for the accessibility of your product.  

From [React docs:](https://reactjs.org/docs/accessibility.html)  
Sometimes we break HTML semantics when we add `<div>` elements to our JSX to make our React code work, especially when working with lists (`<ol>`, `<ul>` and `<dl>`) and the HTML `<table>`. In these cases we should rather use React Fragments to group together multiple elements.

If you want to check if your HTML is semantic, go to the [W3 Validator](https://validator.w3.org/#validate_by_input).

### When should I use `<div>`, `<section>` or `<article>`?

The `<div>` element is a generic container for [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#flow_content) and has no effect on the content/layout unless styled to do so.

The `<section>` element represents a generic section of a documentation. Sections should always have a heading, with very few exceptions.

Mozilla [comments on the possible exceptions](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section#using_a_section_without_a_heading) as being:

> Circumstances where you might see `<section>` used without a heading are typically found in web application/UI sections rather than in traditional document structures. In a document, it doesn't really make any sense to have a separate section of content without a heading to describe its contents. Such headings are useful for all readers, but particularly useful for users of assistive technologies like screenreaders, and they are also good for SEO.

The `<article>` element represents a self contained element of a document/page/site. In practice the `<article>` should be shareable/reusable. Examples of these are blog posts, user-submitted comments, an interactive widget or any other independent item of content.

For more information read this [article](https://bitsofco.de/sectioning-content-in-html5/) or checkout Mozilla's pages on [divs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div), [sections](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) and [articles](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/articles).

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

### Nav

### Footer

### Aside

### Header
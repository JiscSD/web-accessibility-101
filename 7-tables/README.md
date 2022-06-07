# Introduction

Tables display sets of data, and HTML tables allow web developers to arrange data into rows and columns.  
Any information or data that lends itself well to a tabular view (e.g. sales data, football leagues, or population statistics) can be shown in a table.  
Sighted users can visually scan and view the layout of a table, however these visual associations cannot be made when a table cannot be viewed.

---

**Contents**

1. [Best Practices](#best-practices)
1. [Examples](#examples)
1. [Useful Tools](##useful-tools)
1. [Bibliography](##bibliography)

---

# Best Practices

## Table Headers

:warning: **Always** add table headers `<th>` to tables to be fully accessible.  
Table headers should never be left empty.

Table Headers need to be associated with their data cells. For this, use the `<scope>` attribute. Within the table header, you can confirm the scope of the header by stating if it is a row or a column header. So there should be either `<th scope="col">` or `<th scope="row">` for each header included in your table.  
While screen readers may guess what scope a header is based on the table layout, assigning a scope makes this unambiguous.

## Table Captions

A caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it's about and decide if they want to read it.
Captions can be beneficial to people using screen readers and are recommended.

# Examples

## Standard Table

```html
<table>
    <caption>
        Personal Information
    </caption>
    <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Age</th>
    </tr>
    <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
    </tr>
    <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
    </tr>
</table>
```

## Transposed Table

This table has row headers rather than column headers.

```html
<table>
    <tr>
        <th scope="row">Date</th>
        <td>12 February</td>
        <td>24 March</td>
        <td>14 April</td>
    </tr>
    <tr>
        <th scope="row">Event</th>
        <td>Waltz with Strauss</td>
        <td>The Obelisks</td>
        <td>The What</td>
    </tr>
    <tr>
        <th scope="row">Venue</th>
        <td>Main Hall</td>
        <td>West Wing</td>
        <td>Main Hall</td>
    </tr>
</table>
```

## Useful Tools

-   Here is a checklist for accessible tables by [Deque University](https://dequeuniversity.com/checklists/web/tables)

---

## Bibliography

-   [W3 Web Accessibility Initiative - Table Concepts](https://www.w3.org/WAI/tutorials/tables/)
-   [W3 Schools - HTML Tables](https://www.w3schools.com/html/html_tables.asp)
-   [WebAIM, Creating accessible tables](https://webaim.org/techniques/tables/data)

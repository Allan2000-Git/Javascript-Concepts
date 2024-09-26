# Critical Rendering Path: https://www.geeksforgeeks.org/critical-rendering-path-flow/
- Process of converting the HTML, CSS and JS code into the pixels or displaying UI

## 5 steps in the process
1. DOM (Document Object Model)
2. CSSOM (CSS Object Model)
3. Render Tree
4. Layout
5. Paint

### DOM
Characters -------> Tokens -------> Nodes -------> DOM

Note: DOM construction is incremental

#### Characters
```
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
    </body>
</html>
```


#### Tokens
```
startTag: head
tag: meta, tag:link, startTag: title endTag: title
endTag: head
```

### CSSOM
Characters -------> Tokens -------> Nodes -------> DOM

Note: CSSOM is not incremental

### Render Tree
DOM + CSSOM

### Layout
Once the render tree is ready, it sets position or width + height for the respective elements

### Paint
Once calculations are done, the pixes are painted on the screen

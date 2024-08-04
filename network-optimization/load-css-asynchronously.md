# Load CSS asynchronously

## Both HTML and CSS are render blocking resources

```
<link rel="stylesheet" href="nonCritical.css" media="print" onload="this.media='all'">
<link rel="stylesheet" href="style1.css" media="print" onload="this.media='all'">

<!-- browser understands here that CSS is being loaded asynchronously -->
```

- There are priority given to each resources
- By default, browser sets priority of first 5 images to MEDIUM
- If the images are going to appear in the viewport, then browser sets the priority of those images to HIGH.
- CSS have priority than images
- Scripts & Images have low priority by default. But we can set priority to HIGH using 'fetchpriority' attribute in <img />.

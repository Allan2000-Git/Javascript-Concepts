# Load CSS asynchronously

## Both HTML and CSS are render blocking resources

```
<link rel="stylesheet" href="nonCritical.css" media="print" onload="this.media='all'">
<link rel="stylesheet" href="style1.css" media="print" onload="this.media='all'">

<!-- browser understands here that CSS is being loaded asynchronously -->
```
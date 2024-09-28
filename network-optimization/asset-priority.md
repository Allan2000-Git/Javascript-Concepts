# Asset priority

- Different types of assets (stylesheets, images, js files) have different priority in which they're loaded and executed
- We can assign priority to our assets also. But how?

- https://www.debugbear.com/blog/resource-hints-rel-preload-prefetch-preconnect
- https://dev.to/dave3130/optimize-website-load-performance-using-preload-prefetch-preconnect-3h7g

```
<!-- PRELOADING STARTS -->
<link rel="preload" as="script" href="script2.js">
<link rel="preload" as="style" href="style2.css">
<!-- PRELOADING ENDS -->

<!-- Here we're only loading the files not executing -->
```

```
<!-- PREFETCH START-->
<link rel="prefetch" href="index3.html">
<link rel="prefetch" as="script" href="script3.js">
<!-- PREFETCH ENDS -->

<!-- Use case: User Onboarding process (when user is in page1, prefetch page2. So when user goes to page2, its loaded from prefetch cache) -->
```

```
<!-- PRECONNECT START-->
<!-- <link rel="preconnect" href="https://api.my-app.com/" /> -->
<!-- PRECONNECT ENDS -->

<!-- when accessing resources from different domain, we can start the handshake between the 2 domains early -->
```

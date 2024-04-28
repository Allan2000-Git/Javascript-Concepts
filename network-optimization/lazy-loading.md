# Lazy Loading

As soon page detects `src` attribute in image, it download all the images at once. Instead we can provide a atrribute `loading="lazy"`,
where as we scroll through the page and we arrive at particular viewport, the next ste image/images will get download. So network calls will be made in batches.
export function getImgUrl(name) {
    return new URL(`../assets/books/${name}`, import.meta.url).href;  // Ensure .href for proper path
  }
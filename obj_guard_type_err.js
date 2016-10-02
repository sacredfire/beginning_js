// A verbose and explicit technique var len = undefined;
if (book) {
  if (book.subtitle) {
    len = book.subtitle.length
  }
}

// A concise and idiomatic alternative to get subtitle length or undefined:
var len = book && book.subtitle && book.subtitle.length

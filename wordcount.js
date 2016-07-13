var text = 'Think about all the fucking possibilities. Design is all about fucking relationships—the relationship of form and content, the relationship of elements, the relationship of designer and user. You need to sit down and sketch more fucking ideas because stalking your ex on facebook isn’t going to get you anywhere. If you’re not being fucking honest with yourself how could you ever hope to communicate something meaningful to someone else? Form follows fucking function. What’s important is the fucking drive to see a project through no matter what. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the fucking possibility of failure.'
var arr = text.split(' ')
var newArr = []

/*
function countWord (word) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i].match(word)) {
      newArr.push(arr[i])
    }
  }
  return newArr.length
}*/

function countWord (word) {
  // var i = 0
  for (var i = 0; arr[i]; ++i) {
    if (arr[i].match(word)) {
      newArr.push(arr[i])
    }
    // ++i
  }
  return newArr.length
}

console.log(countWord('fucking'))

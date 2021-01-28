const search = document.getElementById('pinetFilter')
const navItems = Array.from(document.querySelectorAll('.nav__item'))
const functionSet = new Set(navItems.map(el => el.getAttribute('name').toLowerCase()))

/* eslint-disable no-labels */

/* global hljs, location */

hljs.initHighlightingOnLoad()

// FuzzySearch taken directly from kyanite!
const fuzzySearch = (needle, haystack) => {
  const hLen = haystack.length
  const nLen = needle.length
  let j = 0

  if (nLen > hLen) {
    return false
  }

  if (nLen === hLen) {
    return needle === haystack
  }

  outer: for (let i = 0; i < nLen; i++) {
    const nChar = needle.charCodeAt(i)

    for (j; j < hLen; j++) {
      if (haystack.charCodeAt(j) === nChar) {
        continue outer
      }
    }

    return false
  }

  return true
}

search.onkeyup = ({ key, target }) => {
  const search = target.value.toLowerCase()

  if (key.toLowerCase() === 'enter') {
    if (functionSet.has(search)) {
      location.hash = search

      return true
    }

    for (const func of functionSet) {
      if (fuzzySearch(search, func)) {
        location.hash = func

        return true
      }
    }
  }

  return false
}

search.oninput = ({ target }) => {
  const val = target.value.toLowerCase()

  navItems.forEach(el => {
    if (fuzzySearch(val, el.innerText.toLowerCase()) ||
      fuzzySearch(val, el.getAttribute('data-cat').toLowerCase())) {
      el.classList.remove('hidden')
    } else {
      el.classList.add('hidden')
    }
  })
}

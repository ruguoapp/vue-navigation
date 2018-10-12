export function genKey() {
  // const t  = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  const t = 'xxxxxxxx'
  return t.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export function getKey(route, keyName) {
  return `${route.name || route.path}?${route.query[keyName]}`
}

export function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  return false
}

export function isObjEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }
  else {
    const keys1 = Object.getOwnPropertyNames(obj1)
    const keys2 = Object.getOwnPropertyNames(obj2)
    if (keys1.length !== keys2.length) {
      return false
    }
    for (let i = 0; i < keys1.length; i++) {
      if (obj1[keys1[i]] !== obj2[keys1[i]]) {
        return false
      }
    }
    return true
  }
}



export const saveToken = (token) => {
  if(token && typeof token === 'string') {
    localStorage.setItem('authToken', token)
  }
  else {
    console.error('invalid or null token')
  }
}

export const parseRichText = (richTextObject) => {
  const parser = new DOMParser()
  return Object.fromEntries(Object.entries(richTextObject).map(([key, value]) => {
    if (key === 'id') {
      return [key, value]
    }
    // const htmlDoc = parser.parseFromString(txt, 'text/html');
    // every rich text starts with < 
    else if (value[0] === '<') {
      return [key, parser.parseFromString(value, 'text/html')]
    }
  }))
}

export const splitText = (text) => {
    if (text === " ") return
    const punctuationIndex = text.search(/[.,;:?!]/);
    
  let title, content;
  if (punctuationIndex !== -1) {
    title = text.substring(0, punctuationIndex).trim();
    content = text.substring(punctuationIndex + 1).trim();
  } else {
    title = text.trim();
    content = '';
  }

  if (punctuationIndex === 0) {
    const nextPunctuationIndex = content.search(/[.,;:?!]/);
    if (nextPunctuationIndex !== -1) {
      title = `${title}. ${content.substring(0, nextPunctuationIndex).trim()}`;
      content = content.substring(nextPunctuationIndex + 1).trim();
    }
  }

  if (punctuationIndex === 0 && text[punctuationIndex] === ',') {
    const commaIndex = content.indexOf(',');
    if (commaIndex !== -1) {
      title = `${title}, ${content.substring(0, commaIndex).trim()}`;
      content = content.substring(commaIndex + 1).trim();
    }
  }

  return { title, content };
}

export const trimStr = (str) => {
 if (str.length > 30) {
   return str.slice(0, 30) + '...';
 }
 return str;
}

export const formatDateInNote = dateString => {
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return `${month} ${day}, ${year} at ${time}`;
};
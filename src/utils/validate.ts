export function isValidEmail(email: string) {
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailPattern.test(email);
}

export function checkAndRemoveSpaces(inputString: string) {
  if (inputString.length > 3) {
    return inputString.replace(/\s/g, '');
  } else {
    return false;
  }
}

export function isPictureURL(url: any) {
  const imageExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.bmp',
    '.svg',
    '.webp',
  ];

  const fileExtension = url.split('.').pop().toLowerCase();
  return imageExtensions.includes(`.${fileExtension}`);
}

export function isText(text: string) {
  const words = text.split(/\s+/);

  return words.length > 10;
}

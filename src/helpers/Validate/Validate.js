export const validateHTTPS = url => url ? new RegExp('https://').test(url.toLocaleLowerCase()) : false;

export const validateHaveCookieName = name => name ? new RegExp(`${name}=`).test(document.cookie) : false;

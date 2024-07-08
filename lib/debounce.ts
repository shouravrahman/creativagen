export function debounce(fn,wait){
 let timeout;
 return function execFn(..args){
   const later = () => {
    clearTimeout(timeout)
    fn(...args)

   }
   clearTimeout(timeout)
    timeout = setTimeout(later, wait);
 }



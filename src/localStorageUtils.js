export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  export const setToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  
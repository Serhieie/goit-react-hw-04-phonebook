const addToLocalStorage = contacts => {
  if (!contacts) {
    return;
  }
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

const removeFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('contacts'));
};

export { addToLocalStorage, removeFromLocalStorage };

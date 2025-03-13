const getStoredCart = () => {
    const storeCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storeCartString)
    }
    return [];
}
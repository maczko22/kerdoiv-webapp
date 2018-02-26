export const loginUser = () => {
    localStorage.clear();

    localStorage.setItem('isLoggedIn', true);
};

export const logoutUser = () => {
    localStorage.setItem('isLoggedIn', false);
    window.location.reload();
    window.location = '/#/';
};

export const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn');
};

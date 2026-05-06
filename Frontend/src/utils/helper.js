export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (fullname) => {
    if (!fullname) return "";

    const names = name.split(" ");
    let initials = "";

    for (let i = 0; i < Math.min(names.length, 2); i++) {
        initials += names[i].charAt(0).toUpperCase();
    }

    return initials;
};

export const addThousandSeparator = (num) => {
    if (num === null || num === undefined || isNaN(num)) return "0";

    const [intergerPart, decimalPart] = num.toString().split(".");
    const formattedInteger = intergerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;

};
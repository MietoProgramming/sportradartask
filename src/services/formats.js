export const formatDate = (date) => {
    if (date) {
        const TIndex = date.indexOf("T");
        return date.slice(0, TIndex);
    }
    else return '';

};
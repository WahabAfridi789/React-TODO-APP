const useCreateDate = () => {
    const dateObj = new Date();
    const month = dateObj.getMonth();
    let monthName;
    switch (month) {
        case 0: monthName = 'January'; break;
        case 1: monthName = 'February'; break;
        case 2: monthName = 'March'; break;
        case 3: monthName = 'April'; break;
        case 4: monthName = 'May'; break;
        case 5: monthName = 'June'; break;
        case 6: monthName = 'July'; break;
        case 7: monthName = 'August'; break;
        case 8: monthName = 'September'; break;
        case 9: monthName = 'October'; break;
        case 10: monthName = 'November'; break;
        case 11: monthName = 'December'; break;
        default: monthName = 'Unknown';
    }
    
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();
    const time = "["+dateObj.getHours() + ':' + dateObj.getMinutes() +"]";

    const fullDate = `${monthName} ${date}, ${year}, ${time}`;
    return fullDate;
}

export default useCreateDate;
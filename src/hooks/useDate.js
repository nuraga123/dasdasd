const useDate = () => {
    const date = new Date();

    const months = {
        0: 'january',
        1: 'february',
        2: 'march',
        3: 'april',
        4: 'may',
        5: 'june',
        6: 'july',
        7: 'august',
        8: 'september',
        9: 'october',
        10: 'november',
        11: 'december',
    };

    const daysOfWeek = {
        1: 'monday',
        2: 'tuesday',
        3: 'wednesday',
        4: 'thursday',
        5: 'friday',
        6: 'saturday',
        7: 'sunday',
    };

    function addZero(numb) {
        return numb < 10 ? `0${numb}` : numb;
    }

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const time = `${addZero(date.getHours())} : ${addZero(date.getMinutes())}`;

    return {
        day,
        month,
        year,
        dayOfWeek,
        time
    };
}

export default useDate;
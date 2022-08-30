import axios from 'axios';

const lat = '40.5854765';
const lon = '49.6317411'
const appid = '56aa4c82084e1cc2915dd716d9a52da9';

export const findForecastDays = (list) => {
    list?.forEach(({ dt_txt }) => {
        /* 
         *  1. Берем все даты кроме текущей ( зная дату сегодняшнего дня исключить эти элементы )
        
         * 2. Берем только 12 : 00 и 24 : 00
        
         */

        /**
         * 1____
         * new Date('2022-05-07 12:00:00').getDate() => 7
         * new Date().getDate() => 2
         * 
         * 2____
         * '2022-05-07 12:00:00'.includes('12:00:00') => true
         * '2022-05-07 12:00:00'.includes('15:00:00') => false
        */
        const day = '12:00:00';
        const night = '00:00:00';

        const time = dt_txt.substr(11);

        const number = dt_txt.substr(0, 10);

        const toDay = new Date().toISOString().substr(0, 10)

        //  1. Берем все даты кроме текущей ( зная дату сегодняшнего дня исключить эти элементы )
        if (toDay.includes(number)) {
            return number;
        }

        //  2. Берем только 12 : 00 и 24 : 00
        if (day !== time && night !== time) {
            return time;
        }

        // console.log(dt_txt)
    });

    const filteredList = list?.filter(({ dt_txt }) => {
        function isToday(date) {
            const dateDay = new Date(date).getDate();
            const dateMonth = new Date(date).getMonth();
            const dateYear = new Date(date).getFullYear();

            const todayDay = new Date().getDate();
            const todayMonth = new Date().getMonth();
            const todayYear = new Date().getFullYear();

            return (dateDay === todayDay) &&
                (dateMonth === todayMonth) &&
                (dateYear === todayYear);
        }

        function isRightTime(date) {
            const dayTime = '12:00:00';
            const nightTime = '00:00:00';

            return date.includes(dayTime) || date.includes(nightTime);
        }

        return !isToday(dt_txt) && isRightTime(dt_txt);
    });

    console.log(filteredList);
}

const onSuccess = ({ data }) => {
    findForecastDays(data.list);
};

const onError = ({ data }) => {
    console.log(data);
}

axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appid}`)
    .then(onSuccess)
    .catch(onError);

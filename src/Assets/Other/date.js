let date = () => {
    let fMonth = '';
    let Data = new Date();
    let Year = Data.getFullYear();
    let Month = Data.getMonth();
    let Day = Data.getDate();
    switch (Month) {
        case 0: fMonth = "Января"; break;
        case 1: fMonth = "Февраля"; break;
        case 2: fMonth = "Марта"; break;
        case 3: fMonth = "Апреля"; break;
        case 4: fMonth = "Мае"; break;
        case 5: fMonth = "Июня"; break;
        case 6: fMonth = "Июля"; break;
        case 7: fMonth = "Августа"; break;
        case 8: fMonth = "Сентября"; break;
        case 9: fMonth = "Октября"; break;
        case 10: fMonth = "Ноября"; break;
        case 11: fMonth = "Декабря"; break;
        default:
            return null;
    }
    return `${Day} ${fMonth} ${Year}`
}

export default date
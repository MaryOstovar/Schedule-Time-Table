const MapNumberToDay = (dayNumber: number) => {
    const daysInPersian = [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سه‌شنبه",
        "چهارشنبه",
        "پنج‌شنبه",
        "جمعه"
    ];


        return daysInPersian[dayNumber];

};

export default MapNumberToDay;


export const fetchWeatherByCity = async (city:string) => {

    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EEJELU64Q388RV6M9RLA35UKK&contentType=json`;

    const req = await fetch(url);
    const response  = await req.json();
    return response;
};




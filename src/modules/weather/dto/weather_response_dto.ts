/**
 * @openapi
 * components:
 *   schemas:
 *     Weather_Response_Dto:
 *       type: object
 *       required:
 *         - cityName
 *         - lat
 *         - lon
 *         - temperature
 *         - weatherMain
 *         - description
 *         - visibility
 *         - humidity
 *         - windSpeed
 *       properties:
 *         cityName:
 *           type: string
 *           example: "London"
 *         lat:
 *           type: number
 *           example: 51.5074
 *         lon:
 *           type: number
 *           example: -0.1278
 *         temperature:
 *           type: number
 *           example: 15.5
 *         weatherMain:
 *           type: string
 *           example: "Clouds"
 *         description:
 *           type: string
 *           example: "scattered clouds"
 *         visibility:
 *           type: number
 *           example: 10000
 *         humidity:
 *           type: number
 *           example: 82
 *         windSpeed:
 *           type: number
 *           example: 4.1
 */

export class Weather_Response_Dto {

    cityName!: string;
    lat!: number;
    lon!: number;
    temperature!: number;
    weatherMain!: string;
    description!: string;
    visibility!: number;
    humidity!: number;
    windSpeed!: number;

    constructor(cityName: string, lat: number, lon: number, temperature: number, weatherMain: string, description: string, visibility: number, humidity: number, windSpeed: number) {
        this.cityName = cityName;
        this.lat = lat;
        this.lon = lon;
        this.temperature = temperature;
        this.weatherMain = weatherMain;
        this.description = description;
        this.visibility = visibility;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
    }

}
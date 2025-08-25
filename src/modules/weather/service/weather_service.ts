import "dotenv/config";
import { AppDataSource} from "../../config/db/postgres_db";
import {Weather_entity} from "../entity/weather_entity";
import {DateTime} from "luxon";
import redisClient from "../../config/db/redis_db";

export class Weather_Service {
    private baseUrl = process.env.WEATHER_API_URL;
    private apiKey = process.env.WEATHER_API_KEY;
    private weatherRepository = AppDataSource.getRepository("weather_history");

    public async getWeatherByCoord(lat:number, lon:number): Promise<any> {
        try {
            const cachedData = await redisClient.get(`weather:${lat},${lon}`);
            if(cachedData !== null){
                console.log('Dados obtidos do cache');
                return JSON.parse(cachedData as string);
            }
            const params:string = `weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=pt_br&units=metric`;
            const fullUrl = `${this.baseUrl}${params}`;
            const response = await fetch(fullUrl);
            if (!response.ok) {
                throw new Error('Erro ao buscar dados do clima');
            }
            const data:any = await response.json();
            const createAt = DateTime.now().toUTC().plus({seconds: data.timezone}).toJSDate();
            const weather:Weather_entity = new Weather_entity(createAt,data.name, data.coord.lat, data.coord.lon, data.main.temp, data.weather[0].main, data.weather[0].description, data.visibility, data.main.humidity, data.wind.speed);
            await redisClient.setEx(`weather:${data.coord.lat},${data.coord.lon}`, 3600, JSON.stringify(weather));
            console.log("Dados obtidos da API");
            return await this.weatherRepository.save(weather);
        } catch (error:any) {
            throw new Error(`Erro ao buscar dados do clima: ${error.message}`);
        }
    }
    public async getWeatherByCity(cityName:string): Promise<any> {
        try {
            const cachedData = await redisClient.get(`weather:${cityName}`);
            if(cachedData !== null){
                console.log('Dados obtidos do cache');
                return JSON.parse(cachedData as string);
            }
            const params:string = `weather?q=${cityName}&appid=${this.apiKey}&lang=pt_br&units=metric`;
            const fullUrl = `${this.baseUrl}${params}`;
            const response = await fetch(fullUrl);
            if (!response.ok) {
                throw new Error('Erro ao buscar dados do clima');
            }
            const data:any = await response.json();
            const createAt = DateTime.now().toUTC().plus({seconds: data.timezone}).toJSDate();
            const weather:Weather_entity = new Weather_entity(createAt,data.name, data.coord.lat, data.coord.lon, data.main.temp, data.weather[0].main, data.weather[0].description, data.visibility, data.main.humidity, data.wind.speed);
            await redisClient.setEx(`weather:${cityName}`, 3600, JSON.stringify(weather));
            console.log("Dados obtidos da API");
            return await this.weatherRepository.save(weather);
        } catch (error:any) {
            throw new Error(`Erro ao buscar dados do clima: ${error.message}`);
        }
    }
}
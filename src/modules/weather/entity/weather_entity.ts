import { Entity , Column,PrimaryGeneratedColumn} from "typeorm";
@Entity("weather_history")
export class Weather_entity{
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ nullable: false , type:"timestamptz"})
    createAt!: Date;
    @Column({ nullable: false , type:"varchar"})
    cityName!: string;
    @Column({ nullable: false , type:"float"})
    lat!: number;
    @Column({ nullable: false , type:"float"})
    lon!: number;
    @Column({ nullable: false , type:"float"})
    temperature!: number;
    @Column({ nullable: false , type:"varchar"})
    weatherMain!: string;
    @Column({ nullable: false , type:"varchar"})
    description!: string;
    @Column({ nullable: false , type:"int"})
    visibility!: number;
    @Column({ nullable: false , type:"int"})
    humidity!: number;
    @Column({ nullable: false , type:"float"})
    windSpeed!: number;

    constructor(createAt:Date,cityName: string, lat: number, lon: number, temperature: number, weatherMain: string, description: string, visibility: number, humidity: number, windSpeed: number) {
        this.createAt = createAt;
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
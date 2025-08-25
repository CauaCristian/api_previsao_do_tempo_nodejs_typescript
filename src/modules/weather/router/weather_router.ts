import {Router,Request,Response} from "express";
import {Weather_Service} from "../service/weather_service";
import {Weather_Response_Dto} from "../dto/weather_response_dto";
import multer from "multer";
import pdfParse from "pdf-parse";

const Weather_router:Router = Router();
const weather_service:Weather_Service = new Weather_Service();
const upload = multer({storage:multer.memoryStorage()})

/**
 * @openapi
 * /weather/city/{city}:
 *   get:
 *     tags:
 *       - Weather
 *     summary: Pega o clima de uma cidade
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome da cidade
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Weather_Response_Dto'
 *         description: Clima pego com sucesso
 */

Weather_router.get("/city/:city", async (req:Request<{city:string}>, res:Response<Weather_Response_Dto>) => {
    try{
        const city:string = req.params.city;
        const weatherResponse:Weather_Response_Dto = await weather_service.getWeatherByCity(city);
        return res.status(200).json(weatherResponse);
    }
    catch (error: any) {
        return res.status(400).json({ message: error.message } as any);
    }
});

/**
 * @openapi
 * /weather/coordinates/{lat}/{lon}:
 *   get:
 *     tags:
 *       - Weather
 *     summary: Pega o clima por coordenadas
 *     parameters:
 *       - in: path
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Latitude
 *       - in: path
 *         name: lon
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitude
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Weather_Response_Dto'
 *         description: Clima pego com sucesso
 */

Weather_router.get("/coordinates/:lat/:lon", async (req:Request<{lat:string, lon:string}>, res:Response<Weather_Response_Dto>) => {
    try{
        const lat:number = parseFloat(req.params.lat);
        const lon:number = parseFloat(req.params.lon);
        const weatherResponse:Weather_Response_Dto = await weather_service.getWeatherByCoord(lat, lon);
        return res.status(200).json(weatherResponse);
    }
    catch (error: any) {
        return res.status(400).json({ message: error.message } as any);
    }
});

/**
 * @openapi
 * /data-pdf:
 *   post:
 *     summary: Pega o clima extraindo os dados do PDF
 *     tags:
 *       - Weather
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Arquivo PDF a ser enviado
 *     responses:
 *       200:
 *         description: Lista de climas extraídos do PDF
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Weather_Response_Dto'
 */

Weather_router.post("/data-pdf",upload.single("PDF"), async(req:Request,res:Response) =>{
    try{
        const data = pdfParser
        console.log();
    }catch(error:any){

    }
})

export default Weather_router;
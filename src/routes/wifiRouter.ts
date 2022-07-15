import { Router } from "express";
import { postWifi } from "../controllers/wifiController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateWifiData } from "../middlewares/wifiMiddleware.js";

const wifiRouter = Router();

wifiRouter.post("/wifi", validateToken, validateWifiData, postWifi);

export default wifiRouter;
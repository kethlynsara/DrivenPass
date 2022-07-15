import { Router } from "express";
import { getWifi, postWifi } from "../controllers/wifiController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateWifiData } from "../middlewares/wifiMiddleware.js";

const wifiRouter = Router();

wifiRouter.post("/wifi", validateToken, validateWifiData, postWifi);
wifiRouter.get("/wifi", validateToken, getWifi);

export default wifiRouter;
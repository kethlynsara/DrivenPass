import { Router } from "express";
import { deleteWifi, getWifi, getWifiById, postWifi } from "../controllers/wifiController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateWifiData } from "../middlewares/wifiMiddleware.js";

const wifiRouter = Router();

wifiRouter.post("/wifi", validateToken, validateWifiData, postWifi);
wifiRouter.get("/wifi", validateToken, getWifi);
wifiRouter.get("/wifi/:id", validateToken, getWifiById);
wifiRouter.delete("/wifi/:id/delete", validateToken, deleteWifi);


export default wifiRouter;
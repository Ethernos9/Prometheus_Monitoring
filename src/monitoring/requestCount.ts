import { NextFunction, Request, Response } from "express";
import client from "prom-client"

// const requestCounter = new client.Counter({
//     name: "http_requests_total",
//     help: "Total number of HTTP requests",
//     labelNames: ["method", "route","status_code"],
// })

const activeUserGauge = new client.Gauge({
    name:"active_users",
    help: "Total number of active users whose requests hasn't yet resolved",
    labelNames:["method","route"]
}) 

export const requestCountMiddleware = (req: Request, res: Response, next: NextFunction) => {

    activeUserGauge.inc({
        method: req.method,
        route: req.route ? req.route.path : req.path,
    });

    res.on('finish', () => {
        // Increment request counter
        setTimeout(() => {
            activeUserGauge.dec({
                method: req.method,
                route: req.route ? req.route.path : req.path,
            });
        }, 10000);
      
    });

    next();
};
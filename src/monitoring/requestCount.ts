import { NextFunction, Request, Response } from "express";
import client from "prom-client"

// const requestCounter = new client.Counter({
//     name: "http_requests_total",
//     help: "Total number of HTTP requests",
//     labelNames: ["method", "route","status_code"],
// })

// const activeUserGauge = new client.Gauge({
//     name:"active_users",
//     help: "Total number of active users whose requests hasn't yet resolved",
//     labelNames:["method","route"]
// }) 

export const httpRequestDurationMicroseconds = new client.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000] // Define your own buckets here
});

export const requestCountMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();

    res.on('finish', () => {
        const endTime = Date.now();
        httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            code: res.statusCode,
        },endTime-startTime)
      
    });

    next();
};

// export const requestCountMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
//     activeUserGauge.inc({
//         method: req.method,
//         route: req.route ? req.route.path : req.path,
//     });

//     res.on('finish', () => {
//         // Increment request counter
//         setTimeout(() => {
//             activeUserGauge.dec({
//                 method: req.method,
//                 route: req.route ? req.route.path : req.path,
//             });
//         }, 10000);
      
//     });

//     next();
// };
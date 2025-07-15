import express, { Request, Response, Router } from "express";
import { DataHash } from "./utils/encrypt-decrypt";
class Controller {
  constructor() {}
  async liveness(req: Request, res: Response) {
    res.json({
      message: "App is running",
    });
  }

  async getData(req: Request, res: Response) {
    const dh = new DataHash("dummy-secret");
    let final_res: Record<string, any> = {};
    const enResponse = dh.manipulate({
      id: "CAND-10293847",
      personal_info: {
        first_name: "Raju",
        last_name: "M",
        email: "raju.m@example.com",
        phone: "+91-9876543210",
        location: {
          city: "Chennai",
          state: "Tamil Nadu",
          country: "India",
          postal_code: "641301",
        },
      },
      qualifications: {
        degrees: [
          {
            level: "Bachelor's",
            field: "Computer Science",
            institution:
              "Sri Ramakrishna Mission Vidyalaya College of Arts and Science",
            university: "Bharathiar University",
            start_year: 2015,
            end_year: 2018,
            score: {
              type: "CGPA",
              value: 7.8,
            },
          },
          {
            level: "Higher Secondary",
            field: "Maths-Biology",
            institution: "Govt. Higher Secondary School",
            start_year: 2013,
            end_year: 2015,
            score: {
              type: "Percentage",
              value: 86.4,
            },
          },
        ],
        certifications: [
          {
            title: "Full Stack Web Development",
            platform: "Coursera",
            issued_by: "University of London",
            issue_date: "2020-06-01",
            certificate_id: "FSWD-987654321",
          },
          {
            title: "AWS Certified Developer – Associate",
            issued_by: "Amazon Web Services",
            issue_date: "2021-09-15",
            certificate_id: "AWSDEV-20210915",
          },
        ],
      },
    });
    final_res["encryption"] = enResponse;
    const deResponse = dh.manipulate(enResponse, false);
    final_res["decryption"] = deResponse;
    res.send(final_res);
  }
}

const controller = new Controller();
export const getRoutes = (): Router => {
  const appRoute = Router();
  appRoute.get("/api/liveness", controller.liveness);
  appRoute.get("/api/get-data", controller.getData);

  return appRoute;
};

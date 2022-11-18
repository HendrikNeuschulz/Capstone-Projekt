import { getAllDishes } from "../../../data/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const dishes = await getAllDishes();
    res.status(200).json(dishes);
  } else {
    res.status(405).setHeader("Allow", ["GET"]).send();
  }
}

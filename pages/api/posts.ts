// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  items: Array<any>;
};

const posts = [
  { id: 1, title: "Next JS", body: "Very good" },
  { id: 2, title: "React JS", body: "Best" },
  { id: 3, title: "Vue JS", body: "Very nice" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ items: posts });
}

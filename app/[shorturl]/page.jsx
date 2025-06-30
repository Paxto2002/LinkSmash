import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function URL({ params }) {
  const shorturl = params.shorturl;
  console.log("🔍 Received shorturl:", shorturl);

  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection("shorturls");

  const doc = await collection.findOne({ shorturl });

  if (doc) {
    redirect(doc.url);
  } else {
    const fallback = "https://linksmash-nu.vercel.app/404";
    console.log("🚨 Redirecting to fallback:", fallback);
    redirect(fallback);
  }
}

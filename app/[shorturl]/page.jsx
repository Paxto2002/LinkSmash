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
    const fallback = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
    console.log("🚨 Redirecting to fallback:", fallback);
    redirect(fallback);
  }
}

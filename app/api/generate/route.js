import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db(); // Will use "linksmash" from URI
    const collection = db.collection("shorturls");

    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "URL already exists, please add another one.",
      });
    }
    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL Generated Successfully",
    });
  } catch (error) {
    console.error("500 Error in /api/generate:", error.message);
    return new Response(
      JSON.stringify({
        success: false,
        error: true,
        message: "Server error",
        detail: error.message,
      }),
      { status: 500 }
    );
  }
}

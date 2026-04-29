
import { clientPromise} from "@app/lib/db";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("eammu-holidays");

    return Response.json({ 
        
        message: "Database connection successful!" 

    });
}
        

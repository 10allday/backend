import { Request, Response } from "express"
import prisma from "../../Prisma/prismaFile";

export async function find(req: Request, res: Response) {
    const thread = await prisma.threads.findUnique({ where: { id: parseInt(req.params.id) } }).catch((err) => res.status(500).json({ success: false, error: "Invalid ID" }))
    if (!thread) return res.status(404).json({ success: false, error: "No thread with that ID was found!" })
    return res.status(200).json({success: true, thread: thread})
}



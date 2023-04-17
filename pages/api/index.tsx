import {NextApiRequest, NextApiResponse} from "next";
// import { getContext } from '@keystone-6/core/context';
// import {Context} from ".keystone/types"
// import config from "../../keystone";
// import * as PrismaModule from '.prisma/client'
import { context } from "../../lib/keystone/context";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const context: Context = (globalThis as any).keystoneContext || getContext(config, PrismaModule);
    if (req.method === "GET") {
        console.log(await context.query.AdminUser.findMany({query: `id name blocked`}));
        // console.log(await context.prisma.user.findMany({
        //     select: {
        //         name: true
        //     }
        // }));
        
        return  res.status(200).json(await context.db.AdminUser.findMany());
    }
}
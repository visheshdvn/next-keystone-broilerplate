import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { context as keystoneContext } from "../../lib/keystone/context";

export const config = {
  api: {
    bodyParser: false,
  },
};
const graphql_instane = createYoga<{
    req: NextApiRequest;
    res: NextApiResponse;
  }>({
    graphqlEndpoint: "/api/graphql",
    schema: keystoneContext.graphql.schema,
    /*
        `keystoneContext` object doesn't have user's session information.
        You need an authenticated context to CRUD data behind access control.
        keystoneContext.withRequest(req, res) automatically unwraps the session cookie
        in the request object and gives you a `context` object with session info
        and an elevated sudo context to bypass access control if needed (context.sudo()).
      */
    context: ({ req, res }) => keystoneContext.withRequest(req, res),
  });

const d = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({})
};

const exportedInstane =
  process.env.NODE_ENV === "development"
    ? graphql_instane
    : d;

export default exportedInstane;
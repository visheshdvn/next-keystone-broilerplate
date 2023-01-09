import { getContext } from "@keystone-6/core/context";
import { Context } from ".keystone/types";
import config from "../../keystone";
import * as PrismaModule from ".prisma/client";

export const context: Context =
  (globalThis as any).keystoneContext || getContext(config, PrismaModule);

// module.exports = { context };
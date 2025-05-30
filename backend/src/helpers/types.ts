import {z} from "zod";
import { Errors } from "./errors";

type Literal = boolean | null | number | string;
type Json = Literal | { [key: string]: Json } | Json[];
const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
);

export const registerGameSchema = z.object({
    name: z.string({message: Errors.GAME_NAME}),
    contract_address: z.string({message: Errors.CONTRACT_ADDRESS}),
    abi: jsonSchema,
    category: z.string({message: Errors.GAME_CATEGORY}),
    image: z.string({message: Errors.IMAGE}),
    challenges: z.object({
        name: z.string({message: Errors.CHALLENGE_NAME}),
        player_address_variable: z.string({message: Errors.PLAYER_ADDRESS_VARIABLE}),
        function_name: z.string({message: Errors.FUNCTION_NAME})
    }).array()
});

export const createActivity = z.object({
    challenge_id: z.number({message: Errors.CHALLENGE_ID}),
    goal_1: z.number({message: Errors.ACTIVITY_GOAL}),
    goal_2: z.number({message: Errors.ACTIVITY_GOAL}),
    reward_1: z.number({message: Errors.REWARD}).gt(0, {message: Errors.REWARD}),
    reward_2: z.number({message: Errors.REWARD}).gt(0, {message: Errors.REWARD}),
    name: z.string({message: Errors.ACTIVITY_NAME}),
    startDate: z.string({message: Errors.ACTIVITY_START_DATE}),
    endDate: z.string({message: Errors.ACTIVITY_END_DATE}),
    image: z.string({message: Errors.IMAGE})
})

export const joinActivity = z.object({
    activity_id: z.number({message: Errors.ACTIVITY_ID}),
    player_address: z.string({message: Errors.PLAYER_ADDRESS})
})

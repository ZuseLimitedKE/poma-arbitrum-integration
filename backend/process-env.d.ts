declare global {
    namespace NodeJS {
        interface ProcessEnv {
            JSON_RPC_URL: string,
            PORT: number
        }
    }
}


export {}
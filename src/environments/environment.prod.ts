import { environmentCommon } from "./environment.common";

export const environment = {
    ...environmentCommon,
    production: true,
    storeDevtools: {
        maxAge: 25,
    }
};

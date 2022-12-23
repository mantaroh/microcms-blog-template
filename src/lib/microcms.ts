import { createClient } from 'microcms-js-sdk'

export const microcmsApiClient = createClient({
    serviceDomain: import.meta.env.API_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY
})
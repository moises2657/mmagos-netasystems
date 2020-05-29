
export const config = {
    application:{
        key_jwt: '2928304-3020',
        salt_pwd: 'T-2Pox?s1&pRewRuT1iJ',
        cors:{
            server: [
                {
                    origin: 'localhost:4200',
                    credentials: true
                }
            ]
        },
        db_server:{
            host:'mongodb://localhost:27017/'
        }
    }
}

export const PORT = 4000;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://admin:admin@cluster0.v3tvr.mongodb.net/eJaar-test?retryWrites=true&w=majority'
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://admin:admin@cluster0.v3tvr.mongodb.net/eJaar-test?retryWrites=true&w=majority'
    }
}
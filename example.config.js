module.exports = {
    mail: {
        host: 'host-of-your-smtp.com',
        port: 465, // change this to 587 for unsecure
        secure: true, // true for 465, false for others
        auth: {
            user: 'username', // user login 
            pass: 'p@$$w0rd' // user password
        }
    }
}
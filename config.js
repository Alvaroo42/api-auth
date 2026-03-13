
    /*     // mongodb+srv://alvaromarquezsirvent_db_user:1234@cluster0.6yyvfgd.mongodb.net/SD?retryWrites=true&w=majority&appName=Cluster0 */
   
module.exports = {
    DB: process.env.MONGODB || 'mongodb://localhost:27017/SD',
    PORT: process.env.PORT || 4100,
    SECRET: 'miclavesecretadetokens',
    TOKEN_EXP_TIME: 7*24*60 // 7 días expresados en minutos
};
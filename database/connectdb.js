import dynamoose from 'dynamoose'
//import mongoose from 'mongoose';

// Create new DynamoDB instance
const ddb = new dynamoose.aws.ddb.DynamoDB({
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": process.env.AWS_DEFAULT_REGION,
});

try {
    //await mongoose.connect(process.env.URI_MONGO)
    console.log("BASE DE DATOS MONGO CONECTADA MONGODB!!")
} catch (error) {
    console.log("Error en la conexion",error)
}
try {
    await dynamoose.aws.ddb.set(ddb);
    console.log("BASE DE DATOS MONGO CONECTADA DYNAMODB!!")
} catch (error) {
    console.log("Error en la conexion",error)
}
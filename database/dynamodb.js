import AWS from 'aws-sdk'

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

try {
    const dynamoClient = await new AWS.DynamoDB.DocumentClient()
    const TABLE_NAME = process.env.NAME_DATA_BASE
    console.log("Connet DB ok", dynamoClient)
} catch (error) {
    console.log(error, "Error de conexion a la BASE DE DATOS")
}

/* module.exports = {

    getCharacters: async () => {
        const params = {
            TableName: TABLE_NAME
        }
        const characters = await dynamoClient.scan(params).promise()
        console.log("Conected DynamoDB: ",characters)
        return characters
    },
    
    getCharacterById: async (id) => {
        const params = {
            TableName:TABLE_NAME,
            Key: {
                id,
            },
        }
        return await dynamoClient.get(params).promise()
    },
    
    addOrUpdateCharacter: async (character) => {
        const params = {
            TableName:TABLE_NAME,
            Item:character
        }
        return await dynamoClient.put(params).promise()
    },
    
    deleteCharacter: async (id, character) => {
        const params = {
            TableName:TABLE_NAME,
            Key: {
                id,
            },
            Item:character,
        }
        return await dynamoClient.put(params).promise()
    }
} */

/* const user = {
    '_id': '0',
    'name': "Harry Potter",
    'email': "harry_potter@test.com",
    'password': "testpassword",
    'image': 'urlcompleta/testimage.jpg'
} */


/* getCharacters()
addOrUpdateCharacter(user) */
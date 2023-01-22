import AWS from 'aws-sdk'

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient()
const TABLE_NAME = "proyect-aws-pass"

const getCharacters = async () => {
    const params = {
        TableName: TABLE_NAME
    }
    const characters = await dynamoClient.scan(params).promise()
    console.log("Conected DynamoDB: ",characters)
    return characters
}

const addOrUpdateCharacter = async (character) => {
    const params = {
        TableName:TABLE_NAME,
        Item:character
    }
    return await dynamoClient.put(params).promise()
}

const user = {
    '_id': '0',
    'name': "Harry Pother",
    'email': "harry_poter@test.com",
    'password': "testpassword",
    'image': 'urlcompleta/testimage.jpg'
}

getCharacters()
addOrUpdateCharacter(user)
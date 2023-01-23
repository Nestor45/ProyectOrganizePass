import AWS from 'aws-sdk'

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = await new AWS.DynamoDB.DocumentClient()
const TABLE_NAME = process.env.NAME_DATA_BASE

//console.log("Connet DB ok", dynamoClient)
    

//module.exports = {

    const getCharacters =  async () => {
        const params = {
            TableName: TABLE_NAME
        }
        const characters = await dynamoClient.scan(params).promise()
        //console.log("Conected DynamoDB: ",characters)
        return characters
    }
    
    /* getCharacterById: async (id) => {
        const params = {
            TableName:TABLE_NAME,
            Key: {
                id,
            },
        }
        return await dynamoClient.get(params).promise()
    }, */
    
    const addOrUpdateCharacter = async (character) => {
        const params = {
            TableName:'proyect-aws-pass',
            Item:character
        }
        return await dynamoClient.put(params).promise()
    }
    
    /* deleteCharacter: async (id, character) => {
        const params = {
            TableName:TABLE_NAME,
            Key: {
                id,
            },
            Item:character,
        }
        return await dynamoClient.put(params).promise()
    } */
//}

const user = {
    '_id': '1',
    'name': "Harry Potter2",
    'email': "harry_potter2@test.com",
    'password': "2testpassword",
    'image': '2urlcompleta/testimage.jpg'
}


//getCharacters()
//addOrUpdateCharacter(user) 
import dynamoose from "dynamoose"

const userSchema = new dynamoose.Schema({
    '_id':{
        'type': String,
    },
    'name':String,
    'email':{
        'type': String,
        'required': true
    },
    'password':{
        'type': String,
    },
    'image':String,
    'status': {
        'type':Number,
        'default': 1,
    }
},{
    'timestamps': {
        'createdAt': "createDate",
        'updatedAt': 'updateDate'
    }
})

export const User = dynamoose.model('User', userSchema)
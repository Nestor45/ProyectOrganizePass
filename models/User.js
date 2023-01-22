import { Schema,model } from "dynamoose"

const userSchema = new Schema({
    'id':{
        'hashKey':true,
        'type': String,
        "index": {
            "name": "emailIndex",
            "rangeKey": "email",
            "throughput": {"read": 5, "write": 10}
        } 
    },
    'name':String,
    'email':{
        'type': String,
        'required': true
    },
    'password':{
        'type': String,
        'required': true
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

export const User = model('user', userSchema)
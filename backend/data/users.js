import bcrypt from 'bcryptjs'

const user=[
    {
        name:'Muhammad Bin Ashraf',
        email:'Muhammad@example.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'Ali',
        email:'Ali@example.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'Asif',
        email:'Asif@example.com',
        password:bcrypt.hashSync('123456',10)
    },
]

export default user
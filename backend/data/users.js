import bcrypt from 'bcryptjs'
const Users = [   
    {
        name : 'Admin',
        email : 'rsvishaltpr@gmail.com',
        password : bcrypt.hashSync('admin@123',12),
        isAdmin : true
    }
    
]
export default Users
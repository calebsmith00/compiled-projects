import bcryptjs from 'bcryptjs'

export const comparePassword = async(password, toCompare) => {
    return await bcryptjs.compare(password, toCompare)
}
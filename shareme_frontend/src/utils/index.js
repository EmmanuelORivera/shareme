import jwt_decode from 'jwt-decode'
import { client } from '../sanityClient'

export const createOrGetUser = async (response) => {
  const decoded = jwt_decode(response.credential)

  const { name, picture, sub } = decoded
  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  }

  return client.createIfNotExists(user)
}

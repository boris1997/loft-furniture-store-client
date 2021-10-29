
import { AxiosResponse } from "axios"
import { $host } from "http/axios"

export const fetchUsers = async (): Promise<void> => {
    return $host.get(`api/users`)
}

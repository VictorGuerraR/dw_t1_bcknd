import db from '../db_conection/db_conection.js'

export const get_algo = async (req, res) => {
    try {
        let r = await db('db_empresa.clientes')
        console.log(r)
        res.status(418).json(r)
    } catch (error) {
        res.status(500).json()
    }
}

export const post_algo = async (req, res) => {
    console.log('post')

}

export const patch_algo = async (req, res) => {
    console.log('patch')

}

export const delete_algo = async (req, res) => {
    console.log('delete')

}
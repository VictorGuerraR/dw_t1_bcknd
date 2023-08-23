import db from '../db_conection/db_conection.js'

export const get_algo = async (req, res) => {
  try {
    let result = await db({ e: 'db_empresa.estudiantes' })
      .innerJoin({ ts: 'db_empresa.tipos_sangre' },
        'e.id_tipo_sangre',
        'ts.id_tipo_sangre'
      )
      .select(
        'e.id_estudiante as Numero',
        'e.carne as carné',
        'e.nombres',
        'e.apellidos',
        'e.direccion',
        'e.telefono',
        'e.correo_electronico as correo',
        'e.fecha_nacimiento as fecha nacimiento',
        'ts.sangre as Tipo de Sangre',
      )
    res.status(200).render('../views/index', { estudiantes: result });
  } catch (error) {
    res.status(500).json()
  }
}

export const get_add_estudiante = async (req, res) => {
  try {
    let result = await db('db_empresa.tipos_sangre')
    res.status(200).render('../views/add', { tiposDeSangre: result });
  } catch (error) {
    res.status(500).json()
  }
}

export const post_algo = async (req, res) => {
  try {
    let { carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento } = req.body;
    let valores = { carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento }
    await db('db_empresa.estudiantes')
      .insert(valores, ['id_estudiante'])
    res.status(200).redirect('/')
  } catch (error) {
    res.status(500).redirect('/')
  }
}

export const patch_algo = async (req, res) => {
  console.log('patch')

}

export const delete_algo = async (req, res) => {
  console.log('delete')

}
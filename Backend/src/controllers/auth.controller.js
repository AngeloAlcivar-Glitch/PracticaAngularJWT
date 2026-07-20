const pool = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {

    try {

        const { nombre, correo, password } = req.body;


        if (!nombre || !correo || !password) {

            return res.status(400).json({
                mensaje: "Todos los campos son obligatorios"
            });

        }


        const [usuarioExiste] = await pool.query(
            "SELECT * FROM usuarios WHERE correo = ?",
            [correo]
        );


        if (usuarioExiste.length > 0) {

            return res.status(400).json({
                mensaje: "El correo ya está registrado"
            });

        }


        const passwordEncriptada =
        await bcrypt.hash(password,10);



        await pool.query(

            "INSERT INTO usuarios(nombre,correo,password) VALUES(?,?,?)",

            [
                nombre,
                correo,
                passwordEncriptada
            ]

        );


        res.json({

            mensaje:"Usuario registrado correctamente"

        });



    } catch(error) {


        console.log(error);


        res.status(500).json({

            mensaje:"Error del servidor"

        });


    }

};



// LOGIN

exports.login = async (req,res)=>{

    try{


        const {correo,password}=req.body;



        if(!correo || !password){

            return res.status(400).json({

                mensaje:"Correo y contraseña son obligatorios"

            });

        }



        const [usuarios]=await pool.query(

            "SELECT * FROM usuarios WHERE correo=?",

            [correo]

        );



        if(usuarios.length===0){

            return res.status(401).json({

                mensaje:"Credenciales incorrectas"

            });

        }



        const usuario=usuarios[0];



        const passwordValida =
        await bcrypt.compare(

            password,

            usuario.password

        );



        if(!passwordValida){

            return res.status(401).json({

                mensaje:"Credenciales incorrectas"

            });

        }



        const token = jwt.sign(

            {

                id:usuario.id,

                correo:usuario.correo

            },

            process.env.JWT_SECRET,

            {

                expiresIn:'1h'

            }

        );



        res.json({

            mensaje:"Login correcto",

            token

        });



    }catch(error){


        console.log(error);


        res.status(500).json({

            mensaje:"Error del servidor"

        });


    }

};
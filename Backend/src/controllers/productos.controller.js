const pool = require('../database/connection');


// LISTAR PRODUCTOS
exports.listar = async (req,res)=>{

    try{

        const [productos] = await pool.query(

            "SELECT * FROM productos"

        );

        res.json(productos);

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error del servidor"
        });

    }

};


// CREAR PRODUCTO
exports.crear = async(req,res)=>{

    try{

        const {
            nombre,
            descripcion,
            precio,
            stock
        } = req.body;


        await pool.query(

            `INSERT INTO productos
            (nombre,descripcion,precio,stock)
            VALUES(?,?,?,?)`,

            [
                nombre,
                descripcion,
                precio,
                stock
            ]

        );

        res.json({
            mensaje:"Producto registrado correctamente"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error del servidor"
        });

    }

};


// ACTUALIZAR
exports.actualizar = async(req,res)=>{

    try{

        const {id}=req.params;

        const{
            nombre,
            descripcion,
            precio,
            stock
        }=req.body;


        await pool.query(

            `UPDATE productos

            SET

            nombre=?,
            descripcion=?,
            precio=?,
            stock=?

            WHERE id=?`,

            [
                nombre,
                descripcion,
                precio,
                stock,
                id
            ]

        );

        res.json({
            mensaje:"Producto actualizado"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error del servidor"
        });

    }

};


// ELIMINAR
exports.eliminar = async(req,res)=>{

    try{

        const {id}=req.params;

        await pool.query(

            "DELETE FROM productos WHERE id=?",

            [id]

        );

        res.json({
            mensaje:"Producto eliminado"
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error del servidor"
        });

    }

};
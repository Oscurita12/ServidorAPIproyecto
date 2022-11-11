import mongoose from 'mongoose';

export async function conectarConMongo() {

    try{

        await mongoose.connect(process.env.DATABASE);
        console.log("Éxito en la conexión con mongo")

    }catch(error){
        console.log(error)
    }
}
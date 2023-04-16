
import prisma from "../../../lib/prisma";
import { sign } from "jsonwebtoken";
import { compare, hash } from "bcrypt";



export default async function handler(req,res){

    if (req.method === "POST"){
        const {name,email,password} = req.body;
        if (!name||!email||!password){
            return res.status(400).json({message: 'Tolong isi Semua Form yang ada!'})
        }
        const emailauthentic =  await prisma.visitor.findUnique({ where: {email}});
        if(emailauthentic){
            return res.status(400).json({message: 'email yang anda pakai telah terdaftar!'})
        }
        const hashedPassword = await hash(password, 10);
        const visitor = await prisma.visitor.create({
            data: {
                name,
                password :hashedPassword,
                email
            }
        });
        return res.status(200).json({message: "berhasil dibuat"})
    }
}

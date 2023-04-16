import { sign } from "jsonwebtoken";
import prisma from "../../../lib/prisma";
const JWT_PW = process.env.AUTH_KEY;

export default async function handler(req, res){
    if (req.method === 'POST') {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required'});
        }

        const visitor = await prisma.visitor.findUnique({ where: { email } });

        if (!visitor) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7h' });

        return res.status(200).json({ token });
}
}
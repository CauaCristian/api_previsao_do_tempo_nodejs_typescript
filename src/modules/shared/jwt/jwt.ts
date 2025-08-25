import jwt from 'jsonwebtoken';
import "dotenv/config";
export class Jwt {
    private secretKey = process.env.JWT_SECRET;
    public async generateToken(user_id:bigint,role:string): Promise<string> {
        return jwt.sign({id:user_id ,role:role},this.secretKey as string, {
            expiresIn: '1h'
        })
    }
    public async verifyToken(token:string): Promise<any> {
        try {
            const decoded = jwt.verify(token, this.secretKey as string);
            return {id: (decoded as any).id, role: (decoded as any).role};
        } catch (err) {
            throw new Error('Invalid token');
        }
    }
}
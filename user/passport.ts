import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import { prisma } from "./db";
import bcrypt from 'bcrypt';

const authenticateUser = async (email: string, password: string, done: any) => {
    const user = await getUserByEmail(email);

    if (user == null) {
        return done(null, false, { message: 'No user with that email' });
    }

    try {
        if (await bcrypt.compare(password, user.password)) {
            return done(user, { message: 'Logged in' });
        } else {
            console.log('Password incorrect');
            return done(null, false, { message: 'Password incorrect' });
        }
    } catch (e) {
        return done(null, true, e);
    }
}

export default function initializePassport(passport: PassportStatic) {

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
    passport.serializeUser((user: any, done) => {
        console.log('Serializing user:', user);
        done(null, user.id);
    });
    passport.deserializeUser(async (id: number, done) => {
        console.log('Deserializing user with ID:', id);
        const userById = await getUserById(id);
        console.log('User retrieved:', userById);
        done(null, userById);
    });
}

async function getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    return user;
}

async function getUserById(id: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    return user;
}

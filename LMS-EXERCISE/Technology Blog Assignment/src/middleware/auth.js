import jwt from 'jsonwebtoken';
import HttpError from '../utils/HttpError.js';

const authenticate = ( req, res, next ) => {
    const Authorization = req.header( 'Authorization' );
    const token = Authorization.split( ' ' )[1];

    jwt.verify( token, process.env.JWT_SECRET, ( err, claims ) => {
        if( err ) {
            const httpError = new HttpError( 'Your token seems to be invalid.', 401 );
            next( httpError );
            return;
        }

      
        res.locals.claims = claims;

        next();
    });
};

const authorize = ( author ) => {
    return ( req, res, next ) => {
        if( !author.includes( res.locals.claims.role ) ) {
            const httpError = new HttpError( 'Your do not have suficient privileges.', 403 );
            next( httpError );
            return;
        }

        next();
    };
};

export {
    authenticate,
    authorize
};
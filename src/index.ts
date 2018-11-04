
/* IMPORT */

import isString from 'lodash/isString';

/* EXPRESS SEND STATUS */

function expressSendStatus ( status: number, message?: string ) {

  return ( req, res ) => {

    if ( isString ( message ) ) {

      res.set ( 'Content-Type', 'text/plain' )
          .status ( status )
          .send ( message );

    } else {

      res.sendStatus ( status );

    }

  };

}

/* EXPORT */

export = Object.assign ( expressSendStatus, { default: expressSendStatus } );

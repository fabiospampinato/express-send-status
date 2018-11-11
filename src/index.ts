
/* IMPORT */

import isString = require ( 'lodash/isString' );

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

export default expressSendStatus;

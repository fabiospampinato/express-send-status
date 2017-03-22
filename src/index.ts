
/* IMPORT */

import * as _ from 'lodash';

/* EXPRESS SEND STATUS */

function expressSendStatus ( status: number, message?: string ) {

  return ( req, res ) => {

    if ( _.isString ( message ) ) {

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

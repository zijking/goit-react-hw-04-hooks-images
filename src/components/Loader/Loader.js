import React from 'react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Loader from 'react-loader-spinner';

function LoaderCom() {
  return (
    <div className="loader">
      <Loader
        type="TailSpin"
        color="#3F51B5"
        height={500}
        width={500}
        // timeout={3000} //3 secs
      />
    </div>
  );
}

export default LoaderCom;

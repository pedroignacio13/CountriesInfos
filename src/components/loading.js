import React from 'react'
import * as SVGLoaders from 'svg-loaders-react'

import '../styles/loading.css'

/* https://github.com/ajwann/svg-loaders-react */

const LoadingComponent = () => {
  return(
    <div className="loading">
      <SVGLoaders.Bars />
    </div>
  )
}

export default LoadingComponent
import React from 'react'
import PropTypes from 'prop-types'

const defaultValues = {
  usuarios: [],
  titulo: 'default'
}

const AppContext = React.createContext(defaultValues)

export function AppContextProvider({ children }) {
  return (
    <AppContext.Provider value={defaultValues}>
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node
}

AppContextProvider.defaultProps = {
  children: null
}

export const AppContextConsumer = AppContext.Consumer

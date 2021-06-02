import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from 'reportWebVitals'
import { GlobalStyles, Theme } from 'styles'
import { ThemeProvider } from 'styled-components'
import { Content, Title, Card, Grid, Numbers, NewButton } from 'components'
import { Provider } from 'react-redux'
import configureStore from './core/configure-store'
import { PersistGate } from 'redux-persist/integration/react'

const { persistor, store } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <NewButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

reportWebVitals()

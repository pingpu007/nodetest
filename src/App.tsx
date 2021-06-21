import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  useEffect(() => {
    const sampleData = [
      { id: 0, name: 'ping', name2: 'pong', age: 23, familyNames: ['1', '2', '3'], score: 20 },
      { id: 1, name: 'ping2', name2: 'pong2', age: 23, familyNames: ['4', '5', '6'], score: 40 },
    ]

    interface IStudent {
      id: number
      name: string
      name2: string
      age?: number
      familyNames: string[]
    }

    console.log(sampleData)
    const halo = sampleData.filter((x: any) => {
      return x.name === 'ping'
    })

    const halo2 = sampleData.map((x: any) => {
      return x.name
    })

    console.log(
      sampleData.map((x: any) => {
        return (x.score += 20)
      }),
      'hallo total',
    )

    console.log(halo, 'halo')
    console.log(halo2, 'halo2')

    // function getScore(sampleData: IStudent): Promise<number>{
    //   return new Promise<number>((resolved) => {
    //     setTimeout(() => {
    //       resolved
    //     })
    //   })
    // }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

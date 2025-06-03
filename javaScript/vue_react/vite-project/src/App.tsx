import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firends, setFirends] = useState(
    [
      {
       name: "李宏伟",
        hometown:"京海莽村"
      },
      {
        name:"高启强",
        hometown:"京海旧厂街"
      },
      {
        name:"安欣",
        hometown:"京海旧厂街"
      }
    ]
  )

  return (
    <>
     <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>姓名</th>
          <th>家乡</th>
        </tr>
      </thead>
      <tbody>
        {
          firends.map((item,index) => (
            <tr key={index}>
              <td className="text-start">{item.name}</td>
              <td className="text-info">{item.hometown}</td>
            </tr>
          ))
        }
      </tbody>
     </table>
    </>
  )
}

export default App

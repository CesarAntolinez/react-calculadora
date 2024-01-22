import { useState } from 'react'
import Button from '@/Components/Forms/Button/Button'
import Input from '@/Components/Forms/Input/Input'
import './App.scss'
import {evaluate} from 'mathjs'

function App() {
  const [value, setValue] = useState('');

  const addValue = val => setValue(value + val);

  const calculate = () => {
    try {
      setValue(evaluate(value))
    } catch (e) {
      setValue('Error')
    }
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <h1>Calculadora</h1>
        </div>
        <div className="col-12">
          <div className="calculator card">

            <Input type="text" className="calculator-screen z-depth-1" value={value}/>

            <div className="calculator-keys">

              <Button onValue={addValue} value='+' color='info' />
              <Button onValue={addValue} value='-' color='info' />
              <Button onValue={addValue} value='*' color='info' />
              <Button onValue={addValue} value='/' color='info' />

              <Button onValue={addValue} value='7' color='light' />
              <Button onValue={addValue} value='8' color='light' />
              <Button onValue={addValue} value='9' color='light' />

              <Button onValue={addValue} value='4' color='light' />
              <Button onValue={addValue} value='5' color='light' />
              <Button onValue={addValue} value='6' color='light' />

              <Button onValue={addValue} value='1' color='light' />
              <Button onValue={addValue} value='2' color='light' />
              <Button onValue={addValue} value='3' color='light' />

              <Button onValue={addValue} value='0' color='light' />
              <Button onValue={addValue} value='.' color='secondary' className='decimal function' />
              <Button onValue={ _ => setValue('')} value='AC' color='danger' className='all-clear function btn-sm' />

              <Button onValue={calculate} value='=' color='default' className='equal-sign operator' />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App

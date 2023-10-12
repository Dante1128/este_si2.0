import { cars } from './assets/carsAPI'
import './App.css'
import Cars from './components/Cars'
import Button from './components/button'
import Card from './components/Card'
import Menu from './components/menu'
function App() {
  return (
    <div className='App-container'>
     {
      cars.map(car=>{
        return(
          <Card cars={car}>
          <Menu menu/>
          <Cars cars={car}/>
          <Button button/>
          
          </Card>
        )
      })
     } 
    
    </div>
  )
}
export default App
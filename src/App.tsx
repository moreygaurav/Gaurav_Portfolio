import './App.css'
import AppRouter from './routes/AppRouter';
import AuroraWater from './components/AuroraWater';

function App() {


  return (
    <>
      <AppRouter />
        <AuroraWater />

      {/* YOUR CONTENT */}
      <div style={{ color: "white", padding: "4rem" }}></div>
    </>
  )
}

export default App;

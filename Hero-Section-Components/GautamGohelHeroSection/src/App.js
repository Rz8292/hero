import logo from './logo.svg';
import './App.css';
import bg from "./images/apple-splash.png"
import Header from './components/Header';

function App() {

  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <main className='h-screen w-screen' style={styles}>
      <Header />

      <div className='h-full w-full flex flex-col justify-center px-[4rem] ' >
          <h1 className='text-[#98EC65] font-bold text-[5rem]' >Creative</h1>
          <h3 className='text-white text-[2rem] font-bold ' >design studio</h3>

          <button className='w-[10rem] py-[6px] rounded-3xl bg-[#98EC65] hover:bg-[#81E047] mt-[1rem]' >Explore Now</button>
      </div>

    </main>
  );
}

export default App;

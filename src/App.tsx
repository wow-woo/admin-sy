import { Aside } from "./components/Aside";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { MainBlock } from "./pages/MainBlock";

function App() {
  return (
    <div className="flex lg:h-screen">
      <Aside />
      <section className='w-full'>
        <Header/>
        <MainBlock />
      </section>
    </div>
  );
}

export default App;

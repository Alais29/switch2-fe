import { Featured } from "./components/sections/Featured";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";

function App() {
  return (
    <div className="bg-red-sw min-h-screen w-full flex flex-col items-center text-white font-inter-sans">
      <Header />
      <main className="flex-grow w-full flex flex-col items-center py-8">
        <Featured />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { QuickFacts } from './components/QuickFacts';
import { BirthDetails } from './components/BirthDetails';
import { RandomThings } from './components/RandomThings';
import { ThisOrThat } from './components/ThisOrThat';
import { DayInLife } from './components/DayInLife';
import { Favorites } from './components/Favorites';
import { DeveloperPlayground } from './components/DeveloperPlayground';
import { FunFacts } from './components/FunFacts';
import { FuturePlans } from './components/FuturePlans';
import { Hobbies } from './components/Hobbies';
import { GuessingGame } from './components/GuessingGame';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500">
        <ThemeToggle />
        <main>
          <Hero />
          <QuickFacts />
          <BirthDetails />
          <RandomThings />
          <ThisOrThat />
          <DayInLife />
          <Favorites />
          {/* <DeveloperPlayground /> */}
          <FunFacts />
          <FuturePlans />
          <Hobbies />
          <GuessingGame />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

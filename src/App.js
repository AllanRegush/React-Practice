import Card from './components/Card';
import Icon from './components/Icon'
import './App.css';
import LoadingButton from './components/LoadingButton';
import { useState } from 'react';
import ListOfAnimals from './components/ListOfAnimals';
import InputLogger from './components/InputLogger';
import State from './components/State';
import CountDown from './components/CountDown';
import CountProvider from './components/CountProvider';
import Count from './components/Count';
import CountButton from './components/CountButton';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div>
      <Card icon={<Icon />}>
        <p>Content</p>
      </Card>
      <LoadingButton label={`Press Me`}
      isLoading={isLoading}
      onClick={() => setIsLoading(!isLoading)}
      />
      <ListOfAnimals />
      <InputLogger />
      <State />
      <CountDown hours={0} min={0} sec={30}/>
      <CountProvider>
        <Count />
        <CountButton />
      </CountProvider>
    </div>
  );
}

export default App;

import { Search } from '../features/search/search.tsx';

function App() {
  return <Search value={'hello'} onChange={() => console.log('hello')} />;
}

export { App };

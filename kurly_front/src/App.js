import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const queryclient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </QueryClientProvider>

  );
}

export default App;

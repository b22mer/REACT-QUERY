import { Posts } from "./Posts";
import "./App.css";
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClinet=new QueryClient();
function App() {
  return (
    // 이 안에서 useQuery 사용가능
    <QueryClientProvider client={queryClinet}> 
    <div className="App">
      <h1>Blog Posts</h1>
      <Posts />
    </div>
    </QueryClientProvider>
  );
}

export default App;

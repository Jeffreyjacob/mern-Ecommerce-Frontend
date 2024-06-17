import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthOProvider from './auth/AuthOProvider.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from "@/components/ui/sonner";
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(

  <Router>
    <QueryClientProvider client={queryClient}>
      <AuthOProvider>
        <PersistGate persistor={persistor}>
          <Provider store={store}>
            <App />
            <Toaster visibleToasts={1} position='top-right' richColors />
          </Provider>
        </PersistGate>
      </AuthOProvider>
    </QueryClientProvider>
  </Router>
)

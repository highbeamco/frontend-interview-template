import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./home/pages/HomePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // We want to refetch data on window focus in production to keep the data fresh, but this can make requests hard to debug in development.
      refetchOnWindowFocus: import.meta.env.PROD,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
};

export default App;

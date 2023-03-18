import { QueryClient, QueryClientProvider } from "react-query";

import { DeleteContextProvider } from "../common/contexts";
import { HomeScreen } from "../components";


export default function Home() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DeleteContextProvider>
        <HomeScreen />
      </DeleteContextProvider>
    </QueryClientProvider>
  );
}

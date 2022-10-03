import { DateTime } from "luxon";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { DeleteContextProvider } from "../../common/contexts/delete.context";
import { HomeScreen } from "./";

export default {
  title: "components/HomeScreen",
  component: HomeScreen
};

const queryClient = new QueryClient();

export const Empty = () => {
  const [notes, setNotes] = useState([]);
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen
        getNotes={async () => notes}
        saveNotes={async (notes) => setNotes(notes)}
      />
    </QueryClientProvider>
  );
};

export const WithNotes = () => {
  const [notes, setNotes] = useState([
    {
      id: "1",
      text: "Hello",
      position: { top: 100, left: 100 },
      color: "blue",
      date: DateTime.now().minus({ minutes: 1 })
    },
    {
      id: "2",
      text: "World",
      position: { top: 100, left: 352 },
      color: "yellow",
      date: DateTime.now().minus({ minutes: 5 })
    },
    {
      id: "3",
      text: "Yes!",
      position: { top: 100, left: 604 },
      color: "lime",
      date: DateTime.now().minus({ minutes: 75 })
    },
    {
      id: "4",
      text: "No!",
      position: { top: 100, left: 856 },
      color: "green",
      date: DateTime.now().minus({ minutes: 120 })
    }
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <DeleteContextProvider>
        <HomeScreen
          getNotes={async () => notes}
          saveNotes={async (notes) => setNotes(notes)}
        />
      </DeleteContextProvider>
    </QueryClientProvider>
  );
};

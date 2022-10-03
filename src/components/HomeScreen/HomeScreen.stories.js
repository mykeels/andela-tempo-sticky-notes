import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
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
      size: { width: 160, height: 160 },
      color: "blue"
    },
    {
      id: "2",
      text: "World",
      position: { top: 100, left: 300 },
      size: { width: 160, height: 160 },
      color: "yellow"
    },
    {
      id: "3",
      text: "Yes!",
      position: { top: 100, left: 500 },
      size: { width: 160, height: 160 },
      color: "lime"
    },
    {
      id: "4",
      text: "No!",
      position: { top: 100, left: 700 },
      size: { width: 160, height: 160 },
      color: "green"
    }
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen
        getNotes={async () => notes}
        saveNotes={async (notes) => setNotes(notes)}
      />
    </QueryClientProvider>
  );
};

import { DateTime } from "luxon";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { HomeScreen } from ".";
import { Note } from "../../common";
import { DeleteContextProvider } from "../../common/contexts";

export default {
  title: "components/HomeScreen",
  component: HomeScreen
};

const queryClient = new QueryClient();

export const Empty = () => {
  const [notes, setNotes] = useState<Note[]>([]);
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

export const WithNotes = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      text: "Hello",
      position: { top: 100, left: 100 },
      color: "blue",
      date: DateTime.now().minus({ minutes: 1 }).toJSDate(),
      size: { width: 200, height: 200 },
      zIndex: 1
    },
    {
      id: "2",
      text: "World",
      position: { top: 100, left: 352 },
      color: "yellow",
      date: DateTime.now().minus({ minutes: 5 }).toJSDate(),
      size: { width: 200, height: 200 },
      zIndex: 1
    },
    {
      id: "3",
      text: "Yes!",
      position: { top: 100, left: 604 },
      color: "lime",
      date: DateTime.now().minus({ minutes: 75 }).toJSDate(),
      size: { width: 200, height: 200 },
      zIndex: 1
    },
    {
      id: "4",
      text: "No!",
      position: { top: 100, left: 856 },
      color: "green",
      date: DateTime.now().minus({ minutes: 120 }).toJSDate(),
      size: { width: 200, height: 200 },
      zIndex: 1
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

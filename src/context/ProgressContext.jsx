// src/context/ProgressContext.jsx
import React, { createContext, useContext, useState, useMemo } from 'react';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [completedTopics, setCompletedTopics] = useState([]); // ex: ['components', 'jsx']

  function markTopicCompleted(topicId) {
    setCompletedTopics((prev) =>
      prev.includes(topicId) ? prev : [...prev, topicId]
    );
  }

  const value = useMemo(
    () => ({
      completedTopics,
      markTopicCompleted,
    }),
    [completedTopics]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}

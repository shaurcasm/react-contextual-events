import React, { Context, createContext, useContext, useEffect, useMemo, useState } from "react";

interface IEventsContext {
    general: any[]
    services: any[]
    systems: any[]
}

const INITIAL_STATE : IEventsContext = {
    general: [],
    services: [],
    systems: [],
};

const EventsContext : Context<IEventsContext> = createContext(INITIAL_STATE);


export function EventsContextProvider({ children }: { children: React.ReactElement }) {

    const [events, setEvents] = useState<any>([])

    useEffect(() => {
      const sse = new EventSource('http://localhost:8080/stream');
      function getRealtimeData(data : number) {
        setEvents((prev : number[]) => [...prev, data])
      }
      sse.onmessage = e => getRealtimeData(JSON.parse(e.data));
      sse.onerror = () => {
        // error log here 
        sse.close();
      }

      return () => {
        sse.close();
      };
    }, [setEvents]);
    
    const eventsContext : IEventsContext = useMemo(() => {
      // Segregate events according to type here
      console.log('events', events)
      return {
          general: events,
          services: events,
          systems: events,
      }
    }, [events])

    return (
      <EventsContext.Provider value={eventsContext}>
        {children}
      </EventsContext.Provider>
    );
}

export function useEvents() {
  return useContext(EventsContext);
}
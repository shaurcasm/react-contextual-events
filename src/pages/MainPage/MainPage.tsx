import { EventsContextProvider } from "../../contexts/EventsContextProvider";
import AppRouterProvider from "../../router/Router";

export function MainPage() {
    
    return (
        <EventsContextProvider>
          <AppRouterProvider />
        </EventsContextProvider>
    )
}
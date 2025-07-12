
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PollsPage from "./pages/PollsPage";
import ProfilePage from "./pages/ProfilePage";
import SurveyResultsPage from "./pages/SurveyResultsPage";
import SurveyResultsDemoPage from "./pages/SurveyResultsDemoPage";
import PollFormPage from "./pages/PollFormPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/polls" element={<PollsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/results" element={<SurveyResultsPage />} />
          <Route path="/results-demo" element={<SurveyResultsDemoPage />} />
          <Route path="/poll-form" element={<PollFormPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import PollsPage from "./pages/PollsPage";
import PollDetail from "./pages/PollDetail";
import CreatePollPage from "./pages/CreatePollPage";
import ProfilePage from "./pages/ProfilePage";
import SurveyResultsPage from "./pages/SurveyResultsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/polls" element={<PollsPage />} />
          <Route path="/poll/:pollId" element={<PollDetail />} />
          <Route path="/create" element={<CreatePollPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/results" element={<SurveyResultsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Solucoes from "./pages/Solucoes";
import Cases from "./pages/Cases";
import Blog from "./pages/Blog";
import Midia from "./pages/Midia";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import AreaCliente from "./pages/AreaCliente";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import NotFound from "./pages/NotFound";
import ComoComecarInvestirImoveis from "./pages/blog/ComoComecarInvestirImoveis";
import Metodologia2080Explicada from "./pages/blog/Metodologia2080Explicada";
import ErrosComunsInvestimento from "./pages/blog/ErrosComunsInvestimento";
import LocalizacaoOuPreco from "./pages/blog/LocalizacaoOuPreco";
import GestaoImoveisTerceirizar from "./pages/blog/GestaoImoveisTerceirizar";
import ConsorcioImovelGuia from "./pages/blog/ConsorcioImovelGuia";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/midia" element={<Midia />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/area-cliente" element={<AreaCliente />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/post/como-comecar-investir-imoveis" element={<ComoComecarInvestirImoveis />} />
          <Route path="/post/metodologia-20-80-explicada" element={<Metodologia2080Explicada />} />
          <Route path="/post/erros-comuns-investimento" element={<ErrosComunsInvestimento />} />
          <Route path="/post/localizacao-ou-preco" element={<LocalizacaoOuPreco />} />
          <Route path="/post/gestao-imoveis-terceirizar" element={<GestaoImoveisTerceirizar />} />
          <Route path="/post/consorcio-imovel-guia" element={<ConsorcioImovelGuia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

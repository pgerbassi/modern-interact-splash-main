import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    title: "Fluência em 2 meses em RUSSO",
    author: "João",
    thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Desafio de ser tornar hiperpoliglota em 1 ano",
    author: "Felipe",
    thumbnail: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Conquistou o certificado de proficiência em alemão em 1 mês",
    author: "Daniele",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    []
  );

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter text-neon mb-12 animate-fade-up">
          Depoimentos em Vídeo
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-secondary/50 border-none overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <img
                        src={testimonial.thumbnail}
                        alt={testimonial.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-neon" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{testimonial.title}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.author}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
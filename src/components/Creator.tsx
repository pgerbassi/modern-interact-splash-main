import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Creator = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl font-bold tracking-tighter text-neon">
              Sobre Vitor
            </h2>
            <p className="text-lg text-muted-foreground">
              Vitor é um hiperpoliglota apaixonado por aprendizagem de idiomas que revolucionou a maneira de como estudar uma nova lingua.
            </p>
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24 border-2 border-neon animate-float">
                <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=200&h=200" />
                <AvatarFallback>VT</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">Vitor</h3>
                <p className="text-muted-foreground">Founder & Creator</p>
              </div>
            </div>
          </div>
          
          <Card className="bg-secondary/50 border-none overflow-hidden group animate-fade-up delay-200">
            <CardContent className="p-6">
              <div className="w-full aspect-square relative">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="w-full h-full text-neon transform transition-transform group-hover:scale-110 duration-500"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
                        className="animate-float" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Creator;
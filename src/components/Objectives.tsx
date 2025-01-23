import { Check, Target, Zap, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const objectives = [
  {
    icon: Brain,
    title: "Smart Learning",
    description:
      "Adaptive learning algorithms that understand and evolve with your needs",
  },
  {
    icon: Target,
    title: "Precision Focus",
    description:
      "Targeted assistance that helps you achieve your specific goals efficiently",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description:
      "Lightning-fast processing and real-time support when you need it most",
  },
  {
    icon: Check,
    title: "Reliable Results",
    description:
      "Consistent, accurate, and dependable outcomes you can count on",
  },
];

const Objectives = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 animate-fade-up">
          Our <span className="text-neon">Objectives</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto animate-fade-up">
          We're committed to revolutionizing the way you interact with AI,
          providing tools that enhance your productivity and creativity.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective, index) => (
            <Card
              key={objective.title}
              className="bg-black border-secondary hover:border-neon transition-all duration-300 group animate-fade-up"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="p-6">
                <div className="mb-4 text-neon">
                  <objective.icon
                    size={32}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-neon transition-colors duration-300">
                  {objective.title}
                </h3>
                <p className="text-gray-400">{objective.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
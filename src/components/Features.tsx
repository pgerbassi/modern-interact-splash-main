import { Rocket, Sparkles, Star, Award, Flame, Zap, Sun } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Rocket,
    title: "Blazing Fast",
    description: "Lightning-quick responses and real-time processing capabilities",
    color: "text-[#F97316]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#F97316]"
  },
  {
    icon: Sparkles,
    title: "AI Powered",
    description: "Advanced artificial intelligence driving smart solutions",
    color: "text-[#D946EF]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#D946EF]"
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "Polished interface with intuitive interactions",
    color: "text-[#8B5CF6]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#8B5CF6]"
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Stay synchronized with instant data updates",
    color: "text-[#0EA5E9]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#0EA5E9]"
  },
  {
    icon: Flame,
    title: "Powerful Tools",
    description: "Advanced features that amplify your capabilities",
    color: "text-[#F97316]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#F97316]"
  },
  {
    icon: Sun,
    title: "Bright Future",
    description: "Continuously evolving with cutting-edge technology",
    color: "text-[#0EA5E9]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#0EA5E9]"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className=" text-center mb-14 mt-28 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Powerful <span className="text-neon">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the cutting-edge capabilities that set us apart and drive your success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group bg-black border-secondary hover:border-neon transition-all duration-500 animate-fade-up overflow-hidden relative ${feature.bgGlow}`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-90" />
              <CardContent className="p-6 relative">
                <div className={`mb-4 ${feature.color} transition-transform duration-300`}>
                  <feature.icon
                    size={32}
                    className="group-hover:scale-110 group-hover:animate-pulse transition-all duration-300"
                  />
                </div>
                <h3 className={`text-xl font-semibold mb-2 group-hover:${feature.color} transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ChevronDown, ListOrdered } from "lucide-react";
import Header from "@/components/layout/Header";
import InfoCard from "@/components/cards/InfoCard";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TransparencyReport = () => {
  const navigate = useNavigate();

  const ingredients = [
    "Water", "Organic Pea Protein", "Coconut Oil", "Sunflower Oil", "Methylcellulose",
    "Natural Flavors", "Potato Starch", "Yeast Extract", "Salt", "Potassium Chloride",
    "Vinegar", "Lemon Juice Concentrate", "Pomegranate Powder", "Beet Juice Extract",
    "Ascorbic Acid", "Annatto Extract", "Citric Acid", "Soy Leghemoglobin"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header variant="full" showSearch />
      
      <main className="container mx-auto px-4 pt-24 pb-20 max-w-5xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            Transparency Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How we analyzed this product
          </h1>
          <p className="text-muted-foreground">
            A complete breakdown of our findings for{" "}
            <span className="text-foreground">Organic Plant-Based Burger Patties</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Analysis Conclusion */}
            <InfoCard 
              title="" 
              className="animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <h2 className="text-lg font-semibold text-foreground">Analysis Conclusion</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Based on your preferences for <span className="text-foreground font-medium">Low Sugar</span> and{" "}
                <span className="text-foreground font-medium">Vegan</span> diets, we analyzed the nutritional panel and 45 distinct ingredients to ensure they meet your safety standards. The product contains no animal-derived ingredients and falls within the acceptable sugar intake range for a single serving.
              </p>
              <div className="flex flex-wrap gap-2">
                <StatusBadge variant="safe">Safe to consume</StatusBadge>
                <StatusBadge variant="neutral">No Allergens Detected</StatusBadge>
              </div>
            </InfoCard>

            {/* Philosophy */}
            <InfoCard 
              title=""
              className="animate-fade-in"
              style={{ animationDelay: "0.15s" }}
            >
              <h2 className="text-lg font-semibold text-foreground mb-3">Our Philosophy</h2>
              <p className="text-muted-foreground">
                We focus on ingredients that impact daily health decisions. Our AI prioritizes evidence-based nutritional science over marketing claims. We flag additives, excessive preservatives, and hidden sugars to give you a clear picture of what you are eating.
              </p>
            </InfoCard>

            {/* Full Ingredient List */}
            <Accordion type="single" collapsible className="glass-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <AccordionItem value="ingredients" className="border-none">
                <AccordionTrigger className="px-5 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <ListOrdered className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold text-foreground">
                      Full Ingredient List ({ingredients.length} items)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {ingredients.map((ingredient, index) => (
                      <div 
                        key={index}
                        className="text-sm text-muted-foreground py-1.5 px-3 rounded bg-secondary/50"
                      >
                        {ingredient}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Data Sources */}
            <InfoCard 
              title="Data Sources"
              className="animate-fade-in"
              style={{ animationDelay: "0.25s" }}
            >
              <div className="space-y-3">
                {[
                  "USDA FoodData Central",
                  "OpenFoodFacts Database",
                  "FDA GRAS List (Generally Recognized as Safe)"
                ].map((source, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{source}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="#"
                className="inline-flex items-center text-sm text-primary hover:underline font-medium mt-4"
              >
                Learn more about our methodology →
              </Link>
            </InfoCard>

            {/* Disclaimer */}
            <div className="glass-card p-5 border-warning/30 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <h3 className="text-sm font-semibold text-warning">Important Disclaimer</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This analysis is generated by AI and is not medical advice. While we strive for accuracy, formulations can change. Always check the physical packaging label before consumption, especially if you have severe allergies.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2023 SafeFood AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TransparencyReport;
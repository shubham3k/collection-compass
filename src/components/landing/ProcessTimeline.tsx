import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Lightbulb, 
  PhoneCall, 
  Handshake, 
  FileCheck, 
  BarChart 
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Account Analysis",
    description: "Comprehensive portfolio assessment and debtor profiling to understand recovery potential.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Customized recovery strategies based on debt age, amount, and customer demographics.",
  },
  {
    icon: PhoneCall,
    title: "Customer Contact",
    description: "Multi-channel outreach through calls, SMS, email, and field visits as needed.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Settlement",
    description: "Professional negotiation to achieve optimal settlement terms for all parties.",
  },
  {
    icon: FileCheck,
    title: "Documentation & Closure",
    description: "Complete documentation and formal closure of recovered accounts.",
  },
  {
    icon: BarChart,
    title: "Reporting & Analytics",
    description: "Detailed performance reports and insights for continuous improvement.",
  },
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">OUR PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Proven Recovery Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our systematic approach ensures consistent results while maintaining 
            compliance and preserving customer relationships.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative lg:flex lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className={`bg-card rounded-xl p-6 card-shadow border border-border ${isEven ? "lg:ml-auto" : ""} max-w-md`}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className={`text-muted-foreground ${isEven ? "lg:text-right" : ""}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full items-center justify-center text-primary-foreground font-bold text-lg border-4 border-background">
                    {index + 1}
                  </div>

                  {/* Mobile Step Number */}
                  <div className="lg:hidden absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

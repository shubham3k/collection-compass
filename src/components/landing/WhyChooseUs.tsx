import { motion } from "framer-motion";
import { Clock, Percent, Shield, Star } from "lucide-react";

const features = [
  {
    icon: Clock,
    stat: "24-48 Hrs",
    title: "Quick Approvals",
    description: "Fast loan processing with minimal documentation and instant in-principle approval.",
  },
  {
    icon: Percent,
    stat: "10.99%",
    title: "Interest Rates From",
    description: "Industry-best interest rates with no hidden charges. Transparent pricing always.",
  },
  {
    icon: Shield,
    stat: "100%",
    title: "RBI Compliant",
    description: "Registered Non-Banking Financial Company following all regulatory guidelines.",
  },
  {
    icon: Star,
    stat: "10,000+",
    title: "Happy Customers",
    description: "Trusted by thousands for their financial needs with 4.5+ star rating.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold mb-4 tracking-wide text-sm">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Your Financial Growth is Our Priority
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We combine technology with personalized service to make your loan 
              journey seamless. From application to disbursement, experience 
              hassle-free financing with complete transparency.
            </p>
            
            <div className="space-y-4">
              {[
                "Quick disbursement within 24-48 hours of approval",
                "Flexible repayment options to suit your cash flow",
                "Dedicated relationship managers for personalized support",
                "100% paperless digital loan application process",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 card-elevated hover:card-elevated-hover transition-all duration-300 text-center group border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{feature.stat}</div>
                <div className="text-foreground font-semibold mb-2 text-sm">{feature.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

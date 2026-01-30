import { motion } from "framer-motion";
import { TrendingUp, Users, Shield, Cpu } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    stat: "85%+",
    title: "Recovery Rate",
    description: "Industry-leading recovery rates through proven strategies and experienced professionals.",
  },
  {
    icon: Users,
    stat: "50+",
    title: "Trained Professionals",
    description: "Skilled collection specialists with extensive training in negotiation and compliance.",
  },
  {
    icon: Shield,
    stat: "100%",
    title: "RBI & Legal Compliant",
    description: "Complete adherence to RBI guidelines and all applicable debt collection regulations.",
  },
  {
    icon: Cpu,
    stat: "24/7",
    title: "Technology Driven",
    description: "Advanced CRM, analytics dashboards, and automated workflows for maximum efficiency.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-light-blue">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold mb-4">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partner with the Leaders in Ethical Debt Recovery
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We combine decades of experience with cutting-edge technology to deliver 
              exceptional recovery results while maintaining the highest ethical standards 
              and protecting your brand reputation.
            </p>
            
            <div className="space-y-4">
              {[
                "Customized recovery strategies for each portfolio segment",
                "Real-time reporting and complete transparency",
                "Dedicated account managers for personalized service",
                "Multi-lingual support across all major Indian languages",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-trust rounded-full" />
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
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{feature.stat}</div>
                <div className="text-foreground font-semibold mb-2">{feature.title}</div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

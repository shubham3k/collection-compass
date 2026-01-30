import { motion } from "framer-motion";
import { 
  Building2, 
  Landmark, 
  Smartphone, 
  CreditCard, 
  ShoppingBag 
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    description: "Public and private sector banks, scheduled commercial banks",
  },
  {
    icon: Building2,
    title: "NBFCs & Microfinance",
    description: "Non-banking financial companies and microfinance institutions",
  },
  {
    icon: Smartphone,
    title: "Fintech & Digital Lending",
    description: "Digital lending platforms and buy-now-pay-later services",
  },
  {
    icon: CreditCard,
    title: "Credit Card Companies",
    description: "Credit card issuers and payment processing companies",
  },
  {
    icon: ShoppingBag,
    title: "Retail Finance",
    description: "Consumer durables financing and retail credit providers",
  },
];

const IndustriesServed = () => {
  return (
    <section id="industries" className="section-padding bg-navy">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-trust font-semibold mb-4">INDUSTRIES WE SERVE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground mb-6">
            Trusted Across the Financial Sector
          </h2>
          <p className="text-navy-foreground/70 text-lg max-w-2xl mx-auto">
            We partner with leading financial institutions across India, 
            delivering consistent results across diverse portfolio types.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-navy-foreground/5 border border-navy-foreground/10 rounded-xl p-6 text-center hover:bg-navy-foreground/10 transition-all group"
            >
              <div className="w-14 h-14 bg-trust/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-trust group-hover:scale-110 transition-all duration-300">
                <industry.icon className="h-7 w-7 text-trust group-hover:text-navy" />
              </div>
              <h3 className="text-lg font-semibold text-navy-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-navy-foreground/60">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-navy-foreground/50 text-sm mb-8">TRUSTED BY LEADING INSTITUTIONS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {["Partner Bank 1", "Partner Bank 2", "Partner NBFC", "Partner Fintech", "Partner Finance"].map((name, index) => (
              <div key={index} className="text-navy-foreground/40 font-semibold text-lg">
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesServed;

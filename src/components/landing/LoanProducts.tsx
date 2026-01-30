import { motion } from "framer-motion";
import { 
  Wallet, 
  Building2, 
  Home, 
  Car, 
  GraduationCap, 
  Coins, 
  Stethoscope,
  ArrowRight
} from "lucide-react";

const loanCategories = [
  { 
    icon: Wallet, 
    title: "Personal Finance",
    description: "Wedding, travel, medical emergencies",
    rate: "From 10.99% p.a."
  },
  { 
    icon: Building2, 
    title: "Business & SME",
    description: "Working capital, expansion, equipment",
    rate: "From 12.99% p.a."
  },
  { 
    icon: Home, 
    title: "Property & Real Estate",
    description: "Home purchase, construction, renovation",
    rate: "From 8.50% p.a."
  },
  { 
    icon: Car, 
    title: "Vehicle Financing",
    description: "Cars, two-wheelers, commercial vehicles",
    rate: "From 9.25% p.a."
  },
  { 
    icon: GraduationCap, 
    title: "Education Loans",
    description: "Higher studies, skill development",
    rate: "From 9.99% p.a."
  },
  { 
    icon: Coins, 
    title: "Gold Loans",
    description: "Instant cash against gold jewelry",
    rate: "From 7.50% p.a."
  },
  { 
    icon: Stethoscope, 
    title: "Professional Loans",
    description: "For doctors, CAs, architects, lawyers",
    rate: "From 11.50% p.a."
  },
];

const LoanProducts = () => {
  return (
    <section id="loan-products" className="section-padding bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sage font-semibold mb-4 tracking-wide text-sm">LOAN CATEGORIES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6 tracking-tight">
            A Loan for Every Dream
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether it's your first home, a new business venture, or higher education – 
            we have the perfect financial solution for you.
          </p>
        </motion.div>

        {/* Loan Categories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {loanCategories.map((category, index) => (
            <motion.a
              key={index}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-6 hover:bg-cream/10 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <category.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-cream mb-1 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-cream/60 text-sm mb-3">
                {category.description}
              </p>
              <span className="text-xs font-semibold text-sage">
                {category.rate}
              </span>
            </motion.a>
          ))}
          
          {/* CTA Card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="group bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-xl p-6 hover:bg-primary transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center"
          >
            <ArrowRight className="h-8 w-8 text-primary group-hover:text-primary-foreground mb-3 transition-colors" />
            <span className="font-semibold text-cream group-hover:text-primary-foreground transition-colors">
              Explore All Products
            </span>
          </motion.a>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-cream/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "₹500 Cr+", label: "Total Disbursement" },
              { value: "10,000+", label: "Happy Customers" },
              { value: "50+", label: "Partner Banks" },
              { value: "25+", label: "Cities Covered" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-cream/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoanProducts;

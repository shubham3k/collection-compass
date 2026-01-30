import { motion } from "framer-motion";
import { 
  User, 
  Briefcase, 
  Home, 
  Car, 
  Building, 
  HeadphonesIcon,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: User,
    title: "Personal Loans",
    description: "Quick personal loans up to ₹25 lakhs with minimal documentation. Flexible tenure and competitive interest rates starting from 10.99% p.a.",
    highlight: "Up to ₹25 Lakhs",
  },
  {
    icon: Briefcase,
    title: "Business & MSME Loans",
    description: "Fuel your business growth with working capital loans, term loans, and equipment financing. Customized solutions for SMEs and enterprises.",
    highlight: "For SMEs & Startups",
  },
  {
    icon: Home,
    title: "Home Loans",
    description: "Make your dream home a reality with home loans up to ₹5 crores. Low interest rates, longer tenure, and doorstep service available.",
    highlight: "Up to ₹5 Crores",
  },
  {
    icon: Car,
    title: "Vehicle Loans",
    description: "Car loans and two-wheeler loans with up to 90% financing. Quick approval and competitive rates for new and used vehicles.",
    highlight: "90% Financing",
  },
  {
    icon: Building,
    title: "Loan Against Property",
    description: "Unlock the value of your property with LAP up to ₹10 crores. Flexible repayment options for any financial need.",
    highlight: "Up to ₹10 Crores",
  },
  {
    icon: HeadphonesIcon,
    title: "Banking Support Services",
    description: "Complete assistance for account opening, KYC updates, digital banking setup, and financial documentation services.",
    highlight: "End-to-End Support",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesGrid = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide text-sm">OUR LOAN PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Financial Solutions for Every Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From personal aspirations to business growth, we offer comprehensive 
            loan products tailored to your unique financial requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-xl p-8 card-elevated hover:card-elevated-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all group-hover:underline"
              >
                Apply Now
                <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;

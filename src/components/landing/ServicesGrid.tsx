import { motion } from "framer-motion";
import { 
  Phone, 
  Scale, 
  Search, 
  FileText, 
  BarChart3, 
  Users,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Telecalling & Field Collections",
    description: "Professional multi-channel contact strategies with trained agents who maintain your brand standards while maximizing customer engagement.",
  },
  {
    icon: Scale,
    title: "Legal Action Support",
    description: "Comprehensive legal proceedings management including notices, arbitration support, and court case coordination with experienced legal partners.",
  },
  {
    icon: Search,
    title: "Skip Tracing & Customer Location",
    description: "Advanced skip tracing using proprietary databases and investigation techniques to locate hard-to-find debtors efficiently.",
  },
  {
    icon: FileText,
    title: "Pre-Legal Debt Recovery",
    description: "Strategic early-stage interventions that resolve debts before escalation, preserving customer relationships and reducing costs.",
  },
  {
    icon: BarChart3,
    title: "Recovery Analytics & Reporting",
    description: "Real-time dashboards and detailed analytics providing complete visibility into portfolio performance and recovery metrics.",
  },
  {
    icon: Users,
    title: "Documentation & Compliance",
    description: "End-to-end documentation management ensuring complete audit trails and adherence to all regulatory requirements.",
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
          <span className="inline-block text-primary font-semibold mb-4">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Debt Recovery Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end collection services tailored to your portfolio needs, 
            from gentle reminders to complete legal support.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all group-hover:underline"
              >
                Learn more
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

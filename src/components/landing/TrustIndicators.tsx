import { motion } from "framer-motion";
import { Shield, Award, Lock, FileCheck, Quote } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "RBI Compliant",
    description: "Full adherence to Reserve Bank of India guidelines for debt collection",
  },
  {
    icon: Award,
    title: "ISO 27001 Certified",
    description: "Information security management system certification",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Enterprise-grade data protection and privacy measures",
  },
  {
    icon: FileCheck,
    title: "Legal Compliance",
    description: "Complete adherence to all applicable debt collection laws",
  },
];

const testimonials = [
  {
    quote: "RecoveryPro has consistently delivered exceptional recovery rates while maintaining the highest ethical standards. Their transparency and professionalism have made them our preferred collection partner.",
    author: "Senior VP, Collections",
    company: "Leading Private Sector Bank",
  },
  {
    quote: "The real-time reporting and dedicated account management have transformed how we track our portfolio performance. Highly recommended for any institution looking to improve recovery rates.",
    author: "Head of Risk",
    company: "Major NBFC",
  },
];

const TrustIndicators = () => {
  return (
    <section className="section-padding bg-light-blue">
      <div className="container mx-auto px-4">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold mb-4">TRUST & COMPLIANCE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Certified. Compliant. Trusted.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 card-shadow text-center border border-border"
            >
              <div className="w-14 h-14 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon className="h-7 w-7 text-trust" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            What Our Partners Say
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 card-shadow border border-border relative"
            >
              <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
              <p className="text-foreground mb-6 italic leading-relaxed relative z-10 pt-4">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;

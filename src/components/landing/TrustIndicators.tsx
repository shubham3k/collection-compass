import { motion } from "framer-motion";
import { Shield, Award, Lock, FileCheck, Quote } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "RBI Registered NBFC",
    description: "Registered with Reserve Bank of India under NBFC regulations",
  },
  {
    icon: Award,
    title: "ISO 27001 Certified",
    description: "Information security management system certification",
  },
  {
    icon: Lock,
    title: "PCI DSS Compliant",
    description: "Payment Card Industry Data Security Standard compliance",
  },
  {
    icon: FileCheck,
    title: "Fair Practice Code",
    description: "Complete adherence to RBI Fair Practice Code guidelines",
  },
];

const testimonials = [
  {
    quote: "Got my personal loan approved within 24 hours! The team was incredibly helpful and the entire process was completely transparent. No hidden charges at all.",
    author: "Rajesh Kumar",
    company: "IT Professional, Bangalore",
    rating: 5,
  },
  {
    quote: "FinServe Pro helped my business grow with a quick MSME loan. Their relationship manager understood our needs perfectly and offered the best rates in the market.",
    author: "Priya Sharma",
    company: "Business Owner, Mumbai",
    rating: 5,
  },
];

const TrustIndicators = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto px-4">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide text-sm">TRUST & COMPLIANCE</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Regulated. Secure. Trusted.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 card-elevated text-center border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-sage/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage transition-colors">
                <cert.icon className="h-7 w-7 text-charcoal group-hover:text-charcoal transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
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
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            What Our Customers Say
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 card-elevated border border-border relative"
            >
              <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/15" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
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

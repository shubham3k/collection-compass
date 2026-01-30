import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Calculator, IndianRupee, Calendar, Percent } from "lucide-react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(24);

  const { emi, totalInterest, totalPayable } = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;

    if (monthlyRate === 0) {
      return {
        emi: principal / months,
        totalInterest: 0,
        totalPayable: principal,
      };
    }

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayableValue = emiValue * months;
    const totalInterestValue = totalPayableValue - principal;

    return {
      emi: Math.round(emiValue),
      totalInterest: Math.round(totalInterestValue),
      totalPayable: Math.round(totalPayableValue),
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatCompact = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    } else if (value >= 1000) {
      return `₹${(value / 1000).toFixed(1)}K`;
    }
    return `₹${value}`;
  };

  return (
    <section id="emi-calculator" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide text-sm">
            EMI CALCULATOR
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Plan Your Loan Repayment
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Use our EMI calculator to estimate your monthly payments and plan your finances better.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sliders */}
            <div className="bg-card rounded-2xl p-8 card-elevated border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calculator className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Adjust Your Loan Details</h3>
              </div>

              {/* Loan Amount */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Loan Amount</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{formatCompact(loanAmount)}</span>
                </div>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={50000}
                  max={10000000}
                  step={50000}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₹50K</span>
                  <span>₹1 Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Percent className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Interest Rate (p.a.)</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{interestRate}%</span>
                </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  min={7}
                  max={24}
                  step={0.5}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>7%</span>
                  <span>24%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Loan Tenure</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{tenure} Months</span>
                </div>
                <Slider
                  value={[tenure]}
                  onValueChange={(value) => setTenure(value[0])}
                  min={6}
                  max={84}
                  step={6}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>6 Months</span>
                  <span>84 Months</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-charcoal rounded-2xl p-8 text-cream">
              <h3 className="text-lg font-semibold mb-8">Your EMI Breakdown</h3>

              {/* EMI Display */}
              <div className="text-center mb-10">
                <p className="text-cream/60 text-sm mb-2">Monthly EMI</p>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {formatCurrency(emi)}
                </div>
                <p className="text-cream/60 text-sm">per month for {tenure} months</p>
              </div>

              {/* Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-cream/10">
                  <span className="text-cream/70">Principal Amount</span>
                  <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-cream/10">
                  <span className="text-cream/70">Total Interest</span>
                  <span className="font-semibold text-sage">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-cream/70">Total Payable</span>
                  <span className="font-bold text-lg">{formatCurrency(totalPayable)}</span>
                </div>
              </div>

              {/* Visual Breakdown */}
              <div className="mb-8">
                <div className="flex h-4 rounded-full overflow-hidden bg-cream/10">
                  <div
                    className="bg-primary transition-all duration-300"
                    style={{ width: `${(loanAmount / totalPayable) * 100}%` }}
                  />
                  <div
                    className="bg-sage transition-all duration-300"
                    style={{ width: `${(totalInterest / totalPayable) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-primary" />
                    <span className="text-cream/60">Principal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-sage" />
                    <span className="text-cream/60">Interest</span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full text-center py-4 bg-primary hover:bg-crimson-dark text-primary-foreground font-semibold rounded-xl transition-colors"
              >
                Apply for This Loan
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EMICalculator;

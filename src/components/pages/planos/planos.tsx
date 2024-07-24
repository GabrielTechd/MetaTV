import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { planos, Plan } from "./planos-data";
import { FaStar, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={`relative ${inView ? "animate-show" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      style={{ minHeight: '450px', maxWidth: '400px', width: '100%' }}
    >
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full">
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-extrabold mb-4 flex items-center">
            <FaStar className="mr-2 text-yellow-400" />
            {plan.title}
          </h2>
          <p className="text-3xl font-bold mb-2 flex items-center">
            <FaDollarSign className="mr-2" />
            {plan.price}
          </p>
          {plan.monthlyPrice && (
            <p className="text-lg mb-2 flex items-center">
              <FaCalendarAlt className="mr-2" />
              {plan.monthlyPrice}
            </p>
          )}
          <p className="text-lg mb-4 flex items-center">
            <FaCalendarAlt className="mr-2" />
            {plan.duration}
          </p>
          <ul className="list-disc pl-5 mb-4 flex-grow flex flex-col">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="text-sm flex items-center mb-2">
                <MdCheckCircle className="mr-2 text-green-400" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <a className="m-auto" href={plan.link} target="_blank" rel="noopener noreferrer">
          <Button variant="default" className="">
            Compre agora
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

const PlansPage = () => {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    setPlans(planos);
  }, []);

  return (
    <div id="planos" className="relative flex flex-col h-auto bg-gray-900 text-white">
      <div className="parallax flex-grow">
        <div className="parallax-content flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-white">
            Nossos Planos
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;

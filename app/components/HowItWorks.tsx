import React from 'react';
import { CalendarDays, ClipboardList, UsersRound } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Check Availability",
      description: "See if your date is open in our calendar.",
      icon: <CalendarDays size={30} strokeWidth={1.5} className="text-[#C49A45]" />,
    },
    {
      number: "02",
      title: "Submit Your Event Details",
      description: "Tell us about your celebration and vision.",
      icon: <ClipboardList size={30} strokeWidth={1.5} className="text-[#C49A45]" />,
    },
    {
      number: "03",
      title: "We Handle the Rest",
      description: "We'll get back to you with everything you need.",
      icon: <UsersRound size={30} strokeWidth={1.5} className="text-[#C49A45]" />,
    }
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#FAF8F5] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-tight">
            Booked in 3 Simple Steps
          </h2>
          <div className="h-[1px] w-16 bg-[#C49A45]/60"></div>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-300/60">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-3 ${index !== 0 ? 'md:pl-8 pt-6 md:pt-0' : 'pb-6 md:pb-0'}`}
            >
              {}
              <div className="flex items-center gap-3">
                <span className="font-serif text-5xl font-semibold text-[#C49A45] tracking-tight">
                  {step.number}
                </span>
                {step.icon}
              </div>

              {}
              <h3 className="text-lg font-semibold text-gray-900 font-serif leading-snug">
                {step.title}
              </h3>

              {}
              <p className="text-sm text-stone-500 font-sans leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
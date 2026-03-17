import { Search, Database, Zap, LineChart } from "lucide-react";

export function WorkProcess() {
  const steps = [
    {
      title: "Audit & Strategy",
      description: "Analyze existing funnels and build a clear channel strategy before spending budget.",
      icon: <Search className="w-5 h-5" />,
      tag: "Phase 1"
    },
    {
      title: "Infrastructure & Tracking",
      description: "Setup robust measurement (Pixel, CAPI, GA4) to ensure every action is accountable.",
      icon: <Database className="w-5 h-5" />,
      tag: "Phase 2"
    },
    {
      title: "Execution & Optimization",
      description: "Deploy targeted Meta/Google Ads and refine landing page to WhatsApp handoffs.",
      icon: <Zap className="w-5 h-5" />,
      tag: "Phase 3"
    },
    {
      title: "Scale & Dashboarding",
      description: "Build internal dashboards and SOPs so the team can monitor and scale revenue consistently.",
      icon: <LineChart className="w-5 h-5" />,
      tag: "Phase 4"
    }
  ];

  return (
    <div className="relative mt-8">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-100 dark:from-blue-900/50 via-blue-300 dark:via-blue-700/50 to-blue-100 dark:to-blue-900/50 z-0"></div>
      
      {/* Connecting Line (Mobile) */}
      <div className="md:hidden absolute top-8 bottom-8 left-8 w-[2px] bg-gradient-to-b from-blue-100 dark:from-blue-900/50 via-blue-300 dark:via-blue-700/50 to-blue-100 dark:to-blue-900/50 z-0"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-row md:flex-col items-start md:items-center relative group">
            {/* Step Icon Node */}
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-slate-800 border-2 border-blue-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none flex items-center justify-center text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-300 dark:group-hover:border-blue-500 group-hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] z-10 relative">
              {step.icon}
              {/* Highlight dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Content box */}
            <div className="ml-6 md:ml-0 md:mt-6 flex flex-col md:text-center flex-1">
              <span className="font-mono text-[0.6rem] text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full self-start md:self-center mb-2 border border-blue-100 dark:border-blue-800/50">
                {step.tag}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed md:px-2">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

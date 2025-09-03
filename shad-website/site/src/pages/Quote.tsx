import React, { useState, useEffect } from "react";
import BackgroundLayout from "../BackgroundLayout";

const Quote: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const totalSteps = 4;

  // Loading animation steps
  const loadingSteps = [
    { text: "Casting line...", duration: 2000 },
    { text: "Hooking ideas...", duration: 2000 },
    { text: "Reeling them in...", duration: 2000 },
    { text: "Success!", duration: 1000 },
  ];

  useEffect(() => {
    if (isSubmitting) {
      let currentLoadingStep = 0;
      setLoadingStep(0);
      setVisibleSteps([0]);

      const runAnimation = () => {
        if (currentLoadingStep < loadingSteps.length - 1) {
          setTimeout(() => {
            currentLoadingStep++;
            setLoadingStep(currentLoadingStep);
            setVisibleSteps((prev) => [...prev, currentLoadingStep]);
            runAnimation();
          }, loadingSteps[currentLoadingStep]?.duration || 2000);
        }
      };

      runAnimation();
    }
  }, [isSubmitting]);

  const projectTypes = [
    { value: "website", label: "🌐 Website Design & Development" },
    { value: "mobile", label: "📱 Mobile App Development" },
    { value: "ecommerce", label: "🛒 E-commerce Solution" },
    { value: "maintenance", label: "🔧 Website Maintenance" },
    { value: "seo", label: "📈 SEO & Digital Marketing" },
    { value: "other", label: "💡 Other Custom Project" },
  ];

  const budgetRanges = [
    { value: "small", label: "💰 $1,000 - $5,000" },
    { value: "medium", label: "💎 $5,000 - $15,000" },
    { value: "large", label: "🏆 $15,000 - $50,000" },
    { value: "enterprise", label: "🚀 $50,000+" },
    { value: "discuss", label: "💬 Let's Discuss" },
  ];

  const timelines = [
    { value: "rush", label: "⚡ Rush (1-2 weeks)" },
    { value: "standard", label: "📅 Standard (1-2 months)" },
    { value: "extended", label: "🗓️ Extended (3-6 months)" },
    { value: "flexible", label: "🤝 Flexible Timeline" },
  ];

  const CustomDropdown = ({
    options,
    isOpen,
    setIsOpen,
    selected,
    setSelected,
    placeholder,
    label,
  }: any) => (
    <div className="space-y-2 relative">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-left flex items-center justify-between"
        >
          <span className={selected ? "text-gray-900" : "text-gray-400"}>
            {selected
              ? options.find((opt: any) => opt.value === selected)?.label
              : placeholder}
          </span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
            {options.map((option: any) => (
              <button
                key={option.value}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setSelected(option.value);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-2xl last:rounded-b-2xl text-gray-900"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const nextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(
      "Next button clicked. Current step:",
      currentStep,
      "Total steps:",
      totalSteps
    );
    if (currentStep < totalSteps) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      console.log("Step updated to:", newStep);
    }
  };

  const prevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    setIsSubmitting(true);
  };

  // Show loading screen
  if (isSubmitting) {
    return (
      <BackgroundLayout>
        <div className="h-screen flex items-start justify-center pt-32">
          <div className="bg-white rounded-3xl p-12 shadow-2xl shadow-black/10 text-center max-w-md w-full relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-white"></div>

            <div className="relative z-10">
              <img
                src="/Loader Shad.gif"
                alt="Loading..."
                className="mx-auto mb-8 w-120 h-30 object-contain transform transition-transform duration-700 hover:scale-105"
              />

              {/* Stacked text animation */}
              <div className="space-y-3 min-h-[200px] flex flex-col justify-start">
                {visibleSteps.map((stepIndex, index) => (
                  <div
                    key={stepIndex}
                    className={`transition-all duration-1000 ease-out transform ${
                      index === visibleSteps.length - 1
                        ? "text-3xl font-bold text-blue-400 scale-105"
                        : "text-xl font-medium text-gray-500 opacity-75"
                    }`}
                    style={{
                      animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`,
                      textShadow:
                        index === visibleSteps.length - 1
                          ? "0 2px 4px rgba(59, 130, 246, 0.1)"
                          : "none",
                    }}
                  >
                    {loadingSteps[stepIndex]?.text}
                  </div>
                ))}
              </div>

              {/* Progress dots */}
              <div className="flex justify-center space-x-2">
                {loadingSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index <= loadingStep
                        ? "bg-blue-400 scale-125"
                        : "bg-gray-200"
                    }`}
                    style={{
                      animationDelay: `${index * 200}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </BackgroundLayout>
    );
  }

  return (
    <BackgroundLayout>
      <section className="py-4 sm:py-8 px-2">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Get Your Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's bring your vision to life with a custom solution
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-400 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Main Form */}
          <div className="bg-white/90 backdrop-blur-xl border border-white/70 rounded-3xl p-10 shadow-2xl shadow-black/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step Content */}
              <div
                key={currentStep}
                className="space-y-8"
                style={{
                  animation: "fadeIn 0.5s ease-out",
                  opacity: 1,
                  transform: "translateY(0)",
                }}
              >
                {currentStep === 1 && (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Let's Get Started
                      </h2>
                      <p className="text-gray-600">
                        Tell us about yourself and your project
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-semibold text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-semibold text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold text-gray-700"
                        >
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Project Details
                      </h2>
                      <p className="text-gray-600">
                        What type of project are you looking for?
                      </p>
                    </div>

                    <CustomDropdown
                      options={projectTypes}
                      isOpen={projectTypeOpen}
                      setIsOpen={setProjectTypeOpen}
                      selected={selectedProjectType}
                      setSelected={setSelectedProjectType}
                      placeholder="Select your project type"
                      label="Project Type"
                    />

                    <div className="space-y-2">
                      <label
                        htmlFor="projectName"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Project Name
                      </label>
                      <input
                        type="text"
                        id="projectName"
                        className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        placeholder="Your Project Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="description"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        rows={6}
                        className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                        placeholder="Describe your project in detail. What are your goals, target audience, key features, and any specific requirements?"
                      />
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Budget & Timeline
                      </h2>
                      <p className="text-gray-600">
                        Help us understand your project scope
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <CustomDropdown
                        options={budgetRanges}
                        isOpen={budgetOpen}
                        setIsOpen={setBudgetOpen}
                        selected={selectedBudget}
                        setSelected={setSelectedBudget}
                        placeholder="Select your budget range"
                        label="Budget Range"
                      />

                      <CustomDropdown
                        options={timelines}
                        isOpen={timelineOpen}
                        setIsOpen={setTimelineOpen}
                        selected={selectedTimeline}
                        setSelected={setSelectedTimeline}
                        placeholder="Select your timeline"
                        label="Project Timeline"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="features"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Key Features & Requirements
                      </label>
                      <textarea
                        id="features"
                        rows={5}
                        className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                        placeholder="List the key features and requirements for your project..."
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="inspiration"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Inspiration & References (Optional)
                      </label>
                      <textarea
                        id="inspiration"
                        rows={3}
                        className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                        placeholder="Share any websites, apps, or designs that inspire you..."
                      />
                    </div>
                  </>
                )}

                {currentStep === 4 && (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Almost Done!
                      </h2>
                      <p className="text-gray-600">
                        Any additional information you'd like to share?
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="additionalInfo"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        rows={4}
                        className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                        placeholder="Anything else you'd like us to know about your project or specific requirements..."
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="attachment"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Project Files (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                        <svg
                          className="w-8 h-8 text-gray-400 mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="text-gray-600 text-sm">
                          <span className="font-medium text-blue-400 hover:text-blue-500 cursor-pointer">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Upload any relevant files, mockups, or documents
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        📞 Prefer to Talk?
                      </h3>
                      <p className="text-gray-700 text-sm mb-4">
                        We'd love to discuss your project over a call! Check
                        this box if you'd like us to schedule a consultation.
                      </p>
                      <div className="flex justify-center">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-400 border-gray-300 rounded focus:ring-blue-400 flex-shrink-0"
                          />
                          <span className="text-sm text-gray-700">
                            Yes, I'd like to schedule a consultation call
                          </span>
                        </label>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                    currentStep === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-blue-400 text-white rounded-2xl font-semibold hover:bg-blue-500 focus:ring-4 focus:ring-blue-400/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-400 text-white rounded-2xl font-semibold hover:bg-blue-500 focus:ring-4 focus:ring-blue-400/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Get My Quote
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              We typically respond to quote requests within 24 hours
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </BackgroundLayout>
  );
};

export default Quote;

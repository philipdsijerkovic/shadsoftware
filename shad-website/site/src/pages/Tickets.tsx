import React, { useState } from "react";
import BackgroundLayout from "../BackgroundLayout";

const Tickets: React.FC = () => {
  const [priorityOpen, setPriorityOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const priorities = [
    {
      value: "low",
      label: "🟢 Low - General inquiry",
      color: "text-green-600",
    },
    {
      value: "medium",
      label: "🟡 Medium - Non-urgent issue",
      color: "text-yellow-600",
    },
    {
      value: "high",
      label: "🟠 High - Affects functionality",
      color: "text-orange-600",
    },
    {
      value: "urgent",
      label: "🔴 Urgent - Service down",
      color: "text-red-600",
    },
  ];

  const categories = [
    { value: "technical", label: "Technical Support" },
    { value: "billing", label: "Billing & Payments" },
    { value: "feature", label: "Feature Request" },
    { value: "bug", label: "Bug Report" },
    { value: "other", label: "Other" },
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
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-left flex items-center justify-between"
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
          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden scrollbar-hide">
            {options.map((option: any) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-2xl last:rounded-b-2xl ${
                  option.color || "text-gray-900"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <BackgroundLayout>
      <section className="py-4 sm:py-8 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Support Center
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the help you need with our dedicated support team
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="group bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Live Chat
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Get instant help from our support team
              </p>
              <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                Start Chat &rarr;
              </button>
            </div>

            <div className="group bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Knowledge Base
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Browse articles and tutorials
              </p>
              <button className="text-blue-600 font-medium text-sm hover:text-gray-blue transition-colors">
                Browse FAQ &rarr;
              </button>
            </div>

            <div className="group bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Reach out via email for detailed help
              </p>
              <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                Send Email &rarr;
              </button>
            </div>
          </div>

          {/* Main Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/90 backdrop-blur-xl border border-white/70 rounded-3xl p-10 shadow-2xl shadow-black/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Submit a Support Ticket
                </h2>
                <p className="text-gray-600">
                  We typically respond within 24 hours
                </p>
              </div>

              <form className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
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
                      className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="Brief description of your issue"
                  />
                </div>

                {/* Priority and Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomDropdown
                    options={priorities}
                    isOpen={priorityOpen}
                    setIsOpen={setPriorityOpen}
                    selected={selectedPriority}
                    setSelected={setSelectedPriority}
                    placeholder="Select priority level"
                    label="Priority Level"
                  />

                  <CustomDropdown
                    options={categories}
                    isOpen={categoryOpen}
                    setIsOpen={setCategoryOpen}
                    selected={selectedCategory}
                    setSelected={setSelectedCategory}
                    placeholder="Select a category"
                    label="Category"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Detailed Description
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Please provide as much detail as possible about your issue. Include any error messages, steps to reproduce, or relevant context..."
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <label
                    htmlFor="attachment"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Attachments (Optional)
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
                      <span className="font-medium text-blue-600 hover:text-blue-700 cursor-pointer">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-500/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/25"
                >
                  Submit Support Ticket
                </button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </BackgroundLayout>
  );
};

export default Tickets;

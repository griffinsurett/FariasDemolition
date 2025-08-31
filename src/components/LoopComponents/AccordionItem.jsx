// src/components/LoopComponents/AccordionItem.jsx
import React from "react";
import Heading from "../Heading";

/** Radio-driven, single-open item with close-on-click via `offId` radio. */
export default function AccordionItem({
  data,
  name = "faq-accordion",
  value = "0",
  defaultChecked = false,
  className = "",
}) {
  const inputId = `acc-${name}-${value}-input`;
  const labelId = `acc-${name}-${value}-label`;
  const panelId = `acc-${name}-${value}-panel`;
  const question = data?.question ?? data?.title ?? "Untitled";
  const answer = data?.answer ?? data?.description ?? data?.body ?? "";
  const svgClasses = "h-4 w-6"

  return (
    <div className={`relative ${className}`} data-accordion-item>
      <article className="rounded-2xl bg-light-primary border border-gray-200/60 transition-all">
        <input
          id={inputId}
          // CHECKBOX ⇢ multi-open, label toggles open/close
          type="checkbox"
          defaultChecked={defaultChecked}
          className="peer sr-only"
        />

        <label
          id={labelId}
          htmlFor={inputId} // ← always targets THIS checkbox
          className="w-full px-6 py-5 text-left flex items-center gap-4 cursor-pointer select-none"
        >
          <span
            className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary border-2 border-primary text-light-primary transition-colors peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary"
            aria-hidden="true"
          >
            <svg
              className={`${svgClasses} peer-checked:hidden`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 5a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5Z" />
            </svg>
            <svg
              className={`hidden ${svgClasses} peer-checked:block`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="5" y="11" width="14" height="2" rx="1" />
            </svg>
          </span>
          <Heading tagName="span" className="h5 text-dark-primary">
            {question}
          </Heading>
          <svg
            className="ml-auto h-5 w-5 text-dark-secondary transition-transform peer-checked:rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </label>

        <div
          id={panelId}
          role="region"
          aria-labelledby={labelId}
          className="grid transition-all duration-200 grid-rows-[0fr] peer-checked:grid-rows-[1fr]"
        >
          <div className="overflow-hidden">
            <div className="px-14 pb-5 -mt-2 text-dark-secondary">
              {typeof answer === "string" ? <p>{answer}</p> : answer}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

import type { FAQ } from "@/content/schemas";

// Native disclosure keeps answers and keyboard operation available without JS.
// The measured height animation is added with the homepage interactions in Phase 4.
export function FAQAccordion({ items }: { items: readonly FAQ[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.id} className="faq-item">
          <summary>
            {item.question}
            <span className="faq-indicator" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

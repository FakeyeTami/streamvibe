import Accordion from "@/components/Accordian";

const faq = [
  { label: "What is StreamVibe?" },
  { label: "How much does StreamVibe cost?" },
  { label: "What content is available on StreamVibe?" },
  { label: "How can I watch StreamVibe?" },
  { label: "How do I sign up for StreamVibe?" },
  { label: "What is the StreamVibe free trial?" },
  { label: "How do I contact StreamVibe customer support?" },
  { label: "What are the StreamVibe payment methods?" },
];

const firstColumn = faq.slice(0, 4);
const secondColumn = faq.slice(4, 8);

export default function Faq() {
  return (
    <section className="section-container-wide mt-42">
      <div className="flex flex-col gap-y-4">
        <h2 className="heading-secondary">Frequently Asked Questions</h2>
        <p className="paragraph-text text-left">
          Got questions? We&#39;ve got answers! Check out our FAQ section to
          find answers to the most common questions about StreamVibe.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div className="flex-1 flex flex-col gap-6">
          {firstColumn.map((faqItem, index) => (
            <Accordion
              key={index}
              index={index + 1}
              label={faqItem.label}
              text="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-6">
          {secondColumn.map((faqItem, index) => (
            <Accordion
              key={index + 4}
              index={index + 5}
              label={faqItem.label}
              text="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
            />
          ))}
        </div>
      </div>
    </section>
  );
}

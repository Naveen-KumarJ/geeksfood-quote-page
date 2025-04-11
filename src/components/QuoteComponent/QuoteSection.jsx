import React from "react";
import styles from "./QuoteSection.module.css"
import QuoteCard from "./QuoteCard";
function QuoteSection() {
  const Quotes = [
    {
      quote: "The best way to get started is to quit talking and begin doing.",
      writer: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      writer: "John Lennon",
    },
    {
      quote: "Do not let what you cannot do interfere with what you can do.",
      writer: "John Wooden",
    },
    {
      quote: "Success is not in what you have, but who you are.",
      writer: "Bo Bennett",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      writer: "Albert Einstein",
    },
    {
      quote:
        "Your time is limited, so don’t waste it living someone else’s life.",
      writer: "Steve Jobs",
    },
    {
      quote: "If you can dream it, you can do it.",
      writer: "Walt Disney",
    },
    {
      quote: "Whether you think you can or you think you can’t, you’re right.",
      writer: "Henry Ford",
    },
    {
      quote:
        "Success usually comes to those who are too busy to be looking for it.",
      writer: "Henry David Thoreau",
    },
    {
      quote: "Don’t watch the clock; do what it does. Keep going.",
      writer: "Sam Levenson",
    },
    {
      quote: "Opportunities don't happen. You create them.",
      writer: "Chris Grosser",
    },
    {
      quote:
        "The only place where success comes before work is in the dictionary.",
      writer: "Vidal Sassoon",
    },
    {
      quote: "Dream big and dare to fail.",
      writer: "Norman Vaughan",
    },
    {
      quote: "Believe you can and you're halfway there.",
      writer: "Theodore Roosevelt",
    },
    {
      quote:
        "The harder you work for something, the greater you'll feel when you achieve it.",
      writer: "Unknown",
    },
    {
      "quote": "Code is like humor. When you have to explain it, it’s bad.",
      "writer": "Cory House"
    },
    {
      "quote": "First, solve the problem. Then, write the code.",
      "writer": "John Johnson"
    },
    {
      "quote": "Experience is the name everyone gives to their mistakes.",
      "writer": "Oscar Wilde"
    },
    {
      "quote": "In order to be irreplaceable, one must always be different.",
      "writer": "Coco Chanel"
    },
    {
      "quote": "Java is to JavaScript what car is to Carpet.",
      "writer": "Chris Heilmann"
    },
    {
      "quote": "Knowledge is power.",
      "writer": "Francis Bacon"
    },
    {
      "quote": "Simplicity is the soul of efficiency.",
      "writer": "Austin Freeman"
    },
    {
      "quote": "Talk is cheap. Show me the code.",
      "writer": "Linus Torvalds"
    },
    {
      "quote": "Programs must be written for people to read, and only incidentally for machines to execute.",
      "writer": "Harold Abelson"
    },
    {
      "quote": "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
      "writer": "Waseem Latif"
    },
    {
      "quote": "It’s not a bug – it’s an undocumented feature.",
      "writer": "Anonymous"
    },
    {
      "quote": "Before software can be reusable it first has to be usable.",
      "writer": "Ralph Johnson"
    },
    {
      "quote": "A user interface is like a joke. If you have to explain it, it’s not that good.",
      "writer": "Martin LeBlanc"
    },
    {
      "quote": "Programs are meant to be read by humans and only incidentally for computers to execute.",
      "writer": "Donald Knuth"
    },
    {
      "quote": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "writer": "Martin Fowler"
    }
  ];

  return (
    <section className={styles.quoteSection}>
      <div className={styles.container}>
          {
            Quotes.map((obj, idx)=><QuoteCard key={idx} info={obj} idx={idx} />)
          }
      </div>
    </section>
  );
}

export default QuoteSection;

// components/ui/StructuredData.js
export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'RemindKaro',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: 'https://remindkaro.in',
    description:
      'Intelligent AI-powered deadline scheduler and reminder assistant. Track coding tests, assignments, interviews, and hackathons with native voice entry and smart urgency escalation.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '0',
      highPrice: '7999',
      offerCount: '3',
    },
    featureList: [
      'AI deadline reminders dashboard',
      'WhatsApp & Telegram deadline escalation',
      'Native voice-based task scheduling',
      'Coding tests, exams, and interviews tracking',
      'Shared studypack and hackathon boards',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import { NextResponse } from 'next/server';
import * as chrono from 'chrono-node';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text input is required' }, { status: 400 });
    }

    // 1. Extract Date using chrono-node
    const parsedDateResults = chrono.parse(text);
    let deadline = null;
    let title = text;

    if (parsedDateResults.length > 0) {
      deadline = parsedDateResults[0].start.date();
      title = text.replace(parsedDateResults[0].text, '').trim();
    } else {
      const defaultDate = new Date();
      defaultDate.setHours(23, 59, 59, 999);
      deadline = defaultDate;
    }

    // Remove filler phrases from title
    title = title.replace(/^(remind me to|remind|task:|note:)\s*/i, '');
    title = title.replace(/,\s*$/, '').trim();
    title = title.charAt(0).toUpperCase() + title.slice(1);

    // 2. Determine Priority
    let priority = 'medium';
    const lowerText = text.toLowerCase();

    if (lowerText.match(/\b(urgent|asap|immediately|critical|high priority|important)\b/)) {
      priority = 'high';
      title = title.replace(/\b(urgent|asap|immediately|critical|high priority|important)\b/gi, '').trim();
    } else if (lowerText.match(/\b(low priority|whenever|no rush|eventually)\b/)) {
      priority = 'low';
      title = title.replace(/\b(low priority|whenever|no rush|eventually)\b/gi, '').trim();
    }

    // 3. Determine Category
    let category = 'General';
    if (lowerText.match(/\b(assignment|homework|project|submit|submission)\b/)) {
      category = 'Assignment';
    } else if (lowerText.match(/\b(meeting|call|sync|standup|interview)\b/)) {
      category = 'Meeting';
    } else if (lowerText.match(/\b(hackathon|contest|competition|coding test)\b/)) {
      category = 'Hackathon';
    } else if (lowerText.match(/\b(work|boss|client|office)\b/)) {
      category = 'Work';
    } else if (lowerText.match(/\b(personal|home|family|doctor|gym)\b/)) {
      category = 'Personal';
    }

    // Final cleanup
    title = title.replace(/\s+/g, ' ').trim() || 'Untitled Task';

    return NextResponse.json({
      title,
      deadline: deadline.toISOString(),
      priority,
      category,
      originalText: text
    });

  } catch (error) {
    console.error('NLP Parse Error:', error);
    return NextResponse.json({ error: 'Failed to parse text', details: error.message }, { status: 500 });
  }
}

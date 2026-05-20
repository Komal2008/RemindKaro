import { NextResponse } from 'next/server';
import * as chrono from 'chrono-node';

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
      // Use the first detected date
      deadline = parsedDateResults[0].start.date();
      
      // Attempt to clean the title by removing the detected date string
      // e.g. "Remind me to call John tomorrow at 5pm" -> "Remind me to call John"
      title = text.replace(parsedDateResults[0].text, '').trim();
    } else {
      // Default to end of today if no date found
      const defaultDate = new Date();
      defaultDate.setHours(23, 59, 59, 999);
      deadline = defaultDate;
    }

    // Optional: further cleanup like removing "Remind me to" from the title
    title = title.replace(/^remind me to /i, '');
    // Capitalize first letter
    title = title.charAt(0).toUpperCase() + title.slice(1);

    // 2. Determine Priority
    let priority = 'medium';
    const lowerText = text.toLowerCase();
    
    if (
      lowerText.includes('urgent') || 
      lowerText.includes('asap') || 
      lowerText.includes('immediately') ||
      lowerText.includes('critical') ||
      lowerText.includes('high priority')
    ) {
      priority = 'high';
      // Clean up priority keywords from title
      title = title.replace(/\b(urgent|asap|immediately|critical|high priority)\b/gi, '').trim();
    } else if (
      lowerText.includes('low priority') ||
      lowerText.includes('whenever') ||
      lowerText.includes('no rush')
    ) {
      priority = 'low';
      title = title.replace(/\b(low priority|whenever|no rush)\b/gi, '').trim();
    }

    // Remove any trailing or extra spaces/punctuation
    title = title.replace(/,\s*$/, '').trim();

    // 3. Determine Category (Basic keyword matching)
    let category = 'General';
    if (lowerText.includes('assignment') || lowerText.includes('homework') || lowerText.includes('project')) {
      category = 'Assignment';
    } else if (lowerText.includes('meeting') || lowerText.includes('call') || lowerText.includes('sync')) {
      category = 'Meeting';
    } else if (lowerText.includes('work') || lowerText.includes('boss')) {
      category = 'Work';
    }

    return NextResponse.json({
      title: title || 'Untitled Task',
      deadline: deadline.toISOString(),
      priority,
      category,
      originalText: text
    });

  } catch (error) {
    console.error('NLP Parse Error:', error);
    return NextResponse.json({ error: 'Failed to parse text' }, { status: 500 });
  }
}

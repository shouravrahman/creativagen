export default function messageToHTML(message: string) {
  const startString = "<!DOCTYPE html>";
  const endString = "</html>";
  // Find position of start and end strings
  const start = message.indexOf(startString);
  const end = message.indexOf(endString);
  // Use slice to extract the HTML document, ensures </html> is included in extracted content
  const html = message.slice(start, end + endString.length);
  return html;
}

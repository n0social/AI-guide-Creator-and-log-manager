# Verbshift Chrome Extension Bridge

## Overview
This Chrome Extension lets you send highlighted text from any website directly to Verbshift's AI guide generator.

## Features
- Right-click selected text and choose "Generate Verbshift Guide" to open https://verbshift.com/generate?content=[ENCODED_TEXT]
- Click the extension icon to open https://verbshift.com
- Simple popup with branding and a quick link

## File Structure
- `manifest.json`: Chrome extension manifest (V3)
- `background.js`: Service worker for context menu and tab logic
- `popup.html`: Branded popup UI

## Next.js Integration (for /generate page)
Add the following React code to your `/generate` page to auto-populate the main input field from the `content` URL parameter:

```tsx
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GeneratePage() {
  const searchParams = useSearchParams();
  const content = searchParams.get('content') || '';

  useEffect(() => {
    if (content) {
      // Replace this with your input state setter
      setInputValue(decodeURIComponent(content));
      // Optionally trigger generation
      // handleGenerate();
    }
  }, [content]);

  // ...rest of your component
}
```

- Replace `setInputValue` and `handleGenerate` with your actual state and generation logic.
- This will auto-fill the input and optionally trigger generation if the `content` param is present.

## Installation
1. Build the extension folder (with icons).
2. Load it in Chrome via `chrome://extensions` (Enable Developer Mode > Load unpacked).
3. Highlight text, right-click, and use the context menu!

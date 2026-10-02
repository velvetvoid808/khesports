# KH Esports — Advertisement System

## What was added
- Full-screen advertisement on public-page load.
- X close button with shrink/fade transition.
- Closed advertisement becomes a floating button at the bottom-right.
- Floating button automatically moves above the existing Back-to-Top button when Back-to-Top is visible.
- Admin-controlled Firestore document: `advertisements/main`.
- Text blocks: Title / Subtitle / Paragraph; font, color, theme purple-blue gradient, bold, italic, underline, alignment and width.
- Image blocks: upload to Firebase Storage, then save the Storage download URL in Firestore.
- Countdown blocks for registration close, event start, or any configured date/time.
- Drag blocks between rows and reorder rows. Width controls allow side-by-side layouts.
- Public page listens with Firestore `onSnapshot`, so saved changes appear without a page refresh.

## Firebase requirements
The existing project config already contains a Firebase Storage bucket. Storage itself must be enabled in the Firebase console if it has not been enabled yet.

The existing Firestore/Auth rules must also allow the authenticated Admin account to write:

`advertisements/main`

The public site only needs read access to that document.

For image uploads, Storage rules should allow the authenticated Admin to write under:

`advertisements/{allPaths=**}`

and allow public reads of the resulting download URLs. Do not make all Storage writes public.

## Files changed
- `admin.html`
- `index.html`
- `style.css`
- `firebase-config.js`
- `ad-sync.js` (new)

`script.js`, `bracket-sync.js`, and `translations.js` were retained unchanged.

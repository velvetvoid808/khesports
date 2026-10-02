// Live-syncs real team names from Firestore onto the public Tournament
// Brackets section. Every editable slot in index.html carries a
// data-slot="<game>:<key>" attribute (added to the Group Stage team spans
// and the Knockout Stage <b>/<strong> placeholders).
//
// This listens with onSnapshot, so the moment the admin panel saves a
// change, every open browser tab updates immediately — no refresh needed.
// If Firestore has no value yet (or is unreachable) for a slot, the
// original placeholder text already in the HTML is left untouched, so the
// page always looks correct even before any data has been entered.

import { db } from "./firebase-config.js";
import {
    doc,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const GAMES = ["hok", "mlbb"];

GAMES.forEach((game) => {
    const ref = doc(db, "brackets", game);

    onSnapshot(
        ref,
        (snapshot) => {
            if (!snapshot.exists()) {
                return;
            }

            const data = snapshot.data();

            Object.keys(data).forEach((key) => {
                const value = data[key];

                if (typeof value !== "string" || value.trim() === "") {
                    return;
                }

                const selector = `[data-slot="${game}:${key}"]`;
                const el = document.querySelector(selector);

                if (el) {
                    el.textContent = value;
                }
            });
        },
        (error) => {
            // Fails silently on the public page (keeps showing placeholder
            // text) but logs so it's easy to diagnose from devtools.
            console.error(`[bracket-sync] ${game} listener error:`, error);
        }
    );
});

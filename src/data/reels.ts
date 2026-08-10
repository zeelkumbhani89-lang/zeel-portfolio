/**
 * CYBER AWARENESS REELS
 * ---------------------------------------------------------------
 * NAYA REEL ADD KARNA (30 second):
 * 1. Instagram pe reel → Share → Copy link
 * 2. Link me se username hata do — sirf ye format rakho:
 *      https://www.instagram.com/reel/CODE/
 * 3. Neeche list me SABSE UPAR ek naya block add karo
 * 4. url, title aur theme bhar do
 * 5. Save → git push → Vercel live. ✅
 *
 * Newest reel hamesha SABSE UPAR rakhna.
 * ---------------------------------------------------------------
 */

export type ReelTheme =
  | "Scam Alert"
  | "AI & Deepfake"
  | "Business Security"
  | "Personal Safety"
  | "Seminar"
  | "Awareness";

export interface Reel {
  /** Full Instagram reel permalink (Copy link from the app). */
  url: string;
  /** Short title shown under the reel. */
  title: string;
  /** Category tag. */
  theme: ReelTheme;
}

export const reels: Reel[] = [
    {
    url: "https://www.instagram.com/reel/Db2G_awsrC7/",
    title: "Fake shopping websites — ₹5,000 product for ₹500 scam",
    theme: "Scam Alert",
  },
  {
    url: "https://www.instagram.com/reel/Daa8aUaNJ2a/",
    title: "Cyber Security Seminar — awareness session highlights",
    theme: "Seminar",
  },
   {
    url: "https://www.instagram.com/reel/DbHpPQ0ogLG/",
    title: "AI is rewriting the future — awareness will rewrite the outcome",
    theme: "Awareness",
  },

];

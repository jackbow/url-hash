const adverbs = [
  "abnormally",
  "absentmindedly",
  "accidentally",
  "actually",
  "adventurously",
  "afterwards",
  "almost",
  "always",
  "annually",
  "anxiously",
  "arrogantly",
  "awkwardly",
  "bashfully",
  "beautifully",
  "bitterly",
  "bleakly",
  "blindly",
  "blissfully",
  "boastfully",
  "boldly",
  "bravely",
  "briefly",
  "brightly",
  "briskly",
  "broadly",
  "busily",
  "calmly",
  "carefully",
  "carelessly",
  "cautiously",
  "certainly",
  "cheerfully",
  "clearly",
  "cleverly",
  "closely",
  "coaxingly",
  "colorfully",
  "commonly",
  "continually",
  "coolly",
  "correctly",
  "courageously",
  "crossly",
  "cruelly",
  "curiously",
  "daily",
  "daintily",
  "dearly",
  "deceivingly",
  "deeply",
  "defiantly",
  "deliberately",
  "delightfully",
  "diligently",
  "dimly",
  "doubtfully",
  "dreamily",
  "easily",
  "elegantly",
  "energetically",
  "enormously",
  "enthusiastically",
  "equally",
  "especially",
  "even",
  "evenly",
  "eventually",
  "exactly",
  "excitedly",
  "extremely",
  "fairly",
  "faithfully",
  "famously",
  "far",
  "fast",
  "fatally",
  "ferociously",
  "fervently",
  "fiercely",
  "fondly",
  "foolishly",
  "fortunately",
  "frankly",
  "frantically",
  "freely",
  "frenetically",
  "frightfully",
  "fully",
  "furiously",
  "generally",
  "generously",
  "gently",
  "gladly",
  "gleefully",
  "gracefully",
  "gratefully",
  "greatly",
  "greedily",
  "happily",
  "hastily",
  "healthily",
  "heavily",
  "helpfully",
  "helplessly",
  "highly",
  "honestly",
  "hopelessly",
  "hourly",
  "hungrily",
  "immediately",
  "innocently",
  "inquisitively",
  "instantly",
  "intensely",
  "intently",
  "interestingly",
  "inwardly",
  "irritably",
  "jaggedly",
  "jealously",
  "jovially",
  "joyfully",
  "joyously",
  "jubilantly",
  "judgmentally",
  "justly",
  "keenly",
  "kiddingly",
  "kindheartedly",
  "kindly",
  "knavishly",
  "knowingly",
  "knowledgeably",
  "kookily",
  "lazily",
  "les",
  "lightly",
  "likely",
  "limply",
  "lively",
  "loftily",
  "longingly",
  "loosely",
  "loudly",
  "lovingly",
  "loyally",
  "madly",
  "majestically",
  "meaningfully",
  "mechanically",
  "merrily",
  "miserably",
  "mockingly",
  "monthly",
  "more",
  "mortally",
  "mostly",
  "mysteriously",
  "naturally",
  "hopelessly",
  "hourly",
  "hungrily",
  "immediately",
  "innocently",
  "inquisitively",
  "instantly",
  "intensely",
  "intently",
  "interestingly",
  "inwardly",
  "irritably",
  "jaggedly",
  "jealously",
  "jovially",
  "joyfully",
  "joyously",
  "jubilantly",
  "judgmentally",
  "justly",
  "keenly",
  "kiddingly",
  "kindheartedly",
  "kindly",
  "knavishly",
  "knowingly",
  "knowledgeably",
  "kookily",
  "lazily",
  "less",
  "lightly",
  "likely",
  "limply",
  "lively",
  "loftily",
  "longingly",
  "loosely",
  "loudly",
  "lovingly",
  "loyally",
  "madly",
  "majestically",
  "meaningfully",
  "mechanically",
  "merrily",
  "miserably",
  "mockingly",
  "monthly",
  "more",
  "mortally",
  "mostly",
  "mysteriously",
  "naturally",
  "nearly",
  "neatly",
  "nervously",
  "never",
  "nicely",
  "noisily",
  "not",
  "obediently",
  "obnoxiously",
  "oddly",
  "offensively",
  "officially",
  "often",
  "only",
  "openly",
  "optimistically",
  "overconfidently",
  "painfully",
  "partially",
  "patiently",
  "perfectly",
  "physically",
  "playfully",
  "politely",
  "poorly",
  "positively",
  "potentially",
  "powerfully",
  "promptly",
  "properly",
  "punctually",
  "quaintly",
  "queasily",
  "queerly",
  "questionably",
  "quicker",
  "quickly",
  "quietly",
  "quirkily",
  "quizzically",
  "randomly",
  "rapidly",
  "rarely",
  "readily",
  "really",
  "reassuringly",
  "recklessly",
  "regularly",
  "reluctantly",
  "repeatedly",
  "reproachfully",
  "restfully",
  "righteously",
  "rightfully",
  "rigidly",
  "roughly",
  "rudely",
  "safely",
  "scarcely",
  "scarily",
  "searchingly",
  "sedately",
  "seemingly",
  "seldom",
  "selfishly",
  "separately",
  "seriously",
  "shakily",
  "sharply",
  "sheepishly",
  "shrilly",
  "shyly",
  "silently",
  "sleepily",
  "slowly",
  "smoothly",
  "softly",
  "solemnly",
  "solidly",
  "sometimes",
  "soon",
  "speedily",
  "stealthily",
  "sternly",
  "strictly",
  "successfully",
  "suddenly",
  "supposedly",
  "surprisingly",
  "suspiciously",
  "sweetly",
  "swiftly",
  "sympathetically",
  "tenderly",
  "tensely",
  "terribly",
  "thankfully",
  "thoroughly",
  "thoughtfully",
  "tightly",
  "tomorrow",
  "too",
  "tremendously",
  "triumphantly",
  "truly",
  "truthfully",
  "rightfully",
  "scarcely",
  "searchingly",
  "sedately",
  "seemingly",
  "selfishly",
  "separately",
  "seriously",
  "sheepishly",
  "smoothly",
  "solemnly",
  "sometimes",
  "speedily",
  "stealthily",
  "successfully",
  "suddenly",
  "supposedly",
  "surprisingly",
  "suspiciously",
  "sympathetically",
  "tenderly",
  "thankfully",
  "thoroughly",
  "thoughtfully",
  "tomorrow",
  "tremendously",
  "triumphantly",
  "truthfully",
  "ultimately",
  "unabashedly",
  "unaccountably",
  "unbearably",
  "unethically",
  "unexpectedly",
  "unfortunately",
  "unimpressively",
  "unnaturally",
  "unnecessarily",
  "upbeat",
  "upright",
  "upside-down",
  "upward",
  "urgently",
  "usefully",
  "uselessly",
  "usually",
  "utterly",
  "vacantly",
  "vaguely",
  "vainly",
  "valiantly",
  "vastly",
  "verbally",
  "very",
  "viciously",
  "victoriously",
  "violently",
  "vivaciously",
  "voluntarily",
  "warmly",
  "weakly",
  "wearily",
  "well",
  "wetly",
  "wholly",
  "wildly",
  "willfully",
  "wisely",
  "woefully",
  "wonderfully",
  "worriedly",
  "wrongly",
  "yawningly",
  "yearly",
  "yearningly",
  "yesterday",
  "yieldingly",
  "youthfully",
  "zealously",
  "zestfully",
  "zestily"
]

export default adverbs
/* DualGen generator — 100% client-side, no API keys. Template-based. */
(function () {
  "use strict";

  var HOOKS = [
    { id: "e01", goals: ["educate"], text: "Most people mess up {topic} in the first 10 seconds. Here's the fix." },
    { id: "e02", goals: ["educate"], text: 'The {topic} explanation I wish someone had given me on day one.' },
    { id: "e03", goals: ["educate"], text: 'If {audience_or_you} only remember one thing about {topic}, make it this.' },
    { id: "e04", goals: ["educate"], text: 'I was today years old when I learned this about {topic}.' },
    { id: "e05", goals: ["educate"], text: "Here's {topic}, minus the jargon." },
    { id: "e06", goals: ["educate"], text: 'The 30-second {topic} lesson {audience_or_you} actually need.' },
    { id: "e07", goals: ["educate"], text: "Nobody teaches {topic} in this order — and that's why it feels hard." },
    { id: "e08", goals: ["educate"], text: 'A simple way to think about {topic} that finally stuck.' },
    { id: "e09", goals: ["educate"], text: 'Stop googling {topic}. Watch this instead.' },
    { id: "e10", goals: ["educate"], text: 'The {topic} checklist I use every time. Steal it.' },
    { id: "e11", goals: ["educate"], text: 'What people mean when they say {topic} — in plain English.' },
    { id: "e12", goals: ["educate"], text: 'Three {topic} terms {audience_or_you} keep mixing up.' },
    { id: "e13", goals: ["educate"], text: 'I broke {topic} into steps a beginner can finish today.' },
    { id: "e14", goals: ["educate"], text: 'This is the {topic} mental model I wish was taught first.' },
    { id: "s01", goals: ["sell"], text: 'If {audience_or_you} are still doing {topic} the hard way, this is for you.' },
    { id: "s02", goals: ["sell"], text: "I wouldn't recommend this {topic} setup if it didn't do one thing." },
    { id: "s03", goals: ["sell"], text: "The {topic} offer I'd actually buy with my own money." },
    { id: "s04", goals: ["sell"], text: 'Before you spend another dollar on {topic}, watch this.' },
    { id: "s05", goals: ["sell"], text: "{audience_or_you_cap} keep asking how I got results with {topic}. Here's the honest answer." },
    { id: "s06", goals: ["sell"], text: 'This is the {topic} shortcut I used to charge for.' },
    { id: "s07", goals: ["sell"], text: "You don't need a bigger budget for {topic}. You need this." },
    { id: "s08", goals: ["sell"], text: "The reason your {topic} isn't converting isn't what you think." },
    { id: "s09", goals: ["sell"], text: 'I tested this {topic} change for a week. The difference was rude.' },
    { id: "s10", goals: ["sell"], text: "If your {topic} feels like a grind, you're missing a step." },
    { id: "s11", goals: ["sell"], text: 'A soft pitch: the {topic} system that pays for itself.' },
    { id: "s12", goals: ["sell"], text: 'Stop buying more {topic} tools. Start with this.' },
    { id: "s13", goals: ["sell"], text: 'I can tell in 15 seconds if a {topic} offer is going to stall.' },
    { id: "s14", goals: ["sell"], text: "{audience_or_you_cap} don't need more content. You need {topic} that sells without shouting." },
    { id: "y01", goals: ["story"], text: 'I almost quit {topic}. Then this happened.' },
    { id: "y02", goals: ["story"], text: "The first time I tried {topic}, I embarrassed myself. Here's what I do now." },
    { id: "y03", goals: ["story"], text: "A client asked me about {topic}. I told them the story I don't put on my website." },
    { id: "y04", goals: ["story"], text: 'This is the {topic} mistake that cost me a month.' },
    { id: "y05", goals: ["story"], text: 'I used to hide this about {topic}. Not anymore.' },
    { id: "y06", goals: ["story"], text: 'Day 1 of {topic} versus day 30. Stay until the end.' },
    { id: "y07", goals: ["story"], text: 'Nobody clapped when I started {topic}. This is what changed.' },
    { id: "y08", goals: ["story"], text: 'Let me tell you how {topic} actually went — not the highlight reel.' },
    { id: "y09", goals: ["story"], text: "I learned {topic} the long way so {audience_or_you} don't have to." },
    { id: "y10", goals: ["story"], text: 'The message that made me rethink {topic}.' },
    { id: "y11", goals: ["story"], text: 'I filmed this the morning after my worst {topic} flop.' },
    { id: "y12", goals: ["story"], text: "Here's the {topic} story I tell friends, not followers." },
    { id: "c01", goals: ["controversy"], text: 'Unpopular opinion: most {topic} advice is backwards.' },
    { id: "c02", goals: ["controversy"], text: "I'm going to say the quiet part about {topic}." },
    { id: "c03", goals: ["controversy"], text: 'If {audience_or_you} are still doing this with {topic}, I need you to stop.' },
    { id: "c04", goals: ["controversy"], text: 'The {topic} “best practice” I wish would die.' },
    { id: "c05", goals: ["controversy"], text: "Everyone's rounding up about {topic}. Here's the honest version." },
    { id: "c06", goals: ["controversy"], text: "You don't need to post every day about {topic}. There, I said it." },
    { id: "c07", goals: ["controversy"], text: 'This {topic} trend is making {audience_or_you} worse, not better.' },
    { id: "c08", goals: ["controversy"], text: 'Hot take: {topic} is easier than people pretend — and harder in one specific way.' },
    { id: "c09", goals: ["controversy"], text: "If your {topic} strategy sounds like everyone else's, it's already stale." },
    { id: "c10", goals: ["controversy"], text: 'I stopped following the usual {topic} rules. My results got better.' },
    { id: "c11", goals: ["controversy"], text: 'The {topic} advice that sounds smart and quietly fails.' },
    { id: "c12", goals: ["controversy"], text: 'Controversial, but {audience_or_you} should hear this about {topic}.' },
    { id: "l01", goals: ["list"], text: '5 {topic} rules I actually use. The rest were noise.' },
    { id: "l02", goals: ["list"], text: '7 {topic} lines {audience_or_you} can steal today.' },
    { id: "l03", goals: ["list"], text: "3 {topic} tools. One I'll defend. One I'll skip." },
    { id: "l04", goals: ["list"], text: 'The only 4 {topic} steps that matter this week.' },
    { id: "l05", goals: ["list"], text: '9 {topic} mistakes I can spot in 30 seconds.' },
    { id: "l06", goals: ["list"], text: 'A {topic} packing list for beginners.' },
    { id: "l07", goals: ["list"], text: "6 things I'd tell {audience_or_you} about {topic} if we had coffee." },
    { id: "l08", goals: ["list"], text: 'Ranked: the {topic} tactics I still use this year.' },
    { id: "l09", goals: ["list"], text: '3 yes, 3 no: my {topic} filter.' },
    { id: "l10", goals: ["list"], text: '8 {topic} prompts I keep in a note on my phone.' },
    { id: "l11", goals: ["list"], text: '5 {topic} questions that save a rewrite later.' },
    { id: "l12", goals: ["list"], text: "The short list: {topic} for people who don't have all day." },
    { id: "b01", goals: ["before-after"], text: 'Before I fixed my {topic}, I sounded like everyone else. After…' },
    { id: "b02", goals: ["before-after"], text: "{topic_cap} before this tweak versus after. I'll wait." },
    { id: "b03", goals: ["before-after"], text: 'Same {audience_or_people}. Same {topic}. Completely different first line.' },
    { id: "b04", goals: ["before-after"], text: "Here's my {topic} from 90 days ago. Don't laugh. Okay, laugh." },
    { id: "b05", goals: ["before-after"], text: "I cut my {topic} time in half with one change. Here's the before and after." },
    { id: "b06", goals: ["before-after"], text: 'This is what {topic} looked like when I was guessing.' },
    { id: "b07", goals: ["before-after"], text: 'From “I hope this works” to a {topic} system I trust.' },
    { id: "b08", goals: ["before-after"], text: 'Watch me rewrite this {topic} hook in 20 seconds.' },
    { id: "b09", goals: ["before-after"], text: 'The old {topic} versus the version that actually gets saved.' },
    { id: "b10", goals: ["before-after"], text: 'I used to start {topic} like this. Never again.' },
    { id: "b11", goals: ["before-after"], text: 'Before: busy. After: {topic} that compounds.' },
    { id: "b12", goals: ["before-after"], text: 'Left side is my old {topic}. Right side is after I changed one line.' }
  ];

  var PROMPTS = [
    { id: "p01", goals: ["educate"], title: '15-second explainer', template: 'You are a short-form writing coach. Write a tight explainer about {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Teach one idea only. Use a concrete example {audience_line} will recognize.\n- After the hook, use this shape: context in one line, the idea in plain words, a tiny example, a closer.\n' },
    { id: "p02", goals: ["educate"], title: 'Five-step how-to', template: 'Write a practical how-to on {topic} that a beginner could follow without googling.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- After the hook, give exactly 5 numbered steps. Each step is one action, not a lecture.\n- Flag the step people usually skip.\n' },
    { id: "p03", goals: ["educate"], title: 'Myth vs fact', template: 'Write a myth-versus-fact script about {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Start from the hook, name one popular myth, why it spreads, then the fact and what to do instead.\n' },
    { id: "p04", goals: ["educate"], title: 'Analogy lesson', template: 'Teach {topic} using one vivid analogy, then translate it back into a real next step.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- The analogy should be everyday, not cute for its own sake.\n' },
    { id: "p05", goals: ["educate"], title: 'Beginner teardown', template: "Teardown a common bad example of {topic} and rebuild a better one live.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Show the weak version first, say what's wrong in one sentence, then rewrite it.\n" },
    { id: "p06", goals: ["educate"], title: 'I wish I knew', template: "Write a lesson titled as something you wish you'd known earlier about {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- After the hook: the old belief, the moment it broke, the rule you use now.\n" },
    { id: "p07", goals: ["educate"], title: 'Rapid FAQ', template: 'Write a rapid FAQ about {topic} with 4 questions {audience_line} actually ask.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Answers are 1-2 sentences. End on the most useful question, not the most obvious.\n' },
    { id: "p08", goals: ["educate"], title: 'Three-term glossary', template: 'Explain three {topic} terms people mix up, in human language.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- For each term: a plain definition, what it is not, and when it matters.\n' },
    { id: "p09", goals: ["educate"], title: 'Checklist walkthrough', template: 'Walk through a short {topic} checklist as if we are doing it together.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- 6 checks max. Call out the one that saves the most pain.\n' },
    { id: "p10", goals: ["educate"], title: 'Mistake and fix', template: 'Open with the hook, then teach the most common {topic} mistake and the fix.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- One mistake only. Show a before line and an after line.\n' },
    { id: "p11", goals: ["educate"], title: 'ELI5 then real', template: 'Explain {topic} in two passes: first as if to a smart beginner, then the “real” version in one paragraph.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n' },
    { id: "p12", goals: ["educate"], title: 'One-task tutorial', template: 'Write a start-to-finish tutorial for one small {topic} task someone can finish today.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Include the expected time and the definition of done.\n' },
    { id: "p13", goals: ["sell"], title: 'Problem-agitate-solve', template: 'Write a PAS (problem, agitate, solve) piece about {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- After the hook: the problem in their words, why waiting makes it worse, then a specific solution — not a vague “I can help.”\n- Sell the outcome, not a feature list.\n' },
    { id: "p14", goals: ["sell"], title: 'AIDA short ad', template: 'Write a short AIDA (attention, interest, desire, action) piece for {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- The hook is Attention. Keep the whole piece tight enough to use as a short-form ad script or a lean landing section.\n' },
    { id: "p15", goals: ["sell"], title: 'Objection handling', template: "Handle the #1 objection {audience_line} have about {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Name the objection honestly. Don't mock it. Answer with a proof point or a test they can run this week.\n" },
    { id: "p16", goals: ["sell"], title: 'Soft-CTA demo', template: "Write a product-or-offer demo for {topic} that does not sound like a late-night ad.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Show one use case, one result, one who-it's-for line, and a low-pressure next step.\n" },
    { id: "p17", goals: ["sell"], title: 'This vs that', template: "Write a clear comparison: the usual way of doing {topic} versus a better way.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Be fair to the old way. Then show who should switch and who shouldn't.\n" },
    { id: "p18", goals: ["sell"], title: 'Offer breakdown', template: "Break down a {topic} offer into what you get, who it's for, and what it is not.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- No hype adjectives. Specifics only.\n" },
    { id: "p19", goals: ["sell"], title: 'Mini case story', template: 'Write a short case-style story about {topic} (you may invent a realistic composite and label it as an example).\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Setup, the change, the result in concrete terms, the caveat.\n' },
    { id: "p20", goals: ["sell"], title: 'For / not for', template: 'Write a “who this {topic} is for / not for” piece that actually helps people self-select.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n' },
    { id: "p21", goals: ["sell"], title: 'Feature to outcome', template: 'Take a {topic} feature or tactic and translate it into a felt outcome for {audience_line}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- No feature dumping. One feature, one outcome, one proof or mini-example.\n' },
    { id: "p22", goals: ["sell"], title: 'Honest pitch', template: 'Write a straight, non-sleazy pitch for {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Include price-positioning language only if it stays general (no fake discounts or invented numbers).\n' },
    { id: "p23", goals: ["story"], title: 'Origin story', template: 'Write an origin-story script about how you got into {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Specific scene, not a resume. End on a lesson {audience_line} can use today.\n' },
    { id: "p24", goals: ["story"], title: 'Failure to lesson', template: "Tell the story of a {topic} failure and the rule it produced.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Don't humble-brag. Make the failure real, then make the lesson sharp.\n" },
    { id: "p25", goals: ["story"], title: 'Day in the life', template: 'Write a day-in-the-life piece that sneaks in a useful {topic} lesson.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Follow a real sequence of hours or tasks. The hook stays first.\n' },
    { id: "p26", goals: ["story"], title: 'Behind the scenes', template: "Write a behind-the-scenes process story for {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Show the messy middle, then the system you use so it doesn't stay messy.\n" },
    { id: "p27", goals: ["story"], title: 'Confession', template: 'Write a candid confession about {topic}, then the change that followed.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n' },
    { id: "p28", goals: ["story"], title: 'The conversation', template: 'Retell a conversation (client, friend, comment, or DM) that changed how you think about {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- You may fictionalize a realistic dialogue. Keep it believable.\n' },
    { id: "p29", goals: ["story"], title: 'Turning point', template: 'Write about the turning-point moment in your {topic} work.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- One scene, one decision, one after-effect.\n' },
    { id: "p30", goals: ["story"], title: 'Highlight vs truth', template: "Tell the version of a {topic} story that doesn't make the highlight reel.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n" },
    { id: "p31", goals: ["controversy"], title: 'Unpopular opinion', template: 'Write a supported unpopular opinion about {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- After the hook: the claim, two reasons, one concession, a better rule.\n- Be pointed, not cruel.\n' },
    { id: "p32", goals: ["controversy"], title: 'Stop doing this', template: 'Write a “stop doing this with {topic} — do this instead” script.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Name the behavior, the hidden cost, and a replacement that is actually doable this week.\n' },
    { id: "p33", goals: ["controversy"], title: 'Myth that should die', template: 'Pick a {topic} idea that should die and explain why, without yelling.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n' },
    { id: "p34", goals: ["controversy"], title: 'Trend critique', template: "Critique a current {topic} trend and offer a sturdier alternative.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Don't just dunk. Leave people with a move.\n" },
    { id: "p35", goals: ["controversy"], title: 'Two sides, then a stance', template: 'Steel-man both sides of a {topic} debate, then take a clear stance.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n' },
    { id: "p36", goals: ["controversy"], title: 'Rule-breaking experiment', template: 'Write about a {topic} rule you broke on purpose and what happened.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Include when others should not copy you.\n' },
    { id: "p37", goals: ["list"], title: 'Ranked five', template: 'Write a ranked list of 5 {topic} tactics, tools, or rules.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- #1 should surprise slightly. One sentence why each earns its place. Cut filler items.\n' },
    { id: "p38", goals: ["list"], title: 'Toolkit', template: 'Build a short {topic} toolkit list (5-7 items) with when to use each.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n' },
    { id: "p39", goals: ["list"], title: "Do and don't", template: "Write a do/don't list for {topic}: 4 dos and 4 don'ts.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Make the don'ts specific, not “don't give up.”\n" },
    { id: "p40", goals: ["list"], title: 'Steal these lines', template: 'Give 7 example lines, hooks, or angles {audience_line} can steal for {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- After the opening hook, list them clearly. Variety of tones. No two should sound the same.\n' },
    { id: "p41", goals: ["list"], title: 'Questions that save time', template: 'List 5 sharp questions to ask before starting {topic} work.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n' },
    { id: "p42", goals: ["list"], title: 'Beginner packing list', template: 'Write a beginner packing list or starter stack for {topic}.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Mark what is essential versus nice-to-have.\n' },
    { id: "p43", goals: ["before-after"], title: 'Live rewrite', template: 'Do a live rewrite: show a weak {topic} hook or draft, then a stronger one, and explain the change.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- After the required opening hook, show BEFORE, AFTER, and the one principle that made the difference.\n' },
    { id: "p44", goals: ["before-after"], title: '30-day recap', template: 'Write a 30-day (or 90-day) {topic} recap: before, during, after.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Use concrete changes, not “I learned so much.” If you invent a composite timeline, label it as an example.\n' },
    { id: "p45", goals: ["before-after"], title: 'Old way vs new way', template: 'Contrast the old way you did {topic} with the new way, step by step.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n' },
    { id: "p46", goals: ["before-after"], title: 'Hook workshop', template: "Run a mini hook workshop on {topic}: 1 weak hook, 3 rewrites, and which you'd post and why.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Keep the required hook as the first line of the piece, then go into the workshop.\n" },
    { id: "p47", goals: ["before-after"], title: 'Time saved', template: 'Show how a {topic} change saved time or effort, with a before and after routine.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n' },
    { id: "p48", goals: ["before-after"], title: 'Then vs now voiceover', template: 'Write a then-versus-now voiceover about {topic} that could be read over a split screen.\nRequirements:\n- Platform: {platform_label}. {platform_brief}\n- Tone: {tone}.\n- Audience: {audience_line}.\n- Topic / niche: {topic}.\n- The FIRST line of the content must be this hook, verbatim, with no intro before it:\n{hook}\n- Do not add hashtag stuffing, emojis unless they earn their place, or generic “in this video” openers.\n- Give me the finished piece, then a 3-bullet reason it should work, and one optional CTA line.\n- Alternate “then” and “now” lines. End on the one change that mattered most.\n' }
  ];

  var PLATFORMS = {
    tiktok: {
      label: "TikTok",
      brief: "Write a spoken TikTok script of about 20–40 seconds. Add 4–6 short on-screen text lines. End with one comment prompt. The first second has to earn the second."
    },
    reels: {
      label: "Instagram Reels",
      brief: "Write a Reel script of about 20–40 seconds with on-screen text and a caption of 2–4 lines under the video. First frame has to stop the scroll."
    },
    youtube: {
      label: "YouTube",
      brief: "Write either a YouTube Short (30–45 seconds) or a long-form cold open (the first 20–30 seconds of a longer video). Say which one you chose. Promise the payoff early."
    },
    x: {
      label: "X",
      brief: "Write an X post under 250 characters, or a 5-post thread if the idea needs room. Say which one you chose. First line is the hook. No thread-emoji clutter."
    },
    linkedin: {
      label: "LinkedIn",
      brief: "Write a LinkedIn post of about 80–150 words with short paragraphs. Professional does not mean stiff. No “excited to announce” filler."
    }
  };

  var TONES = ["casual", "direct", "witty", "bold", "professional", "warm"];
  var GOALS = ["educate", "sell", "story", "controversy", "list", "before-after"];
  var STORAGE_KEY = "dualgen-gen-count";
  var RECENT_KEY = "dualgen-recent-ids";

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function trim(s) {
    return String(s || "").replace(/\s+/g, " ").trim();
  }

  function capFirst(s) {
    s = trim(s);
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function encode(s) {
    return encodeURIComponent(s);
  }

  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffled(list, rand) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  function audienceBits(audience, topic) {
    var a = trim(audience);
    var top = trim(topic).toLowerCase();
    if (a && top && top.indexOf(a.toLowerCase()) !== -1) {
      a = "";
    }
    if (!a) {
      return {
        audience_or_you: "you",
        audience_or_you_cap: "You",
        audience_or_people: "people",
        audience_line: "a general creator or small-business audience"
      };
    }
    return {
      audience_or_you: a,
      audience_or_you_cap: capFirst(a),
      audience_or_people: a,
      audience_line: a
    };
  }

  function fill(template, map) {
    return template.replace(/\{([a-z_]+)\}/gi, function (_, key) {
      var v = map[key];
      return v == null ? "" : v;
    }).replace(/[ \t]+\n/g, "\n").replace(/  +/g, " ").replace(/\n{3,}/g, "\n\n").trim();
  }

  function readCount() {
    try {
      return parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10) || 0;
    } catch (e) {
      return 0;
    }
  }

  function writeCount(n) {
    try {
      localStorage.setItem(STORAGE_KEY, String(n));
    } catch (e) {}
  }

  function readRecent() {
    try {
      return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function writeRecent(ids) {
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(ids.slice(0, 24)));
    } catch (e) {}
  }

  function getInputs(form) {
    var topic = trim(form.topic.value);
    var audience = trim(form.audience.value);
    var platform = form.platform.value || "tiktok";
    var tone = form.tone.value || "direct";
    var goal = form.goal.value || "";
    if (!PLATFORMS[platform]) platform = "tiktok";
    if (TONES.indexOf(tone) === -1) tone = "direct";
    if (goal && GOALS.indexOf(goal) === -1) goal = "";
    return { topic: topic, audience: audience, platform: platform, tone: tone, goal: goal };
  }

  function setInputs(form, inputs) {
    if (inputs.topic != null) form.topic.value = inputs.topic;
    if (inputs.audience != null) form.audience.value = inputs.audience;
    if (inputs.platform && PLATFORMS[inputs.platform]) form.platform.value = inputs.platform;
    if (inputs.tone && TONES.indexOf(inputs.tone) !== -1) form.tone.value = inputs.tone;
    if (form.goal) form.goal.value = inputs.goal || "";
  }

  function ctxFrom(inputs, hookText) {
    var plat = PLATFORMS[inputs.platform] || PLATFORMS.tiktok;
    var bits = audienceBits(inputs.audience, inputs.topic);
    var topic = trim(inputs.topic);
    return Object.assign({
      topic: topic,
      topic_cap: capFirst(topic),
      hook: hookText,
      platform: inputs.platform,
      platform_label: plat.label,
      platform_brief: plat.brief,
      tone: inputs.tone
    }, bits);
  }

  function filterByGoal(list, goal) {
    if (!goal) return list.slice();
    var hit = list.filter(function (item) { return item.goals.indexOf(goal) !== -1; });
    return hit.length ? hit : list.slice();
  }

  function pickPairs(inputs, seed, n) {
    n = n || 3;
    var rand = mulberry32(seed >>> 0);
    var hooks = shuffled(filterByGoal(HOOKS, inputs.goal), rand);
    var prompts = shuffled(filterByGoal(PROMPTS, inputs.goal), rand);
    var recent = readRecent();
    hooks.sort(function (a, b) {
      return (recent.indexOf(a.id) === -1 ? 0 : 1) - (recent.indexOf(b.id) === -1 ? 0 : 1);
    });
    prompts.sort(function (a, b) {
      return (recent.indexOf(a.id) === -1 ? 0 : 1) - (recent.indexOf(b.id) === -1 ? 0 : 1);
    });
    var pairs = [];
    var usedH = {};
    var usedP = {};
    var i = 0;
    while (pairs.length < n && i < Math.max(hooks.length, prompts.length) + n) {
      var h = hooks[i % hooks.length];
      var p = prompts[i % prompts.length];
      // Prefer same goal when both have one and user picked Any
      if (usedH[h.id] || usedP[p.id]) {
        // try next prompt
        var p2 = prompts.find(function (x) { return !usedP[x.id]; }) || p;
        var h2 = hooks.find(function (x) { return !usedH[x.id]; }) || h;
        h = h2;
        p = p2;
      }
      if (!usedH[h.id] && !usedP[p.id]) {
        var map = ctxFrom(inputs, "");
        var hookText = fill(h.text, map);
        map = ctxFrom(inputs, hookText);
        var promptText = fill(p.template, map);
        pairs.push({
          hookId: h.id,
          promptId: p.id,
          hook: hookText,
          prompt: promptText,
          promptTitle: p.title,
          goal: (h.goals[0] || p.goals[0] || inputs.goal || "")
        });
        usedH[h.id] = true;
        usedP[p.id] = true;
      }
      i += 1;
      if (i > 80) break;
    }
    return pairs;
  }

  function pairsFromIds(inputs, specs) {
    return specs.map(function (spec) {
      var h = HOOKS.find(function (x) { return x.id === spec.h; });
      var p = PROMPTS.find(function (x) { return x.id === spec.p; });
      if (!h || !p) return null;
      var map = ctxFrom(inputs, "");
      var hookText = fill(h.text, map);
      map = ctxFrom(inputs, hookText);
      return {
        hookId: h.id,
        promptId: p.id,
        hook: hookText,
        prompt: fill(p.template, map),
        promptTitle: p.title,
        goal: h.goals[0] || p.goals[0] || ""
      };
    }).filter(Boolean);
  }

  function shareUrl(inputs, pair, pageUrl) {
    var u = new URL(pageUrl || window.location.href);
    u.search = "";
    u.hash = "";
    u.searchParams.set("topic", inputs.topic);
    if (inputs.audience) u.searchParams.set("audience", inputs.audience);
    u.searchParams.set("platform", inputs.platform);
    u.searchParams.set("tone", inputs.tone);
    if (inputs.goal) u.searchParams.set("goal", inputs.goal);
    if (pair) {
      u.searchParams.set("h", pair.hookId);
      u.searchParams.set("p", pair.promptId);
    }
    return u.toString();
  }

  function allPairsParam(pairs) {
    return pairs.map(function (x) { return x.hookId + "." + x.promptId; }).join("_");
  }

  function parsePairsParam(s) {
    if (!s) return [];
    return s.split("_").map(function (part) {
      var bits = part.split(".");
      return { h: bits[0], p: bits[1] };
    }).filter(function (x) { return x.h && x.p; });
  }

  function updateAddress(inputs, pairs) {
    if (!window.history || !history.replaceState) return;
    var u = new URL(window.location.href);
    u.searchParams.set("topic", inputs.topic);
    if (inputs.audience) u.searchParams.set("audience", inputs.audience);
    else u.searchParams.delete("audience");
    u.searchParams.set("platform", inputs.platform);
    u.searchParams.set("tone", inputs.tone);
    if (inputs.goal) u.searchParams.set("goal", inputs.goal);
    else u.searchParams.delete("goal");
    if (pairs && pairs.length) u.searchParams.set("pairs", allPairsParam(pairs));
    u.searchParams.delete("h");
    u.searchParams.delete("p");
    history.replaceState({}, "", u.pathname + u.search + u.hash);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function goalLabel(g) {
    if (g === "before-after") return "Before / after";
    return g ? capFirst(g) : "Mixed";
  }

  function renderResults(mount, inputs, pairs) {
    var html = '<p class="results-kicker">Three prompt + hook pairs for <strong>' + escapeHtml(inputs.topic) + '</strong> on ' + escapeHtml((PLATFORMS[inputs.platform] || {}).label || inputs.platform) + '</p>';
    pairs.forEach(function (pair, idx) {
      var url = shareUrl(inputs, pair);
      var tweet = "Hook: " + pair.hook + "\n\nGenerated with DualGen (prompt + hook in one go)\n" + url;
      var tweetHref = "https://twitter.com/intent/tweet?text=" + encode(tweet);
      html += '<article class="pair-card" data-hook-id="' + pair.hookId + '" data-prompt-id="' + pair.promptId + '">';
      html += '<header class="pair-head"><span class="pair-num">Pair ' + (idx + 1) + '</span><span class="kicker">' + escapeHtml(goalLabel(pair.goal)) + ' · ' + escapeHtml(pair.promptTitle) + '</span></header>';
      html += '<div class="pair-grid">';
      html += '<div class="mini mini-prompt pair-hook-block"><p class="label">The hook</p><p class="pair-text" data-role="hook">' + escapeHtml(pair.hook) + '</p><button type="button" class="btn-ghost js-copy" data-copy="hook">Copy hook</button></div>';
      html += '<div class="mini mini-tool pair-prompt-block"><p class="label">The prompt</p><pre class="pair-prompt" data-role="prompt">' + escapeHtml(pair.prompt) + '</pre><button type="button" class="btn-ghost js-copy" data-copy="prompt">Copy prompt</button></div>';
      html += '</div>';
      html += '<div class="pair-actions">';
      html += '<button type="button" class="btn-ghost js-copy" data-copy="both">Copy both</button>';
      html += '<button type="button" class="btn-ghost js-copy-link" data-url="' + escapeHtml(url) + '">Copy share link</button>';
      html += '<a class="btn-ghost" href="' + escapeHtml(tweetHref) + '" target="_blank" rel="noopener">Share on X</a>';
      html += '<button type="button" class="btn-ghost js-native-share" data-url="' + escapeHtml(url) + '" data-hook="' + escapeHtml(pair.hook) + '">Share</button>';
      html += '</div></article>';
    });
    mount.innerHTML = html;
    mount.hidden = false;
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        resolve();
      } catch (e) {
        reject(e);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  function flashCopied(btn) {
    var old = btn.textContent;
    btn.textContent = "Copied";
    btn.classList.add("is-copied");
    setTimeout(function () {
      btn.textContent = old;
      btn.classList.remove("is-copied");
    }, 1600);
  }

  function highlightSignup(count) {
    $all(".js-pack-offer").forEach(function (el) {
      if (count >= 3) el.classList.add("is-highlight");
      var n = el.querySelector(".js-pack-count");
      if (n) n.textContent = String(count);
    });
  }

  function bindForms() {
    $all("form.js-signup").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        var action = (form.getAttribute("action") || "").trim();
        event.preventDefault();
        if (!action || action === "MAILERLITE_FORM_ACTION") {
          var note = form.parentNode.querySelector(".form-note") || document.getElementById("form-not-ready");
          if (note) note.classList.add("is-visible");
          return;
        }
        var btn = form.querySelector("button[type=submit], button:not([type])");
        if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "Sending..."; }
        var data = new FormData(form);
        if (!data.has("ml-submit")) data.append("ml-submit", "1");
        if (!data.has("anticsrf")) data.append("anticsrf", "true");
        var note = form.parentNode.querySelector(".form-note");
        fetch(action, { method: "POST", body: data })
          .then(function (r) { return r.json(); })
          .then(function (j) {
            if (j && j.success) {
              window.location.href = "/thank-you.html";
            } else {
              if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || "Send me the pack"; }
              if (note) { note.textContent = "Please check your email address and try again."; note.classList.add("is-visible"); }
            }
          })
          .catch(function () {
            // Fallback to native POST if fetch is blocked
            form.submit();
          });
      });
    });
  }

  function readQuery() {
    var q = new URLSearchParams(window.location.search);
    var inputs = {
      topic: trim(q.get("topic") || ""),
      audience: trim(q.get("audience") || ""),
      platform: q.get("platform") || "",
      tone: q.get("tone") || "",
      goal: q.get("goal") || ""
    };
    var specs = [];
    if (q.get("h") && q.get("p")) specs.push({ h: q.get("h"), p: q.get("p") });
    parsePairsParam(q.get("pairs")).forEach(function (s) { specs.push(s); });
    return { inputs: inputs, specs: specs };
  }

  function newSeed() {
    return (Math.floor(Math.random() * 0xffffffff) ^ Date.now()) >>> 0;
  }

  function runGenerate(form, results, opts) {
    opts = opts || {};
    var inputs = getInputs(form);
    var err = form.querySelector(".js-gen-error");
    if (!inputs.topic) {
      if (err) {
        err.textContent = "Add a topic or niche first — that's the one required field.";
        err.hidden = false;
      }
      form.topic.focus();
      return;
    }
    if (err) err.hidden = true;
    var pairs;
    if (opts.specs && opts.specs.length) {
      pairs = pairsFromIds(inputs, opts.specs);
      if (pairs.length < 3 && !opts.exactOnly) {
        var seed = opts.seed || newSeed();
        var extra = pickPairs(inputs, seed, 3);
        extra.forEach(function (p) {
          if (pairs.length >= 3) return;
          if (!pairs.some(function (x) { return x.hookId === p.hookId && x.promptId === p.promptId; })) {
            pairs.push(p);
          }
        });
      }
    } else {
      pairs = pickPairs(inputs, opts.seed || newSeed(), 3);
    }
    if (!pairs.length) return;
    renderResults(results, inputs, pairs);
    var recent = readRecent();
    pairs.forEach(function (p) {
      recent.unshift(p.hookId, p.promptId);
    });
    writeRecent(recent);
    if (!opts.skipCount) {
      var count = readCount() + 1;
      writeCount(count);
      highlightSignup(count);
    } else {
      highlightSignup(readCount());
    }
    if (!opts.skipUrl) updateAddress(inputs, pairs);
    results.scrollIntoView({ behavior: "smooth", block: "start" });
    var regen = form.querySelector(".js-regen");
    if (regen) regen.hidden = false;
  }

  function init() {
    var form = document.getElementById("gen-form");
    var results = document.getElementById("gen-results");
    bindForms();
    highlightSignup(readCount());
    if (!form || !results) return;

    var root = form.closest(".generator") || document.getElementById("generator");
    var defaults = {
      platform: (root && root.getAttribute("data-default-platform")) || "",
      goal: (root && root.getAttribute("data-default-goal")) || "",
      tone: (root && root.getAttribute("data-default-tone")) || ""
    };
    if (defaults.platform && PLATFORMS[defaults.platform]) form.platform.value = defaults.platform;
    if (defaults.goal) form.goal.value = defaults.goal;
    if (defaults.tone) form.tone.value = defaults.tone;

    var q = readQuery();
    if (q.inputs.topic || q.inputs.platform || q.inputs.tone || q.inputs.goal || q.inputs.audience) {
      setInputs(form, q.inputs);
    }
    if (q.inputs.topic && (q.specs.length || q.inputs.topic)) {
      if (q.specs.length) {
        runGenerate(form, results, { specs: q.specs, skipCount: true, skipUrl: true });
      }
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      runGenerate(form, results, {});
    });
    var regen = form.querySelector(".js-regen");
    if (regen) {
      regen.addEventListener("click", function () {
        runGenerate(form, results, {});
      });
    }

    results.addEventListener("click", function (event) {
      var copyBtn = event.target.closest(".js-copy");
      if (copyBtn) {
        var card = copyBtn.closest(".pair-card");
        var hook = card.querySelector('[data-role="hook"]').textContent;
        var prompt = card.querySelector('[data-role="prompt"]').textContent;
        var kind = copyBtn.getAttribute("data-copy");
        var text = kind === "hook" ? hook : kind === "prompt" ? prompt : hook + "\n\n——\n\n" + prompt;
        copyText(text).then(function () { flashCopied(copyBtn); }).catch(function () {});
        return;
      }
      var linkBtn = event.target.closest(".js-copy-link");
      if (linkBtn) {
        copyText(linkBtn.getAttribute("data-url")).then(function () { flashCopied(linkBtn); }).catch(function () {});
        return;
      }
      var shareBtn = event.target.closest(".js-native-share");
      if (shareBtn) {
        var data = {
          title: "DualGen hook + prompt",
          text: shareBtn.getAttribute("data-hook"),
          url: shareBtn.getAttribute("data-url")
        };
        if (navigator.share) {
          navigator.share(data).catch(function () {});
        } else {
          copyText(data.url).then(function () { flashCopied(shareBtn); }).catch(function () {});
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose counts for a sanity check in tests
  window.DualGen = {
    hookCount: HOOKS.length,
    promptCount: PROMPTS.length,
    hooks: HOOKS,
    prompts: PROMPTS
  };
})();

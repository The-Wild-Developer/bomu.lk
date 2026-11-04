export type Language = "en" | "si";

const teamMembers = [
  {
    name: "Alex Perera",
    email: "alex@example.com",
    phone: "94770000001",
    image: "/images/avatar.jpg",
  },
  {
    name: "Jordan Silva",
    email: "jordan@example.com",
    phone: "94770000002",
    image: "/images/avatar.jpg",
  },
  {
    name: "Riley Fernando",
    email: "riley@example.com",
    phone: "94770000003",
    image: "/images/avatar.jpg",
  },
] as const;

export function navLabel(language: Language, id: string) {
  const labels = copy[language].nav;

  if (id === "contact-us") return labels.contact;
  if (id === "home" || id === "about" || id === "team") return labels[id];

  return id;
}

export const copy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      team: "Team",
      contact: "Contact Us",
    },
    heroTitleLead: "Had a drink? We'll get you",
    heroTitleAccent: "home safe.",
    heroBody:
      "We pick you up from the bar, party, or wherever you were drinking and drop you safely at your door. Leave the car. Don't drive after drinking.",
    heroButton: "Book a Ride Home",
    footerSlogan: "Your trusted transport partner.",
    promo: {
      eyebrow: "Keep the keys",
      title: "Leave the car where it is.",
      body: "The night can end without you driving. Tell us where you are, bring your friends, and a sober driver takes you home while the car waits until morning.",
      button: "Ask for a driver",
    },
    contact: {
      title: "Contact us",
      lead: "Tell us where you are. We'll get you home.",
      name: "Your name",
      phone: "Phone number",
      email: "Email",
      message: "Message",
      submit: "Send message",
      sent: "Message sent. We'll call you back.",
    },
    team: {
      title: "Team Members",
      lead: "Call or message the person who can get you home.",
      call: "Call",
      whatsapp: "WhatsApp",
      members: teamMembers,
    },
    about: {
      title: "About us",
      lead: "A safe ride home after the last drink.",
      paragraphs: [
        "බොමු.lk picks you up from the bar, party, or wherever the night ended and drops you at your door. Leave the car behind. A sober driver takes you home.",
        "A night out should finish at your doorstep. Call when you are ready to leave. We meet you at the bar, the wedding, the club, or a friend's house and take you home.",
        "Bring the people you came with. The fare is shown before you go, your car stays where you parked it, and a sober driver is the only one behind the wheel.",
      ],
      details: [
        {
          title: "When we come",
          body: "Any night, from the time you want to stop driving until you are at your door.",
        },
        {
          title: "Who rides",
          body: "You, or you and the friends who came out with you, in the same ride.",
        },
        {
          title: "What you leave",
          body: "The car. Collect it in the morning, when you are ready to drive.",
        },
      ],
    },
    features: [
      {
        title: "Safe Drop-off",
        body: "From the bar to your door",
      },
      {
        title: "Clear Fare",
        body: "Price shown before you ride",
      },
      {
        title: "Sober Drivers",
        body: "You ride. We drive.",
      },
      {
        title: "24/7 Support",
        body: "Call any night, we come",
      },
    ],
  },
  si: {
    nav: {
      home: "මුල් පිටුව",
      about: "අප ගැන",
      team: "කණ්ඩායම",
      contact: "අප අමතන්න",
    },
    heroTitleLead: "බීලාද? අපි ඔබව",
    heroTitleAccent: "ආරක්ෂිතව ගෙදර ගෙනයනවා.",
    heroBody:
      "ඔබ බීපු බාර් එකෙන්, සාදයෙන් හෝ වෙනත් තැනකින් අපි ඔබව ගෙනැවිත් ගෙදරටම ආරක්ෂිතව දානවා. වාහනය එහේ තියන්න. බීලා රිය පදවන්න එපා.",
    heroButton: "ගෙදරට රියක් වෙන්කරන්න",
    footerSlogan: "ඔබේ විශ්වාසවන්ත ප්‍රවාහන සහකරු.",
    promo: {
      eyebrow: "යතුර තියන්න",
      title: "වාහනය නවත්වපු තැනම තියන්න.",
      body: "රෑ ඉවර වෙන්න පුළුවන් ඔබ පදවන්නේ නැතුව. ඔබ සිටින තැන කියන්න. යාළුවෝ එක්ක එනවා. බී නැති රියදුරෙක් ගෙදර ගෙනියනවා. වාහනය උදේ එනකම් බලාගෙන ඉන්නවා.",
      button: "රියදුරෙක් ඉල්ලන්න",
    },
    contact: {
      title: "අප අමතන්න",
      lead: "ඔබ සිටින තැන කියන්න. අපි ඔබව ගෙදර ගෙනියනවා.",
      name: "ඔබේ නම",
      phone: "දුරකථන අංකය",
      email: "ඊමේල්",
      message: "පණිවිඩය",
      submit: "පණිවිඩය යවන්න",
      sent: "පණිවිඩය ලැබුණා. අපි ඔබට ආපසු අමතනවා.",
    },
    team: {
      title: "කණ්ඩායම් සාමාජිකයින්",
      lead: "ඔබව ගෙදර ගෙනයන්න පුළුවන් කෙනාට අමතන්න, නැත්නම් පණිවිඩයක් යවන්න.",
      call: "අමතන්න",
      whatsapp: "WhatsApp",
      members: teamMembers,
    },
    about: {
      title: "අප ගැන",
      lead: "අන්තිම බීමෙන් පසු ආරක්ෂිත ගමනක්.",
      paragraphs: [
        "බොමු.lk ඔබව බාර් එකෙන්, සාදයෙන් හෝ රෑ ඉවර වුණු තැනින් ගෙනැවිත් ගෙදර දොරකඩට දානවා. වාහනය එහේ තියන්න. බී නැති රියදුරෙක් ඔබව ගෙදර ගෙනියනවා.",
        "රෑ එළියට ගියාම ගමන ගෙදර දොරකඩින් ඉවර විය යුතුයි. යන්න සූදානම් වුණාම අමතන්න. බාර් එක, මංගල උත්සවය, ක්ලබ් එක හෝ යාළුවෙක්ගේ ගෙදර — අපි ඔබව එතැනින් ගෙනැවිත් ගෙදරට දානවා.",
        "එක්ක ආ යාළුවන්වත් එකම රියෙන් එන්න පුළුවන්. යන්න කලින් ගාස්තුව පෙන්වනවා. ඔබේ වාහනය නවත්වපු තැනම තියෙනවා. සුක්කානම් අල්ලන්නේ බී නැති රියදුරෙක් පමණයි.",
      ],
      details: [
        {
          title: "අපි එන්නේ කවදාද",
          body: "ඕනෑම රාත්‍රියක, ඔබට තවදුරටත් රිය පදවන්න ඕන නැති වෙලාවේ ඉඳන් ගෙදර දොරකඩ දක්වා.",
        },
        {
          title: "යන්නේ කවුද",
          body: "ඔබ, නැත්නම් ඔබත් එක්ක ආ යාළුවෝ, එකම රියෙන්.",
        },
        {
          title: "ඉතිරි වෙන්නේ මොකද්ද",
          body: "වාහනය. රිය පදවන්න සූදානම් වෙනකම් උදේට ආපහු ගන්න.",
        },
      ],
    },
    features: [
      {
        title: "ආරක්ෂිත ගමන",
        body: "බාර් එකෙන් ගෙදර දොරකඩට",
      },
      {
        title: "පැහැදිලි ගාස්තුව",
        body: "යන්න කලින් මිල පෙනේ",
      },
      {
        title: "බී නැති රියදුරන්",
        body: "ඔබ යනවා, අපි පදවනවා",
      },
      {
        title: "පැය 24 සහාය",
        body: "ඕනෑම රාත්‍රියක අමතන්න",
      },
    ],
  },
} as const;

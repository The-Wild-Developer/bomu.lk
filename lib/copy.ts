export type Language = "en" | "si";

const teamMembers = [
  {
    name: "Alex Perera",
    designation: {
      en: "Team leader",
      si: "කණ්ඩායම් නායක",
    },
    email: "alex@example.com",
    phone: "94770000001",
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
      "Two ways home. We send a driver for your own car, or we pick you up in one of ours. You don't get behind the wheel.",
    heroButton: "Book your way home",
    bannerCaption: "We drop you safely at\nyour home.",
    footerSlogan: "Your trusted transport partner.",
    promo: {
      eyebrow: "Two ways home",
      title: "Your car, or ours.",
      body: "Came in your own vehicle? We only send a sober driver, and your car comes home with you. Prefer a ride? A බොමු.lk vehicle picks you up and drops you at your door.",
      button: "Book a driver",
    },
    contact: {
      title: "Contact us",
      lead: "Tell us where you are, and whether you need a driver for your car or a ride in ours.",
      name: "Your name",
      phone: "Phone number",
      email: "Email",
      message: "Message",
      submit: "Send message",
      sent: "Message sent. We'll call you back.",
    },
    team: {
      title: "Team",
      lead: "One person to call, and a team of sober drivers behind them.",
      paragraphs: [
        "Alex Perera leads the team. When the night should end, you call or message one person. Tell him where you are, and whether you need a driver for your car or a ride in ours. He sends a sober driver, and the fare is shown before anyone leaves.",
        "He stays the person you reach. If the plan changes, if friends are still inside, or if you would rather leave your car and ride in one of ours, you say so on that same call. The driver who arrives is the one he sent.",
        "The drivers on the team stay off the drink and take the wheel so you do not. They know both ways home. In your car, you hand over the keys and the car comes back to your door. In ours, a බොමු.lk vehicle picks you up and drops you there. Either way, you stay a passenger the whole way.",
        "They collect you from the bar, the party, the wedding, or a friend's house. The trip starts when you are ready to leave and finishes at your doorstep, not on the road. Any night, from the moment you should stop driving, one call is enough.",
      ],
      call: "Call",
      whatsapp: "WhatsApp",
      members: teamMembers,
    },
    about: {
      title: "About us",
      lead: "Home after a drink, in your car or ours.",
      paragraphs: [
        "බොමු.lk gets people who have been drinking home without them driving. Ask for a driver for your own vehicle, or a ride in one of ours.",
        "Your car: call when you are ready to leave the bar, party, wedding, or a friend's house. Hand over the keys. A sober driver takes the wheel of your vehicle and brings you and your friends home. The car is at your door when the night ends.",
        "Our car: if you did not come in your own vehicle, or you would rather leave it where it is, a බොමු.lk vehicle picks you up and drops you at your door. You ride. We drive.",
        "The night should finish at your doorstep, not on the road. Whichever way you choose, a sober driver is the only one behind the wheel. You stay a passenger the whole way.",
        "Bring the people you came with. Friends share the same trip, in your car or in ours. Tell us where you are and which way you want to go home. The fare is shown before anyone leaves.",
      ],
      details: [
        {
          title: "Your vehicle",
          body: "We only provide the driver. You and your friends ride home in your own car, and the car comes home with you.",
        },
        {
          title: "Our vehicles",
          body: "A බොමු.lk vehicle picks you up from the bar, party, or wherever the night ended and takes you home.",
        },
        {
          title: "When we come",
          body: "Any night, from the moment you should stop driving until you are at your door. One call is enough.",
        },
        {
          title: "Clear fare",
          body: "The price is shown before you go, whether the driver takes your car or you ride in ours.",
        },
      ],
    },
    drive: {
      title: "We Can Drive",
      lead: "Hand us the keys. A sober driver can take these vehicles home, yours or ours.",
      types: [
        { id: "bike", title: "Bike" },
        { id: "threeWheeler", title: "Threewheeler" },
        { id: "car", title: "Car" },
        { id: "jeep", title: "Jeep" },
        { id: "van", title: "Van" },
        { id: "lorry", title: "Lorry" },
      ],
    },
    features: [
      {
        title: "Our vehicles",
        body: "A බොමු.lk car takes you home",
      },
      {
        title: "Clear Fare",
        body: "Price shown before you go",
      },
      {
        title: "Your car",
        body: "We only send the driver",
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
      "ගෙදර යන විදි දෙකක්. ඔබේ වාහනයට රියදුරෙක් එවනවා, නැත්නම් අපේ වාහනයෙන් ඔබව ගෙදර ගෙනියනවා. ඔබ පදවන්නේ නැහැ.",
    heroButton: "ගෙදර යන ගමන වෙන්කරන්න",
    bannerCaption: "අපි ඔබව ආරක්ෂිතව\nඔබේ ගෙදර දානවා.",
    footerSlogan: "ඔබේ විශ්වාසවන්ත ප්‍රවාහන සහකරු.",
    promo: {
      eyebrow: "ගෙදර යන විදි දෙකයි",
      title: "ඔබේ වාහනය, නැත්නම් අපේ වාහනය.",
      body: "ඔබේම වාහනේ ආවද? අපි එවන්නේ බී නැති රියදුරෙක් විතරයි. වාහනය ඔබත් එක්ක ගෙදර එනවා. වෙන රියක් ඕනද? බොමු.lk වාහනයක් ඔබව ගෙනැවිත් ගෙදර දොරකඩට දානවා.",
      button: "රියදුරෙක් ඉල්ලන්න",
    },
    contact: {
      title: "අප අමතන්න",
      lead: "ඔබ සිටින තැන කියන්න. ඔබේ වාහනයට රියදුරෙක්ද, අපේ වාහනයෙන් ගමනක්ද කියන්න.",
      name: "ඔබේ නම",
      phone: "දුරකථන අංකය",
      email: "ඊමේල්",
      message: "පණිවිඩය",
      submit: "පණිවිඩය යවන්න",
      sent: "පණිවිඩය ලැබුණා. අපි ඔබට ආපසු අමතනවා.",
    },
    team: {
      title: "කණ්ඩායම",
      lead: "අමතන්න ඕන එක් අයෙක්. ඔවුන් පිටුපස බී නැති රියදුරු කණ්ඩායමක්.",
      paragraphs: [
        "Alex Perera කණ්ඩායම් නායකයා. රෑ ඉවර කරන්න ඕන වෙලාවේ ඔබ අමතන්නේ එක් අයෙක්. ඔබ සිටින තැන කියන්න. ඔබේ වාහනයට රියදුරෙක්ද, අපේ වාහනයෙන් ගමනක්ද කියන්න. ඔහු බී නැති රියදුරෙක් එවනවා. කවුරුහරි පිටත් වෙන්න කලින් ගාස්තුව පෙන්වනවා.",
        "ඔබට ළඟා වෙන්න පුළුවන් අය ඔහු. සැලැස්ම වෙනස් වුණාම, යාළුවෝ තාම ඇතුළේ ඉඳලා නම්, නැත්නම් වාහනය එහේ තියලා අපේ වාහනයෙන් යන්න ඕන නම්, ඒකම ඇමතුමෙන් කියන්න. එන රියදුරා ඔහු එවපු කෙනා.",
        "කණ්ඩායමේ රියදුරෝ බී නැතිව සුක්කානම් අල්ලනවා, ඔබ නෙවෙයි. ගෙදර යන විදි දෙකම ඔවුන් දන්නවා. ඔබේ වාහනය නම් යතුරු දෙන්න. වාහනය ගෙදර දොරකඩට එනවා. අපේ වාහනය නම් බොමු.lk වාහනයක් ඔබව ගෙනැවිත් ගෙදර දානවා. ඔබ මුළු ගමනේම මගියෙක්.",
        "බාර් එකෙන්, සාදයෙන්, මංගල උත්සවයෙන් හෝ යාළුවෙක්ගේ ගෙදරින් ඔබව ගෙනියනවා. ගමන පටන් ගන්නේ ඔබ යන්න සූදානම් වුණාම. ඉවර වෙන්නේ පාරේ නෙවෙයි, ගෙදර දොරකඩින්. ඕනෑම රාත්‍රියක, ඔබට තවදුරටත් රිය පදවන්න ඕන නැති වෙලාවේ, ඇමතුමක් ඇති.",
      ],
      call: "අමතන්න",
      whatsapp: "WhatsApp",
      members: teamMembers,
    },
    about: {
      title: "අප ගැන",
      lead: "බීමෙන් පසු ගෙදර, ඔබේ වාහනයෙන් හෝ අපේ වාහනයෙන්.",
      paragraphs: [
        "බොමු.lk බීපු අයව ගෙදර ගෙනියනවා, ඔවුන් පදවන්නේ නැතුව. ඔබේ වාහනයට රියදුරෙක් ඉල්ලන්න, නැත්නම් අපේ වාහනයෙන් ගමනක් ඉල්ලන්න.",
        "ඔබේ වාහනය: බාර් එක, සාදය, මංගල උත්සවය හෝ යාළුවෙක්ගේ ගෙදරින් යන්න සූදානම් වුණාම අමතන්න. යතුරු දෙන්න. බී නැති රියදුරෙක් ඔබේ වාහනය පදවලා ඔබවත් යාළුවන්වත් ගෙදර ගෙනියනවා. රෑ ඉවර වෙද්දී වාහනය ගෙදර දොරකඩට එනවා.",
        "අපේ වාහනය: ඔබ ආවේ ඔබේ වාහනයෙන් නැත්නම්, හෝ වාහනය එහේ තියන්න ඕන නම්, බොමු.lk වාහනයක් ඔබව ගෙනැවිත් ගෙදර දානවා. ඔබ යනවා. අපි පදවනවා.",
        "රෑ ඉවර වෙන්න ඕනේ පාරේ නෙවෙයි, ගෙදර දොරකඩින්. ඔබ තෝරන විදිහ මොකක් වුණත්, සුක්කානම් අල්ලන්නේ බී නැති රියදුරෙක් විතරයි. ඔබ මුළු ගමනේම මගියෙක්.",
        "එක්ක ආ යාළුවෝත් එකම ගමනේ එන්න පුළුවන්. ඔබේ වාහනයෙන් හෝ අපේ වාහනයෙන්. ඔබ සිටින තැන කියන්න, ගෙදර යන්නේ මොන විදිහටද කියන්න. කවුරුහරි පිටත් වෙන්න කලින් ගාස්තුව පෙන්වනවා.",
      ],
      details: [
        {
          title: "ඔබේ වාහනය",
          body: "අපි දෙන්නේ රියදුරෙක් විතරයි. ඔබත් යාළුවෝත් ඔබේම වාහනයෙන් ගෙදර යනවා. වාහනයත් ඔබත් එක්ක ගෙදර එනවා.",
        },
        {
          title: "අපේ වාහන",
          body: "බාර් එකෙන්, සාදයෙන් හෝ රෑ ඉවර වුණු තැනින් බොමු.lk වාහනයක් ඔබව ගෙනැවිත් ගෙදර දානවා.",
        },
        {
          title: "අපි එන්නේ කවදාද",
          body: "ඕනෑම රාත්‍රියක, ඔබට තවදුරටත් රිය පදවන්න ඕන නැති වෙලාවේ ඉඳන් ගෙදර දොරකඩ දක්වා. ඇමතුමක් ඇති.",
        },
        {
          title: "පැහැදිලි ගාස්තුව",
          body: "රියදුරා ඔබේ වාහනය පදවනවද, ඔබ අපේ වාහනයෙන් යනවද, යන්න කලින් මිල පෙන්වනවා.",
        },
      ],
    },
    drive: {
      title: "අපට පදවන්න පුළුවන්",
      lead: "යතුරු අපිට දෙන්න. මේ වාහන, ඔබේ හෝ අපේ, බී නැති රියදුරෙකුට ගෙදර ගෙනියන්න පුළුවන්.",
      types: [
        { id: "bike", title: "බයික්" },
        { id: "threeWheeler", title: "ත්‍රීවීල්" },
        { id: "car", title: "කාර්" },
        { id: "jeep", title: "ජීප්" },
        { id: "van", title: "වෑන්" },
        { id: "lorry", title: "ලොරි" },
      ],
    },
    features: [
      {
        title: "අපේ වාහන",
        body: "බොමු.lk වාහනයෙන් ගෙදරට",
      },
      {
        title: "පැහැදිලි ගාස්තුව",
        body: "යන්න කලින් මිල පෙනේ",
      },
      {
        title: "ඔබේ වාහනය",
        body: "අපි එවන්නේ රියදුරෙක් විතරයි",
      },
      {
        title: "පැය 24 සහාය",
        body: "ඕනෑම රාත්‍රියක අමතන්න",
      },
    ],
  },
} as const;

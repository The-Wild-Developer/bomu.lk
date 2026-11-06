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
    heroTitleLead: "Had a drink? We'll drive you",
    heroTitleAccent: "and your car home.",
    heroBody:
      "Call us from wherever you've been drinking. We come to you, take the wheel of your own vehicle, and drive you home or anywhere else you need to go.",
    heroButton: "Call a driver",
    bannerCaption: "We drive you and your car\nhome safely.",
    footerSlogan: "Your car. Our driver. Home safe.",
    promo: {
      eyebrow: "One call is enough",
      title: "We drive you home, in your own car.",
      body: "Call us from the bar, the party, or wherever you are. A sober driver comes to that spot, takes the keys, and drives you and your vehicle home, or to wherever you need to go next.",
      button: "Book a driver",
    },
    contact: {
      title: "Contact us",
      lead: "Tell us where you are now, where you need to go, and what vehicle you have. We'll send a driver to you.",
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
        "Alex Perera leads the team. When the night should end, you call or message one person. Tell him where you are, where you need to go, and what you are driving. He sends a sober driver to that spot, and the fare is agreed before you leave.",
        "He stays the person you reach. If the plan changes, if friends are still inside, or if you want to stop somewhere else on the way, you say so on that same call. The driver who arrives is the one he sent.",
        "The drivers on the team stay off the drink so you don't have to drive. When they arrive, you hand over the keys and they take charge of your vehicle. They drive it with care and park it at your home or destination, with you as a passenger the whole way.",
        "They collect you from the bar, the party, the wedding, or a friend's house. The trip starts when you are ready to leave and finishes at your doorstep, not on the road. Any night, one call is enough.",
      ],
      call: "Call",
      whatsapp: "WhatsApp",
      members: teamMembers,
    },
    about: {
      title: "About us",
      lead: "After a drink, we drive you home in your own vehicle.",
      paragraphs: [
        "බොමු.lk is a driver service for people who have been drinking. You don't have to drive, and you don't have to leave your vehicle behind. We drive you home in it.",
        "Call us from where you are: the bar, the party, the wedding, or a friend's house. A sober driver arrives at that spot and takes charge of your vehicle.",
        "Hand over the keys and sit back. Our driver takes the wheel of your own car and drives you home, or to wherever else you need to go.",
        "Your vehicle doesn't stay parked overnight, and you don't need to go back for it the next morning. You and your car arrive together.",
        "Friends who came with you can ride along in your car. The fare is shown before we set off.",
      ],
      details: [
        {
          title: "We drive your vehicle",
          body: "A sober driver comes to where you are, takes your keys, and drives your own vehicle.",
        },
        {
          title: "Home, or anywhere",
          body: "We take you home, or wherever else you need to go. Friends can ride along.",
        },
        {
          title: "When we come",
          body: "Any night, any time. Call from where you are, and we come to that spot.",
        },
        {
          title: "Clear fare",
          body: "The price is agreed before we set off.",
        },
      ],
    },
    drive: {
      title: "We Can Drive",
      lead: "Whatever you came in, a sober driver can take the wheel and bring it home with you.",
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
        title: "We come to you",
        body: "Call from where you are",
      },
      {
        title: "Clear Fare",
        body: "Price agreed before we go",
      },
      {
        title: "Your vehicle",
        body: "We drive your own car",
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
    heroTitleLead: "බීලාද? අපි ඔබවත් ඔබේ වාහනයත්",
    heroTitleAccent: "ආරක්ෂිතව ගෙදර ගෙනයනවා.",
    heroBody:
      "ඔබ බොන තැන ඉඳන්ම අපිට කතා කරන්න. අපි එතනට ඇවිත් ඔබේ වාහනය භාරගෙන, ඔබව ගෙදරට හෝ ඔබට යන්න ඕන ඕනෑම තැනකට පදවාගෙන යනවා.",
    heroButton: "රියදුරෙක් ඉල්ලන්න",
    bannerCaption: "අපි ඔබවත් ඔබේ වාහනයත්\nආරක්ෂිතව ගෙදර දානවා.",
    footerSlogan: "ඔබේ වාහනය. අපේ රියදුරා. ආරක්ෂිතව ගෙදරට.",
    promo: {
      eyebrow: "එක ඇමතුමක් ඇති",
      title: "ඔබේම වාහනයෙන් අපි ඔබව ගෙදර ගෙනියනවා.",
      body: "බාර් එකේ, සාදයේ හෝ ඔබ ඉන්න ඕනෑම තැනක ඉඳන් අමතන්න. බී නැති රියදුරෙක් ඒ තැනටම ඇවිත් යතුරු භාරගෙන, ඔබවත් ඔබේ වාහනයත් ගෙදරට හෝ ඔබට යන්න ඕන තැනට ගෙනියනවා.",
      button: "රියදුරෙක් ඉල්ලන්න",
    },
    contact: {
      title: "අප අමතන්න",
      lead: "ඔබ දැන් ඉන්න තැන, යන්න ඕන තැන සහ ඔබේ වාහනය මොකක්ද කියලා කියන්න. අපි ඔබ ළඟට රියදුරෙක් එවනවා.",
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
        "Alex Perera කණ්ඩායම් නායකයා. රෑ ඉවර කරන්න ඕන වෙලාවේ ඔබ අමතන්නේ එක් අයෙක්. ඔබ ඉන්න තැන, යන්න ඕන තැන සහ ඔබේ වාහනය මොකක්ද කියලා ඔහුට කියන්න. ඔහු ඒ තැනට බී නැති රියදුරෙක් එවනවා. පිටත් වෙන්න කලින් ගාස්තුව එකඟ වෙනවා.",
        "ඔබට ළඟා වෙන්න පුළුවන් අය ඔහු. සැලැස්ම වෙනස් වුණාම, යාළුවෝ තාම ඇතුළේ ඉඳලා නම්, නැත්නම් යන අතරමගදී වෙන තැනකට යන්න ඕන නම්, ඒකම ඇමතුමෙන් කියන්න. එන රියදුරා ඔහු එවපු කෙනා.",
        "කණ්ඩායමේ රියදුරෝ බොන්නේ නැහැ, ඒ නිසා ඔබට පදවන්න ඕන නැහැ. ඔවුන් ආවම ඔබ යතුරු දෙන්න, ඔවුන් ඔබේ වාහනය භාරගන්නවා. ඔවුන් එය ප්‍රවේශමෙන් පදවලා ඔබේ ගෙදර හෝ ඔබ යන තැන නවත්වනවා. ඔබ මුළු ගමනේම මගියෙක්.",
        "බාර් එකෙන්, සාදයෙන්, මංගල උත්සවයෙන් හෝ යාළුවෙක්ගේ ගෙදරින් ඔබව ගෙනියනවා. ගමන පටන් ගන්නේ ඔබ යන්න සූදානම් වුණාම. ඉවර වෙන්නේ පාරේ නෙවෙයි, ගෙදර දොරකඩින්. ඕනෑම රාත්‍රියක, ඇමතුමක් ඇති.",
      ],
      call: "අමතන්න",
      whatsapp: "WhatsApp",
      members: teamMembers,
    },
    about: {
      title: "අප ගැන",
      lead: "බීමෙන් පසු, ඔබේම වාහනයෙන් අපි ඔබව ගෙදර ගෙනියනවා.",
      paragraphs: [
        "බොමු.lk කියන්නේ බීපු අය වෙනුවෙන් රියදුරු සේවාවක්. ඔබට පදවන්න ඕනත් නැහැ, වාහනය එහේ දාලා යන්න ඕනත් නැහැ. අපි ඔබේම වාහනයෙන් ඔබව ගෙදර ගෙනියනවා.",
        "ඔබ ඉන්න තැන ඉඳන් අපිට කතා කරන්න: බාර් එක, සාදය, මංගල උත්සවය හෝ යාළුවෙක්ගේ ගෙදර. බී නැති රියදුරෙක් ඒ තැනටම ඇවිත් ඔබේ වාහනය භාරගන්නවා.",
        "යතුරු දීලා සැනසිල්ලේ ඉන්න. අපේ රියදුරා ඔබේම වාහනය පදවලා ඔබව ගෙදරට හෝ ඔබට යන්න ඕන වෙනත් ඕනෑම තැනකට ගෙනියනවා.",
        "ඔබේ වාහනය රෑ පුරා එහේ නවත්තලා තියන්න ඕන නැහැ. පහුවදා උදේ ඒක ගන්න ආයෙත් යන්නත් ඕන නැහැ. ඔබයි ඔබේ වාහනයයි එකට ගෙදර එනවා.",
        "ඔබත් එක්ක ආ යාළුවන්ටත් ඔබේ වාහනයේම එන්න පුළුවන්. පිටත් වෙන්න කලින් ගාස්තුව පෙන්වනවා.",
      ],
      details: [
        {
          title: "අපි ඔබේ වාහනය පදවනවා",
          body: "බී නැති රියදුරෙක් ඔබ ඉන්න තැනට ඇවිත්, යතුරු භාරගෙන, ඔබේම වාහනය පදවනවා.",
        },
        {
          title: "ගෙදරට හෝ ඕනෑම තැනකට",
          body: "අපි ඔබව ගෙදරට හෝ ඔබට යන්න ඕන වෙනත් තැනකට ගෙනියනවා. යාළුවන්ටත් එකට එන්න පුළුවන්.",
        },
        {
          title: "අපි එන්නේ කවදාද",
          body: "ඕනෑම රාත්‍රියක, ඕනෑම වෙලාවක. ඔබ ඉන්න තැන ඉඳන් අමතන්න, අපි ඒ තැනටම එනවා.",
        },
        {
          title: "පැහැදිලි ගාස්තුව",
          body: "පිටත් වෙන්න කලින් මිල එකඟ වෙනවා.",
        },
      ],
    },
    drive: {
      title: "අපට පදවන්න පුළුවන්",
      lead: "ඔබ ආවේ මොන වාහනයෙන් වුණත්, බී නැති රියදුරෙක් ඒක පදවලා ඔබත් එක්ක ගෙදර ගෙනියනවා.",
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
        title: "අපි ඔබ ළඟට",
        body: "ඔබ ඉන්න තැන ඉඳන් අමතන්න",
      },
      {
        title: "පැහැදිලි ගාස්තුව",
        body: "යන්න කලින් මිල එකඟයි",
      },
      {
        title: "ඔබේ වාහනය",
        body: "ඔබේම වාහනය අපි පදවනවා",
      },
      {
        title: "පැය 24 සහාය",
        body: "ඕනෑම රාත්‍රියක අමතන්න",
      },
    ],
  },
} as const;

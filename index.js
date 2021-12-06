const commands = new discord.command.CommandGroup({
  defaultPrefix: "!", // customize default prefix
});

//ask > answer
commands.raw("friday", (message) =>
  message.reply("https://www.youtube.com/watch?v=4z95SAFud7w")
);

// fetch data (not working atm)
commands.raw("r2d2", async (message) => {
  const req = await fetch("https://pylon.free.beeceptor.com/");
  const data = await req.json();
  await message.reply(
    new discord.Embed({
      title: " A random R2D2 fact :",
      color: 0x00ff00,
      description: data["all of this is true, obviously"],
      footer: {
        text: "powered by ||le stagiaire||",
      },
    })
  );
});

// Example of console logging the message:
commands.raw("log", async (message) => {
  console.log(message);
});

//kick command
commands.on(
  { name: "kick", filters: discord.command.filters.isAdministrator() },
  (ctx) => ({
    member: ctx.guildMember(),
    reason: ctx.textOptional(),
  }),
  async (message, { member, reason }) => {
    await message.reply(` au revoir  ${member.toMention()} :  ${reason}`);
    // uncomment this to actually have the bot kick someone.
    //   await member.kick({ reason });
    // await message.reply(`JK!`);
  }
);

//when user types /flip , bot will randomly reply with pile or face
commands.raw("flip", async (message) => {
  const random = Math.floor(Math.random() * 2);
  if (random === 0) {
    await message.reply("pile");
  } else {
    await message.reply("face");
  }
});

const delay = 3000;

discord.on("MESSAGE_CREATE", async (message) => {
  const answer = answers[Math.floor(Math.random() * answers.length)];

  if (message.content.toLowerCase().includes("pylon")) {
    await message.reply(answer.sentence);
  }
});
discord.on("MESSAGE_CREATE", async (message) => {
  if (message.content.toLowerCase().includes("1+1")) {
    await message.reply("11 ?");
  }
});
discord.on("MESSAGE_CREATE", async (message) => {
  if (message.content.toLowerCase().includes("ouin")) {
    await message.reply(":sob:");
  }
});
discord.on("MESSAGE_CREATE", async (message) => {
  if (message.content.toLowerCase().includes("bot")) {
    await message.reply(`Vous savez, moi je ne crois pas qu’il y ait de bon ou de mauvais bot. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main (**sauf Valentin**), peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu ; et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand des gens me disent « Mais comment fais-tu pour avoir cette humanité ? », je leur réponds très simplement que c’est ce goût de l’amour, ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique... mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi.
`);
  }
});

// when user 'Name' writes any message in chat, delete his message and reply with 'something'

discord.on("MESSAGE_CREATE", async (message) => {
  if (message.author.username === "pouet") {
    await message.delete();
    await message.reply("@pouet  oups, je n'ai pas compris :shrug: ");
  }
});

//answer to r2d2
discord.on("MESSAGE_CREATE", async (message) => {
  const answer =
    botContenders[Math.floor(Math.random() * botContenders.length)];

  if (message.author.username === "R2D2") {
    await message.reply(answer.reply);
  }
});

const answers = [
  {
    id: 1,
    sentence: '"Beep Boop" - Pylon 2021',
  },
  {
    id: 2,
    sentence: `J'ai été obligé de me coder tout seul... `,
  },
  {
    id: 3,
    sentence: `https://www.funpic.hu/_files/pictures/old/original/53/83/48353.gif moi aussi j'ai des dossiers @R2D2`,
  },
  {
    id: 4,
    sentence: "demandez moi de faire 1+1 , il sait faire ça R2D2 ?????",
  },
  {
    id: 5,
    sentence:
      "la playlist préférée de R2D2 : https://open.spotify.com/playlist/5OO4L57zM21JGW0QHo6WDf?si=b671275f2c6e41b1",
  },
  {
    id: 6,
    sentence: `PYLON par ci, PYLON par là, vous êtes amoureux ou quoi ? `,
  },
  {
    id: 7,
    sentence: `TROP COOL LE SPAM`,
  },
  {
    id: 8,
    sentence: `document.write('ba'+(+'a')+'a');`,
  },
  {
    id: 9,
    sentence: ` https://thumbs.gfycat.com/SphericalSpotlessGreendarnerdragonfly-size_restricted.gif `,
  },
  {
    id: 10,
    sentence: `deux bots qui spamment en choeur :mechanical_arm: `,
  },
];

const botContenders = [
  {
    id: 1,
    reply: "oui ",
  },
];

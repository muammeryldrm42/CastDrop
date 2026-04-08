"use client";
import { useState, useCallback } from "react";

const IMGS = {
  gm: [
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    "https://images.unsplash.com/photo-1415025148099-17fe74102b28?w=800&q=80",
    "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    "https://images.unsplash.com/photo-1509567012611-95499ee28d08?w=800&q=80",
  ],
  crypto: [
    "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
    "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&q=80",
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&q=80",
  ],
  motivation: [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
  ],
  tech: [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  ],
  humor: [
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    "https://images.unsplash.com/photo-1531746790095-e5995a2b4028?w=800&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  ],
  alpha: [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  ],
  defi: [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
    "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
    "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&q=80",
  ],
  nft: [
    "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
  ],
  farcaster: [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  ],
  builder: [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  ],
  ai: [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&q=80",
  ],
  trading: [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&q=80",
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
    "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
    "https://images.unsplash.com/photo-1468254095679-bbcba94a7066?w=800&q=80",
  ],
};

const C = {
  gm:{label:"GM",emoji:"☀️",color:"#FFB800",grad:"linear-gradient(135deg,#FFB800,#FF6B00)",casts:["gm to everyone building in silence 🔨","gm. another day to ship something great ☀️","gm farcaster. the timeline is alive today 🫡","gm builders. gm degens. gm lurkers. we're all gonna make it.","gm! coffee loaded, terminal open, let's go 🚀","gm to the ones who stayed through the bear. respect.","gm. if you're reading this, you're still early ☀️","gm frens. today is a good day to push code.","gm! the vibes are immaculate today, can you feel it?","gm to my timeline. you keep me sane in this chaos.","gm from the trenches. still building, still shipping 💪","gm. hot take: mornings are better when you gm first.","gm! reminder: you're doing better than you think 🫂","gm to the real ones. you know who you are.","gm farcaster fam! let's make today count ✨","gm. woke up feeling bullish on good vibes.","gm legends. what are we building today?","gm. no roadmap, just vibes and shipping 🛠️","gm! may your gas fees be low and gains high.","gm from this side of the internet. the good side. ☕","gm. the sun is up, blocks are producing, life is good.","gm! new day, new block, new opportunity. let's ride.","gm frens. whoever needs to hear this: keep going. 💜","gm. gratitude + espresso = unstoppable morning.","gm to everyone about to have their best day yet.","gm! waking up onchain hits different ☀️","gm. the decentralized morning routine is superior."]},
  crypto:{label:"Crypto",emoji:"📈",color:"#00D4AA",grad:"linear-gradient(135deg,#00D4AA,#0077B6)",casts:["unpopular opinion: the best time to build is when nobody's watching","reminder: every chain was a testnet once. stay patient.","the next 100x isn't on your timeline yet. keep digging.","stop watching charts. start shipping products. NFA.","onchain summer never ended for builders 🔨","hot take: the best tokenomics is a product people actually use","web3 UX is getting scary good. normies aren't ready.","if you're not building onchain right now, you're gonna regret it","the merge of AI x crypto is going to be insane.","not your keys, not your coins. always and forever.","every cycle has a narrative. this one? infrastructure 🏗️","DeFi summer 2.0 is loading... can you feel it?","stop chasing pumps. start understanding fundamentals.","modular blockchains, restaking, intents... future is composable","your portfolio is temporary. your knowledge is permanent.","crypto twitter is noise. farcaster is signal.","mass adoption won't look like what you think. invisible infra.","the chains winning aren't the loudest. they're the most useful.","stablecoins are quietly the most important crypto product.","in 5 years we won't say 'web3.' it'll just be the web.","the protocol that wins is the one devs can't stop building on.","crypto taught me more about economics than any university.","every dip is a lesson. every pump is a test.","the real crypto revolution is in payments, not speculation.","the gap between tradfi and defi is closing fast ⚡","we're still in the first inning of programmable money.","tokenize everything? start with things that actually matter."]},
  motivation:{label:"Motivation",emoji:"🔥",color:"#FF6B35",grad:"linear-gradient(135deg,#FF6B35,#BE123C)",casts:["ship it broken. fix it live. learn forever.","your future self will thank you for not quitting today.","consistency beats talent when talent doesn't show up.","1% better every day = 37x better in a year. math doesn't lie.","stop planning. start doing. adjust along the way.","you don't need permission to build something great.","the overnight success you admire? 10 years in the making.","discipline > motivation. motivation fades. discipline compounds.","if it scares you, it's probably the right move.","done is better than perfect. shipped is better than planned.","the best investment you'll ever make is in yourself.","failure isn't the opposite of success. it's part of the journey.","stop comparing your chapter 1 to someone's chapter 20.","the grind is real but so are the results. keep pushing.","every expert was once a beginner. start where you are.","your energy introduces you before you even speak.","winners aren't people who never fail. they never quit.","success is rented. the rent is due every single day.","you're one decision away from a completely different life.","the pain of discipline weighs ounces. regret weighs tons.","outwork your doubt. results will follow.","small daily improvements lead to stunning results over time.","the world rewards the people who ship, not the people who plan.","your comfort zone is a beautiful cage. break free.","be so good they can't ignore you. then keep going.","hard work beats talent when talent doesn't work hard.","the only impossible journey is the one you never begin."]},
  tech:{label:"Tech",emoji:"💻",color:"#7B61FF",grad:"linear-gradient(135deg,#7B61FF,#4338CA)",casts:["AI agents are about to make most SaaS dashboards obsolete.","the best code is the code you don't have to write.","hot take: TypeScript > everything. fight me.","open source is eating the world and I'm here for it 🍿","the dev who reads docs > the dev who watches tutorials","your side project doesn't need kubernetes. a VPS is fine.","senior tip: the best architecture is one your team can maintain.","10x engineers spend 80% thinking, 20% coding.","AI won't replace devs. devs using AI will replace those who don't.","the best way to learn a framework? build something real.","unpopular opinion: most microservices should be monoliths","git commit -m 'it works' at 3am is valid. no debate.","the future of dev tools is AI-native, not AI-added.","the best programming language is the one that ships your product.","code review is a love language. change my mind.","the cloud is someone else's computer but we made it complicated.","every great product started as a terrible prototype.","rust is the future. learn it now or regret it later.","deploy on Friday? absolute chad move.","the best engineers I know are incredible communicators.","a well-written README is worth more than perfect code.","tech debt is just procrastination in a trench coat.","localhost is my happy place 🏠","you don't need more tools. you need to ship.","debugging is like being a detective where you're also the murderer.","the stack doesn't matter if the product doesn't solve a real problem.","every line of code is a liability. write less, ship more."]},
  humor:{label:"Humor",emoji:"😂",color:"#FF3CAC",grad:"linear-gradient(135deg,#FF3CAC,#AB47BC)",casts:["I don't always test my code but when I do, I do it in production 🫡","my mass adoption strategy: make web3 so confusing people use it by accident","told my mom I'm a web3 dev. she asked if I fix websites.","the real utility of my NFTs is the friends I lost along the way","my portfolio is red but at least the vibes are green","just mass adopted some ramen noodles. bullish on my dinner.","the blockchain is immutable. unfortunate for my tx history.","I'm not down bad. I'm long-term bullish with extra steps.","if losing money was a skill I'd be a 10x developer","my exit strategy is not having one. pure web3.","therapist: how does that make you feel? me: ser, it's priced in.","the real friends were the gas fees we paid along the way","just mass adopted some sleep. 0 gas fees. recommend.","my code has more bugs than a tropical rainforest 🐛","I explained DeFi to my barber. now he's liquidated.","the only thing more volatile than crypto is my motivation","my github graph looks like a cry for help.","told myself I'd stop checking charts. that was 5 minutes ago.","I'm not a degen. I'm a decentralized financial researcher.","sleep is temporary. shipping is forever. (please don't do this)","my wallet balance and my dating life have a lot in common.","just mass adopted some coffee. scalability issues ahead. ☕","my code works and I have no idea why. deploying anyway.","'works on my machine' is a deployment strategy right?","my portfolio diversification: losing money on multiple chains.","bought the dip. it kept dipping. this is fine. 🔥","the metaverse is my living room and a laptop. always has been."]},
  alpha:{label:"Alpha",emoji:"🧠",color:"#00B4D8",grad:"linear-gradient(135deg,#00B4D8,#023E8A)",casts:["watch what VCs are quietly building, not what they're tweeting about","the best Farcaster channels have < 500 followers. go find them.","real alpha isn't tips. it's pattern recognition. study cycles.","the teams that keep shipping during silence? those are your 10x bets.","watch developer activity, not price action. GitHub commits don't lie.","most people chase narratives. smart money creates them.","if the community still builds after a 90% drop, you found something real.","the best way to find alpha? talk to builders, not influencers.","watch where smart money bridges. that's your next ecosystem play.","the protocols with the most forks are usually worth studying.","the real alpha is in governance forums. nobody reads them.","follow the devs, not the VCs. devs ship. VCs tweet.","the best airdrop strategy is genuinely using products you believe in.","most alpha is hiding in plain sight. it's in the docs nobody reads.","if a founder replies to every user at 2am, that's a buy signal.","the meta shifts every 6 months. playing last meta = exit liquidity.","the chains nobody talks about today = the narratives of tomorrow.","build relationships, not spreadsheets. your network is your net worth.","watch what's on testnets. mainnet launches move fast.","the alpha isn't in the token. it's in the community around it.","hackathon winners from 6 months ago? check what they shipped since.","if the docs are bad but the code is good, that's early alpha.","follow the money, not the memes. onchain analytics don't lie.","protocols with growing TVL during downtrends = conviction plays.","the best researchers aren't on twitter. they're in small groups."]},
  defi:{label:"DeFi",emoji:"🏦",color:"#00E5A0",grad:"linear-gradient(135deg,#00E5A0,#00A67E)",casts:["DeFi is just finance without the suit and tie. and it's winning.","yield farming taught me more about risk than any MBA program.","the beauty of DeFi: open 24/7, no KYC, no permission needed.","composability is DeFi's superpower. money legos just getting started.","impermanent loss is the price of admission to the future of finance.","lending protocols are boring. boring scales to trillions.","the next wave of DeFi won't look like DeFi. it'll look like fintech.","real yield > ponzi yield. always. the market figures it out.","liquidity is the lifeblood of DeFi. everything else is a feature.","DEXs doing more volume than CEXs is when we win.","the best DeFi protocols are the ones you forget you're using.","staking, restaking, liquid staking... yield meta keeps evolving.","DeFi governance is messy. but messy democracy > clean dictatorship.","bridges are DeFi's biggest unsolved problem. whoever cracks it wins.","flash loans proved capital efficiency has no ceiling in DeFi.","onchain derivatives are about to eat CeFi's lunch.","the future of DeFi is cross-chain, intent-based, AI-optimized.","LP positions are the new savings accounts. with actual returns.","DeFi insurance is criminally undervalued.","permissionless money markets = most important innovation since email.","AMMs changed everything. whatever comes next will change it again.","the DeFi stack is maturing. less ponzinomics, more real utility.","concentrated liquidity was a game changer. active LP mgmt is next.","if you understand DeFi, you understand the future of all finance.","onchain lending rates competing with banks. let that sink in."]},
  nft:{label:"NFT",emoji:"🎨",color:"#E040FB",grad:"linear-gradient(135deg,#E040FB,#7B1FA2)",casts:["NFTs aren't dead. the JPEG speculation era is dead. the tech lives on.","the next wave of NFTs will be utility, access, and identity.","onchain art is a new medium. we're in the cave painting era.","music NFTs will do for artists what Spotify never could.","the best NFT collections are communities first, JPEGs second.","tokenized tickets, credentials, memberships... NFTs without the branding.","generative art onchain is the most interesting art movement in decades.","the PFP era was just the tutorial. the real game is starting.","NFT royalties should be enforced onchain. artists deserve to eat.","the collections that survive have real culture behind them.","photography NFTs are criminally undervalued.","the future of NFTs is dynamic. metadata that evolves with usage.","when gaming fully integrates NFTs, we won't call them NFTs.","curation is the next big unlock for NFTs.","soulbound tokens will change how we think about identity onchain.","the creator economy x NFTs intersection is still day one.","mint passes, access tokens, loyalty NFTs... the quiet revolution.","physical x digital NFTs are going to be huge.","NFT infrastructure getting so good UX won't be an excuse.","the best NFT collectors have taste. taste is the real alpha.","every brand will have an NFT strategy in 5 years.","1/1 art pieces onchain are the Picassos of our generation.","smart wallets + account abstraction = NFTs for normies. soon.","if you think NFTs are dead, you're not watching the builders.","art is subjective. onchain provenance is objective. that matters."]},
  farcaster:{label:"Farcaster",emoji:"🟣",color:"#8B5CF6",grad:"linear-gradient(135deg,#8B5CF6,#5B21B6)",casts:["farcaster is what crypto twitter should have been all along.","the quality of conversation here is 10x any other platform.","sufficiently decentralized social is the endgame. farcaster gets it.","frames changed the game. social + onchain in one tap.","the farcaster developer community is one of the best in crypto.","channels are underrated. find your niche, build your community.","warpcast UX keeps getting better. the team ships like crazy.","the difference between farcaster and twitter? builders vs. talkers.","farcaster mini apps are the next frontier. build now.","this protocol will be 100x its current size in 2 years.","the social graph being onchain changes everything.","I came for the airdrops. I stayed for the community.","farcaster channels are the new subreddits but with identity.","the best content I consume daily is on farcaster.","composable social graphs > walled garden social graphs.","the builders here are insane. something new ships every day.","farcaster is small now. that's the point. that's the alpha.","decentralized social media isn't a theory. we're living it.","farcaster grants are fueling the best mini apps in crypto.","if you're building social and not on farcaster, you're missing out.","permissionless social: anyone can build on the protocol.","farcaster isn't trying to kill twitter. it's something new.","the engagement here is genuine. no bots, no farms.","every week a new frame or mini app blows my mind.","farcaster + base = the most powerful social x onchain combo."]},
  builder:{label:"Builder",emoji:"🛠️",color:"#F59E0B",grad:"linear-gradient(135deg,#F59E0B,#B45309)",casts:["shipped today. didn't ask for permission. that's the builder way.","the best product roadmap: build, ship, listen, repeat.","nobody cares about your idea. they care about your execution.","a builder who ships one thing > a thinker who plans ten.","your MVP doesn't need to be perfect. it needs to exist.","the hardest part isn't coding. it's deciding what to build.","stop reading about building. go build something. right now.","the best founders talk to users more than investors.","shipping in public is a superpower.","one committed builder > a team of ten uncommitted ones.","build for the users you have, not the users you want.","every shipped feature is a lesson. every unshipped one is a guess.","the builders who win aren't the smartest. they're the most persistent.","your first 10 users > your first 10K followers.","build something people want. then make it beautiful.","the best time to ship was yesterday. the next best time is now.","side projects aren't distractions. they're R&D for your main quest.","build-in-public is the best thing to happen to startups.","talk is cheap. shipping is expensive. invest in shipping.","the gap between idea and execution is just showing up every day.","a weekend project that ships > a year-long project that doesn't.","builders build. everything else is commentary.","iterate fast, break things, fix them faster.","your github is your real resume. make it count.","if you shipped something today, you're ahead of 99% of people."]},
  ai:{label:"AI",emoji:"🤖",color:"#06B6D4",grad:"linear-gradient(135deg,#06B6D4,#0E7490)",casts:["AI x crypto is the most underrated intersection in tech right now.","devs using AI to code are lapping everyone else.","AI agents will have wallets, trade, and transact onchain.","the best AI products disappear into the workflow.","prompt engineering is the new literacy.","AI won't take your job. someone using AI better will.","the open source AI movement is the most important tech trend.","LLMs are just the beginning. multimodal AI is where it gets wild.","AI-generated content is the new normal. authenticity is the premium.","companies training their own models will dominate the next decade.","AI coding assistants turned 10-hour tasks into 2-hour tasks.","decentralized AI is the only way to prevent an AI monopoly.","fine-tuned small models > huge general models for most cases.","the AI wrapper hate is overblown. distribution beats innovation.","onchain AI agents are coming. portfolios, DAOs, trading.","the real AI revolution isn't chatbots. it's infra and tooling.","AI is making solo devs as productive as small teams. golden era.","AI + blockchain = trustless autonomous agents.","every SaaS product will be AI-native in 3 years.","the data moat is the only real moat in AI.","voice AI is about to make every app conversational.","the best AI startups solve boring problems really well.","if you're not using AI in your dev workflow, you're leaving 10x.","the future is agents talking to agents. humans set goals.","AI will create more jobs than it destroys. different jobs."]},
  trading:{label:"Trading",emoji:"📊",color:"#EF4444",grad:"linear-gradient(135deg,#EF4444,#B91C1C)",casts:["the market can stay irrational longer than you can stay solvent.","risk management isn't sexy but it keeps you in the game.","your biggest enemy in trading is your own emotions.","the best trade is the one you didn't take. patience is profit.","leverage is a tool. in wrong hands it's a weapon against you.","every loss is tuition. are you learning the lesson?","the market doesn't care about your feelings. trade the chart.","position sizing > entry timing. most get this backwards.","if you can't explain your edge in one sentence, you don't have one.","paper trading isn't embarrassing. blowing your account is.","the best traders are the most patient people I know.","stop trading every candle. best setups come to those who wait.","journal every trade. the patterns will surprise you.","the trend is your friend until it ends. know when to pivot.","smart money moves slow. dumb money moves fast.","DCA is the most boring and most effective strategy.","stop looking for the holy grail indicator. it doesn't exist.","risk 1% per trade. survive 100 losses. find your edge.","the chart tells you everything. learn to listen.","most traders fail because they trade too much.","orderbook analysis > any lagging indicator.","the best setups feel uncomfortable. that's the signal.","trading is a marathon dressed as a sprint. pace yourself.","your win rate doesn't matter if risk/reward is wrong.","the three rules: protect capital, protect capital, protect capital."]},
};

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function Home() {
  const [cat, setCat] = useState(null);
  const [cast, setCast] = useState("");
  const [img, setImg] = useState("");
  const [spin, setSpin] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hist, setHist] = useState([]);
  const [imgLoaded, setImgLoaded] = useState(false);

  const roll = useCallback((k) => {
    const d = C[k]; if (!d) return;
    setSpin(true); setCopied(false); setImgLoaded(false);
    let n = 0;
    const iv = setInterval(() => {
      setCast(pick(d.casts));
      if (++n > 8) {
        clearInterval(iv);
        setCast(pick(d.casts));
        setImg(pick(IMGS[k]));
        setSpin(false);
      }
    }, 70);
  }, []);

  const share = () => {
    const params = new URLSearchParams();
    params.set("text", cast);
    if (img) params.append("embeds[]", img);
    window.open(`https://warpcast.com/~/compose?${params.toString()}`, "_blank");
    setHist((p) => [{ text: cast, cat, time: Date.now() }, ...p.slice(0, 29)]);
  };

  const copy = () => {
    navigator.clipboard.writeText(cast);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };

  const d = cat ? C[cat] : null;

  return (
    <main style={{ minHeight:"100vh", background:"#08080d", color:"#e0e0e8", fontFamily:"'JetBrains Mono','Fira Code',monospace" }}>
      {/* Noise */}
      <div style={{ position:"fixed",inset:0,zIndex:0,pointerEvents:"none",opacity:0.04,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      {/* Glow */}
      {cat && <div style={{ position:"fixed",top:"-20%",right:"-10%",width:500,height:500,background:`radial-gradient(circle,${d.color}18 0%,transparent 70%)`,borderRadius:"50%",transition:"all 0.6s" }} />}

      <div style={{ position:"relative",zIndex:1,maxWidth:600,margin:"0 auto",padding:"40px 20px" }}>
        {/* Header */}
        <div style={{ textAlign:"center",marginBottom:40 }}>
          <div style={{ fontSize:11,letterSpacing:8,textTransform:"uppercase",color:"#444",marginBottom:10 }}>⚡ CASTDROP</div>
          <h1 style={{ fontSize:32,fontWeight:800,margin:0,background:"linear-gradient(135deg,#8B5CF6,#FF3CAC,#FFB800)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>Drop a Cast</h1>
          <p style={{ color:"#555",fontSize:13,marginTop:8,fontFamily:"Inter,sans-serif" }}>Pick a vibe → Get a cast with image → Share to Warpcast 🚀</p>
        </div>

        {/* Categories */}
        <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:32 }}>
          {Object.entries(C).map(([k,v]) => {
            const on = cat === k;
            return (
              <button key={k} onClick={() => { setCat(k); roll(k); }}
                style={{
                  background: on ? `${v.color}15` : "#101018",
                  border: `1.5px solid ${on ? v.color+"77" : "#1a1a28"}`,
                  borderRadius:12, padding:"14px 4px",
                  color: on ? v.color : "#666",
                  fontSize:10, fontWeight:600, cursor:"pointer",
                  fontFamily:"inherit", transition:"all 0.2s",
                  display:"flex", flexDirection:"column", alignItems:"center", gap:5,
                }}>
                <span style={{ fontSize:20 }}>{v.emoji}</span>
                <span>{v.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cast Card */}
        {cast && (
          <div style={{ background:"#101018", border:"1px solid #1e1e2e", borderRadius:16, overflow:"hidden", marginBottom:16 }}>
            {/* Image */}
            <div style={{ position:"relative", width:"100%", aspectRatio:"1.91/1", background: d?.grad || "#222", overflow:"hidden" }}>
              {img && (
                <img
                  src={img}
                  alt=""
                  onLoad={() => setImgLoaded(true)}
                  style={{
                    position:"absolute", inset:0, width:"100%", height:"100%",
                    objectFit:"cover",
                    opacity: spin ? 0.2 : imgLoaded ? 0.85 : 0,
                    transition:"opacity 0.4s",
                  }}
                />
              )}
              {/* Gradient overlay */}
              <div style={{ position:"absolute",inset:0,background:"linear-gradient(0deg,#101018 0%,transparent 40%)" }} />
              {/* Badge */}
              <div style={{
                position:"absolute", top:12, left:14,
                background:"#000a", backdropFilter:"blur(8px)",
                borderRadius:8, padding:"5px 12px",
                fontSize:10, letterSpacing:2, textTransform:"uppercase",
                color: d?.color, fontWeight:700,
              }}>
                {d?.emoji} {d?.label}
              </div>
              {/* Fallback emoji if image not loaded */}
              {!imgLoaded && (
                <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <span style={{ fontSize:56, opacity:0.3 }}>{d?.emoji}</span>
                </div>
              )}
            </div>

            {/* Text */}
            <div style={{ padding:"20px 22px 16px" }}>
              <p style={{
                fontSize:17, lineHeight:1.65, margin:0, fontWeight:500,
                color:"#d4d4dc", fontFamily:"Inter,sans-serif",
                opacity: spin ? 0.25 : 1, transition:"opacity 0.15s",
              }}>{cast}</p>
              <div style={{ marginTop:12, fontSize:10, color:"#3a3a4a", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span>{cast.length}/320 chars</span>
                <span style={{ display:"flex",alignItems:"center",gap:4 }}>
                  {imgLoaded && <span style={{ width:6,height:6,borderRadius:"50%",background:"#00D4AA",display:"inline-block" }}/>}
                  {imgLoaded ? "image ready" : "loading image..."} · via CastDrop ⚡
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        {cast && !spin && (
          <div style={{ display:"flex",gap:8,marginBottom:36 }}>
            <button onClick={() => roll(cat)}
              style={{ flex:1,padding:"14px 0",background:"#14141e",border:"1px solid #222236",borderRadius:12,color:"#999",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s" }}
              onMouseOver={e=>e.target.style.borderColor="#333"}
              onMouseOut={e=>e.target.style.borderColor="#222236"}>
              🎲 Reroll
            </button>
            <button onClick={copy}
              style={{ flex:1,padding:"14px 0",background:"#14141e",border:"1px solid #222236",borderRadius:12,color:copied?"#00D4AA":"#999",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s" }}>
              {copied ? "✓ Copied" : "📋 Copy"}
            </button>
            <button onClick={share}
              style={{
                flex:2,padding:"14px 0",
                background: d ? `linear-gradient(135deg,${d.color},${d.color}cc)` : "#8B5CF6",
                border:"none",borderRadius:12,color:"#000",fontSize:13,fontWeight:800,
                cursor:"pointer",fontFamily:"inherit",letterSpacing:0.5,
                boxShadow: d ? `0 4px 24px ${d.color}40` : "none",
                transition:"all 0.15s",
              }}
              onMouseOver={e=>e.target.style.transform="translateY(-1px)"}
              onMouseOut={e=>e.target.style.transform="translateY(0)"}>
              🚀 Cast on Warpcast
            </button>
          </div>
        )}

        {/* History */}
        {hist.length > 0 && (
          <div>
            <div style={{ fontSize:10,letterSpacing:3,textTransform:"uppercase",color:"#333",marginBottom:12 }}>Recent Drops</div>
            {hist.map((h, i) => (
              <div key={i} style={{ background:"#0c0c14",border:"1px solid #161624",borderRadius:10,padding:"10px 14px",marginBottom:6,display:"flex",alignItems:"center",gap:10 }}>
                <div style={{ width:6,height:6,borderRadius:"50%",background:C[h.cat]?.color,flexShrink:0 }} />
                <span style={{ fontSize:11,color:"#555",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontFamily:"Inter,sans-serif",flex:1 }}>{h.text}</span>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign:"center",marginTop:48,fontSize:10,color:"#222" }}>
          CASTDROP by Talons Protocol · <a href="https://warpcast.com" target="_blank" style={{ color:"#333",textDecoration:"none" }}>Warpcast</a>
        </div>
      </div>
    </main>
  );
}

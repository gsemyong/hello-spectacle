import { createRoot } from "react-dom/client";
import { Deck, DefaultTemplate, Slide } from "spectacle";
import { Heart, Bone, PawPrint } from "lucide-react";
import "@fontsource/instrument-serif";
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/jetbrains-mono";
import "./index.css";

const TimelinePoint = ({
  year,
  text,
  detail,
}: {
  year: string;
  text: string;
  detail?: string;
}) => (
  <div className="relative flex items-center gap-4 print:relative print:gap-2">
    <div className="h-4 w-4 rounded-full bg-neutral-900 print:h-3 print:w-3 print:bg-neutral-800"></div>
    <div className="flex flex-col print:flex">
      <span className="font-mono text-sm text-neutral-500 print:text-neutral-600">
        {year}
      </span>
      <span className="text-neutral-700 print:text-neutral-800">{text}</span>
      {detail && (
        <span className="mt-1 text-sm text-neutral-500 print:text-neutral-600">
          {detail}
        </span>
      )}
    </div>
  </div>
);

const CommunicationCard = ({
  title,
  items,
  icon,
}: {
  title: string;
  items: Array<{ text: string; description: string }>;
  icon?: string;
}) => (
  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 shadow-sm print:relative print:block print:border-neutral-300 print:bg-white print:p-4">
    <div className="mb-4 flex items-center gap-3">
      {icon && <span className="text-2xl">{icon}</span>}
      <h3 className="text-neutral-800 print:text-neutral-900">{title}</h3>
    </div>
    <ul className="space-y-3 print:block">
      {items.map((item, i) => (
        <li key={i} className="print:text-neutral-700">
          <div className="flex items-center gap-2 text-neutral-700">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 print:bg-neutral-500"></span>
            <span className="font-medium">{item.text}</span>
          </div>
          <p className="ml-3 mt-1 text-sm text-neutral-600">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="flex flex-col items-center rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center">
    <span className="font-serif text-3xl font-bold text-neutral-900">
      {number}
    </span>
    <span className="mt-1 text-sm text-neutral-600">{label}</span>
  </div>
);

const BreedCard = ({
  name,
  origin,
  traits,
}: {
  name: string;
  origin: string;
  traits: string[];
}) => (
  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
    <h4 className="font-serif text-lg font-medium text-neutral-800">{name}</h4>
    <p className="mt-1 text-sm text-neutral-600">{origin}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {traits.map((trait, i) => (
        <span
          key={i}
          className="rounded-full bg-neutral-200 px-2 py-1 text-xs text-neutral-700"
        >
          {trait}
        </span>
      ))}
    </div>
  </div>
);

const Presentation = () => (
  <Deck
    theme={{
      colors: {
        tertiary: "#fff",
      },
    }}
    template={() => <DefaultTemplate color="black" />}
  >
    {/* Title Slide */}
    <Slide>
      <div className="flex min-h-[60vh] flex-col items-center justify-center print:flex print:min-h-0">
        <div className="relative print:relative">
          <h1 className="font-serif text-7xl font-bold text-neutral-900 print:text-5xl">
            The Fascinating World of Cats
          </h1>
          <div className="absolute bottom-2 -z-10 h-4 w-full bg-neutral-100 print:absolute print:bg-neutral-200"></div>
        </div>
        <p className="mt-6 text-xl text-neutral-600 print:text-neutral-700">
          A comprehensive exploration of our feline companions
        </p>
        <div className="mt-12 grid grid-cols-3 gap-6">
          <StatCard number="600M+" label="Cats Worldwide" />
          <StatCard number="40+" label="Recognized Breeds" />
          <StatCard number="9,000" label="Years of Domestication" />
        </div>
      </div>
    </Slide>

    {/* Overview Slide */}
    <Slide>
      <div className="prose prose-neutral lg:prose-xl">
        <h2 className="font-serif text-neutral-800">
          Journey Through Our Exploration
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 print:grid print:gap-4">
          {[
            { title: "The Evolution of Cats", icon: "🧬" },
            { title: "Cat Behavior & Communication", icon: "🐱" },
            { title: "Fascinating Cat Breeds", icon: "🏆" },
            { title: "Modern Cat Care & Wellness", icon: "💝" },
            { title: "Cat Intelligence & Learning", icon: "🧠" },
            { title: "Human-Cat Bond", icon: "🤝" },
          ].map((topic, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-lg border border-neutral-200 p-6 print:border-neutral-300 print:p-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-xl text-white">
                {topic.icon}
              </span>
              <span className="text-lg text-neutral-700">{topic.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Slide>

    {/* Evolution Slide */}
    <Slide>
      <div className="prose prose-neutral lg:prose-xl">
        <h2 className="font-serif text-neutral-800">The Evolution of Cats</h2>
        <p className="text-neutral-700">
          A journey through time from wild predators to cherished companions
        </p>
        <div className="mt-8 space-y-6 print:space-y-4">
          <TimelinePoint
            year="10.8M years ago"
            text="First cat-like species emerged"
            detail="Proailurus, the first true cat ancestor, appeared in Asia"
          />
          <div className="ml-[0.71rem] h-8 w-0.5 bg-neutral-200 print:ml-[0.55rem] print:h-6"></div>
          <TimelinePoint
            year="3.4M years ago"
            text="Emergence of Felis genus"
            detail="Modern cat characteristics begin to develop"
          />
          <div className="ml-[0.71rem] h-8 w-0.5 bg-neutral-200 print:ml-[0.55rem] print:h-6"></div>
          <TimelinePoint
            year="9,000 years ago"
            text="Beginning of cat domestication"
            detail="Near Eastern Wildcat began living alongside humans in the Fertile Crescent"
          />
          <div className="ml-[0.71rem] h-8 w-0.5 bg-neutral-200 print:ml-[0.55rem] print:h-6"></div>
          <TimelinePoint
            year="4,000 years ago"
            text="Ancient Egyptian veneration"
            detail="Cats became sacred animals, represented by the goddess Bastet"
          />
          <div className="ml-[0.71rem] h-8 w-0.5 bg-neutral-200 print:ml-[0.55rem] print:h-6"></div>
          <TimelinePoint
            year="Present day"
            text="Global companion animals"
            detail="Most popular pet worldwide, with hundreds of millions of domestic cats"
          />
        </div>
      </div>
    </Slide>

    {/* Behavior Slide */}
    <Slide>
      <div className="prose prose-neutral lg:prose-xl">
        <h2 className="mb-8 font-serif text-neutral-800">
          Understanding Cat Communication
        </h2>
        <div className="grid grid-cols-2 gap-6 print:grid print:gap-4">
          <CommunicationCard
            title="Vocal Signals"
            icon="🔊"
            items={[
              {
                text: "Meowing",
                description: "Primary way of communicating with humans",
              },
              {
                text: "Purring",
                description: "Indicates contentment or self-soothing",
              },
              {
                text: "Chirping",
                description: "Hunting or excitement vocalization",
              },
              {
                text: "Hissing",
                description: "Warning signal indicating fear or aggression",
              },
            ]}
          />
          <CommunicationCard
            title="Body Language"
            icon="👀"
            items={[
              {
                text: "Tail Position",
                description: "Straight up = friendly; puffed = threatened",
              },
              {
                text: "Ear Movement",
                description: "Forward = alert; flat = defensive",
              },
              {
                text: "Eye Contact",
                description: "Slow blinks indicate trust and affection",
              },
              {
                text: "Whisker Position",
                description: "Forward = curious; back = defensive",
              },
            ]}
          />
        </div>
      </div>
    </Slide>

    {/* Breeds Slide */}
    <Slide>
      <div className="prose prose-neutral lg:prose-xl">
        <h2 className="mb-8 font-serif text-neutral-800">Notable Cat Breeds</h2>
        <div className="grid grid-cols-3 gap-4">
          <BreedCard
            name="Maine Coon"
            origin="United States"
            traits={["Large", "Friendly", "Long-haired", "Intelligent"]}
          />
          <BreedCard
            name="Siamese"
            origin="Thailand"
            traits={["Vocal", "Social", "Short-haired", "Active"]}
          />
          <BreedCard
            name="Persian"
            origin="Iran"
            traits={["Calm", "Long-haired", "Gentle", "Indoor"]}
          />
          <BreedCard
            name="Bengal"
            origin="United States"
            traits={["Active", "Spotted", "Athletic", "Smart"]}
          />
          <BreedCard
            name="Ragdoll"
            origin="United States"
            traits={["Relaxed", "Large", "Affectionate", "Docile"]}
          />
          <BreedCard
            name="Sphynx"
            origin="Canada"
            traits={["Hairless", "Energetic", "Friendly", "Warm"]}
          />
        </div>
      </div>
    </Slide>
    <Slide>
      <div className="prose prose-neutral mx-auto max-w-3xl space-y-8 rounded-lg bg-white p-8">
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-neutral-800">
            The Joy of Dogs
          </h1>
          <p className="text-neutral-600">
            Discover why dogs make the perfect companions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3 rounded-lg bg-neutral-50 p-6 text-center">
            <div className="flex justify-center">
              <Heart className="h-8 w-8 text-neutral-700" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-800">
              Unconditional Love
            </h3>
            <p className="text-sm text-neutral-600">
              Dogs offer pure, unwavering affection and loyalty to their human
              companions
            </p>
          </div>

          <div className="space-y-3 rounded-lg bg-neutral-50 p-6 text-center">
            <div className="flex justify-center">
              <PawPrint className="h-8 w-8 text-neutral-700" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-800">
              Faithful Friends
            </h3>
            <p className="text-sm text-neutral-600">
              Known as man's best friend, dogs provide constant companionship
              and support
            </p>
          </div>

          <div className="space-y-3 rounded-lg bg-neutral-50 p-6 text-center">
            <div className="flex justify-center">
              <Bone className="h-8 w-8 text-neutral-700" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-800">
              Playful Nature
            </h3>
            <p className="text-sm text-neutral-600">
              Dogs bring joy and energy to our lives with their playful
              personalities
            </p>
          </div>
        </div>

        <div className="prose mt-8">
          <h2 className="text-2xl font-semibold text-neutral-800">
            Why Choose a Dog?
          </h2>
          <p className="text-neutral-700">
            Dogs have been human companions for thousands of years, evolving
            alongside us to become intuitive, empathetic partners. They offer
            emotional support, encourage exercise through daily walks, and
            provide a sense of purpose and routine to our lives.
          </p>
          <p className="text-neutral-700">
            Whether you're looking for an active running partner or a calm
            cuddle buddy, there's a dog breed that matches your lifestyle. Their
            ability to understand human emotions and provide comfort is
            unmatched in the animal kingdom.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-500">
            "The better I get to know men, the more I find myself loving dogs."
            - Charles de Gaulle
          </p>
        </div>
      </div>
    </Slide>
  </Deck>
);

createRoot(document.getElementById("app")!).render(<Presentation />);

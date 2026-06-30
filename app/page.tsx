"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gem, Heart, Instagram, Menu, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
};

const collections = [
  {
    title: "Everyday Elegance",
    copy: "Quiet pieces for the rhythm of ordinary days.",
    image: "/images/everyday-elegance.png"
  },
  {
    title: "Celebrations",
    copy: "Warm gold, soft shine, and jewellery made for joy.",
    image: "/images/celebration-heritage.png"
  },
  {
    title: "Bridal Moments",
    copy: "Thoughtful adornment for memories that stay.",
    image: "/images/celebration-heritage.png"
  },
  {
    title: "Heritage Collection",
    copy: "Timeless forms inspired by detail, memory, and grace.",
    image: "/images/craftsmanship-macro.png"
  }
];

const lovedPieces = [
  "Pearl-kissed hoops",
  "Fine motif bangles",
  "Soft pendant chains",
  "Engraved keepsake rings"
];

const gallery = [
  "/images/zevar-hero.png",
  "/images/craftsmanship-macro.png",
  "/images/everyday-elegance.png",
  "/images/celebration-heritage.png"
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-ivory text-ink">
      <Navigation />

      <section className="relative flex min-h-[100svh] items-center bg-ink text-ivory">
        <Image
          src="/images/zevar-hero.png"
          alt="Handcrafted jewellery arranged on silk in warm editorial light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.88),rgba(11,11,11,0.56)_42%,rgba(11,11,11,0.12)_80%)]" />
        <motion.div
          className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:px-12"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.34em] text-gold">
              Crafted For Every Soul
            </p>
            <h1 className="text-balance font-display text-6xl font-medium leading-[0.94] sm:text-7xl lg:text-8xl">
              Jewellery as art, made to welcome every woman.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-ivory/80 sm:text-lg">
              Step into a calm digital boutique where craftsmanship comes first,
              beauty has room to breathe, and every piece invites appreciation.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#collections" className="w-fit">
                <Button className="group">
                  Explore Collection
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition duration-500 group-hover:translate-x-1"
                  />
                </Button>
              </a>
              <a
                href="#craft"
                className="inline-flex h-12 w-fit items-center justify-center rounded-full border border-gold/50 px-7 text-sm font-medium text-ivory transition duration-500 hover:border-gold hover:bg-gold/10"
              >
                See the craft
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-ivory px-5 py-20 text-ink sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-gold">
              Brand Promise
            </p>
            <h2 className="font-display text-5xl font-medium leading-none sm:text-6xl">
              Crafted For Every Soul
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-pretty text-lg leading-9 text-espresso/75">
            ZevarByUs believes jewellery belongs in every woman&apos;s life. It
            should never divide by price or status. It should offer beauty,
            craft, thoughtful design, and a few peaceful minutes of joy.
          </motion.p>
        </div>
      </section>

      <section id="collections" className="bg-ink px-5 py-20 text-ivory sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Find What Speaks To You"
            title="Collections for moods, memories, and moments."
            copy="Each path is an invitation to notice detail, texture, and the small feeling a piece leaves behind."
            light
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((item, index) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="group overflow-hidden rounded-lg border border-ivory/10 bg-ivory/[0.035]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} jewellery arrangement`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-taupe">{item.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="craft" className="bg-ivory px-5 py-20 text-ink sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft lg:aspect-[5/4]"
          >
            <Image
              src="/images/craftsmanship-macro.png"
              alt="Macro close-up of handcrafted jewellery details and engraved metalwork"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-gold">
              Craftsmanship
            </p>
            <h2 className="text-balance font-display text-5xl font-medium leading-[1.04] sm:text-6xl">
              Beauty you can linger with.
            </h2>
            <p className="mt-7 text-pretty text-base leading-8 text-espresso/75">
              Every curve, clasp, stone, and surface is chosen for how it feels
              together. The joy is not only in owning a piece; it is in seeing
              the care that made it possible.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                ["Thoughtful", Gem],
                ["Timeless", Sparkles],
                ["Welcoming", Heart]
              ].map(([label, Icon]) => (
                <div key={label as string} className="rounded-lg border border-espresso/10 bg-white/60 p-5">
                  <Icon className="mb-4 h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <p className="text-sm font-medium text-espresso">{label as string}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#efe7da] px-5 py-20 text-ink sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Pieces Women Love"
            title="Quiet favourites, chosen for feeling as much as form."
            copy="A few pieces return again and again because they are easy to love, easy to wear, and rich with small details."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {lovedPieces.map((piece, index) => (
              <motion.div
                key={piece}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.07 }}
                className="rounded-lg border border-espresso/10 bg-ivory p-7"
              >
                <Sparkles className="mb-8 h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <h3 className="font-display text-3xl font-medium">{piece}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-ivory sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionIntro
            eyebrow="Curated With Heart"
            title="Selected for beauty, craft, and lasting grace."
            light
          />
          <motion.p {...fadeUp} className="text-pretty text-lg leading-9 text-taupe">
            ZevarByUs curates each piece with a simple question: does it bring a
            woman closer to beauty without asking her to be anyone but herself?
            The result is jewellery that feels considered, warm, and quietly
            memorable.
          </motion.p>
        </div>
      </section>

      <section id="gallery" className="bg-ivory px-5 py-20 text-ink sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Instagram Gallery"
            title="Small glimpses of craft, light, and joy."
            copy="A visual journal for jewellery that deserves to be appreciated slowly."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {gallery.map((image, index) => (
              <motion.a
                key={image}
                href="https://www.instagram.com/"
                aria-label="Visit ZevarByUs on Instagram"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="group relative aspect-square overflow-hidden rounded-lg bg-ink"
              >
                <Image
                  src={image}
                  alt="ZevarByUs jewellery gallery image"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 grid place-items-center bg-ink/0 text-ivory opacity-0 transition duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                  <Instagram className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ivory/10 bg-ink/40 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <a href="#" className="flex flex-col leading-none" aria-label="ZevarByUs home">
          <span className="font-display text-3xl font-medium text-ivory">Zevar</span>
          <span className="ml-8 mt-0.5 text-[11px] font-medium lowercase tracking-[0.28em] text-gold">
            by us
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a className="text-ivory/80 transition duration-300 hover:text-gold" href="#collections">
            Collections
          </a>
          <a className="text-ivory/80 transition duration-300 hover:text-gold" href="#craft">
            Craft
          </a>
          <a className="text-ivory/80 transition duration-300 hover:text-gold" href="#gallery">
            Gallery
          </a>
        </div>
        <a
          href="#collections"
          className="hidden rounded-full border border-gold/50 px-5 py-2 text-sm text-ivory transition duration-300 hover:bg-gold hover:text-ink md:inline-flex"
        >
          Explore
        </a>
        <button
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory md:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>
      {open ? (
        <div className="border-t border-ivory/10 bg-ink/90 px-5 py-5 text-sm text-ivory md:hidden">
          <div className="mx-auto grid max-w-7xl gap-4">
            {[
              ["Collections", "#collections"],
              ["Craft", "#craft"],
              ["Gallery", "#gallery"]
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-ivory/10 px-4 py-3 transition duration-300 hover:border-gold/70 hover:text-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  light
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`mx-auto max-w-3xl text-center ${light ? "text-ivory" : "text-ink"}`}
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-gold">
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className={`mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base ${light ? "text-taupe" : "text-espresso/75"}`}>
          {copy}
        </p>
      ) : null}
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-[#100e0d] px-5 py-12 text-ivory sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <a href="#" className="flex w-fit flex-col leading-none" aria-label="ZevarByUs home">
            <span className="font-display text-4xl font-medium">Zevar</span>
            <span className="ml-10 mt-0.5 text-[11px] font-medium lowercase tracking-[0.28em] text-gold">
              by us
            </span>
          </a>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.28em] text-gold">
            Crafted For Every Soul
          </p>
        </div>
        <p className="max-w-md text-sm leading-7 text-taupe">
          A calm digital boutique for jewellery that welcomes every woman into
          beauty, craftsmanship, and delight.
        </p>
      </div>
    </footer>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Ticket, ShieldCheck, Gift, Clock, CheckCircle2, Info, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, kicker, title, description, children }) => (
  <section id={id} className="py-12 sm:py-16 lg:py-20">
    <Container>
      <div className="mb-8 sm:mb-12 text-center">
        {kicker && (
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide">
            <Sparkles className="h-3.5 w-3.5" />
            {kicker}
          </div>
        )}
        {title && (
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        )}
        {description && (
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </Container>
  </section>
);

function useCountdown(targetDate) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const isOver = diff <= 0;
  return { days, hours, minutes, seconds, isOver };
}

const DEVICES = [
  {
    id: "iphone15pro",
    name: "iPhone 15 Pro",
    storage: ["128 GB", "256 GB"],
    retailPrice: 1199,
    hero: "https://images.unsplash.com/photo-1695047567070-2d1dcaf14905?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "s24ultra",
    name: "Samsung Galaxy S24 Ultra",
    storage: ["256 GB", "512 GB"],
    retailPrice: 1299,
    hero: "https://images.unsplash.com/photo-1610945267780-6a1a9fba6921?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "pixel9pro",
    name: "Google Pixel 9 Pro",
    storage: ["128 GB", "256 GB"],
    retailPrice: 1099,
    hero: "https://images.unsplash.com/photo-1670272504291-40791f9a8975?q=80&w=1200&auto=format&fit=crop",
  },
];

const FAQ = [
  {
    q: "Wie funktioniert die Traumhandyverlosung?",
    a: "Du kaufst digitale Lose. Nach Ablauf des Countdowns wird automatisiert ein Gewinnerlos gezogen. Je mehr Lose, desto höher deine Gewinnchance.",
  },
  {
    q: "Ist die Teilnahme legal?",
    a: "Bitte beachte: Verlosungen können in deinem Land / Bundesland genehmigungspflichtig sein. Stelle sicher, dass alle rechtlichen Anforderungen (z.B. Glücksspielrecht, Impressum, AGB) erfüllt sind.",
  },
  {
    q: "Wer darf teilnehmen?",
    a: "Teilnahme ab 18 Jahren. Wohnsitz in der EU erforderlich. Mitarbeiter der Veranstalter sind ausgeschlossen.",
  },
  {
    q: "Wie werden Gewinne übergeben?",
    a: "Wir versenden originalverpackte Geräte mit Rechnung an die vom Gewinner bestätigte Adresse. Eine Barauszahlung ist ausgeschlossen.",
  },
];

export default function Traumhandyverlosung() {
  const drawDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    d.setHours(20, 0, 0, 0);
    return d;
  }, []);
  const { days, hours, minutes, seconds } = useCountdown(drawDate);

  const [selectedDevice, setSelectedDevice] = useState(DEVICES[0].id);
  const [storage, setStorage] = useState(DEVICES[0].storage[0]);
  const [tickets, setTickets] = useState(3);
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [open, setOpen] = useState(false);

  const device = DEVICES.find((d) => d.id === selectedDevice);
  const ticketPrice = 2.5;
  const subtotal = tickets * ticketPrice;
  const service = Math.round(subtotal * 0.05 * 100) / 100;
  const total = Math.round((subtotal + service) * 100) / 100;

  const sold = 350 + Math.floor(((Date.now() / 1000) % 1000) / 3);
  const goal = 1000;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone className="h-6 w-6" />
              <span className="text-lg font-bold tracking-tight">Traumhandyverlosung</span>
            </div>
            <nav className="hidden gap-6 md:flex">
              <a href="#preise" className="text-sm text-muted-foreground hover:text-foreground">Preise</a>
              <a href="#so-gehts" className="text-sm text-muted-foreground hover:text-foreground">So funktioniert’s</a>
              <a href="#tickets" className="text-sm text-muted-foreground hover:text-foreground">Tickets</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a>
            </nav>
            <a href="#tickets"><Button className="hidden md:inline-flex" size="sm">Tickets kaufen</Button></a>
          </div>
        </Container>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.18),transparent_60%)]"/>
        <Container>
          <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <div>
              <Badge className="mb-3">Nächste Ziehung</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Gewinne dein <span className="text-primary">Traum‑Smartphone</span> ab 2,50€</h1>
              <p className="mt-4 text-lg text-muted-foreground">Sichere dir Lose für aktuelle Top‑Modelle. Fair, transparent und mit amtlicher Gewinnerziehung.</p>

              <div className="mt-6 grid grid-cols-4 gap-2 rounded-xl border bg-background p-4 text-center">
                <div><div className="text-3xl font-bold tabular-nums">{String(days).padStart(2, "0")}</div><div className="text-xs text-muted-foreground">Tage</div></div>
                <div><div className="text-3xl font-bold tabular-nums">{String(hours).padStart(2, "0")}</div><div className="text-xs text-muted-foreground">Std</div></div>
                <div><div className="text-3xl font-bold tabular-nums">{String(minutes).padStart(2, "0")}</div><div className="text-xs text-muted-foreground">Min</div></div>
                <div><div className="text-3xl font-bold tabular-nums">{String(seconds).padStart(2, "0")}</div><div className="text-xs text-muted-foreground">Sek</div></div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>Teilnahme ab 18</div>
                <div className="inline-flex items-center gap-2"><Gift className="h-4 w-4"/>100% echte Geräte</div>
                <div className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/>Ziehung {new Date(drawDate).toLocaleDateString()} – 20:00</div>
              </div>

              <div className="mt-8 flex gap-3">
                <a href="#tickets"><Button size="lg">Jetzt Lose sichern</Button></a>
                <a href="#so-gehts"><Button size="lg" variant="outline">So funktioniert’s</Button></a>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl"/>
              <Card className="overflow-hidden">
                <img src={DEVICES[0].hero} alt={DEVICES[0].name} className="h-64 w-full object-cover" />
                <CardHeader>
                  <CardTitle>{DEVICES[0].name}</CardTitle>
                  <CardDescription>UVP ca. {DEVICES[0].retailPrice.toLocaleString("de-DE")}€</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Verkaufte Lose</div>
                    <div className="tabular-nums font-medium">{sold} / {goal}</div>
                  </div>
                  <Progress value={(sold / goal) * 100} />
                </CardContent>
                <CardFooter>
                  <a href="#tickets" className="w-full"><Button className="w-full">Jetzt mitmachen</Button></a>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      <Section id="preise" kicker="Aktuelle Smartphones" title="Diese Modelle kannst du gewinnen" description="Wir verlosen regelmäßig die beliebtesten Top‑Smartphones. Wähle dein Wunschgerät beim Ticketkauf.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEVICES.map((d) => (
            <Card key={d.id} className="flex flex-col">
              <img src={d.hero} alt={d.name} className="h-44 w-full object-cover" />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{d.name}</span>
                  <Badge variant="secondary">UVP {d.retailPrice.toLocaleString("de-DE")}€</Badge>
                </CardTitle>
                <CardDescription>Neu & originalverpackt</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <a href="#tickets" className="w-full"><Button className="w-full" variant="outline">Dieses Modell wählen</Button></a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="so-gehts" kicker="In 3 Schritten" title="So funktioniert’s" description="Transparentes Verfahren – zufällige Ziehung und Benachrichtigung des Gewinners.">
        <div className="grid gap-6 md:grid-cols-3">
          {[{
            title: "Lose kaufen",
            desc: "Wähle dein Wunsch‑Smartphone und kaufe beliebig viele Lose ab 2,50€.",
          }, {
            title: "Warten bis zur Ziehung",
            desc: "Nach Ablauf des Countdowns wird automatisiert ein Gewinnerlos bestimmt.",
          }, {
            title: "Gewinn erhalten",
            desc: "Wir kontaktieren den Gewinner per E‑Mail und versenden das Gerät mit Sendungsverfolgung.",
          }].map((s, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-xl">{s.title}</CardTitle>
                <CardDescription>{s.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="tickets" kicker="Dein Los" title="Tickets kaufen" description="Wähle Gerät, Speicher, Anzahl und sichere dir deine Gewinnchance.">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Konfiguration</CardTitle>
                <CardDescription>Du erhältst eine Bestätigung per E‑Mail.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Gerät</Label>
                    <Select value={selectedDevice} onValueChange={(v) => { setSelectedDevice(v); const nd = DEVICES.find(x=>x.id===v); setStorage(nd.storage[0]); }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Wähle ein Gerät" />
                      </SelectTrigger>
                      <SelectContent>
                        {DEVICES.map((d) => (
                          <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Speicher</Label>
                    <Select value={storage} onValueChange={setStorage}>
                      <SelectTrigger>
                        <SelectValue placeholder="Speicher wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {DEVICES.find(d=>d.id===selectedDevice)?.storage.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Anzahl Lose</Label>
                    <div className="flex items-center gap-2">
                      <Button type="button" variant="outline" onClick={() => setTickets((t) => Math.max(1, t - 1))}>-</Button>
                      <Input type="number" value={tickets} min={1} onChange={(e) => setTickets(Math.max(1, parseInt(e.target.value || "1", 10)))} className="text-center" />
                      <Button type="button" variant="outline" onClick={() => setTickets((t) => t + 1)}>+</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Preis pro Los: {ticketPrice.toFixed(2)}€</p>
                  </div>
                  <div className="space-y-2">
                    <Label>E‑Mail für Bestätigung</Label>
                    <Input type="email" placeholder="dein.name@mail.de" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>

                <label className="mt-2 flex items-start gap-3 text-sm">
                  <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} className="mt-1"/>
                  <span>Ich akzeptiere die <a href="#agb" className="underline">AGB</a>, die <a href="#datenschutz" className="underline">Datenschutzerklärung</a> und bestätige, mindestens 18 Jahre alt zu sein.</span>
                </label>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Sicherer Bezahlvorgang – SSL</div>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button disabled={!email || !agree}>
                      Zur Kasse ({total.toFixed(2)}€)
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Kauf bestätigen</DialogTitle>
                      <DialogDescription>Diese Demo führt keinen echten Zahlungsvorgang aus.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Gerät</span><span className="font-medium">{device.name} ({storage})</span></div>
                      <div className="flex justify-between"><span>Lose</span><span className="font-medium">{tickets}</span></div>
                      <div className="flex justify-between"><span>Zwischensumme</span><span className="font-medium">{subtotal.toFixed(2)}€</span></div>
                      <div className="flex justify-between"><span>Service</span><span className="font-medium">{service.toFixed(2)}€</span></div>
                      <div className="flex justify-between text-base"><span>Gesamt</span><span className="font-semibold">{total.toFixed(2)}€</span></div>
                    </div>
                    <Button onClick={()=>setOpen(false)} className="w-full">Bestätigen</Button>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Live‑Status</CardTitle>
                <CardDescription>Die Verlosung endet am {new Date(drawDate).toLocaleDateString()} um 20:00 Uhr.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Verkaufte Lose</span>
                  <span className="tabular-nums">{sold} / {goal}</span>
                </div>
                <Progress value={(sold/goal)*100} />
                <div className="rounded-lg border bg-muted/40 p-3 text-sm">
                  <p className="mb-1 font-medium">Fairness‑Hinweis</p>
                  <p>Jedes Los hat dieselbe Gewinnchance. Die Ziehung erfolgt zufällig und wird protokolliert. Kein Kaufzwang.</p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">Hinweis: Diese Seite ist ein technisches Template. Ersetze Demo‑Texte & prüfe rechtliche Anforderungen in deinem Land.</div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Section>

      <Section kicker="Sicherheit & Vertrauen" title="Warum bei uns mitmachen?">
        <div className="grid gap-6 md:grid-cols-3">
          {[{
            title: "Transparente Regeln",
            desc: "AGB, Datenschutzerklärung & Ziehungsprotokoll sind jederzeit einsehbar.",
          },{
            title: "Datenschutz",
            desc: "Server in der EU, SSL‑Verschlüsselung und DSGVO‑konforme Verarbeitung.",
          },{
            title: "Kein Risiko",
            desc: "Volle Rückerstattung, falls die Verlosung abgesagt wird.",
          }].map((b, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-lg">{b.title}</CardTitle>
                <CardDescription>{b.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="faq" kicker="Noch Fragen?" title="FAQ – Häufige Fragen">
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {FAQ.map((f, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section id="agb" kicker="Rechtliches" title="AGB – Kurzfassung">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p><strong>Veranstalter:</strong> Deine Firma, Musterstraße 1, 12345 Musterstadt, Deutschland.</p>
          <p><strong>Teilnahme:</strong> Ab 18 Jahren. Teilnahmezeitraum bis zum angegebenen Ziehungsdatum. Mitarbeiter des Veranstalters sind ausgeschlossen.</p>
          <p><strong>Ablauf:</strong> Der Gewinner wird per Zufallsverfahren aus allen gültigen Losen ermittelt und per E‑Mail benachrichtigt. Meldet sich der Gewinner binnen 7 Tagen nicht, wird neu gezogen.</p>
          <p><strong>Datenschutz:</strong> Daten werden ausschließlich zur Durchführung der Verlosung verarbeitet. Details siehe <a className="underline" href="#datenschutz">Datenschutzerklärung</a>.</p>
          <p><strong>Rechtsweg:</strong> Der Rechtsweg ist ausgeschlossen. Es gilt deutsches Recht.</p>
          <p className="rounded-md border p-3 text-xs"><Info className="mr-2 inline h-4 w-4"/> <span>Diese Vorlage ersetzt keine Rechtsberatung. Bitte Impressum/AGB/Datenschutzerklärung von Fachleuten prüfen lassen.</span></p>
        </div>
      </Section>

      <Section id="datenschutz" title="Datenschutzerklärung – Kurzfassung">
        <div className="mx-auto max-w-3xl space-y-3 text-sm text-muted-foreground">
          <p>Wir verarbeiten deine E‑Mail und Konfigurationsdaten zur Durchführung der Verlosung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
          <p>Du kannst der Verarbeitung widersprechen und die Löschung verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
          <p>Serverstandort EU. Keine Weitergabe an Dritte außer erforderliche Dienstleister (z.B. Versand, Zahlungsabwicklung).</p>
        </div>
      </Section>

      <footer className="border-t py-10 text-sm">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-muted-foreground">© {new Date().getFullYear()} Traumhandyverlosung</div>
            <div className="flex items-center gap-6">
              <a href="#agb" className="hover:underline">AGB</a>
              <a href="#datenschutz" className="hover:underline">Datenschutz</a>
              <a href="#impressum" className="hover:underline">Impressum</a>
            </div>
          </div>
          <div id="impressum" className="mt-6 text-xs text-muted-foreground">
            <p><strong>Impressum:</strong> Deine Firma · Musterstraße 1 · 12345 Musterstadt · E‑Mail: hallo@beispiel.de · USt‑ID: DE123456789</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
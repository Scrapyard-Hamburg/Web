"use client";
import Head from "next/head";
import { Box, Card, Grid, Heading, Image, Link, Text } from "theme-ui";

const Nonprofit501c3 = () => {
  return <span style={{ fontVariantLigatures: "none" }}>501(c)(3)</span>;
};

const Flag = () => (
  <Link
    href="https://hackclub.com/"
    target="_blank"
    aria-label="Hack Club's homepage"
    sx={{ position: "absolute", top: 4, left: 0, zIndex: 2 }}
  >
    <Image
      src="/elements/orpheus-flag.svg"
      alt="Hack Club flag"
      sx={{
        width: [120, 128, 180],
        transformOrigin: "0% 0%",
        transition: "transform 0.1s",
        ":hover": {
          transform: "rotate(0.03turn) scale(1.2) translateY(-4px)",
        },
      }}
    />
  </Link>
);

const Backlink = () => (
  <Link
    href="/official"
    target="_blank"
    aria-label="Hack Club's homepage"
    sx={{
      position: "absolute",
      top: 3,
      right: 4,
      zIndex: 2,
      fontFamily: "moonblossom",
      fontWeight: 700,
      textDecoration: "underline",
      textDecorationThickness: 2,
      ":hover": {
        textDecorationStyle: "wavy",
      },
    }}
  >
    Official / English Version
  </Link>
);

export default function Home() {
  return (
    <Box
      sx={{
        background:
          "url('/backgrounds/cutting-mat.png'), linear-gradient(#337D78, #337D78)",
        backgroundSize: ["1100px", "1100px", "1100px", "contain"],
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Head>
        <title>Scrapyard Hamburg</title>
      </Head>
      <Flag />
      <Backlink />
      <Box
        sx={{
          width: "100%",
          height: ["80vh", "80vh", "90vh"],
          bg: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Image
          sx={{
            width: "600px",

            maxWidth: "70vw",

            objectFit: "contain",
          }}
          src="/wordmark.svg"
          alt="Scrapyard Hamburg Logo"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              background: "url('/elements/ripped-paper.png')",
              backgroundSize: "cover",
              // aspectRatio: "1080/338.4",
              // padding: "8%",
              // paddingLeft: "7%",
              display: "block",

              width: "min(500px, calc(100vw - 30px))",
              filter: "drop-shadow(5px 5px 5px #000000AA)",
              position: "relative",
              zIndex: 20,
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: "moonblossom",
                textAlign: "center",
                margin: "8%",
              }}
            >
              Baue geilen sch#!ß, gewinne die besten Preise.
            </Heading>
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundSize: "82%",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "2.5rem",
              position: "relative",
              zIndex: 30,
              top: "-15%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: "3%",
              filter: "drop-shadow(5px 5px 5px #00000099)",
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: "p22-stanyan",
                mx: "8%",
                p: 0,
                wordBreak: "keep-all",
                whiteSpace: "nowrap",
                width: "max-content",
                fontSize: ["1.2em", "1.4em"],
              }}
            >
              In&nbsp;über&nbsp;100+&nbsp;Städten&nbsp;Weltweit&nbsp;am&nbsp;15-16&nbsp;März
            </Heading>
            <Heading
              as="h2"
              sx={{
                fontFamily: "p22-stanyan",
                mx: "8%",
                my: "3%",
                p: 0,
                wordBreak: "keep-all",
                whiteSpace: "nowrap",
                width: "min-content",
                fontSize: ["1.2em", "1.4em"],
              }}
            >
              Das&nbsp;Pilot-Event&nbsp;in&nbsp;Los&nbsp;Angeles&nbsp;am&nbsp;15-16&nbsp;Februar&nbsp;
            </Heading>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100vw",
          }}
        >
          <Image
            sx={{
              width: "10%",
              height: "10%",
              zIndex: 2,
              position: "absolute",
              top: "50%",
              left: "10%",
            }}
            src="/elements/stars/blue.png"
            alt="Blue paper star"
          />
          <Image
            sx={{
              width: "10%",
              height: "10%",
              zIndex: 2,
              position: "absolute",
              top: "55%",
              right: "15%",
            }}
            src="/elements/stars/yellow.png"
            alt="Yellow paper star"
          />
          <Image
            sx={{
              width: "10%",
              height: "10%",
              zIndex: 2,
              position: "absolute",
              top: "70%",
              left: "20%",
              transform: "rotate(180deg)",
            }}
            src="/elements/stars/pink.png"
            alt="Pink paper star"
          />
        </Box>
        {/* <Link
          href="https://forms.hackclub.com/scrapyard-signup"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              position: ['relative', 'relative', 'absolute'],
              right: ['unset', 'unset', '2%'],
              top: ['unset', 'unset', '4%'],
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                margin: '8%',
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                paddingY: ['15px', '0px']
              }}
            >
              Sign up for a scrapyard event near you!
            </Heading>
          </Box>
        </Link> */}
      </Box>

      <Box
        sx={{
          width: "100%",
          background: "url('/elements/paper-top.png')",
          backgroundSize: "contain",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
          height: "23vw",
        }}
      >
        <Image
          src="/elements/trash-can.png"
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            width: "70vw",
            transform: "translateY(-40%)",
            zIndex: 7,
          }}
          alt="Trashcan Image"
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          // background: "linear-gradient(#F5F5F5, #F2F2F2)",
          background: "url(/backgrounds/ripped-paper.png)",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          pt: 6,
          px: 4,
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Image src="/elements/orpheus-doodle.svg" alt="Orpeus our Mascot" />
          <Box
            sx={{
              maxWidth: ["80vw", "60vw", "40vw"],
              padding: "40px",
              zIndex: 5,
              backgroundImage: "url(/elements/sticky-note.svg)",
              backgroundSize: "cover",
              filter: "drop-shadow(5px 5px 5px #000000AA)",
            }}
          >
            <Heading
              sx={{
                textDecoration: "underline",
                fontFamily: "moonblossom",
                fontWeight: 800,
              }}
            >
              Was ist Scrapyard?
            </Heading>
            <p
              style={{
                fontFamily: "p22-stanyan",
                fontSize: "1.5em",
              }}
            >
              Scrapyard ist ein globaler Hackathon, der von Schülern organisiert
              wird. Unser Flaggschiff (das größte Scrapyard-Event) findet am
              15.-16. Februar in Los Angeles statt. Nach dem Flaggschiff werden
              unsere dezentralen Veranstaltungen am Wochenende des 15. März in
              über 100 Städten weltweit stattfinden. Scrapyard ist ein Hackathon
              mit einem &quot;schrottreichen&quot; Thema von dummen Erfindungen!
              Es wird von Hack Club, einer <Nonprofit501c3 />
              -Nonprofit-Organisation, die eine globale Gemeinschaft von über
              48.000 Schüler-Machern unterstützt, organisiert.
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: ["none", "none", "block"],
          }}
        >
          <Image
            src="/elements/doodles/arrow.svg"
            sx={{ position: "absolute", left: "5%", top: "0%" }}
            alt="Arrow"
          />
          <Image
            src="/elements/doodles/pinkcircle.svg"
            sx={{ position: "absolute", left: "20%", top: "0%" }}
            alt="Pink Circle"
          />
          <Image
            src="/elements/doodles/yellowcircle.svg"
            sx={{ position: "absolute", left: "8%", top: "70%" }}
            alt="Yellow Circle"
          />
          <Image
            src="/elements/doodles/bluesquiggle.svg"
            sx={{ position: "absolute", left: "8%", top: "84%", zIndex: 7 }}
            alt="Blue Squiggle"
          />
          <Image
            src="/elements/doodles/yellowlines.svg"
            sx={{ position: "absolute", left: "37%", top: "80%" }}
            alt="Yellow Lines"
          />
          <Image
            src="/elements/doodles/bluecircle.svg"
            sx={{ position: "absolute", right: "30%", top: "78%" }}
            alt="Blue Circle"
          />
          <Image
            src="/elements/doodles/pinksquiggle.svg"
            sx={{ position: "absolute", right: "10%", top: "80%", zIndex: 7 }}
            alt="Pink Squiggle"
          />
          <Image
            src="/elements/doodles/bluedrops.svg"
            sx={{ position: "absolute", right: "10%", top: "0%", zIndex: 7 }}
            alt="Blue Drops"
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100vw",
          background: "url('/backgrounds/ripped-paper-bottom.png')",
          backgroundSize: "cover",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

          height: "17.03212647vw",
          position: "relative",
        }}
      ></Box>

      <Box></Box>

      <Box
        sx={{
          width: "100%",
          background: [
            "url('/backgrounds/bulletin@vertical.svg')",
            "url('/backgrounds/bulletin@vertical.svg')",
            "url('/backgrounds/bulletin.svg')",
          ],
          backgroundSize: "cover!important",
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "visible",
          gap: "20px",
          height: ["151.37794951vw", "151.37794951vw", "64.45447188vw"],
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexWrap: "wrap",
            p: "4vw",
            position: "relative",
            overflow: "visible",
            justifyContent: ["space-around", "space-around", null],
            pb: "12vw",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              height: "min-content",
            }}
          >
            <Box
              sx={{
                background: "url('/elements/stapled-paper.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
                width: "400px",
              }}
            >
              <Heading
                as="h2"
                sx={{
                  textAlign: "center",
                  fontFamily: "moonblossom",
                  fontWeight: 800,
                }}
              >
                Hier ist was wir schon in der Vergangenheit veranstaltet haben
              </Heading>
            </Box>
          </Box>
          <Link href="https://assemble.hackclub.com" target="_blank">
            <Box
              sx={{
                background: "url('/elements/polaroids/assemble.png')",
                width: ["35.5vw", "35.5vw", "22.5vw"],
                height: ["35.5vw", "35.5vw", "22.5vw"],
                transform: ["scale(1.4)", "scale(1.4)", "scale(1.2)"],
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "block",
              }}
            ></Box>
          </Link>
          <Link href="https://outernet.hackclub.com" target="_blank">
            <Box
              sx={{
                background: "url('/elements/polaroids/outernet.png')",
                width: ["35.5vw", "35.5vw", "22.5vw"],
                height: ["35.5vw", "35.5vw", "22.5vw"],
                transform: ["scale(1.4)", "scale(1.4)", "scale(1.2)"],
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "block",
                marginTop: "7vw",
              }}
            ></Box>
          </Link>
          <Link href="https://wonderland.hackclub.com" target="_blank">
            <Box
              sx={{
                background: "url('/elements/polaroids/wonderland.png')",
                width: ["35.5vw", "35.5vw", "22.5vw"],
                height: ["35.5vw", "35.5vw", "22.5vw"],
                transform: ["scale(1.4)", "scale(1.4)", "scale(1.2)"],
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "block",
              }}
            ></Box>
          </Link>
          <Link href="https://apocalypse.hackclub.com" target="_blank">
            <Box
              sx={{
                background: "url('/elements/polaroids/apocalypse.png')",
                width: ["35.5vw", "35.5vw", "22.5vw"],
                height: ["35.5vw", "35.5vw", "22.5vw"],
                transform: ["scale(1.4)", "scale(1.4)", "scale(1.2)"],
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "block",
                marginTop: "7vw",
              }}
            ></Box>
          </Link>
          <Link href="https://counterspell.hackclub.com" target="_blank">
            <Box
              sx={{
                background: "url('/elements/polaroids/counterspell.png')",
                width: ["38.5vw", "38.5vw", "25vw"],
                height: ["38.5vw", "38.5vw", "25vw"],
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "block",
                position: "absolute",
                bottom: "0",
                right: "10vw",
                transform: "translateY(50%)",
                zIndex: 10,
              }}
            ></Box>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          background: "url('/backgrounds/lined-paper.png')",
          backgroundSize: ["contain", "contain", "cover!important"],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          p: [4, 4, 5],
          pt: 6,
          position: "relative",
        }}
      >
        <Heading
          as="h1"
          sx={{
            mb: 5,
            position: "relative",
            fontFamily: "moonblossom",
            fontWeight: 800,
          }}
        >
          Häufig gestellte Fragen
          <Image
            src="/elements/doodles/blue-underline.svg"
            sx={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%) translateY(75%)",
            }}
            alt="Blue Underline"
          />
        </Heading>
        <Grid
          columns={[1, 1, 1, 2]}
          gap={4}
          sx={{
            maxWidth: "1200px",
          }}
        >
          {Object.entries({
            "Was ist Scrapyard Hamburg?": (
              <>
                Scrapyard ist ein globaler{" "}
                <Link
                  href="https://hackclub.com/hackathons/"
                  target="_blank"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Hackathon
                </Link>{" "}
                der in Los Angeles und über 100 anderen Städten von Schülern
                organisiert wird (wie{" "}
                <Link
                  href="https://counterspell.hackclub.com/"
                  target="_blank"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Counterspell
                </Link>
                ) mit einem &quot;schrottreichen&quot; Thema von dummen
                Erfindungen! Es wird von{" "}
                <Link
                  href="https://hackclub.com/"
                  target="_blank"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Hack Club
                </Link>
                , einer <Nonprofit501c3 />
                -Nonprofit-Organisation, die eine globale Gemeinschaft von über
                48.000 Schüler-Machern unterstützt, organisiert.
              </>
            ),

            "Wo wird Scrapyard Hamburg veranstaltet?": (
              <>
                Scrapyard Hamburg, wie der Name schon sagt, wird in Hamburg
                stattfinden. Wir suchen allerdings noch nach einem geeigneten
                Veranstaltungsort. Wir werden euch bald mitteilen, wo genau es
                stattfinden wird.
              </>
            ),
            "Wer darf bei Scrapyard teilnehmen?": (
              <>
                Alle Schüler der Oberstufe und der Mittelschule sind willkommen!
                Du musst nicht Mitglied der Hack Club-Gemeinschaft sein oder ein
                Hack Club-Leiter sein.
              </>
            ),
            "Das alles, Kostenlos???": (
              <>
                Ja! Essen, Swag und gute Stimmung sind alle inklusive. Außerdem,
                wenn du von weit her zu uns kommst, übernehmen wir die Kosten
                für Benzin oder ein Bus- / Zugticket. Informationen über
                Reisekostenzuschüsse für unser Flaggschiff in Los Angeles werden
                bald veröffentlicht. <br />
                <Link
                  href="mailto:jack.hamburg@scrapyard.hackclub.com?subject=Frage%20zu%20Kosten%20bei%20Scrapyard%20Hamburg"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Falls du dazu fragen hast schreib mich an!
                </Link>
              </>
            ),
            "Was brauch ich?": (
              <>
                Dein Laptop, Ladegeräte, Toilettenartikel, Schlafsäcke und ein
                offener Geist! Wenn du an einem Hardware-Projekt arbeiten
                möchtest, bring die Werkzeuge mit, die du benötigst. Wir planen
                möglicherweise, Ersatz-Laptops bereitzustellen, allerdings ist
                das noch nicht bestätigt. Bei Hardware-Projekten planen wir
                möglicherweise auch, einen 3D-Drucker bereitzustellen.
              </>
            ),
            "Ich bin ein schrecklicher Programmierer. Kann ich trotzdem mitmachen?":
              (
                <>
                  Dieser Hackathon ist für Kreative aller Fähigkeitsstufen! Wir
                  werden Workshops und andere Veranstaltungen anbieten, also
                  komm mit und lass uns gemeinsam lernen. Wenn du einige
                  einführende Projekte erkunden möchtest, schau dir die Hack
                  Club Workshops an.
                </>
              ),
            "Was kann ich den bei Scrapyard machen?": (
              <>
                Das schrulligste, was du dir vorstellen kannst - Das ist
                erwünscht. Spiele? Apps? Websites? Programmiersprachen?{" "}
                <em>Hardware?</em> Du sagst es! Wir haben eine Menge Ressourcen
                und Mentoren, die dir dabei helfen können.
              </>
            ),
            "Was hat Hackclub sonst so gemacht?": (
              <>
                Hack Club hat einen{" "}
                <Link
                  href="https://youtu.be/PnK4gzO6S3Q"
                  target="_blank"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Übernachtung-Hackathon
                </Link>{" "}
                in San Francisco, einen{" "}
                <Link
                  href="https://www.youtube.com/watch?v=H5RPsCMl3uM"
                  target="_blank"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Game Jam
                </Link>{" "}
                in 50 Städten, einen Hackathon auf einem{" "}
                <Link
                  href="https://youtu.be/2BID8_pGuqA"
                  target="_blank"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Zug
                </Link>{" "}
                von Vermont nach Los Angeles und vieles mehr veranstaltet!
              </>
            ),
            "Was wenn meine Eltern besorgt sind?": (
              <>
                Wir sind hier, um zu helfen! Unsere Prospekte für Eltern werden
                bald veröffentlicht, aber sie können uns unter{" "}
                <Link
                  href="mailto:scrapyard@hackclub.com"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  scrapyard@hackclub.com
                </Link>{" "}
                für Fragen erreichen.
              </>
            ),
            "Was wenn ich noch mehr Fragen hab?": (
              <>
                Kontaktiere uns! Fühl dich frei, uns im #scrapyard-Kanal auf dem
                Hack Club Slack oder per Email an{" "}
                <Link
                  href="mailto:jack.hamburg@scrapyard.hackclub.com"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  jack.hamburg@scrapyard.hackclub.com
                </Link>{" "}
                zu erreichen.
              </>
            ),
            "Wie kann ich euch unterstützen?": (
              <>
                Im allgemeinen könnt ihr uns immer unter{" "}
                <Link
                  href="https://hcb.hackclub.com/donations/start/scrapyard-hamburg"
                  target="_blank"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  hcb.hackclub.com/scrapyard-hamburg
                </Link>{" "}
                unterstützen, falls sie aber ein Unternehmen sind, schreiben sie
                uns doch gerne unter{" "}
                <Link
                  href="mailto:hamburg@scrapyard.hackclub.com"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  hamburg@scrapyard.hackclub.com
                </Link>{" "}
                an.
              </>
            ),
            "Hat man einsicht in eure Finanzen?": (
              <>
                Ja, falls sie sich für unsere finanzen interessieren oder
                einfach gucken wollt was ein Hackathon für ausgaben generiert
                geht einfach auf{" "}
                <Link
                  href="https://hcb.hackclub.com/scrapyard-hamburg/transactions"
                  target="_blank"
                  sx={{
                    textDecoration: "underline",
                    color: "#337D78",
                    textDecorationStyle: "wavy",
                  }}
                >
                  hcb.hackclub.com/scrapyard-hamburg/transactions
                </Link>
              </>
            ),
          }).map(([question, answer], i) => {
            return (
              <Card
                key={question}
                sx={{
                  background: [
                    "transparent",
                    `url('/elements/doodles/boxes/${(i % 6) + 1}.svg')`,
                  ],
                  backgroundSize: [null, "100% 100%"],
                  backgroundRepeat: "no-repeat",
                  boxShadow: "none",
                  padding: "48px!important",
                  border: ["2px solid black", "none"],
                }}
              >
                <Heading
                  as="h2"
                  mb={4}
                  sx={{
                    position: "relative",
                    fontFamily: "moonblossom",
                    fontWeight: 800,
                  }}
                >
                  {question}
                  <Image
                    src="/elements/doodles/yellow-underline.svg"
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%) translateY(75%)",
                    }}
                    alt="Yellow Underline"
                  />
                </Heading>
                <Text
                  sx={{
                    fontSize: 3,
                    fontWeight: 300,
                    fontFamily: "p22-stanyan",
                  }}
                >
                  {answer}
                </Text>
              </Card>
            );
          })}
        </Grid>
        <Heading
          as="h2"
          sx={{
            mt: 6,
            position: "relative",
            fontFamily: "moonblossom",
            fontWeight: 300,
          }}
        >
          Scrapyard Hamburg
          <Image
            src="/elements/doodles/pink-underline.svg"
            sx={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%) translateY(75%)",
            }}
            alt="Pink Underline"
          />
        </Heading>
        <Text
          sx={{
            fontFamily: "moonblossom",
            mb: -2,
            textAlign: "center",
          }}
        >
          Made with ♡ by teenagers, for teenagers at Hack Club
        </Text>
        <Text
          sx={{
            fontFamily: "moonblossom",
            mt: 0,
            textAlign: "center",
          }}
        >
          <Link href="https://hackclub.com">Hack Club</Link>{" "}
          <span style={{ transform: "scale(2)" }}>・</span>{" "}
          <Link href="https://hackclub.com/slack">Slack</Link>{" "}
          <span style={{ transform: "scale(2)" }}>・</span>{" "}
          <Link href="https://hackclub.com/clubs">Ags</Link>{" "}
          <span style={{ transform: "scale(2)" }}>・</span>{" "}
          <Link href="https://hackclub.com/hackathons">Hackathons</Link>
        </Text>
      </Box>
    </Box>
  );
}

import { Box, Heading, Image, Link, Text } from "theme-ui";
import LL from "next/link";

const Footer = ({ noBg }: { noBg?: boolean }) => {
  return (
    <Box
      sx={{
        width: "100%",
        background: noBg ? "none" : "url('/backgrounds/lined-paper.png')",
        backgroundSize: noBg
          ? "initial"
          : ["contain", "contain", "cover!important"],
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
        as="h2"
        sx={{
          mt: 6,
          position: "relative",
          fontFamily: "moonblossom",
          fontWeight: 300,
        }}
      >
        <LL href="/" prefetch>
          Scrapyard Hamburg
        </LL>
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
  );
};

export default Footer;

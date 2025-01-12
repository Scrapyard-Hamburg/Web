import { Box, Heading, Link } from "theme-ui";

export default function IndexCard({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  title,
  slug,
  format,
  location,
  children,
}) {
  return (
    <Box
      sx={{
        p: 4,
        pt: 0,
        pb: 2,
        borderRadius: 4,
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
        bg: "white",
        background: "url(/elements/indexcard.png)",
        backgroundSize: "cover",
      }}
    >
      <Heading
        as="h2"
        sx={{
          minWidth: "max-content",
          textAlign: "center",
        }}
      >
        {title}
      </Heading>
      <p
        style={{
          fontWeight: "bold",
          minWidth: "max-content",
          textAlign: "center",
          backgroundColor: "white",
          fontFamily: "moonblossom",
        }}
      >
        {format.toUpperCase()} EVENT IN {location.toUpperCase()}
      </p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href={`/${slug}`}
          sx={{
            textAlign: "center",
            display: "block",
            fontWeight: "bold",
            backgroundColor: "white",
            fontFamily: "moonblossom",
          }}
        >
          WEBSITE
        </Link>
        {/* <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
        <Link
          href={`https://forms.hackclub.com/scrapyard-signup?event=${id}`}
          sx={{
            textAlign: 'center',
            display: 'block',
            fontWeight: 'bold',
            backgroundColor: 'white'
          }}
        >
          SIGNUP
        </Link> */}
      </Box>
      {children}
    </Box>
  );
}

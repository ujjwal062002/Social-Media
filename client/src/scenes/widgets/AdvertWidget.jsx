import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        {/* <Typography color={medium}>Create Ad</Typography> */}
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="assets/ad.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Apple</Typography>
        <Typography color={medium}>https://apple.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Apple unveils iPhone 15 Pro and iPhone 15 Pro Max. Featuring a strong and lightweight titanium design with new contoured edges.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

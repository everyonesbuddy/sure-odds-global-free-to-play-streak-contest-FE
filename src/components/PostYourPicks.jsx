import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import PicksForm from "./PicksForm";
import ContestInfo from "./ContestInfo";

const PostYourPicks = ({
  contestName,
  spreadsheetUrl,
  contestPrimaryPrize,
  contestLeague,
  contestEndDate,
  contestStartDate,
  currentUserBetsForContest,
  aggregateBets,
  availableFreePicks,
  affiliates,
  contestType,
  availableMarkets,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          padding: isMobile ? 1 : 2,
        }}
      >
        <ContestInfo
          contestName={contestName}
          spreadsheetUrl={spreadsheetUrl}
          contestPrimaryPrize={contestPrimaryPrize}
          contestLeague={contestLeague}
          contestEndDate={contestEndDate}
          contestStartDate={contestStartDate}
          currentUserBetsForContest={currentUserBetsForContest}
          aggregateBets={aggregateBets}
          availableFreePicks={availableFreePicks}
          contestType={contestType}
        />
        <PicksForm
          contestName={contestName}
          spreadsheetUrl={spreadsheetUrl}
          contestPrimaryPrize={contestPrimaryPrize}
          contestLeague={contestLeague}
          contestEndDate={contestEndDate}
          contestStartDate={contestStartDate}
          currentUserBetsForContest={currentUserBetsForContest}
          aggregateBets={aggregateBets}
          availableFreePicks={availableFreePicks}
          availableMarkets={availableMarkets}
        />
      </Box>
    </>
  );
};

export default PostYourPicks;

import {Box, styled} from "@mui/system";
import theme from "../themes";

export const Separator = styled(Box)({
    height: '100%',
    minWidth: '6px',
    width: '6px',
    borderRadius: '15px',
    backgroundColor: theme.palette.secondary.main
})
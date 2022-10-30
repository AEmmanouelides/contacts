import { GridToolbarQuickFilter } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useIntl } from "react-intl";

const Header = () => {
    const intl = useIntl();
    const searchTranslatedMessage = intl.formatMessage({id: 'search'})
    // 5. Search/Filter contacts by first_name and last_name
    return (
      <Box sx={{ float: "left"}}>
        <GridToolbarQuickFilter 
          placeholder={searchTranslatedMessage}
        />
      </Box>
    );
};
export default Header;

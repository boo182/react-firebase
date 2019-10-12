// @flow
import React, { memo, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContentContainer from '../Misc/ContentContainer';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
// Components
import withContext from '../../utils/withContext';
import { DetailContext } from '../../Container/Detail/detailContext';
import { withTheme } from '@material-ui/styles';
import type { EquipmentRecord } from '../../flowTypes';
import { Flex, CenteredAlignDiv } from '../Misc/FlexDivs';
import Flag from '../Misc/Flag';



const Wrapper = withTheme(styled(Flex)`
`);
const EditWrapper = withTheme(styled.div`
  max-width: 600px;
`);

const NotesWrapper = withTheme(styled(Flex)`
  flex-wrap: wrap;
  max-width: 600px;
`);

const MetaWrapper = withTheme(styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  margin-left: ${({ theme }) => theme.spacing(3)}px;
`);

const BuildingWrapper = withTheme(styled(Flex)`
  margin-top: 10px
  justify-content: flex-end;
`);

const Image = styled.img`
  position: relative;
  z-index: 0;
  border-radius: 10px;
`;

const ChipWrapper = styled(Flex)`
  position: relative;
  justify-content: space-between;
  top: -490px;
  z-index: 2;
  padding: 0px 10px; 
`;

const TitleWrapper = withTheme(styled(CenteredAlignDiv)`
  height: ${({ theme }) => theme.spacing(6)}px;
`);
const useStyles = makeStyles(theme =>({
  card: {
    marginTop: 30,
    width: '85vw',
    height: '80vh',
  },
  root: {
    height: 150,
  },
  chip: {
    textTransform: 'uppercase'
  },
  colorPrimary: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  header: {
    fontWeight: 600,
  },
  brand: {
    fontSize: theme.spacing(2.25),
    marginLeft: theme.spacing(1.5),
  },
  building: {
    fontSize: 20,
    fontWeight: 600,
  }
}));

type Props = {
  equipment: EquipmentRecord,
}
const EquipmentCard = ({ equipment }) => {
  const [noteEdition, setNoteEdition] = useState(false);
  const classes = useStyles();

  return (
    <ContentContainer>
      <Card className={classes.card} elevation={0}>
        <Wrapper>
          <div>
            <Image src={equipment.photo} height={500} alt={equipment.photo} />
            <ChipWrapper>
              <Chip
                label={equipment.status}
                classes={{ root: classes.chip, colorPrimary: classes.colorPrimary }}
                color="primary"
              />
              <Chip
                label={`Qté: ${equipment.quantity}`}
                classes={{ colorPrimary: classes.colorPrimary }}
                color="primary"
              />
            </ChipWrapper>
            <BuildingWrapper>
              <Typography component="h3" classes={{ root: classes.building }}>
                {equipment.building} - {equipment.local} - {equipment.niveau}
              </Typography>
            </BuildingWrapper>
          </div>
          <MetaWrapper>
            <Flag>{equipment.domain}</Flag>
            <TitleWrapper>
              <Typography variant="h5" component="h2" classes={{ root: classes.header }}>
                {equipment.name}
              </Typography>
              <Typography component="h3" classes={{ root: classes.brand }}>
                {equipment.brand} - {equipment.model}
              </Typography>
            </TitleWrapper>
            {!noteEdition && <NotesWrapper>
              {equipment.notes}
              <Button onClick={() => setNoteEdition(!noteEdition)}>Editer</Button>
            </NotesWrapper>}
            {noteEdition &&  <EditWrapper>
              <TextField
                defaultValue={equipment.notes}
                id="outlined-full-width"
                label="Notes"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                multiline
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
              />
              <Button onClick={() => console.log(('save'))}>Sauvegarder</Button>
              <Button onClick={() => setNoteEdition(!noteEdition)}><CloseIcon /></Button>

            </EditWrapper>}

          </MetaWrapper>
        </Wrapper>
        
      </Card>
    </ContentContainer>
  );
}

const Select = () => {
    const { equipment } = useContext(DetailContext);
    return { equipment };
  };
  
  export default withContext(
    memo(EquipmentCard),
    Select,
  );
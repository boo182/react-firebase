// @flow
import React, { memo, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ContentContainer from '../Misc/ContentContainer';
import styled from 'styled-components';
import type { List } from 'immutable';
// Components
import withContext from '../../utils/withContext';
import { DetailContext } from '../../Container/Detail/detailContext';
import { withTheme } from '@material-ui/styles';
import type { EquipmentRecord, CheckpointRecord } from '../../flowTypes';
import { Flex, CenteredAlignDiv } from '../Misc/FlexDivs';
import Flag from '../Misc/Flag';
import DefaultsPanel from './DefaultsPanel';
import EditPanel from './EditPanel';



const Wrapper = withTheme(styled(Flex)`
`);

const MetaWrapper = withTheme(styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  margin-left: ${({ theme }) => theme.spacing(3)}px;
`);

const BuildingWrapper = withTheme(styled(Flex)`
  margin-top: 10px
  flex-direction: column;
  align-items: flex-end;
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
  height: 5px;
`;

const TitleWrapper = withTheme(styled(CenteredAlignDiv)`
  margin-top: ${({ theme }) => theme.spacing(2.5)}px;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)}px;
  min-height: ${({ theme }) => theme.spacing(6)}px;
  flex-wrap: wrap;
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
  panel: {
    width: '80%',
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
    marginRight: theme.spacing(2.5),
  },
  brand: {
    fontSize: theme.spacing(2.25),
  },
  building: {
    fontSize: 20,
    fontWeight: 600,
  }
}));

type Props = {
  equipment: EquipmentRecord,
  checkpoints: List<CheckpointRecord>,
}
const EquipmentCard = ({ equipment, checkpoints }: Props) => {
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
              <div>ref: {equipment.serialNumber || 'Inconnue'}</div>
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
                {equipment.brand}{equipment.model && ` - ${equipment.model}`}
              </Typography>
            </TitleWrapper>
            <div classes={{ root: classes.panel }}>      
              {checkpoints.size > 0 && <DefaultsPanel />}
              {equipment.notes && <EditPanel notes={equipment.notes} />}
            </div>  
          </MetaWrapper>
        </Wrapper>
        
      </Card>
    </ContentContainer>
  );
}

const Select = () => {
    const { equipment, checkpoints } = useContext(DetailContext);
    return { equipment, checkpoints };
  };
  
  export default withContext(
    memo(EquipmentCard),
    Select,
  );
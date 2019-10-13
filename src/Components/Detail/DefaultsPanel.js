// @flow
import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles, withTheme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from '@material-ui/core';
import { sortBy } from 'lodash';
// Components
import withContext from '../../utils/withContext';
import { DetailContext } from '../../Container/Detail/detailContext';
import type { CheckpointRecord } from '../../flowTypes';

const DefaultWrapper = withTheme(styled.div`
  padding-left: ${({ theme }) => theme.spacing(2.5)}px;
  overflow: auto;
  max-height: 300px;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)}px;
`);

const Container = withTheme(styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    brand: {
      fontSize: theme.spacing(2.25),
    },
    default: {
      fontWeight: 600,
    },
    button: {
      marginLeft: theme.spacing(2.5),
      marginTop: theme.spacing(2.5),
    }
  }),
);

type Props = {
  checkpoints: List<CheckpointRecord>,
}

const DefaultsPanel = ({ checkpoints }: Props) => {
  const classes = useStyles();
  const sortedCheckpoints = sortBy([...checkpoints.values()], [item => item.recommandation]).reverse();
  return (
      <ExpansionPanel defaultExpanded={checkpoints.size > 0} elavation={5}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="h3" classes={{ root: classes.brand }}>
             Défauts Répertoriés: {checkpoints.size}
          </Typography>
        </ExpansionPanelSummary>
        <DefaultWrapper>
          {sortedCheckpoints.map(item =>
            <Container key={item.id}>
              {<Typography classes={{ root: classes.default }}>{item.fault ? item.fault : 'Défaut répertorié'}:</Typography>}
                {(item.name || item.recommandation) && <ul>
                  {item.name && <li>{item.name}</li>}
                  {item.recommandation && <div><b>Recommandation: </b>{item.recommandation}</div>}  
                </ul>}
              <Divider />
            </Container>
          )}
        </DefaultWrapper>
    </ExpansionPanel>
  );
}

const Select = () => {
  const { checkpoints } = useContext(DetailContext);
  return { checkpoints };
};

export default withContext(
  memo(DefaultsPanel),
  Select,
);
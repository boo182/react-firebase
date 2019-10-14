// @flow
import React, { memo, useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
// Components
import withContext from '../../utils/withContext';
import { DetailContext } from '../../Container/Detail/detailContext';
import { withTheme } from '@material-ui/styles';
import { Flex, CenteredAlignDiv } from '../Misc/FlexDivs';

const Container = withTheme(styled.div`
  margin: 20px 0px;
`);

const EditWrapper = withTheme(styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`);

const NotesWrapper = withTheme(styled(Flex)`
  flex-wrap: wrap;
  padding-left: 10px;
  width: 70%;
`);

const DefaultWrapper = withTheme(styled.div`
  max-height: 200px;
  width: 100%;
`);

const ButtonContainer = styled(Flex)`
  margin-top: 10px;
`;

const useStyles = makeStyles((theme) => ({
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
  closeButton: {
    justifySelf: 'end',
  },
}));

type Props = {
  notes: string,
}

const EditPanel = ({ notes, onUpdateNote }: Props) => {
  const [noteEdition, setNoteEdition] = useState(false);
  const [note, setNote] = useState(notes);

  useEffect(() => {
    setNote(notes);
  }, [notes])
  
  const classes = useStyles();

  const handleSetNote = (event: React.ChangeEvent<HTMLInputElement>) => setNote(event.target.value);
  const onNoteUpdate = () => {
    setNoteEdition(false);
    return onUpdateNote(note);
  }

  return (
      <DefaultWrapper>
        <Container>
          {!noteEdition && <b>Note: </b>}
          {notes && !noteEdition && <NotesWrapper>
            <CenteredAlignDiv>
              {notes}
              <IconButton onClick={() => setNoteEdition(!noteEdition)}><EditIcon /></IconButton>
            </CenteredAlignDiv> 
          </NotesWrapper>}
      
          {noteEdition && <EditWrapper>
            <TextField
              value={note}
              classes={{ root: classes.textField }}
              id="outlined-full-width"
              label="Notes"
              placeholder="Placeholder"
              fullWidth
              multiline
              rowsMax="5"
              variant="outlined"
              onChange={handleSetNote}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <ButtonContainer>
              <Button onClick={onNoteUpdate}>Sauvegarder</Button>
              <Button onClick={() => setNoteEdition(!noteEdition)}>Annuler</Button>
            </ButtonContainer>
          </EditWrapper>}
        </Container>
      </DefaultWrapper>
  );
}

const Select = () => {
  const { onUpdateNote } = useContext(DetailContext);
  return { onUpdateNote };
};
  
export default withContext(
  memo(EditPanel),
  Select,
);



import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  FormControlLabel,
  Checkbox,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import useConversations from 'context/ConversationsProvider';
import api from 'lib/axios';
import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from 'lib/fetcher';

const FirstModal = props => {
  const { handleClose, nextStep, isAnonymous, handleAnonymousChange } = props;

  return (
    <div>
      <DialogTitle>Talk to Someone</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Talk to a teacher if you feel like someone is bullying you or just
          want someone to express your feelings to.
        </DialogContentText>
        <FormControlLabel
          control={
            <Checkbox
              checked={isAnonymous}
              onChange={handleAnonymousChange}
              color='primary'
            />
          }
          label='Do you want to stay anonymous?'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={nextStep} color='primary'>
          Next
        </Button>
      </DialogActions>
    </div>
  );
};

const SecondModal = props => {
  const {
    teachers,
    prevStep,
    selectedTeacher,
    changeTeacher,
    handleJoin,
  } = props;

  return (
    <div>
      <DialogTitle>Select the Teacher</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Select the Teacher you want to talk to
        </DialogContentText>
        <FormControl style={{ width: '100%' }}>
          <InputLabel>Teacher</InputLabel>
          <Select required value={selectedTeacher} onChange={changeTeacher}>
            {teachers.map(teacher => (
              <MenuItem key={teacher._id} value={teacher._id}>
                {teacher.displayName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={prevStep} color='primary'>
          Back
        </Button>
        <Button onClick={handleJoin} color='primary'>
          Create a Room
        </Button>
      </DialogActions>
    </div>
  );
};

// const fetcher = async url => {
//   try {
//     const { data } = await api.get(url);
//     return data;
//   } catch (error) {
//     throw new Error(error?.response?.data);
//   }
// };

export default function ConversationModal({ open, setOpen }) {
  const [step, setStep] = useState(0);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { data: teachers } = useSWR('/api/teachers', fetcher);
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const { joinRoom } = useConversations();

  const handleClose = () => {
    setOpen(false);
    setStep(0);
  };

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handlePrev = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleAnonymousChange = () => {
    setIsAnonymous(!isAnonymous);
  };

  const handleJoin = () => {
    if (!selectedTeacher) return;
    joinRoom({ secondUser: selectedTeacher, isAnonymous });
    handleClose();
  };

  const changeTeacher = e => {
    setSelectedTeacher(e.target.value);
  };

  const modals = [
    <FirstModal
      handleClose={handleClose}
      nextStep={handleNext}
      isAnonymous={isAnonymous}
      handleAnonymousChange={handleAnonymousChange}
    />,
    <SecondModal
      teachers={teachers}
      prevStep={handlePrev}
      selectedTeacher={selectedTeacher}
      changeTeacher={changeTeacher}
      handleJoin={handleJoin}
    />,
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <Fade in={step === 1}>{modals[step]}</Fade>
    </Dialog>
  );
}

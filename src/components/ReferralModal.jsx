import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ReferralModal = ({ open, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/referral", data);
      toast.success("Referral sent successfully");
      handleClose();
    } catch (error) {
      toast.error(error.error || "Error sending");
      console.error("Error submitting referral:", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Your Name"
            fullWidth
            margin="normal"
            {...register("referrerName", { required: "Name is required" })}
            error={!!errors.referrerName}
            helperText={errors.referrerName?.message}
          />
          <TextField
            label="Your Email"
            fullWidth
            margin="normal"
            {...register("referrerEmail", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors.referrerEmail}
            helperText={errors.referrerEmail?.message}
          />
          <TextField
            label="Friend's Name"
            fullWidth
            margin="normal"
            {...register("refereeName", {
              required: "Friend's name is required",
            })}
            error={!!errors.refereeName}
            helperText={errors.refereeName?.message}
          />
          <TextField
            label="Friend's Email"
            fullWidth
            margin="normal"
            {...register("refereeEmail", {
              required: "Friend's email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors.refereeEmail}
            helperText={errors.refereeEmail?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;

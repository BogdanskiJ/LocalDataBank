import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import {
  selectManyVariablesAutoScrollSwitcher,
  setManyVariablesAutoScrollSwitcher,
} from '../../../manyVariablesSlice'

export const AutoScrollSwitcher = () => {
  const dispatch = useDispatch()
  const state = useSelector(selectManyVariablesAutoScrollSwitcher)
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="end"
      marginTop="10px">
      <span>AutoScroll</span>
      <Typography>Off</Typography>
      <Switch
        checked={state}
        onChange={() => dispatch(setManyVariablesAutoScrollSwitcher())}
      />
      <Typography>On</Typography>
    </Stack>
  )
}

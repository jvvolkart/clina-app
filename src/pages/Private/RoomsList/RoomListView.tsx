import React from 'react';
import { Card, CardContent, CardMedia, Container, TextField, Typography, Button, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DatePicker from '@mui/lab/DatePicker';

import Header from '../../../components/Header/HeraderView';
import { TopInfos, Localizations, Filters, AvailableRooms, BottomInfos, RoomContent, Value } from './RoomListStyles';
import { rooms } from '../../../db/rooms';

export default function RoomList() {
  const [initialDate, setInitialDate] = React.useState<Date | null>(null);
  const [finalDate, setFinalDate] = React.useState<Date | null>(null);
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Header />
      <Container>
        <TopInfos>
            <h2>Nossas salas disponíveis agora.</h2>
            <Localizations><LocationOnIcon color="primary" /> Todas as nossas salas estão localizadas em São Paulo - Bela Vista, rua Itapeva, 490 Sala 68 - CEP: 01332-000.</Localizations>

            <Filters>
              <DatePicker
                label="Data inicial"
                value={initialDate}
                onChange={(newValue) => {
                  setInitialDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="dd/MM/yyyy"
              />
              <DatePicker
                label="Data final"
                value={finalDate}
                onChange={(newValue) => {
                  setFinalDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="dd/MM/yyyy"
              />
                 <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="simple-select-label">Período do dia</InputLabel>
                    <Select
                      labelId="simple-select-label"
                      id="simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Todos</MenuItem>
                      <MenuItem value={2}>Manhã</MenuItem>
                      <MenuItem value={3}>Tarde</MenuItem>
                      <MenuItem value={3}>Noite</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
            </Filters>
            <AvailableRooms>{`Encontramos ${rooms.length} salas disponíveis`}</AvailableRooms>
        </TopInfos>
        <BottomInfos>
          {rooms.map((room, i) => (
            <Card sx={{ display: 'flex', width: '100%', alignItems: 'center', marginBottom: '15px' }}>
              <CardMedia
                  component="img"
                  sx={{ width: 190 }}
                  image={room.image}
                  alt="tetes"
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <RoomContent>
                    <div>
                      <Typography component="div" variant="h6">
                        {room.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" component="div">
                        {room.adress}
                      </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Value>
                        <Typography variant="caption" color="text.secondary" component="div">
                          A partir de
                        </Typography>
                        <h5>R$ {room.price}<span>/h</span></h5>
                      </Value>
                      <Button variant="contained">Reservar</Button>
                    </div>
                  </RoomContent>
                </CardContent>
            </Card>
          ))}
        </BottomInfos>
      </Container>
    </>
  );
}

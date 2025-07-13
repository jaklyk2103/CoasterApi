export class CreateCoasterDto {
  id: string;
  numberOfStaffNeeded: number;
  numberOfClientsPerDay: number;
  routeLengthInMeters: number;
  startingHour: string;
  endingHour: string;
}

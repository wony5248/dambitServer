import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  service: string;

  @IsString()
  @IsNotEmpty()
  // 시간 포맷 단순 체크 (HH:MM)
  @Matches(/^\d{2}:\d{2}$/, { message: 'time must be HH:MM' })
  time: string;

  @IsString()
  @IsNotEmpty()
  // 날짜는 "YYYY-MM-DD" 형태로 받는 것을 기대
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'date must be YYYY-MM-DD' })
  date: string;

  @IsOptional()
  @IsString()
  notes?: string;
}

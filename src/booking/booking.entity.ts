import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'bookings' })
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  // 서비스 키 (e.g. cut, color, perm, ...)
  @Column()
  service: string;

  // 시간 문자열 "10:30"
  @Column()
  time: string;

  // 날짜 (yyyy-mm-dd) 저장: date type
  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @Column({ default: '확정' })
  status: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}

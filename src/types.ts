export type EventType = {
  id: number;
  tky_even_meetup_id: number;
  meetup_event_id: string;
  name: string;
  venue: string;
  local_date: string | null;
  url: string;
  description: string;
  event_date: Date;
  created_at: Date;
  updated_at: Date;
};

export type GroupType = {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  platform: string;
  city: string;
};
